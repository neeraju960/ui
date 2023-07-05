import axios from 'axios';
import { useMutation, useQuery } from 'react-query';

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

// export const usePost = ({ url, ...rest }: any) => useMutation((data: any) => api.post(url, data), {
//   ...rest,
//   cacheTime: 0,
//   retry: false
// });

// export const usePatch = ({ url, ...rest }: any) => (
//   useMutation((data: any) => api.patch(url, data), {
//     ...rest,
//     retry: false,
//     cacheTime: 0
//   })
// );

// export const usePut = ({ url, ...rest }: any) => (
//   useMutation((data: any) => api.put(url, data), {
//     ...rest
//     // retry: false,
//     // cacheTime: 0,
//   })
// );

// export const useDelete = ({ url, ...rest }: any) => useMutation((data?: any) => api.delete(`${url}`, { data }), {
//   ...rest
//   // retry: false,
//   // cacheTime: 0,
// }) as any;
