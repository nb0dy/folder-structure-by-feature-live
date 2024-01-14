import { getItem } from './faker/data.faker';

const wait = (data: unknown) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });

export const getHttpClient = () => {
  return {
    get: <T>(url: string) => wait(getItem(url)) as Promise<T>,
    post: <T>(url: string) => wait(getItem(url)) as Promise<T>,
    put: <T>(url: string) => wait(getItem(url)) as Promise<T>,
    patch: <T>(url: string) => wait(getItem(url)) as Promise<T>,
    delete: <T>(url: string) => wait(getItem(url)) as Promise<T>,
  };
};
