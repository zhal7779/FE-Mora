import * as Style from './styledComponents/PostCommentStyle';
import Button from '../components/Button';
import IconMore from '../assets/icons/icon-more.svg';
import formatTime from '../community/utils/formatTime';
import { useState } from 'react';
import { getComment } from './service/postDetailService';
import { useQuery, useMutation } from 'react-query';
import { registerComment } from './service/postDetailService';

const PostComment = ({ postId }) => {
  const [commentOption, setCommentOption] = useState(null);
  const { status, data, error } = useQuery(['comment', postId], () =>
    getComment(postId)
  );
  const [commentData, setCommentData] = useState('');

  const { mutate } = useMutation(registerComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
      console.log('댓글 등록에 성공했습니다.');
    },
    onError: error => {
      console.error(error);
    }
  });

  if (status === 'loading') {
    return <Style.Status>Loading...⏳</Style.Status>;
  }

  if (status === 'error') {
    return <Style.Status>{error.message}⚠️</Style.Status>;
  }

  const handleChange = e => {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleWriteComment = e => {
    setCommentData(e.target.value);
  };

  const handleRegisterComment = async () => {
    try {
      await mutate(postId, commentData);
    } catch (error) {
      console.error(error);
    }
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
            onChange={(handleChange, handleWriteComment)}
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
        {data.length > 0 ? (
          <ul className="comment-content-list">
            {data.map((comment, index) => (
              <li key={index}>
                <div className="writer">
                  <div className="writer-img">
                    <img
                      src={comment.user_detail.img_path}
                      alt="사용자 프로필 이미지"
                    />
                  </div>
                  <div className="writer-info">
                    <p className="writer-info-name">{comment.User.name}</p>
                    <div>
                      <p className="writer-info-position">
                        {comment.user_detail.position}
                      </p>
                      <p className="writer-info-time">
                        {formatTime(comment.createdAt)}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="comment-content">{comment.content}</p>
                <div className="comment-option">
                  <button
                    onClick={() =>
                      setCommentOption(index === commentOption ? 'null' : index)
                    }
                  >
                    <img src={IconMore} alt="열기" />
                  </button>
                  <ul
                    className={`comment-option-list ${
                      index === commentOption ? 'show' : ''
                    }`}
                  >
                    <li>신고하기</li>
                    <li>삭제하기</li>
                  </ul>
                </div>
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
