import axios from 'axios';
import { useQuery } from 'react-query';

export const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER
});

const controller = new AbortController();

api.interceptors.request.use((req: any) => {
  req.headers.Authorization = import.meta.env.VITE_TOKEN;
  return req;
});

export const useGet = ({ url, ...rest }: any) => (
  useQuery(url, () => api.get(url, { signal: controller.signal }), {
    ...rest,
  })
);
