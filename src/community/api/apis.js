const BASE_URL = process.env.REACT_APP_URL;

export const fetchPosts = async (selectedCategoryId) => {
  const storedToken = sessionStorage.getItem('userToken');
  const response = await fetch(`${BASE_URL}api/boards/${selectedCategoryId}`, {
    headers: {
      authorization: `Bearer ${storedToken}`,
    },
  });
  if (!response.ok) {
    throw new Error('게시글을 불러오는데 실패했습니다.');
  }
  const data = await response.json();
  return data;
};
