import useSWR from 'swr';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { ExcelListType, ExcelType } from 'src/types';

const fetcher = (url) => axios.get(url);

export const useExcelList = () => {
  const { data: response, error } = useSWR<
    AxiosResponse<{ result: ExcelListType[] }>,
    AxiosError<Error>
  >(`${process.env.API_HOST}/excels`, fetcher);
  return { data: response?.data, error };
};

export const useExcel = (id: number) => {
  const { data: response, error } = useSWR<
    AxiosResponse<{ result: ExcelType[] }>,
    AxiosError<Error>
  >(`${process.env.API_HOST}/excels/${id}`, fetcher);
  return { data: response?.data, error };
};
