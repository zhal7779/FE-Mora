import { useMutation, useQuery } from 'react-query';

const domain = 'http://15.164.221.244:5000';
const adminToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1ZDI4M2Q2LTU1ZmUtNGI0Yi1iMGFjLTI5MGFlMGZlM2I1ZCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4NjI4OTMwN30.U9rOuWLMkoYjPqVK8pGqwlEt1Kcu21o6IGjHzIUah4Y`;

// GET
const fetchNotificationInfo = async (page, size, keyword) => {
  const response = await fetch(
    `${domain}/api/notices/admin?page=${page}&size=${size}&keyword=${keyword}`,
    {
      headers: { Authorization: `Bearer ${adminToken}` },
    }
  );
  const data = await response.json();

  return data;
};
const useGetNotificationInfo = (page, size = 12, keyword = '') => {
  // 위험한 코드. 순수 함수
  // 훅은 컨디셔널하게 사용하면 안된다.
  // 훅이 jsx안에 들어가면 위험하다.
  // 그럼 컴포넌트 최상단에서 쓰는 게 바람직한 건가요?
  if (page === null || page === undefined) {
    console.error('page is not defined');
    return;
  }
  const { data, isLoading, error, refetch } = useQuery(
    ['admin', 'notification', 'get'],
    () => fetchNotificationInfo(page, size, keyword),
    {
      enabled: false,
      staleTime: Infinity,
    }
  );

  return { data, isLoading, error };
};

// POST
const fetchCreateNotification = async (newNotification) => {
  console.log(newNotification);
  const response = await fetch(`${domain}/api/notices`, {
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
const useCreateNotification = (newNotification) => {
  if (!newNotification) {
    console.error('newNotification is not defined');
    return;
  }

  const { mutate, data, error } = useMutation(() => fetchCreateNotification(newNotification));

  return { mutate, data, error };
};

// UPDATE

// DELETE
const fetchDeleteNotification = async (id) => {
  const response = fetch(`${domain}/api/notices/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${adminToken}`,
    },
  });

  const data = await response.json();
  return data;
};
const useDeleteNotification = (id) => {
  if (!id) {
    console.error('Notification id is not defined');
    return;
  }
  console.log(id);

  const { mutate, data, error } = useMutation(() => {
    fetchDeleteNotification(id);
  });
  return { mutate, data, error };
};

export {
  useGetNotificationInfo,
  useCreateNotification,
  useDeleteNotification,
  fetchNotificationInfo,
};
