import { useQuery } from 'react-query';
import { PromiseValue } from 'type-fest';

import { getHttpClient } from '../../../shared/utils';
import { paths } from './api/notification.api';
import { notificationSchema, TNotification } from './api/notification.dto';
import { queryKey } from './api/notification.query-key';

type TUseDeviceOptions = {
  notificationId?: string;
};

const getNotification = async ({ notificationId }: { notificationId?: string }): Promise<TNotification> => {
  const res = await getHttpClient().get<TNotification>(paths.NOTIFICATION({ notificationId }));
  return notificationSchema.parse(res);
};

export const useNotification = ({ notificationId }: TUseDeviceOptions) => {
  return useQuery<PromiseValue<ReturnType<typeof getNotification>>>({
    queryKey: queryKey.NOTIFICATION(notificationId),
    queryFn: () => getNotification({ notificationId }),
  });
};
