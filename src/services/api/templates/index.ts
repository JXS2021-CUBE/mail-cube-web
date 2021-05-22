import axios from 'axios';
import { mutate } from 'swr';

import {
  createConfig,
  listConfig,
  readConfig,
  updateConfig,
  deleteConfig,
} from './config';
import { TemplateType } from 'src/types/template';

export const list = async (): Promise<{
  msg: string;
  result: TemplateType[];
}> => axios(listConfig()).then((res) => res.data);

export const read = async (
  id: number
): Promise<{ msg: string; result: TemplateType }> =>
  axios(readConfig(id)).then((res) => res.data);

export const create = async (
  requestBody: Omit<TemplateType, 'id'>
): Promise<void> =>
  axios(createConfig(requestBody)).then((res) => {
    return res.data;
  });

export const update = async (
  id: number,
  requestBody: Omit<TemplateType, 'id'>
): Promise<void> =>
  axios(updateConfig(id, requestBody)).then((res) => {
    return res.data;
  });

//delete 예약어라서
export const deleteTemplate = async (id: number): Promise<void> =>
  axios(deleteConfig(id)).then((res) => {
    mutate(JSON.stringify(listConfig())); //list update
    return res.data;
  });

const DisposalLocationService = {
  list,
  read,
  create,
  update,
  deleteTemplate,
};

export default DisposalLocationService;
