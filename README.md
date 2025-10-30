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

## Publishing package

1. Login with your npm account by running `npm login`, if you have 2FA enabled, [generate automation token](https://docs.npmjs.com/creating-and-viewing-access-tokens) and add it to your `~/.npmrc` file
2. Make sure that your package name is unique and does not exist on npm yet
3. Run `npm run release:patch`, `npm run release:minor` or `npm run release:major` to publish new version of your package

## Publish documentation

By default, the documentation is deployed to GitHub Pages. The script to deploy documentation runs automatically when the package is published.

To publish documentation manually, run `npm run docs:deploy`.

## Links

- [Documentation](https://sinups.github.io/fmap/)
- [GitHub Repository](https://github.com/sinups/fmap)
- [NPM Package](https://www.npmjs.com/package/@sinups/fmap)

## License

MIT
