import axios from 'axios';
import { ExcelListType, ExcelType } from 'src/types';

import { uploadConfig, listConfig, readConfig } from './config';

export const upload = async (formData: FormData): Promise<void> =>
  axios(uploadConfig(formData)).then((res) => {
    return res.data;
  });

export const list = async (): Promise<{
  msg: string;
  result: ExcelListType[];
}> => axios(listConfig()).then((res) => res.data);

export const read = async (
  id: number
): Promise<{ msg: string; result: ExcelType[] }> =>
  axios(readConfig(id)).then((res) => res.data);

const ExcelService = {
  upload,
  list,
  read,
};

export default ExcelService;
