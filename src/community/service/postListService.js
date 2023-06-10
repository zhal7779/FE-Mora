import { fetchPosts } from '../api/apis';

export const getPosts = async (selectedCategoryId) => {
  try {
    const data = await fetchPosts(selectedCategoryId);
    return data;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};
