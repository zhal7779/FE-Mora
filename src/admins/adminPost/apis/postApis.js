import { snakeToCamel } from '../../adminCommon/utils/variableName';

const domainPort = process.env.REACT_APP_URL;

// READ
export const fetchReadPostInfo = async ({ page, view, content }) => {
  const adminToken = sessionStorage.getItem('adminToken');
  const response = await fetch(
    `${domainPort}/api/adminBoards?page=${page}&size=${view}&keyword=${content}`,
    {
      headers: { Authorization: `Bearer ${adminToken}` },
    }
  );
  const data = await response.json();

  data.objArr.map((obj) => snakeToCamel(obj));
  data.objArr.map((obj) => obj.Photos.map((photo) => snakeToCamel(photo)));
  return data;
};

export const fetchReadPostInfoDetail = async (id) => {
  const adminToken = sessionStorage.getItem('adminToken');
  const response = await fetch(`${domainPort}/api/adminBoards/${id}`, {
    headers: { Authorization: `Bearer ${adminToken}` },
  });
  const data = await response.json();

  snakeToCamel(data);
  snakeToCamel(data.User);
  data.Photos.map((photo) => snakeToCamel(photo));

  return data;
};

// DELETE
export const fetchDeletePost = async (id) => {
  const adminToken = sessionStorage.getItem('adminToken');
  const response = fetch(`${domainPort}/api/adminBoards/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${adminToken}`,
    },
  });

  return response.status;
};

export const fetchDeleteComment = async (id) => {
  const adminToken = sessionStorage.getItem('adminToken');
  const response = fetch(`${domainPort}/api/adminBoards/comment/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${adminToken}`,
    },
  });

  return response.status;
};
