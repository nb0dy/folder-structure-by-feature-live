import { useQuery } from 'react-query';
import { PromiseValue } from 'type-fest';

import { getHttpClient } from '../utils';
import { deviceSchema, paths, queryKey, TDevice } from '../utils/device';

type TUseDeviceOptions = {
  deviceId?: string;
};

const getDevice = async ({ deviceId }: { deviceId?: string }): Promise<TDevice> => {
  const res = await getHttpClient().get<TDevice>(paths.DEVICE({ deviceId }));

  return deviceSchema.parse(res);
};

export const useDevice = ({ deviceId }: TUseDeviceOptions) => {
  return useQuery<PromiseValue<ReturnType<typeof getDevice>>>({
    queryKey: queryKey.DEVICE(deviceId),
    queryFn: () => getDevice({ deviceId }),
  });
};
