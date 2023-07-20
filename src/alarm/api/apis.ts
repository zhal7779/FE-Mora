//알림 조회
export const getAlert = async () => {
  const response = await fetch(`${process.env.REACT_APP_URL}/api/alerts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
  });
  const data = await response.json();
  return data;
};

// 알림 읽음 여부

export const patchAlert = async (id: string) => {
  const response = await fetch(`${process.env.REACT_APP_URL}/api/alerts/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
    body: JSON.stringify({
      checked: true,
    }),
  });
  const data = await response.json();
  return data;
};
