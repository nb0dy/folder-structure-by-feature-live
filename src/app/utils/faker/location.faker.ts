import { faker } from '@faker-js/faker';

import { TLocation } from '../location';

export const createLocation = (): TLocation => {
  return {
    id: faker.string.uuid(),
    name: faker.lorem.sentence(5),
    address: faker.location.streetAddress(),
  };
};
