import axiosInstance from './axios';
import {AxiosResponse} from 'axios';

type RequestOptions = {
  method: string;
  path: string;
  data?: Record<string, any> | null;
  params?: Record<string, any> | null;
  headers?: Record<string, any>;
};

export const request = async (options: RequestOptions): Promise<AxiosResponse> => {
  const { method, path, data = null, params = null, headers = {} } = options;
  if (method === 'get') {
    return axiosInstance.get(path, {headers, params});
  }
  return axiosInstance({
    method,
    url : path,
    data,
    headers,
    params,
  });
};

