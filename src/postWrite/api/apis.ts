import {
  imageData,
  registerPostParams,
  responseFormData
} from '../types/types';
const BASE_URL = process.env.REACT_APP_URL;

// 게시글 등록/수정 api
export const registerPost = async ({
  postId,
  postData
}: registerPostParams): Promise<responseFormData> => {
  const response = await fetch(`${BASE_URL}/api/boards`, {
    method: postId === null ? 'POST' : 'PUT',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${sessionStorage.getItem('userToken')}`
    }
  });

  if (!response.ok) {
    throw new Error('게시글 등록에 실패하였습니다.');
  }

  const result: responseFormData = await response.json();
  return result;
};

// 이미지 등록 api
export const postImage = async (imgFormData: FormData): Promise<imageData> => {
  const response = await fetch(`${BASE_URL}/api/boards/img`, {
    method: 'POST',
    body: imgFormData,
    headers: {
      authorization: `Bearer ${sessionStorage.getItem('userToken')}`
    }
  });

  if (!response.ok) {
    throw new Error('이미지 등록에 실패하였습니다.');
  }

  const result: imageData = await response.json();
  return result;
};
