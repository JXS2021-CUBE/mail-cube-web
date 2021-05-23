import { baseConfig } from '../Api';
import { TemplateType } from 'src/types/template';

export const listConfig = () => baseConfig().get('/templates');

export const readConfig = (id: number) => baseConfig().get(`/templates/${id}`);

export const createConfig = (requestBody: Omit<TemplateType, 'id'>) =>
  baseConfig().post('/templates/', requestBody);

export const updateConfig = (
  id: number,
  requestBody: Omit<TemplateType, 'id'>
) => baseConfig().put(`/templates/${id}/`, requestBody);

export const deleteConfig = (id: number) =>
  baseConfig().delete(`/templates/${id}/`);
