import { postData, user } from '../../@types/post/postDataType';

export type token = {
  id: string;
  img_path: string;
  profile_public: boolean;
  role: string;
  exp: number;
  iat: number;
};

export type commentData = {
  id: string;
  board_id: string;
  commenter: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  User: user;
};

export type communityPostData = postData & {
  Photos: photo[];
};

type photo = {
  img_path: string;
  origin_name: string;
};
