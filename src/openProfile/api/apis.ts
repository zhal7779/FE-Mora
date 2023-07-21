//오픈프로필 조회
export const getProfile = async (page: number) => {
  const response = await fetch(
    `${process.env.REACT_APP_URL}/api/users/open-profile?page=${page}&size=3
  `,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
      },
    }
  );
  const data = await response.json();
  return data;
};

//오픈프로필 등록

export const putProfile = async (bool: boolean) => {
  const response = await fetch(`${process.env.REACT_APP_URL}/api/users/open-profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
    body: JSON.stringify({
      open: bool,
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
      Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
  });
  const data = await response.json();
  return data;
};

// 커피챗 신청
export const postCoffeeChat = async (id: string) => {
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
