const BASE_URL = process.env.REACT_APP_URL;

export const fetchPostDetail = async (postId) => {
  const storedToken = sessionStorage.getItem('userToken');
  const response = await fetch(`${BASE_URL}/api/boards/detail/${postId}`, {
    headers: {
      authorization: `Bearer ${storedToken}`,
    },
  });
  if (!response.ok) {
    throw new Error('게시글 상세를 불러오는데 실패했습니다.');
  }
  const data = await response.json();
  return data;
};

export const fetchLike = async (postId) => {
  const storedToken = sessionStorage.getItem('userToken');
  const response = await fetch(`${BASE_URL}/api/likes/${postId}`, {
    headers: {
      authorization: `Bearer ${storedToken}`,
    },
  });
  if (!response.ok) {
    throw new Error('게시글 좋아요 수를 불러오는데 실패했습니다.');
  }
  const data = await response.json();
  return data;
};
