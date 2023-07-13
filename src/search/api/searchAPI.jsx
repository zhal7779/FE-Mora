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
//오픈 프로필 조회
export const fetchProfileSearch = async (keyword) => {
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
export const fetchFreeSearch = async ({ menu, page, keyword }) => {
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
// 지식공유 검색
export const fetchKnowledgeSearch = async (keyword) => {
  const response = await fetch(
    `${process.env.REACT_APP_URL}/api/boards/knowledge?page=0&size=5&keyword=${keyword}`,
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

// 스터디 모집 검색
export const fetchStudySearch = async (keyword) => {
  const response = await fetch(
    `${process.env.REACT_APP_URL}/api/boards/study?page=0&size=5&keyword=${keyword}`,
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

// 레이서Q&A 검색
export const fetchQuestionSearch = async (keyword) => {
  const response = await fetch(
    `${process.env.REACT_APP_URL}/api/boards/question?page=0&size=5&keyword=${keyword}`,
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
