import { useQuery } from 'react-query';
import { PromiseValue } from 'type-fest';

import { getHttpClient } from '../utils';
import { IFilterParams, locationsSchema, paths, queryKey, TLocation } from '../utils/location';

type TUseLocationsOptions = {
  filters?: IFilterParams;
};

const getLocations = async (): Promise<TLocation[]> => {
  const res = await getHttpClient().get<TLocation[]>(paths.LOCATIONS());

  return locationsSchema.parse(res);
};

export const useLocations = ({ filters }: TUseLocationsOptions = {}) => {
  return useQuery<PromiseValue<ReturnType<typeof getLocations>>>({
    queryKey: queryKey.LOCATIONS(filters),
    queryFn: () => getLocations(),
  });
};
