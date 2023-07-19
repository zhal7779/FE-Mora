export interface SearchPostData {
  id: string;
  title: string;
  content: string;
  comment_cnt: number;
  like_cnt: number;
  view_cnt: number;
  Hashtags: string[];
}

export interface SearchProfileData {
  user_id: string;
  img_path: string;
  position: string;
  User: {
    name: string;
    Skills: {
      name: string;
    };
  };
}

export interface CountArrData {
  openProfile: number;
  free: number;
  knowledge: number;
  study: number;
  question: number;
  total?: number;
}

export interface RankingData {
  id: string;
  User: {
    img_path: string;
    name: string;
    position: string;
  };
  title: string;
}
