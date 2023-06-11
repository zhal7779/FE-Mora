const domainPort = 'http://15.164.221.244:5000';
const adminToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1ZDI4M2Q2LTU1ZmUtNGI0Yi1iMGFjLTI5MGFlMGZlM2I1ZCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4NjI4OTMwN30.U9rOuWLMkoYjPqVK8pGqwlEt1Kcu21o6IGjHzIUah4Y`;

// READ
const fetchReadNotificationInfo = async (page, size, keyword) => {
  const response = await fetch(
    `${domainPort}/api/notices/admin?page=${page}&size=${size}&keyword=${keyword}`,
    {
      headers: { Authorization: `Bearer ${adminToken}` },
    }
  );
  const data = await response.json();

  return data;
};

const fetchReadNotificationInfoDetail = async (id) => {
  const response = await fetch(`${domainPort}/api/notices/${id}`, {
    headers: { Authorization: `Bearer ${adminToken}` },
  });
  const data = await response.json();

  return data;
};

// CREATE
const fetchCreateNotification = async (newNotification) => {
  const response = await fetch(`${domainPort}/api/notices`, {
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
const fetchUpdateNotification = async (id, newNotification) => {
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
const fetchDeleteNotification = async (id) => {
  const response = fetch(`${domainPort}/api/notices/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${adminToken}`,
    },
  });

  return response.status;
};

export {
  fetchReadNotificationInfo,
  fetchReadNotificationInfoDetail,
  fetchCreateNotification,
  fetchUpdateNotification,
  fetchDeleteNotification,
};
