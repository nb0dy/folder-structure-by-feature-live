export interface IFilterParams {
  [key: string]: string | string[] | number | undefined | null | object;
}

enum QUERY_KEY {
  NOTIFICATIONS = 'notifications',
  NOTIFICATION = 'notification',
}

export const queryKey = {
  NOTIFICATIONS: (filterParams?: IFilterParams) =>
    filterParams ? [QUERY_KEY.NOTIFICATIONS, filterParams] : [QUERY_KEY.NOTIFICATIONS],
  NOTIFICATION: (id?: string) => [QUERY_KEY.NOTIFICATION, id],
};
