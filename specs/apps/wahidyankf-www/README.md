# wahidyankf-www Specifications

The canonical as-built boundaries for `wahidyankf-www` live in [architecture.md](architecture.md), and its executable
behaviour lives in [behaviours/](behaviours/README.md). Eleven feature files carry the executable scenarios.

The owner application hosts Unit and Integration adapters. `e2e/` owns the browser adapter and
depends one-way on the owner; it owns no feature files.

## Adapters

Three adapters run against this corpus, and they do not all reach the same scenarios.

- **Unit behaviour**
  - Where: `tests/bdd/`
  - Reaches: All 53 expanded scenarios, with injected seams for OS-facing dependencies.
- **Local integration**
  - Where: `tests/integration/` + shared adapters
  - Reaches: All 15 local-boundary scenarios against isolated real resources.
- **Browser E2E**
  - Where: `e2e/tests/steps/`
  - Reaches: All 38 browser-observable scenarios against the served static export.

Scenario-level `@integration-exempt` and `@e2e-exempt` tags document genuine boundary mismatches and name an alternative
npm script plus scenario. Either or both tags may annotate a scenario when each exemption is independently documented.
Static compliance rejects missing, malformed, broad, and operationally motivated exemptions; the semantic implementation
review verifies their substance and confirms Unit remains implemented.

## Targets

The comment above each command says what that target proves.

```sh
# Unit, Integration, E2E rows, exemptions, and bindings are complete.
npm run test:coverage:behaviour

# Unit and behaviour together reach the 99% line floor.
npm run test:coverage:unit

# The integration adapter reaches the 99% line floor.
npm run test:coverage:integration

# Browser corpus, exemptions, and bindings are complete.
npm run test:coverage:behaviour:e2e

# The browser suite passes against the served static export.
npm run test:e2e
```

## Directory Map

- [Architecture](architecture.md) is the current as-built C4 model, its boundaries, and behaviour traceability.
- [Behaviour](behaviours/README.md) contains the canonical executable Gherkin corpus.
