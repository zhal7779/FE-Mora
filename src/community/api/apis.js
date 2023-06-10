const BASE_URL = process.env.REACT_APP_URL;
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFmMGZjY2Q3LWJhNzgtNGMyOS05MzIwLTA2ODQwY2EwMzg4MiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjg2Mzc3NDMyfQ.-IZvyq6xDUcN2yDJA1dVCK7nBs4SQ5B0SZb1StgyDOE';

export const fetchPosts = async (selectedCategoryId) => {
  const response = await fetch(`${BASE_URL}/api/boards/${selectedCategoryId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error('게시글을 불러오는데 실패했습니다.');
  }
  const data = await response.json();
  return data;
};
