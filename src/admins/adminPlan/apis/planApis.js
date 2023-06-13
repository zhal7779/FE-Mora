import { changePlanForm } from '../utils/clientToServer';

const domainPort = 'http://15.164.221.244:5000';
const adminToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRhNzg4OGI0LTliMWMtNDhmMy04Zjc4LTkyZWI4ODgxZDdiOSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4NjY0NDc2Nn0.lrsJDeO4V6O0ohBNW3UZ7R4S8nEx7wjq7I80HB6agsw';

// READ
export const fetchReadPlanInfo = async (yearMonth) => {
  const response = await fetch(`${domainPort}/api/plans/ym/${yearMonth}`, {
    headers: { Authorization: `Bearer ${adminToken}` },
  });
  const data = await response.json();

  return data;
};

export const fetchReadPlanInfoDetail = async (id) => {
  const response = await fetch(`${domainPort}/api/plans/detail/${id}`, {
    headers: { Authorization: `Bearer ${adminToken}` },
  });
  const data = await response.json();

  return data;
};

// CREATE
export const fetchCreatePlan = async (newPlan) => {
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
  const response = fetch(`${domainPort}/api/plans/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${adminToken}`,
    },
  });

  return response.status;
};
