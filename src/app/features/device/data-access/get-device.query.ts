import { useQuery } from 'react-query';
import { PromiseValue } from 'type-fest';

import { getHttpClient } from '../../../shared/utils';
import { paths } from './api/device.api';
import { deviceSchema, TDevice } from './api/device.dto';
import { queryKey } from './api/device.query-key';

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
