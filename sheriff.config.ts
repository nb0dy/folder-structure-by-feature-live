import { SheriffConfig } from '@softarc/sheriff-core';

export const sheriffConfig: SheriffConfig = {
  version: 1,
  excludeRoot: true,
  tagging: {
    'src/app/components': ['type:component'],
    'src/app/containers/<type>': ['type:container'],
    'src/app/hooks': ['type:hook'],
    'src/app/utils': ['type:utils'],
    'src/app/utils/<type>': ['type:utils'],
  },
  depRules: {
    'type:app': ['type:component', 'type:component', 'type:hook', 'type:utils'],
    'type:component': ['type:utils'],
    'type:container': ['type:component', 'type:hook', 'type:utils'],
    'type:hook': ['type:utils'],
    'type:utils': ['type:utils'],
  },
};
