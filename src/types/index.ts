export type TemplateType = {
  id: number;
  title: string;
  content: string;
};

export type EmailFormType = {
  title: string;
  content: string;
  senderName: string;
  senderEmail: string;
};

export type ExcelListType = {
  id: number;
  blob_url: string;
  name: string;
  datetime: string;
};

export type ExcelType = {
  name: string;
  email: string;
};
