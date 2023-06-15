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

//오픈프로필 등록
export const putProfile = async (num) => {
  console.log(num);
  const response = await fetch(`${process.env.REACT_APP_URL}/api/users/open-profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
    body: JSON.stringify({
      open: num,
    }),
  });
  const data = await response.json();
  return data;
};

//오픈 프로필 등록 여부

export const ProfilRegistrStatus = async () => {
  const response = await fetch(`${process.env.REACT_APP_URL}/api/users/mypage`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
  });
  const data = await response.json();
  return data;
};

// 커피챗 신청
export const postCoffeeChat = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_URL}/api/coffeechats`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
    body: JSON.stringify({
      profile_id: id,
    }),
  });
  const data = await response.json();
  return data;
};
