const domainPort = process.env.REACT_APP_URL;
const adminToken = process.env.REACT_APP_ADMIN_TOKEN;

// READ
export const fetchReadPostInfo = async ({ page, view, content }) => {
  console.log('hit🔥');
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
  const response = await fetch(`${domainPort}/api/adminBoards/${id}`, {
    headers: { Authorization: `Bearer ${adminToken}` },
  });
  const data = await response.json();

  return data;
};

// DELETE
export const fetchDeletePost = async (id) => {
  const response = fetch(`${domainPort}/api/adminBoards/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${adminToken}`,
    },
  });

  return response.status;
};

export const fetchDeleteComment = async (id) => {
  const response = fetch(`${domainPort}/api/adminBoards/comment/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${adminToken}`,
    },
  });

  return response.status;
};
