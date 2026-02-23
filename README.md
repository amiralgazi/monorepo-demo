# NX React Monorepo Demo

A React monorepo built with NX demonstrating design system libraries, multiple apps, CI/CD with `nx affected`, and trunk-based development.

## Project Structure

```
monorepo-demo/
├── apps/
│   ├── store/     # E-commerce storefront (Button, Card, Header, Footer)
│   ├── admin/     # Admin dashboard (Button, Input, Header)
│   └── docs/      # Documentation site (Card, Header, Footer)
├── libs/
│   └── ui/
│       ├── button/   # Button component
│       ├── card/     # Card component
│       ├── input/    # Input component
│       ├── header/   # Header component
│       └── footer/   # Footer component
└── .github/
    └── workflows/
        ├── ci.yml      # Quality gate (nx affected -t test build)
        └── release.yml # Release workflow (nx release)
```

## Prerequisites

- Node.js 18+
- npm

## Setup

```bash
npm install
```

## Running Apps

```bash
# Store (e-commerce)
npx nx serve store

# Admin dashboard
npx nx serve admin

# Documentation
npx nx serve docs
```

## Running Tests

Run tests for a specific project:

```bash
npx nx test store
npx nx test @demo/button
```

Run tests only for projects affected by your changes (e.g. in CI):

```bash
npx nx affected -t test
```

Build affected projects:

```bash
npx nx affected -t build
```

## How `nx affected` Works

NX analyzes your dependency graph and compares changes against the base branch (`main`). When you run `nx affected -t test build`, only projects that are impacted by your changes will run—not the entire workspace. This enables fast CI and quality gates that scale with repository size.

Example: Changing `libs/ui/button` will run tests for button, store, and admin (which depend on it), but not docs.

## Trunk-Based Development

This monorepo is configured for trunk-based development:

- **Main branch**: `main` is the trunk. All feature work merges here via short-lived branches.
- **CI**: Runs on every PR targeting `main` and every push to `main`. Uses `nx affected` so only changed projects are tested/built.
- **Branch protection**: Configure `main` to require PR reviews and passing CI before merge.
- **CODEOWNERS**: See [.github/CODEOWNERS](.github/CODEOWNERS). Replace `@org/*` with your actual GitHub teams.

## CI/CD

### CI Workflow (`.github/workflows/ci.yml`)

- **Trigger**: Push to `main`, PR into `main`
- **Steps**: Checkout, setup Node, `npm ci`, `nrwl/nx-set-shas`, `nx affected -t test build`
- **Quality gate**: PRs must pass affected tests and builds before merge

### Release Workflow (`.github/workflows/release.yml`)

- **Trigger**: Manual (`workflow_dispatch`)
- **Command**: `npx nx release --skip-publish`
- Uses conventional commits for versioning. Run locally with `npx nx release` for full release (version, changelog, publish).

## Adding New Components

Generate a new UI library:

```bash
npx nx g @nx/react:library my-component --directory=libs/ui/my-component --unitTestRunner=vitest --bundler=none
```

Add it to your app's `package.json` dependencies and import:

```tsx
import { MyComponent } from '@demo/my-component';
```

## Useful Commands

| Command | Description |
|---------|-------------|
| `npx nx graph` | Visualize the dependency graph |
| `npx nx affected -t test` | Run tests for affected projects |
| `npx nx affected -t build` | Build affected projects |
| `npx nx run-many -t build` | Build all projects |
| `npx nx release` | Version and publish (conventional commits) |
| `npx nx release --projects=@demo/store` | Release specific project only (use `--projects=X`, not `X` as first arg) |

## Learn More

- [NX Documentation](https://nx.dev)
- [NX Affected](https://nx.dev/ci/features/affected)
- [NX Release](https://nx.dev/features/manage-releases)
