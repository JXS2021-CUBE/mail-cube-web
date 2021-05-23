import useSWR from 'swr';
import axios, { AxiosResponse, AxiosError } from 'axios';

import { TemplateType } from 'src/types';

const fetcher = (url) => axios.get(url);

export const useTemplateList = () => {
  const { data: response, error } = useSWR<
    AxiosResponse<{ result: TemplateType[] }>,
    AxiosError<Error>
  >(`${process.env.API_HOST}/templates`, fetcher);
  return { data: response?.data, error };
};

export const useTemplate = (id: number) => {
  const { data: response, error } = useSWR<
    AxiosResponse<{ result: TemplateType }>,
    AxiosError<Error>
  >(`${process.env.API_HOST}/templates/${id}`, fetcher);
  return { data: response?.data, error };
};
