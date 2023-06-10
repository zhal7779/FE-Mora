import { createPost, createPostImg } from '../api/apis';

export const registerPost = async (postData) => {
  try {
    const data = await createPost(postData);
    return data;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};

export const registerPostImg = async (imageData) => {
  try {
    const data = await createPostImg(imageData);
    return data;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};
