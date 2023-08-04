const domainPort = process.env.REACT_APP_URL;

interface newUserType {
  email: string;
  name: string;
  password: string;
}

// READ
export const fetchReadUserInfo = async (page: number, size: number, keyword: string) => {
  const adminToken = sessionStorage.getItem('adminToken');
  const response = await fetch(
    `${domainPort}/api/adminUsers?page=${page}&size=${size}&keyword=${keyword}`,
    {
      headers: { Authorization: `Bearer ${adminToken}` },
    }
  );
  const data = await response.json();

  return data;
};

export const fetchReadUserInfoDetail = async (id: string) => {
  const adminToken = sessionStorage.getItem('adminToken');
  const response = await fetch(`${domainPort}/api/adminUsers/${id}`, {
    headers: { Authorization: `Bearer ${adminToken}` },
  });
  const data = await response.json();

  return data;
};

// CREATE
export const fetchCreateUser = async (newUser: newUserType) => {
  const adminToken = sessionStorage.getItem('adminToken');
  const response = await fetch(`${domainPort}/api/adminUsers`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${adminToken}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });

  const data = await response.json();
  return data;
};

// UPDATE
export const fetchUpdateUser = async (email: string, newUser: newUserType) => {
  const adminToken = sessionStorage.getItem('adminToken');
  const response = await fetch(`${domainPort}/api/adminUsers/${email}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${adminToken}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });

  const data = await response.json();

  return data;
};

// DELETE
export const fetchDeleteUser = async (email: string) => {
  const adminToken = sessionStorage.getItem('adminToken');
  const response = await fetch(`${domainPort}/api/adminUsers/${email}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${adminToken}`,
    },
  });

  return response.status;
};
