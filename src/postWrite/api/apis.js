const BASE_URL = process.env.REACT_APP_URL;

// export const updatePost = async (textData, previewImg, postId) => {
//   const storedToken = sessionStorage.getItem('userToken');
//   const formData = new FormData();
//   const { category, title, content, hashtags } = textData;
//   formData.append('category', category);
//   formData.append('title', title);
//   formData.append('content', content);
//   formData.append('hashtags', hashtags);
//   formData.append('images', previewImg);
//   formData.append('board_id', postId);

//   const response = await fetch(`${BASE_URL}api/boards`, {
//     method: 'PUT',
//     body: formData,
//     headers: {
//       authorization: `Bearer ${storedToken}`,
//     },
//   });

//   if (!response.ok) {
//     throw new Error('게시글 수정에 실패했습니다.');
//   }
//   const data = await response.json();
//   return data;
// };
