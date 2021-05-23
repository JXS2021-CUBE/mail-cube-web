import { baseConfig } from '../Api';

export const uploadConfig = (formData: FormData) =>
  baseConfig().post('/excels', formData);

export const listConfig = () => baseConfig().get('/excels');

export const readConfig = (id: number) => baseConfig().get(`/excels/${id}`);
