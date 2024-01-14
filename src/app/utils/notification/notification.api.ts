const notifications = '/api/notification';
const notification = `${notifications}/{notificationId}`;

export const paths = {
  NOTIFICATIONS: () => notifications,
  NOTIFICATION: ({ notificationId }: { notificationId?: string }) =>
    notification.replace('{notificationId}', notificationId || ''),
};
