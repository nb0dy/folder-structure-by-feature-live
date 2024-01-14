import axios from 'axios';

import { getItem } from './faker/data.faker';

const wait = (data: unknown) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });

axios.interceptors.request.use(function (config) {
  config.url = `http://localhost:3000${config.url}`;
  return config;
});

export const getHttpClient = () => {
  // return axios;
  return {
    get: <T>(url: string) => wait(getItem(url)) as Promise<T>,
    post: <T>(url: string) => wait(getItem(url)) as Promise<T>,
    put: <T>(url: string) => wait(getItem(url)) as Promise<T>,
    patch: <T>(url: string) => wait(getItem(url)) as Promise<T>,
    delete: <T>(url: string) => wait(getItem(url)) as Promise<T>,
  };
};
