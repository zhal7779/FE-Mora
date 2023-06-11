const BASE_URL = process.env.REACT_APP_URL;

export const createPost = async (textData, previewImg) => {
  const storedToken = sessionStorage.getItem('userToken');
  const formData = new FormData();
  const { category, title, content, hashtags } = textData;
  formData.append('category', category);
  formData.append('title', title);
  formData.append('content', content);
  formData.append('hashtags', hashtags);
  formData.append('images', previewImg);

  const response = await fetch(`${BASE_URL}api/boards`, {
    method: 'POST',
    body: formData,
    headers: {
      authorization: `Bearer ${storedToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('게시글 내용 등록에 실패했습니다.');
  }
  const data = await response.json();
  console.log(response);
  console.log(data);
  // return data;
};

export const createPostImg = async (imageData) => {
  const storedToken = sessionStorage.getItem('userToken');
  const formData = new FormData();
  formData.append('img', imageData);

  const response = await fetch(`${BASE_URL}api/boards/img`, {
    method: 'POST',
    body: formData,
    headers: {
      authorization: `Bearer ${storedToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('게시글 이미지 등록에 실패했습니다.');
  }

  const data = await response.json();
  return data;
};
