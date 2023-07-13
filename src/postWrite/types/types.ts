import { Dispatch, SetStateAction } from 'react';

export type writeProps = {
  data: responseFormData;
  setData: Dispatch<SetStateAction<responseFormData>>;
  showPostImage: boolean;
  setShowPostImage: Dispatch<SetStateAction<boolean>>;
  postId: string | null;
};

export type responseFormData = {
  category: string | null;
  title: string;
  content: string;
  hashtags: string[];
  images: imageData[];
};

export type requestFormData = {
  category: string | null;
  title: string;
  content: string;
  hashtags: string[];
  images: string[];
  board_id?: string;
};

export type imageData = {
  img_path: string;
};

export type registerPostParams = {
  postId: string | null;
  postData: requestFormData;
};
// export type fetchPostProps = {
//   selectedCategoryId: string;
//   page: number;
//   view: number;
//   keyword?: string;
//   sort: string;
// };

// export type paginationData = {
//   currentPage: number;
//   objArr: postData[];
//   totalItems: number;
//   totalPages: number;
// };
