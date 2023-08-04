import { changePlanForm } from '../utils/changePlanForm';
import { snakeToCamel } from '../../adminCommon/utils/variableName';

const domainPort = process.env.REACT_APP_URL;

interface DataProps {
  Admin: { name: string; email: string };
  adminId: string;
  PlanLinks: string[];
  content: string;
  createdAt: string;
  endDate: string;
  id: string;
  startDate: string;
  title: string;
  updatedAt: string;
}

interface NewPlanType {
  title: string;
  content: string;
  endDate: string;
  startDate: string;
  links: string;
}

// READ
export const fetchReadPlanInfo = async (yearMonth: string) => {
  const adminToken = sessionStorage.getItem('adminToken');
  const response = await fetch(`${domainPort}/api/plans/ym/${yearMonth}`, {
    headers: { Authorization: `Bearer ${adminToken}` },
  });
  const data = await response.json();

  data.map((obj: DataProps) => snakeToCamel(obj));
  return data;
};

export const fetchReadPlanInfoDetail = async (id: string) => {
  const adminToken = sessionStorage.getItem('adminToken');
  const response = await fetch(`${domainPort}/api/plans/detail/${id}`, {
    headers: { Authorization: `Bearer ${adminToken}` },
  });
  const data = await response.json();

  snakeToCamel(data);
  return data;
};

// CREATE
export const fetchCreatePlan = async (newPlan: NewPlanType) => {
  console.log(newPlan);
  const adminToken = sessionStorage.getItem('adminToken');
  const plan = changePlanForm(newPlan);

  const response = await fetch(`${domainPort}/api/plans`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${adminToken}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify(plan),
  });
  const data = await response.json();

  return data;
};

// UPDATE
export const fetchUpdatePlan = async (id: string, newPlan: NewPlanType) => {
  const adminToken = sessionStorage.getItem('adminToken');
  const plan = changePlanForm(newPlan);
  const response = await fetch(`${domainPort}/api/plans/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${adminToken}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify(plan),
  });
  const data = await response.json();

  return data;
};

// DELETE
export const fetchDeletePlan = async (id: string) => {
  const adminToken = sessionStorage.getItem('adminToken');
  const response = await fetch(`${domainPort}/api/plans/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${adminToken}`,
    },
  });

  return response.status;
};
