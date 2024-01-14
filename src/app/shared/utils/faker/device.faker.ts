import { faker } from '@faker-js/faker';

// eslint-disable-next-line @softarc/sheriff/deep-import
import { TDevice } from '../../data-access/device/api/device.dto';

export const createDevice = ({ locationId }: { locationId: string }): TDevice => {
  return {
    locationId: locationId,
    id: faker.string.uuid(),
    name: faker.lorem.sentence(5),
    lastReadingValue: faker.number.float(),
    model: faker.helpers.arrayElement(['mt-2', 'mt-4', 'mt-8']),
  };
};
