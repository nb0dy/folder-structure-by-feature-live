import { faker } from '@faker-js/faker';

// eslint-disable-next-line @softarc/sheriff/deep-import
import { TLocation } from '../../../features/location/data-access/api/location.dto';

export const createLocation = (): TLocation => {
  return {
    id: faker.string.uuid(),
    name: faker.lorem.sentence(5),
    address: faker.location.streetAddress(),
  };
};
