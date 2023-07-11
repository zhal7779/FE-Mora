import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Style from './styledComponents/PostDetailStyle';
import IconLike from '../assets/icons/icon-like.svg';
import UserProfile from '../assets/images/rabbitProfile.png';
import formatTime from '../community/utils/formatTime';
import IconMore from '../assets/icons/icon-more.svg';
import { fetchPostDetail, deletePost, toggleLike } from './api/apis';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';

const PostDetail = ({ postId }) => {
  const [postOption, setPostOption] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const decodedToken = jwt_decode(sessionStorage.getItem('userToken'));

  // 게시글 상세 조회
  const { status, data: detail, error } = useQuery(
    ['detail', postId],
    () => fetchPostDetail(postId),
    {
      refetchOnWindowFocus: false
    }
  );

  // 게시글 삭제
  const { mutate: deletePostMutate } = useMutation(() => deletePost(postId), {
    onSuccess: () => {
      console.log('게시글 삭제에 성공했습니다.');
      navigate('/community/post/free');
    },
    onError: error => {
      console.error(error);
    }
  });

  // 좋아요 등록, 취소
  const { mutate: toggleLikeMutate } = useMutation(
    () => toggleLike(detail.user_like, postId),
    {
      onSuccess: () => {
        console.log('좋아요 처리에 성공했습니다.');
        queryClient.invalidateQueries(['detail']);
      },
      onError: error => {
        console.error(error);
      }
    }
  );

  const handleClickLike = () => {
    toggleLikeMutate();
  };

  // 게시글 삭제 핸들러
  const handleDeletePost = () => {
    Swal.fire({
      icon: 'question',
      title: '게시글을 삭제하시겠습니까?',
      showCancelButton: true,
      confirmButtonText: '삭제',
      confirmButtonColor: 'red',
      cancelButtonText: '취소'
    }).then(result => {
      if (!sessionStorage.getItem('userToken')) {
        return;
      } else if (result.isConfirmed) {
        try {
          deletePostMutate();
        } catch (error) {
          console.error(error);
        }
        return;
      } else {
        return;
      }
    });
  };

  if (status === 'loading') {
    return <Style.Status>Loading...⏳</Style.Status>;
  }

  if (status === 'error') {
    return <Style.Status>{error.message}⚠️</Style.Status>;
  }

  return (
    <Style.DetailContainer>
      <div className="post-head">
        <div className="title">
          <h2>{detail.title}</h2>
          {decodedToken.id === detail.writer && (
            <div className="post-option">
              <button onClick={() => setPostOption(!postOption)}>
                <img src={IconMore} alt="열기" />
              </button>
              <ul className={`post-option-list ${postOption ? 'show' : ''}`}>
                <li key="post-modify">
                  <Link to={`/write?postId=${detail.id}`}>✍️ 수정하기</Link>
                </li>
                <li key="post-delete" onClick={handleDeletePost}>
                  ❌ 삭제하기
                </li>
              </ul>
            </div>
          )}
        </div>
        <p className="view">조회 {detail.view_cnt}</p>
      </div>
      <div className="writer">
        <div className="writer-img">
          {detail.User.img_path !== null ? (
            <img src={detail.User.img_path} alt="작성자 프로필" />
          ) : (
            <img src={UserProfile} alt="작성자 프로필" />
          )}
        </div>
        <div className="writer-info">
          <p className="writer-info-name">{detail.User.name}</p>
          <div>
            <p className="writer-info-position">{detail.User.position}</p>
            <p className="writer-info-time">{formatTime(detail.createdAt)}</p>
          </div>
        </div>
      </div>
      <div className="content">
        {detail.Photos.length > 0 && (
          <ul className="content-img">
            {detail.Photos.map((image, index) => (
              <li key={index}>
                <img src={image.img_path} alt={image.origin_name} />
              </li>
            ))}
          </ul>
        )}
        <div className="content-text">
          {detail.content.split('\n').map((line, index) => {
            return (
              <span key={index}>
                {line}
                <br />
              </span>
            );
          })}
          {detail.Hashtags.length > 0 && (
            <ul className="hashtags">
              {detail.Hashtags.map((hashtag, index) => (
                <li key={index}>
                  <span>#</span>
                  {hashtag}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          className={`like-btn ${detail.user_like ? '' : 'disabled'}`}
          onClick={handleClickLike}
        >
          <img src={IconLike} alt="좋아요" />
          {detail.like_cnt}
        </button>
      </div>
    </Style.DetailContainer>
  );
};

export default PostDetail;
