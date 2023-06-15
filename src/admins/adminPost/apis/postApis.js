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

// // CREATE
// export const fetchCreatePost = async (newPost) => {
//   const response = await fetch(`${domainPort}/api/adminBoards`, {
//     method: 'POST',
//     headers: {
//       Authorization: `Bearer ${adminToken}`,
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify(newPost),
//   });

//   const data = await response.json();
//   return data;
// };

// // UPDATE
// export const fetchUpdatePost = async (id, newPost) => {
//   const response = await fetch(`${domainPort}/api/adminBoards/${id}`, {
//     method: 'PATCH',
//     headers: {
//       Authorization: `Bearer ${adminToken}`,
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify(newPost),
//   });

//   const data = await response.json();

//   return data;
// };
