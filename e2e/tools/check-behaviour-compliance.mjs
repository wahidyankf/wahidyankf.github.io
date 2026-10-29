import { spawnSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  findFiles,
  inspectCoverageMarkers,
  inspectFeatureReferences,
  inspectOwnerCoverageRequirements,
  validateAlternativeProofReferences,
  validateFeatureFiles,
  validateOwnerAdapterCoverage,
} from "./behaviour-compliance.mjs";

// Derived from this file's own location rather than the caller's working
// directory, so `npm run test:coverage:behaviour:e2e` works from the
// repository root: this checker lives at e2e/tools/, the e2e project at e2e/,
// and the single-package workspace root one level above that.
const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const workspaceRoot = path.resolve(projectRoot, "..");
const featureRoot = path.join(workspaceRoot, "specs/apps/wahidyankf-www/behaviours");
const testsRoot = path.join(projectRoot, "tests");
const directSpecPattern = /\.spec\.(?:[cm]?[jt]s)$/u;

function runBddgen(args) {
  const result = spawnSync("npm", ["exec", "--", "bddgen", ...args], {
    cwd: projectRoot,
    encoding: "utf8",
    env: { ...process.env, FORCE_COLOR: "0" },
  });
  const output = `${result.stdout}${result.stderr}`;
  if (result.status !== 0) throw new Error(output.trim());
  return output;
}

async function main() {
  const featureFiles = await findFiles(featureRoot, (fileName) => fileName.endsWith(".feature"));
  if (featureFiles.length === 0) throw new Error(`No feature files found below '${featureRoot}'.`);

  const structuralErrors = await validateFeatureFiles(featureFiles);
  if (structuralErrors.length > 0) throw new Error(structuralErrors.join("\n"));

  const references = await Promise.all(
    featureFiles.map(async (featureFile) => inspectFeatureReferences(featureFile, await readFile(featureFile, "utf8"))),
  );
  // This repository is a single npm package: the former Nx `project:target`
  // references in the feature files resolve against its scripts. Each script
  // is registered under its own name plus the two legacy project prefixes,
  // so existing `alternative-proof` references validate unchanged.
  const projectTargets = new Set();
  const rootPackage = JSON.parse(await readFile(path.join(workspaceRoot, "package.json"), "utf8"));
  for (const target of Object.keys(rootPackage.scripts ?? {})) {
    projectTargets.add(target);
    projectTargets.add(`wahidyankf-www:${target}`);
    projectTargets.add(`wahidyankf-www-e2e:${target}`);
  }
  const referenceErrors = validateAlternativeProofReferences(
    references.flatMap(({ proofs }) => proofs),
    projectTargets,
    new Set(references.flatMap(({ scenarios }) => scenarios)),
  );
  if (referenceErrors.length > 0) throw new Error(referenceErrors.join("\n"));

  const requirements = (
    await Promise.all(
      featureFiles.map(async (featureFile) =>
        inspectOwnerCoverageRequirements(
          path.relative(workspaceRoot, featureFile).split(path.sep).join("/"),
          await readFile(featureFile, "utf8"),
        ),
      ),
    )
  ).flat();
  // The owner application lives at the workspace root in this layout.
  const ownerRoot = workspaceRoot;
  const unitAdapterFiles = [
    ...(await findFiles(
      path.join(ownerRoot, "tests/bdd"),
      (name) => /\.[cm]?[jt]sx?$/u.test(name) && name !== "test-layer.ts",
    )),
    path.join(ownerRoot, "tests/integration/cv-pdf.integration.test.ts"),
  ].toSorted();
  const sharedIntegrationAdapters = new Set(["env-loader.steps.ts", "tier-env.behaviour.test.ts"]);
  const integrationAdapterFiles = [
    ...(await findFiles(path.join(ownerRoot, "tests/integration"), (name) => /\.[cm]?[jt]sx?$/u.test(name))),
    ...unitAdapterFiles.filter((file) => sharedIntegrationAdapters.has(path.basename(file))),
  ].toSorted();
  const readMarkers = async (files) =>
    (
      await Promise.all(
        files.map(async (file) =>
          inspectCoverageMarkers(
            path.relative(workspaceRoot, file).split(path.sep).join("/"),
            await readFile(file, "utf8"),
          ),
        ),
      )
    ).flat();
  const ownerCoverageErrors = validateOwnerAdapterCoverage(
    requirements,
    await readMarkers(unitAdapterFiles),
    await readMarkers(integrationAdapterFiles),
  );
  if (ownerCoverageErrors.length > 0) throw new Error(ownerCoverageErrors.join("\n"));

  const directSpecs = await findFiles(testsRoot, (fileName) => directSpecPattern.test(fileName));
  if (directSpecs.length > 0) {
    throw new Error(`Direct Playwright journey specs are forbidden:\n${directSpecs.join("\n")}`);
  }

  runBddgen(["--config", "playwright.config.ts"]);
  const unusedOutput = runBddgen(["export", "--config", "playwright.config.ts", "--unused-steps"]);
  const unusedCount = /Unused steps \((\d+)\):/u.exec(unusedOutput)?.[1];
  if (unusedCount === undefined) throw new Error(`Could not determine unused-step count:\n${unusedOutput.trim()}`);
  if (unusedCount !== "0") throw new Error(unusedOutput.trim());
}

try {
  await main();
} catch (error) {
  process.stderr.write(`${error instanceof Error ? error.message : error}\n`);
  process.exitCode = 1;
}
