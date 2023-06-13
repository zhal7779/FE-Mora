const domainPort = 'http://15.164.221.244:5000';
const adminToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRhNzg4OGI0LTliMWMtNDhmMy04Zjc4LTkyZWI4ODgxZDdiOSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4NjY0NDc2Nn0.lrsJDeO4V6O0ohBNW3UZ7R4S8nEx7wjq7I80HB6agsw';

// READ
export const fetchReadUserInfo = async (page, size, keyword) => {
  const response = await fetch(
    `${domainPort}/api/adminUsers?page=${page}&size=${size}&keyword=${keyword}`,
    {
      headers: { Authorization: `Bearer ${adminToken}` },
    }
  );
  const data = await response.json();

  return data;
};

export const fetchReadUserInfoDetail = async (id) => {
  const response = await fetch(`${domainPort}/api/notices/${id}`, {
    headers: { Authorization: `Bearer ${adminToken}` },
  });
  const data = await response.json();

  return data;
};

// CREATE
export const fetchCreateUser = async (newNotification) => {
  const response = await fetch(`${domainPort}/api/adminUsers`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${adminToken}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newNotification),
  });

  const data = await response.json();
  return data;
};

// UPDATE
export const fetchUpdateUser = async (id, newNotification) => {
  const response = await fetch(`${domainPort}/api/notices/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${adminToken}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newNotification),
  });

  const data = await response.json();

  return data;
};

// DELETE
export const fetchDeleteUser = async (email) => {
  const response = fetch(`${domainPort}/api/adminUsers/${email}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${adminToken}`,
    },
  });

  return response.status;
};
