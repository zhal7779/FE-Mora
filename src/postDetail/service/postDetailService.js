import {
  fetchPostDetail,
  fetchPostComment,
  fetchPostDelete,
  fetchLike,
  createComment,
} from '../api/apis';

export const getDetail = async (postId) => {
  try {
    const data = await fetchPostDetail(postId);
    return data;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};

// export const getComment = async (postId) => {
//   try {
//     const data = await fetchPostComment(postId);
//     return data;
//   } catch (error) {
//     throw new Error(`${error.message}`);
//   }
// };

// export const deletePost = async (postId) => {
//   try {
//     await fetchPostDelete(postId);
//   } catch (error) {
//     throw new Error(`${error.message}`);
//   }
// };

// export const registerComment = async (postId, commentData) => {
//   try {
//     const data = await createComment(postId, commentData);
//     return data;
//   } catch (error) {
//     throw new Error(`${error.message}`);
//   }
// };

export const likePost = async (postId) => {
  try {
    await fetchLike(postId);
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};
