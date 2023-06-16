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
  return data;
};

export const fetchReadPostInfoDetail = async (id) => {
  const adminToken = sessionStorage.getItem('adminToken');
  const response = await fetch(`${domainPort}/api/adminBoards/${id}`, {
    headers: { Authorization: `Bearer ${adminToken}` },
  });
  const data = await response.json();

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
