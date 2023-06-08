import { useMutation, useQuery } from 'react-query';

const domain = 'http://15.164.221.244:5000';
const adminToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFkZTM1NDU4LTliYjUtNGZmMy1hY2MxLTRlYWE1ZGU1NGFhMCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4NjIxMDY1OH0.bhE1HXFT-XMkdDZhU8djCHCw-tQ71nCKRAkJ5eVldEI`;

// GET
const fetchNotificationInfo = async (page, size) => {
  const response = await fetch(`${domain}/api/notice/admin/:keyword?page=${page}&size=${size}`, {
    headers: { Authorization: `Bearer ${adminToken}` },
  });
  const data = response.json();

  return data;
};
const useGetNotificationInfo = (page, size = 12) => {
  if (page === null || page === undefined) {
    console.error('page is not defined');
    return;
  }
  const { data, isLoading, error } = useQuery(
    ['admin', 'notification'],
    () => fetchNotificationInfo(page, size),
    {
      retry: false,
      staleTime: Infinity,
    }
  );

  return { data, isLoading, error };
};

// POST
const fetchCreateNotification = async (newNotification) => {
  const response = await fetch(`http://15.164.221.244:5000/api/notice`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${adminToken}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newNotification),
  });

  const data = response.json();
  return data;
};
const useCreateNotification = (newNotification) => {
  if (!newNotification) {
    console.error('newNotification is not defined');
    return;
  }

  const { mutate, data, isLoading, error } = useMutation(() =>
    fetchCreateNotification(newNotification)
  );

  return { mutate, data, isLoading, error };
};

export { useGetNotificationInfo, useCreateNotification };
