import { useQuery } from 'react-query';
import { PromiseValue } from 'type-fest';

import { getHttpClient } from '../utils';
import { devicesSchema, IFilterParams, paths, queryKey, TDevice } from '../utils/device';

type TUseDevicesOptions = {
  filters?: IFilterParams;
};

const getDevices = async (): Promise<TDevice[]> => {
  const res = await getHttpClient().get<TDevice[]>(paths.DEVICES());

  return devicesSchema.parse(res);
};

export const useDevices = ({ filters }: TUseDevicesOptions = {}) => {
  return useQuery<PromiseValue<ReturnType<typeof getDevices>>>({
    queryKey: queryKey.DEVICES(filters),
    queryFn: () => getDevices(),
  });
};
