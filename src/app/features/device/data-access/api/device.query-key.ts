export interface IFilterParams {
  [key: string]: string | string[] | number | undefined | null | object;
}

enum QUERY_KEY {
  DEVICES = 'devices',
  DEVICE = 'device',
}

export const queryKey = {
  DEVICES: (filterParams?: IFilterParams) => (filterParams ? [QUERY_KEY.DEVICES, filterParams] : [QUERY_KEY.DEVICES]),
  DEVICE: (id?: string) => [QUERY_KEY.DEVICE, id],
};
