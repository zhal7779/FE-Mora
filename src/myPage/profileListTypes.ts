export interface MyCareer {
  id: string;
  company_name: string;
  position: string;
  content: string;
  totalWorkingDate: string;
}

export interface MyEdu {
  id: string;
  name: string;
  program: string;
  description: string;
  start_date: string;
  end_date?: string;
}

export interface MyLink {
  id: string;
  name: string;
  url: string;
}
