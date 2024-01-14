import { sameTag, SheriffConfig } from '@softarc/sheriff-core';

export const sheriffConfig: SheriffConfig = {
  version: 1,
  excludeRoot: true,
  tagging: {
    'src/app/features/<featureType>/containers/<featureName>': ['type:container', 'feature:<featureType>'],
    'src/app/features/<featureType>/data-access': ['type:data-access', 'feature:<featureType>'],
    'src/app/shared/ui': ['type:ui'],
    'src/app/shared/utils': ['type:utils'],
    'src/app/shared/utils/<type>': ['type:utils'],
  },
  depRules: {
    'type:app': ['type:ui', 'type:ui', 'type:data-access', 'type:utils'],
    'type:ui': ['type:utils'],
    'type:container': ['type:ui', 'type:data-access', 'type:utils'],
    'type:data-access': ['type:utils'],
    'type:utils': ['type:utils'],
    'feature:*': [sameTag, 'shared'],
    shared: 'shared',
  },
};
