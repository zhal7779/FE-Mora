const BASE_URL = process.env.REACT_APP_URL;

// 게시글 리스트 조회 api
export const fetchPosts = async ({ selectedCategoryId, page, view }) => {
  const response = await fetch(
    `${BASE_URL}/api/boards/${selectedCategoryId}?page=${page}&size=${view}`,
    {
      headers: {
        authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error('게시글을 불러오는데 실패했습니다.');
  }

  const result = await response.json();
  return result;
};

// 추천 게시글 조회 api
export const fetchRecommendPosts = async () => {
  const response = await fetch(`${BASE_URL}/api/boards/${selectedCategoryId}?page=0&size=100`, {
    headers: {
      authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
  });

  if (!response.ok) {
    throw new Error('게시글을 불러오는데 실패했습니다.');
  }

  const result = await response.json();
  return result;
};
