// eslint-disable-next-line @softarc/sheriff/deep-import
import { paths as devicePaths } from '../../../features/device/data-access/api/device.api';
// eslint-disable-next-line @softarc/sheriff/deep-import
import { TDevice } from '../../../features/device/data-access/api/device.dto';
// eslint-disable-next-line @softarc/sheriff/deep-import
import { paths as locationPaths } from '../../../features/location/data-access/api/location.api';
// eslint-disable-next-line @softarc/sheriff/deep-import
import { TLocation } from '../../../features/location/data-access/api/location.dto';
// eslint-disable-next-line @softarc/sheriff/deep-import
import { paths as notificationPaths } from '../../../features/notification/data-access/api/notification.api';
// eslint-disable-next-line @softarc/sheriff/deep-import
import { TNotification } from '../../../features/notification/data-access/api/notification.dto';
import { createDevice } from './device.faker';
import { createLocation } from './location.faker';
import { createNotification } from './notification.faker';

const locations = [...new Array(10).keys()].map(() => createLocation());
const devices = locations
  .map((location) => [...new Array(10).keys()].map(() => createDevice({ locationId: location.id })))
  .flat();

const notifications = devices.map((device) =>
  createNotification({ locationId: device.locationId, deviceId: device.id })
);

const getFromStore = <T extends TDevice | TDevice[] | TLocation | TLocation[] | TNotification | TNotification[] | null>(
  key: string,
  defaultValue: T
): T => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item) as T;
  }

  localStorage.setItem(key, JSON.stringify(defaultValue));
  return defaultValue;
};

export const getItem = (
  url: string
): TDevice | TDevice[] | TLocation | TLocation[] | TNotification | TNotification[] | null => {
  const id = url.split('/').pop() || '';

  switch (url) {
    case devicePaths.DEVICES(): {
      return getFromStore('devices', devices);
    }

    case devicePaths.DEVICE({ deviceId: id }): {
      return getFromStore('devices', devices).find((device) => device.id === id) || null;
    }

    case locationPaths.LOCATIONS(): {
      return getFromStore('locations', locations);
    }

    case locationPaths.LOCATION({ locationId: id }): {
      return getFromStore('locations', locations).find((location) => location.id === id) || null;
    }

    case notificationPaths.NOTIFICATIONS(): {
      return getFromStore('notifications', notifications);
    }

    case notificationPaths.NOTIFICATION({ notificationId: id }): {
      return getFromStore('notifications', notifications).find((notification) => notification.id === id) || null;
    }

    default: {
      return null;
    }
  }
};
