import { faker } from '@faker-js/faker';

import { TDevice } from '../device';

export const createDevice = ({ locationId }: { locationId: string }): TDevice => {
  return {
    locationId: locationId,
    id: faker.string.uuid(),
    name: faker.lorem.sentence(5),
    lastReadingValue: faker.number.float(),
    model: faker.helpers.arrayElement(['mt-2', 'mt-4', 'mt-8']),
  };
};
