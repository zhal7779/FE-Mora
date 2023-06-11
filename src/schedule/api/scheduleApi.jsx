export const fetchSchedule = async () => {
  const response = await fetch(`${process.env.REACT_APP_URL}/api/plans/ym/2023-06`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
  });
  const data = await response.json();
  return data;
};
