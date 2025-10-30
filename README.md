# fmap - File Map Component

[![npm version](https://badge.fury.io/js/@sinups%2Ffmap.svg)](https://www.npmjs.com/package/@sinups/fmap)
[![npm downloads](https://img.shields.io/npm/dm/@sinups/fmap.svg)](https://www.npmjs.com/package/@sinups/fmap)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Interactive tree component for visualizing file structures in Mantine applications.

**fmap** stands for "file map" — a component for displaying hierarchical file and folder structures.

## Installation

```bash
npm install @sinups/fmap
# or
yarn add @sinups/fmap
```

## Features

- 🌳 Interactive tree visualization
- ✅ Checkbox support for multi-selection
- 🎨 Customizable rendering
- ⌨️ Keyboard navigation
- 🎯 Controlled and uncontrolled modes
- 📦 Built with Mantine UI

## Quick Start

```tsx
import { Tree } from '@sinups/fmap';
import '@sinups/fmap/styles.css';

const data = [
  {
    label: 'src',
    value: 'src',
    children: [
      { label: 'index.ts', value: 'src/index.ts' },
      { label: 'App.tsx', value: 'src/App.tsx' },
    ],
  },
];

function Demo() {
  return <Tree data={data} />;
}
```

## Local development

To develop your extension locally, run the following commands:

- Run `npm run storybook` to start the storybook
- Run `npm run dev` to start the documentation
- To regenerate props documentation, run `npm run docgen`

## Releases

<details>
<summary><b>Automated Release Process</b></summary>

### How it works

Releases are automated using **Conventional Commits**. When you merge to `main` with a properly formatted commit message, GitHub Actions will automatically:

- 🧪 Run tests
- 📦 Build and publish to npm
- 🏷️ Create GitHub Release
- 📚 Deploy documentation to GitHub Pages

### Commit Format

The version bump is determined by your commit message:

- `feat: new feature` → **minor** version (0.1.0 → 0.2.0)
- `fix: bug fix` → **patch** version (0.1.0 → 0.1.1)
- `feat!: breaking change` → **major** version (0.1.0 → 1.0.0)

### Examples

```bash
# New feature (minor release)
git commit -m "feat: add drag and drop support"

# Bug fix (patch release)
git commit -m "fix: resolve tree rendering issue"

# Breaking change (major release)
git commit -m "feat!: redesign component API"

# With scope
git commit -m "fix(tree): correct node selection"

# No release (docs, chore, style, test, refactor)
git commit -m "docs: update README"
```

### Workflow

1. **Create a feature branch:**
   ```bash
   git checkout -b feat/my-feature
   ```

2. **Make your changes and commit:**
   ```bash
   git add .
   git commit -m "Add awesome new feature"
   ```

3. **Push and create a Pull Request with a conventional commit title:**
   ```bash
   git push origin feat/my-feature
   ```
   
   **PR Title Format:** `type: description`
   - ✅ `feat: add new feature` → minor bump (0.1.0 → 0.2.0)
   - ✅ `fix: resolve bug` → patch bump (0.1.0 → 0.1.1)
   - ✅ `feat!: breaking change` → major bump (0.1.0 → 1.0.0)
   - ✅ `docs: update documentation` → no release
   - ✅ `chore: update dependencies` → no release
   - ❌ `Add new feature` (missing type)
   
   *Valid types: `feat`, `fix`, `feat!`, `fix!`, `docs`, `chore`, `refactor`, `test`, `ci`*

4. **Merge using "Squash and merge"** - This creates one commit with your PR title

5. **Automatic release happens:**
   - If PR title starts with `feat:` or `fix:`, GitHub Actions will:
     - Bump version in `package.json`
     - Create a commit: `v0.0.3`
     - Publish to npm
     - Create GitHub release
     - Deploy documentation
   - Result: Main branch shows clean version commits (`v0.0.1`, `v0.0.2`, `v0.0.3`)

### Main Branch Structure

The `main` branch maintains a clean history with two types of commits:
- **Feature/Fix commits** from squashed PRs (e.g., `feat: add drag support`)
- **Version commits** from automated releases (e.g., `v0.0.3`)

This approach:
- ✅ No force pushes
- ✅ Linear history
- ✅ Clear version tracking
- ✅ Easy to understand what changed in each release

### Manual Release

If needed, you can still release manually:

```bash
npm run release:patch  # 0.1.0 → 0.1.1
npm run release:minor  # 0.1.0 → 0.2.0
npm run release:major  # 0.1.0 → 1.0.0
```

### Documentation

For detailed information, see [RELEASE_AUTOMATION.md](./RELEASE_AUTOMATION.md)

</details>

## Links

- [Documentation](https://sinups.github.io/fmap/)
- [GitHub Repository](https://github.com/sinups/fmap)
- [NPM Package](https://www.npmjs.com/package/@sinups/fmap)

## License

MIT
