import { Dispatch, SetStateAction } from 'react';

export type writeProps = {
  data: responseFormData;
  setData: Dispatch<SetStateAction<responseFormData>>;
  showPostImage: boolean;
  setShowPostImage: Dispatch<SetStateAction<boolean>>;
  postId: string;
};

export type responseFormData = {
  category: string;
  title: string;
  content: string;
  hashtags: string[];
  images: imageData[];
};

export type requestFormData = {
  category: string;
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
