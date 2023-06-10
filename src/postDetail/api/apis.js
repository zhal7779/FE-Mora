const BASE_URL = process.env.REACT_APP_URL;
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFmMGZjY2Q3LWJhNzgtNGMyOS05MzIwLTA2ODQwY2EwMzg4MiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjg2Mzc3NDMyfQ.-IZvyq6xDUcN2yDJA1dVCK7nBs4SQ5B0SZb1StgyDOE';

export const fetchPostDetail = async (postId) => {
  const response = await fetch(`${BASE_URL}/api/boards/detail/${postId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error('게시글 상세를 불러오는데 실패했습니다.');
  }
  const data = await response.json();
  return data;
};

export const fetchPostComment = async (postId) => {
  const response = await fetch(`${BASE_URL}/api/boards/detail/${postId}/comments`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error('게시글의 댓글을 불러오는데 실패했습니다.');
  }
  const data = await response.json();
  return data;
};

export const fetchPostDelete = async (postId) => {
  const response = await fetch(`${BASE_URL}/api/boards/${postId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error('게시글 삭제에 실패했습니다.');
  }
};

export const createComment = async (postId, commentData) => {
  const formData = new FormData();
  formData.append('board_id', postId);
  formData.append('content', commentData);

  const response = await fetch(`${BASE_URL}/api/comments`, {
    method: 'POST',
    body: formData,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('댓글 등록에 실패했습니다.');
  }
  const data = await response.json();
  console(data);

  return data;
};

export const fetchLike = async (postId) => {
  const response = await fetch(`${BASE_URL}/api/likes/${postId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error('게시글 좋아요 수를 불러오는데 실패했습니다.');
  }
  const data = await response.json();
  return data;
};
