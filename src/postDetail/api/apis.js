const BASE_URL = process.env.REACT_APP_URL;

// 게시글 상세 조회 api
export const fetchPostDetail = async (postId) => {
  if (postId) {
    const storedToken = sessionStorage.getItem('userToken');
    const response = await fetch(`${BASE_URL}/api/boards/detail/${postId}`, {
      headers: {
        authorization: `Bearer ${storedToken}`,
      },
    });
    if (!response.ok) {
      throw new Error('게시글 상세를 불러오는데 실패했습니다.');
    }
    const data = await response.json();
    return data;
  }
};

// 게시글 좋아요 수 조회 api
export const fetchLike = async (postId) => {
  const storedToken = sessionStorage.getItem('userToken');
  const response = await fetch(`${BASE_URL}/api/likes/${postId}`, {
    headers: {
      authorization: `Bearer ${storedToken}`,
    },
  });
  if (!response.ok) {
    throw new Error('게시글 좋아요 수를 불러오는데 실패했습니다.');
  }
  const data = await response.json();
  return data;
};

// 게시글 삭제 api
export const deletePost = async (postId) => {
  const response = await fetch(`${BASE_URL}/api/boards`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
    body: JSON.stringify({ board_id: postId }),
  });
  if (!response.ok) {
    throw new Error('게시글 삭제에 실패했습니다.');
  }

  return await response.json();
};

// 좋아요 등록/취소 api
export const toggleLike = async (userLike, postId) => {
  const response = await fetch(`${BASE_URL}/api/likes`, {
    method: userLike ? 'DELETE' : 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
    body: JSON.stringify({ board_id: postId }),
  });
  if (!response.ok) {
    throw new Error('좋아요 처리에 실패했습니다.');
  }

  return await response.json();
};

//댓글 조회 api
export const fetchComments = async (postId) => {
  const response = await fetch(`${BASE_URL}/api/boards/detail/${postId}/comments`, {
    headers: {
      authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
  });

  if (!response.ok) {
    throw new Error('댓글을 불러오는데 실패했습니다.');
  }

  const result = await response.json();
  return result;
};

// 댓글 등록/수정 api
export const postComment = async (registerData, editCommentId) => {
  const response = await fetch(`${BASE_URL}/api/comments`, {
    method: editCommentId ? 'PATCH' : 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
    body: JSON.stringify(registerData),
  });

  if (!response.ok) {
    throw new Error('댓글 등록에 실패하였습니다.');
  }

  const result = await response.json();
  return result;
};

// 댓글 삭제 api
export const deleteComment = async (commentId) => {
  const response = await fetch(`${BASE_URL}/api/comments`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
    body: JSON.stringify({ comment_id: commentId }),
  });
  if (!response.ok) {
    throw new Error('댓글 삭제에 실패했습니다.');
  }

  return await response.json();
};
