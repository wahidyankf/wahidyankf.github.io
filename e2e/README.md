# wahidyankf-www Browser E2E

This `e2e/` suite executes the owner's canonical [behaviour corpus](../specs/apps/wahidyankf-www/behaviours/)
against the static export (`npm run build`, served locally via `npm run start`). It owns no separate features, unit
layer, integration layer, or numeric coverage threshold.

Scenarios tagged `@e2e-exempt` are excluded only after deterministic compliance validates their structured reason and
alternative proof. Every other scenario must generate with exact Playwright bindings; missing steps fail generation.
Both higher-layer exemptions may annotate one scenario when each has its own valid justification; Unit has no
exemption.

The same compliance script also proves exact owner-adapter rows: every canonical scenario has one Unit marker, every
non-exempt local scenario has one Integration marker, and Integration-exempt browser scenarios have none. This keeps a
valid-looking exemption from naming a target that does not actually execute its alternative scenario.

Run from the repository root:

```sh
npm run test:coverage:behaviour:e2e
npm run install:e2e
npm run test:e2e
```
