import { useQuery } from 'react-query';
import { PromiseValue } from 'type-fest';

import { getHttpClient } from '../../../shared/utils';
import { paths } from './api/notification.api';
import { notificationsSchema, TNotification } from './api/notification.dto';
import { IFilterParams, queryKey } from './api/notification.query-key';

type TUseDevicesOptions = {
  filters?: IFilterParams;
};

const getNotifications = async (params?: { deviceId?: string; locationId?: string }): Promise<TNotification[]> => {
  const res = await getHttpClient().get<TNotification[]>(paths.NOTIFICATIONS());
  let notifications = notificationsSchema.parse(res);

  if (params?.deviceId) {
    notifications = notifications.filter((notification) => notification.deviceId === params.deviceId);
  }

  if (params?.locationId) {
    notifications = notifications.filter((notification) => notification.locationId === params.locationId);
  }

  return notifications;
};

export const useNotifications = ({ filters }: TUseDevicesOptions = {}) => {
  return useQuery<PromiseValue<ReturnType<typeof getNotifications>>>({
    queryKey: queryKey.NOTIFICATIONS(filters),
    queryFn: () => getNotifications(filters),
  });
};
