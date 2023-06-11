export const fetchSchedule = async (yearMonth) => {
  const response = await fetch(`${process.env.REACT_APP_URL}/api/plans/ym/${yearMonth}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
  });
  const data = await response.json();
  return data;
};
