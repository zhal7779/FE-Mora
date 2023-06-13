//자유게시판 검색
export const fetchFreeSearch = async (keyword) => {
  const response = await fetch(`${process.env.REACT_APP_URL}/api/boards/free?keyword=${keyword}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
  });
  const data = await response.json();
  return data;
};
// 지식공유 검색
export const fetchKnowledgeSearch = async (keyword) => {
  const response = await fetch(
    `${process.env.REACT_APP_URL}/api/boards/knowledge?keyword=${keyword}`,
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
