export interface IFilterParams {
  [key: string]: string | string[] | number | undefined | null | object;
}

enum QUERY_KEY {
  LOCATIONS = 'locations',
  LOCATION = 'location',
}

export const queryKey = {
  LOCATIONS: (filterParams?: IFilterParams) =>
    filterParams ? [QUERY_KEY.LOCATIONS, filterParams] : [QUERY_KEY.LOCATIONS],
  LOCATION: (id?: string) => [QUERY_KEY.LOCATION, id],
};
