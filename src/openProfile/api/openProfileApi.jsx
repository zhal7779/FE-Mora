//오픈프로필 조회
export const getProfile = async () => {
  const response = await fetch(`${process.env.REACT_APP_URL}/api/users/open-profile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};
