import { faker } from '@faker-js/faker';

import { TNotification } from '../notification';

export const createNotification = ({
  locationId,
  deviceId,
}: {
  locationId: string;
  deviceId: string;
}): TNotification => {
  return {
    id: faker.string.uuid(),
    locationId: locationId,
    deviceId: deviceId,
    title: faker.lorem.sentence(5),
    message: faker.lorem.paragraph(),
  };
};
