export type postData = {
  id: number;
  category: string;
  title: string;
  content: string;
  writer: string;
  like_cnt: number;
  view_cnt: number;
  comment_cnt: number;
  updatedAt: string;
  createdAt: string;
  User: user;
  Hashtags: string[];
  user_like?: boolean;
};

export type user = {
  name: string;
  email: string;
  position: string;
  generation: string;
  img_path: string;
};
