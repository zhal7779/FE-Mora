import { useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import IconMore from '../../../assets/icons/icon-more.svg';
import formatTime from '../../../utils/formatTime';
import UserProfile from '../../../assets/images/rabbitProfile.png';
import { fetchDeleteComment, fetchDeletePost, fetchReadPostInfoDetail } from '../apis/postApis';
import {
  Hr,
  Status,
  UserInfo,
  CommentBlock,
  CommentTitle,
  DeleteComment,
  CommentContent,
  DetailContainer,
  CommentContentBlock,
} from '../styledComponents/PostDetailStyle';

const AdminPostDetail = ({ postId }) => {
  const [postOption, setPostOption] = useState(false);
  const [commentCnt, setCommentCnt] = useState(0);
  const navigate = useNavigate();

  const { isLoading, data, error } = useQuery(
    ['detail', postId, commentCnt],
    () => fetchReadPostInfoDetail(postId),
    {
      onSuccess(data) {
        setCommentCnt(data.Comments.length);
      },
    }
  );

  const handleDeletePost = (id) => {
    const response = confirm('삭제하시겠습니까?');
    if (response) {
      deletePost(id);
    }
  };
  const { mutate: deletePost, error: deleteError } = useMutation((id) => fetchDeletePost(id), {
    onSuccess() {
      navigate(-1);
    },
    onError(error) {
      console.error(error);
    },
  });

  const handleDeleteComment = (id) => {
    const response = confirm('삭제하시겠습니까?');
    if (response) {
      deleteComment(id);
    }
  };
  const { mutate: deleteComment, error: deleteCommentError } = useMutation(
    (id) => fetchDeleteComment(id),
    {
      onSuccess() {
        setCommentCnt((commentCnt) => commentCnt - 1);
      },
      onError(error) {
        console.error(error);
      },
    }
  );

  if (isLoading) return <Status>Loading...⏳</Status>;
  if (error) return <Status>{error.message}</Status>;
  if (deleteError) return <Status>{deleteError.message}</Status>;
  if (deleteCommentError) return <Status>{deleteCommentError.message}</Status>;

  return (
    <DetailContainer>
      <div className='post-head'>
        <div className='title'>
          <h2>{data.title}</h2>
          <div className='post-option'>
            <button onClick={() => setPostOption(!postOption)}>
              <img src={IconMore} alt='열기' />
            </button>
            <ul className={`post-option-list ${postOption ? 'show' : ''}`}>
              <li key='post-delete' onClick={() => handleDeletePost(data.id)}>
                ❌ 삭제하기
              </li>
            </ul>
          </div>
        </div>
        <p className='view'>조회 {data.viewCnt}</p>
      </div>

      <div className='writer'>
        <div className='writer-img'>
          {data.User.imgPath !== null ? (
            <img src={data.User.imgPath} alt='작성자 프로필' />
          ) : (
            <img src={UserProfile} alt='작성자 대체 프로필' />
          )}
        </div>
        <div className='writer-info'>
          <p className='writer-info-name'>{data.User.name}</p>
          <div>
            <p className='writer-info-position'>{data.User.position}</p>
            <p className='writer-info-time'>{formatTime(data.createdAt)}</p>
          </div>
        </div>
      </div>

      <div className='content'>
        {data.Photos.length > 0 && (
          <ul className='content-img'>
            {data.Photos.map((image, idx) => (
              <li key={idx + image.imgPath}>
                <img src={image.imgPath} alt={image.originName} />
              </li>
            ))}
          </ul>
        )}
        <div className='content-text'>
          {data.content.split('\n').map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
        </div>
      </div>

      <Hr />

      <CommentBlock>
        <CommentTitle>댓글</CommentTitle>
        {data.Comments.map((comment) => (
          <CommentContentBlock key={comment.id}>
            <UserInfo>
              <p className='user-name'>{comment.User.name}</p>
              <p className='create-at'>{comment.createdAt.slice(0, 10)}</p>
              <DeleteComment className='delete-btn' onClick={() => handleDeleteComment(comment.id)}>
                삭제
              </DeleteComment>
            </UserInfo>
            <CommentContent>{comment.content}</CommentContent>
          </CommentContentBlock>
        ))}
      </CommentBlock>
    </DetailContainer>
  );
};

export default AdminPostDetail;
