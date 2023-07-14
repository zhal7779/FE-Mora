import * as Style from '../styledComponents/PostCommentStyle';
import Button from '../../components/Button';
import IconMore from '../../assets/icons/icon-more.svg';
import formatTime from '../../utils/formatTime';
import { useState, useRef } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { fetchComments, postComment, deleteComment } from '../api/apis';
import { commentData, token } from '../types/types';
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';
import { useEffect } from 'react';

const PostComment = ({ postId }: { postId: string }) => {
  const [commentOption, setCommentOption] = useState<number | null>(null);
  const [commentData, setCommentData] = useState('');
  const [editCommentId, setEditCommentId] = useState<string | null>(null);
  const [editCommentData, setEditCommentData] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const queryClient = useQueryClient();
  const userToken = sessionStorage.getItem('userToken');
  const decodedToken: token | null = userToken ? jwt_decode(userToken) : null;

  // textarea 높이 유동적 변경
  useEffect(() => {
    const textareaEl = textareaRef.current;
    if (textareaEl) {
      textareaEl.style.height = 'auto';
      textareaEl.style.height = `${textareaEl.scrollHeight}px`;
    }
  });

  // 댓글 조회
  const { data: comments } = useQuery<commentData[]>(['comments'], () =>
    fetchComments(postId)
  );

  // 댓글 등록/수정
  const { mutate: postCommentMutate } = useMutation(postComment, {
    onSuccess: () => {
      console.log('댓글이 성공적으로 등록되었습니다.');
      queryClient.invalidateQueries(['comments']);
    },
    onError: error => {
      console.error('댓글 등록에 실패하였습니다.', error);
    }
  });

  // 댓글 삭제
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

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
        postCommentMutate({ registerData, editCommentId });
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
        postCommentMutate({ registerData, editCommentId });
        setCommentData('');
      } catch (error) {
        console.log(error);
      }
    }
  };

  // 댓글 삭제 핸들러
  const handleDeleteComment = (commentId: string) => {
    Swal.fire({
      icon: 'question',
      title: '댓글을 삭제하시겠습니까?',
      showCancelButton: true,
      confirmButtonText: '삭제',
      confirmButtonColor: 'red',
      cancelButtonText: '취소'
    }).then(result => {
      if (!userToken) {
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
  const handleEditComment = (commentId: string, commentContent: string) => {
    setEditCommentId(commentId);
    setEditCommentData(commentContent);
    setCommentOption(null);
  };

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
            {comments.map((comment: commentData, index: number) => (
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
                {editCommentId === comment.id ? (
                  <div className="comment-textarea">
                    <textarea
                      name="comment-edit"
                      id="comment-edit"
                      value={editCommentData}
                      onChange={handleContentChange}
                      ref={textareaRef}
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
                {decodedToken?.id === comment.commenter && (
                  <div className="comment-option">
                    <button
                      onClick={() =>
                        setCommentOption(index === commentOption ? null : index)
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
