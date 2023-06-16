const domainPort = process.env.REACT_APP_URL;
const adminToken = process.env.REACT_APP_ADMIN_TOKEN;

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
  const response = await fetch(`${domainPort}/api/adminUsers/${id}`, {
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
export const fetchUpdateUser = async (email, newNotification) => {
  const response = await fetch(`${domainPort}/api/adminUsers/${email}`, {
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
