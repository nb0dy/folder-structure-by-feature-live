import { faker } from '@faker-js/faker';

// eslint-disable-next-line @softarc/sheriff/deep-import
import { TNotification } from '../../../features/notification/data-access/api/notification.dto';

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
