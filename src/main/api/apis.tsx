const BASE_URL = process.env.REACT_APP_URL;

// 인기 TOP10 게시글 조회
export const fetchMainPosts = async () => {
  const response = await fetch(`${BASE_URL}/api/boards/popular`);

  if (!response.ok) {
    throw new Error('게시글을 불러오는데 실패했습니다.');
  }

  const result = await response.json();
  return result;
};
