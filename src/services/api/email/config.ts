import { baseConfig } from '../Api';
import { EmailFormType } from 'src/types';

export const createConfig = (excelId: number, requestBody: EmailFormType) =>
  baseConfig().post(`excels/${excelId}/email`, requestBody);
