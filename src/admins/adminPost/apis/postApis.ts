import { snakeToCamel } from '../../adminCommon/utils/variableName';

const domainPort = process.env.REACT_APP_URL;

interface GetFetchProps {
  page: number;
  view: number;
  content: string;
}

interface PhotosType {
  imgPath: string;
}

interface UserType {
  name: string;
  email: string;
}

interface PostType {
  Photos: PhotosType[];
  User: UserType;
  category: string;
  content: string;
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
  viewCnt: number;
  writer: string;
}

// READ
export const fetchReadPostInfo = async ({ page, view, content }: GetFetchProps) => {
  const adminToken = sessionStorage.getItem('adminToken');
  const response = await fetch(
    `${domainPort}/api/adminBoards?page=${page}&size=${view}&keyword=${content}`,
    {
      headers: { Authorization: `Bearer ${adminToken}` },
    }
  );
  const data = await response.json();

  data.objArr.map((obj: PostType) => snakeToCamel(obj));
  data.objArr.map((obj: PostType) => obj.Photos.map((photo) => snakeToCamel(photo)));
  return data;
};

export const fetchReadPostInfoDetail = async (id: string) => {
  const adminToken = sessionStorage.getItem('adminToken');
  try {
    const response = await fetch(`${domainPort}/api/adminBoards/${id}`, {
      headers: { Authorization: `Bearer ${adminToken}` },
    });
    const data = await response.json();
    console.log(data);

    snakeToCamel(data);
    snakeToCamel(data.User);
    data.Photos.map((photo: PhotosType) => snakeToCamel(photo));

    return data;
  } catch (error) {
    console.error(error);
  }
};

// DELETE
export const fetchDeletePost = async (id: string) => {
  const adminToken = sessionStorage.getItem('adminToken');
  const response = await fetch(`${domainPort}/api/adminBoards/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${adminToken}`,
    },
  });

  return response.status;
};

export const fetchDeleteComment = async (id: string) => {
  const adminToken = sessionStorage.getItem('adminToken');
  const response = await fetch(`${domainPort}/api/adminBoards/comment/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${adminToken}`,
    },
  });

  return response.status;
};
