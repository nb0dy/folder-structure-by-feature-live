import { useQuery } from 'react-query';
import { PromiseValue } from 'type-fest';

import { getHttpClient } from '../utils';
import { notificationSchema, paths, queryKey, TNotification } from '../utils/notification';

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
