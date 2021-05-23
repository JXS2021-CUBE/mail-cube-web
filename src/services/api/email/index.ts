import axios from 'axios';

import { createConfig } from './config';
import { EmailFormType } from 'src/types';

export const create = async (
  id: number,
  requestBody: EmailFormType
): Promise<void> =>
  axios(createConfig(id, requestBody)).then((res) => {
    return res.data;
  });

const EmailService = {
  create,
};

export default EmailService;
