const BASE_URL = process.env.REACT_APP_URL;
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFmMGZjY2Q3LWJhNzgtNGMyOS05MzIwLTA2ODQwY2EwMzg4MiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjg2Mzc3NDMyfQ.-IZvyq6xDUcN2yDJA1dVCK7nBs4SQ5B0SZb1StgyDOE';

export const createPost = async (textData, previewImg) => {
  const formData = new FormData();
  const { category, title, content, hashtags } = textData;
  formData.append('category', category);
  formData.append('title', title);
  formData.append('content', content);
  formData.append('hashtags', hashtags);
  formData.append('images', previewImg);

  const response = await fetch(`${BASE_URL}/api/boards`, {
    method: 'POST',
    body: formData,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('게시글 내용 등록에 실패했습니다.');
  }
  const data = await response.json();
  return data;
};

export const createPostImg = async (imageData) => {
  const formData = new FormData();
  formData.append('img', imageData);

  const response = await fetch(`${BASE_URL}/api/boards/img`, {
    method: 'POST',
    body: formData,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('게시글 이미지 등록에 실패했습니다.');
  }

  const data = await response.json();
  return data;
};
