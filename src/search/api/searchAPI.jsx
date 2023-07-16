// 게시글 top10 조회
export const fetchPopular = async () => {
  const response = await fetch(`${process.env.REACT_APP_URL}/api/boards/popular`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};
//오픈 프로필 검색
export const fetchSearchProfile = async (keyword) => {
  const response = await fetch(
    `${process.env.REACT_APP_URL}/api/users/open-profile/search?keyword=${keyword}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await response.json();
  return data;
};
//자유게시판 검색
export const fetchSearchPost = async ({ menu, page, keyword }) => {
  const response = await fetch(
    `${process.env.REACT_APP_URL}/api/boards/${menu}?page=${page}&size=5&keyword=${keyword}`,
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
