const domainPort = 'http://15.164.221.244:5000';
const adminToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImIyZmRmNDZhLTU5ZTMtNDFlYy1hMjJhLTVhMWIxNDQwZjQ3ZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4NjU0OTgzMH0.f2ua7qUhQFwqnIaz53D7wT0m1kkyBx3xQMEjzElL8tI';

// READ
export const fetchReadNotificationInfo = async (page, size, keyword) => {
  const response = await fetch(
    `${domainPort}/api/notices?page=${page}&size=${size}&keyword=${keyword}`,
    {
      headers: { Authorization: `Bearer ${adminToken}` },
    }
  );
  const data = await response.json();

  return data;
};

export const fetchReadNotificationInfoDetail = async (id) => {
  const response = await fetch(`${domainPort}/api/notices/${id}`, {
    headers: { Authorization: `Bearer ${adminToken}` },
  });
  const data = await response.json();

  return data;
};

// CREATE
export const fetchCreateNotification = async (newNotification) => {
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
export const fetchUpdateNotification = async (id, newNotification) => {
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
export const fetchDeleteNotification = async (id) => {
  const response = fetch(`${domainPort}/api/notices/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${adminToken}`,
    },
  });

  return response.status;
};
