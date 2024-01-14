export const routes = {
  device: {
    list: {
      list: 'device',
      item: 'device/:deviceId',
    },
    item: (deviceId: string) => '/device/:deviceId'.replace(':deviceId', deviceId),
  },
  location: {
    list: {
      list: 'location',
      item: 'location/:locationId',
    },
    item: (locationId: string) => '/location/:locationId'.replace(':locationId', locationId),
  },
  notification: {
    list: {
      list: 'notification',
      item: 'notification/:notificationId',
    },
    item: (notificationId: string) => '/notification/:notificationId'.replace(':notificationId', notificationId),
  },
};
