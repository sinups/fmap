import type { TreeFactory } from '@sinups/fmap';
import type { StylesApiData } from '../components/styles-api.types';

export const TreeStylesApi: StylesApiData<TreeFactory> = {
  selectors: {
    root: 'Root element (`ul`)',
    node: 'Tree node element (`li`)',
    subtree: 'Subtree element (`ul`), contains nested nodes',
    label: 'Node label element',
  },

  vars: {
    root: {
      '--level-offset': 'Controls horizontal padding for each tree level',
    },
  },

  modifiers: [
    {
      modifier: 'data-selected',
      selector: 'label',
      condition: 'Node is selected',
    },
    {
      modifier: 'data-hovered',
      selector: 'label',
      condition: 'Node is hovered',
    },
  ],
};
