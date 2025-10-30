# fmap - File Map Component

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

1. Create a feature branch:
   ```bash
   git checkout -b feat/my-feature
   ```

2. Make your changes and commit with proper format:
   ```bash
   git add .
   git commit -m "feat: add awesome new feature"
   ```

3. Push and create a Pull Request:
   ```bash
   git push origin feat/my-feature
   ```

4. After review and merge to `main`, the release happens automatically! 🚀

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
