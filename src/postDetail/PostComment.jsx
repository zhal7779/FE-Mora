import * as Style from './styledComponents/PostCommentStyle';
import Button from '../components/Button';
import IconMore from '../assets/icons/icon-more.svg';
import formatTime from '../community/utils/formatTime';
import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';
const BASE_URL = process.env.REACT_APP_URL;

const PostComment = ({ postId }) => {
  const [commentOption, setCommentOption] = useState(null);
  const [commentData, setCommentData] = useState('');
  const [editCommentId, setEditCommentId] = useState(null);
  const [editCommentData, setEditCommentData] = useState('');
  const queryClient = useQueryClient();
  const decodedToken = jwt_decode(sessionStorage.getItem('userToken'));

  //댓글 조회 api
  const fetchComments = async () => {
    const response = await fetch(
      `${BASE_URL}/api/boards/detail/${postId}/comments`,
      {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem('userToken')}`
        }
      }
    );

    if (!response.ok) {
      throw new Error('댓글을 불러오는데 실패했습니다.');
    }

    const result = await response.json();
    return result;
  };

  const { data: comments, isLoading, isError, error } = useQuery(
    ['comments'],
    fetchComments
  );

  // 댓글 등록/수정 api
  const postComment = async registerData => {
    const response = await fetch(`${BASE_URL}/api/comments`, {
      method: editCommentId ? 'PATCH' : 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage.getItem('userToken')}`
      },
      body: JSON.stringify(registerData)
    });

    if (!response.ok) {
      throw new Error('댓글 등록에 실패하였습니다.');
    }

    const result = await response.json();
    return result;
  };

  const { mutate: postCommentMutate } = useMutation(postComment, {
    onSuccess: () => {
      console.log('댓글이 성공적으로 등록되었습니다.');
      queryClient.invalidateQueries(['comments']);
    },
    onError: error => {
      console.error('댓글 등록에 실패하였습니다.', error);
    }
  });

  // 댓글 삭제 api
  const deleteComment = async commentId => {
    const response = await fetch(`${BASE_URL}/api/comments`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage.getItem('userToken')}`
      },
      body: JSON.stringify({ comment_id: commentId })
    });
    if (!response.ok) {
      throw new Error('댓글 삭제에 실패했습니다.');
    }

    return await response.json();
  };

  const { mutate: deleteCommentMutate } = useMutation(deleteComment, {
    onSuccess: () => {
      console.log('댓글 삭제에 성공했습니다.');
      queryClient.invalidateQueries(['comments']);
      setCommentOption(null);
    },
    onError: error => {
      console.error(error);
    }
  });

  const handleContentChange = e => {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
    if (editCommentId) {
      setEditCommentData(e.target.value);
    } else {
      setCommentData(e.target.value);
    }
  };

  // 댓글 등록 핸들러
  const handleRegisterComment = () => {
    if (!editCommentId && commentData === '') {
      Swal.fire({
        icon: 'warning',
        title: '댓글을 작성해주세요!',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }

    if (editCommentId && editCommentData === '') {
      Swal.fire({
        icon: 'warning',
        title: '댓글을 작성해주세요!',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }

    if (editCommentId) {
      try {
        const registerData = {
          comment_id: editCommentId,
          content: editCommentData
        };
        postCommentMutate(registerData);
        setEditCommentId(null);
        setEditCommentData('');
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const registerData = {
          content: commentData,
          board_id: postId
        };
        postCommentMutate(registerData);
        setCommentData('');
      } catch (error) {
        console.log(error);
      }
    }
  };

  // 댓글 삭제 핸들러
  const handleDeleteComment = commentId => {
    Swal.fire({
      icon: 'question',
      title: '댓글을 삭제하시겠습니까?',
      showCancelButton: true,
      confirmButtonText: '삭제',
      confirmButtonColor: 'red',
      cancelButtonText: '취소'
    }).then(result => {
      if (!sessionStorage.getItem('userToken')) {
        return;
      } else if (result.isConfirmed) {
        try {
          deleteCommentMutate(commentId);
        } catch (error) {
          console.error(error);
        }
        return;
      } else {
        return;
      }
    });
  };

  // 댓글 수정
  const handleEditComment = (commentId, commentContent) => {
    setEditCommentId(commentId);
    setEditCommentData(commentContent);
    setCommentOption(null);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Style.CommentContainer>
      <div className="comment-write">
        <h3>댓글달기</h3>
        <div className="comment-write-area">
          <textarea
            name="comment"
            id="comment"
            placeholder="댓글을 남겨주세요."
            onChange={handleContentChange}
            value={commentData}
          ></textarea>
          <Button
            value="등록"
            color="darkPurple"
            onClick={handleRegisterComment}
          />
        </div>
      </div>
      <div className="comment-content">
        <h3>댓글👀</h3>
        {comments !== undefined && comments.length > 0 ? (
          <ul className="comment-content-list">
            {comments.map((comment, index) => (
              <li key={comment.id}>
                <div className="writer">
                  <div className="writer-img">
                    <img
                      src={comment.User.img_path}
                      alt="사용자 프로필 이미지"
                    />
                  </div>
                  <div className="writer-info">
                    <p className="writer-info-name">{comment.User.name}</p>
                    <div>
                      <p className="writer-info-position">
                        {comment.User.position}
                      </p>
                      <p className="writer-info-time">
                        {formatTime(comment.createdAt)}
                      </p>
                    </div>
                  </div>
                </div>
                {editCommentId ? (
                  <div className="comment-textarea">
                    <textarea
                      name="comment-edit"
                      id="comment-edit"
                      value={editCommentData}
                      onChange={handleContentChange}
                    ></textarea>
                    <div className="edit-btns">
                      <button
                        className="edit-btn"
                        onClick={handleRegisterComment}
                      >
                        수정
                      </button>
                      <button
                        className="edit-cancel"
                        onClick={() => setEditCommentId(null)}
                      >
                        취소
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="comment-content">
                    {comment.content.split('\n').map((line, index) => {
                      return (
                        <span key={index}>
                          {line}
                          <br />
                        </span>
                      );
                    })}
                  </p>
                )}
                {decodedToken.id === comment.commenter && (
                  <div className="comment-option">
                    <button
                      onClick={() =>
                        setCommentOption(
                          index === commentOption ? 'null' : index
                        )
                      }
                    >
                      <img src={IconMore} alt="열기" />
                    </button>
                    <ul
                      className={`comment-option-list ${
                        index === commentOption ? 'show' : ''
                      }`}
                    >
                      <li
                        onClick={() =>
                          handleEditComment(comment.id, comment.content)
                        }
                      >
                        ✍️ 수정하기
                      </li>
                      <li
                        className="delete"
                        onClick={() => handleDeleteComment(comment.id)}
                      >
                        ❌ 삭제하기
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <div className="no-comment">댓글이 없습니다.</div>
        )}
      </div>
    </Style.CommentContainer>
  );
};

export default PostComment;
