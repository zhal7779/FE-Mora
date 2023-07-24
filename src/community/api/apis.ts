import { fetchPostProps, paginationData } from '../types/types';
import { postData } from '../../@types/post/postDataType';
const BASE_URL = process.env.REACT_APP_URL;

// 게시글 리스트 조회 api
export const fetchPosts = async ({
  selectedCategoryId,
  page,
  view,
  keyword,
  sort
}: fetchPostProps): Promise<paginationData> => {
  const response = await fetch(
    `${BASE_URL}/api/boards/${selectedCategoryId}?page=${page}&size=${view}&keyword=${keyword}&sort=${sort}`,
    {
      headers: {
        authorization: `Bearer ${sessionStorage.getItem('userToken')}`
      }
    }
  );

  if (!response.ok) {
    throw new Error('게시글을 불러오는데 실패했습니다.');
  }

  const result: Promise<paginationData> = await response.json();
  return result;
};

// 추천 게시글 조회 api
export const fetchRecommendPosts = async (
  selectedCategoryId: string
): Promise<postData[]> => {
  const response = await fetch(
    `${BASE_URL}/api/boards/${selectedCategoryId}/recommend`
  );

  if (!response.ok) {
    throw new Error('추천 게시글을 불러오는데 실패했습니다.');
  }

  const result: postData[] = await response.json();
  return result;
};
