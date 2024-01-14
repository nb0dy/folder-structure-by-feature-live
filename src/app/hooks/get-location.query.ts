import { useQuery } from 'react-query';
import { PromiseValue } from 'type-fest';

import { getHttpClient } from '../utils';
import { locationSchema, paths, queryKey, TLocation } from '../utils/location';

type TUseLocationOptions = {
  locationId?: string;
};

const getLocation = async ({ locationId }: { locationId?: string }): Promise<TLocation> => {
  const res = await getHttpClient().get<TLocation>(paths.LOCATION({ locationId }));

  return locationSchema.parse(res);
};

export const useLocation = ({ locationId }: TUseLocationOptions) => {
  return useQuery<PromiseValue<ReturnType<typeof getLocation>>>({
    queryKey: queryKey.LOCATION(locationId),
    queryFn: () => getLocation({ locationId }),
  });
};
