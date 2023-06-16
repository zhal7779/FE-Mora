import { changePlanForm } from '../utils/clientToServer';

const domainPort = process.env.REACT_APP_URL;
const adminToken = sessionStorage.getItem('adminToken');

// READ
export const fetchReadPlanInfo = async (yearMonth) => {
  const adminToken = sessionStorage.getItem('adminToken');
  const response = await fetch(`${domainPort}/api/plans/ym/${yearMonth}`, {
    headers: { Authorization: `Bearer ${adminToken}` },
  });
  const data = await response.json();

  return data;
};

export const fetchReadPlanInfoDetail = async (id) => {
  const adminToken = sessionStorage.getItem('adminToken');
  const response = await fetch(`${domainPort}/api/plans/detail/${id}`, {
    headers: { Authorization: `Bearer ${adminToken}` },
  });
  const data = await response.json();

  return data;
};

// CREATE
export const fetchCreatePlan = async (newPlan) => {
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
export const fetchUpdatePlan = async (id, newPlan) => {
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
export const fetchDeletePlan = async (id) => {
  const adminToken = sessionStorage.getItem('adminToken');
  const response = fetch(`${domainPort}/api/plans/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${adminToken}`,
    },
  });

  return response.status;
};
