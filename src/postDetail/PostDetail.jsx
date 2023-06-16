import { React, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Style from './styledComponents/PostDetailStyle';
import IconLike from '../assets/icons/icon-like.svg';
import UserProfile from '../assets/images/rabbitProfile.png';
import formatTime from '../community/utils/formatTime';
import IconMore from '../assets/icons/icon-more.svg';
import { getDetail, likePost } from './service/postDetailService';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import jwt_decode from 'jwt-decode';
const BASE_URL = process.env.REACT_APP_URL;

const PostDetail = ({ postId }) => {
  const [postOption, setPostOption] = useState(false);
  const { status, data: detail, error } = useQuery(['detail', postId], () =>
    getDetail(postId)
  );
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const decodedToken = jwt_decode(sessionStorage.getItem('userToken'));

  // 게시글 삭제 api
  const deletePost = async () => {
    const response = await fetch(`${BASE_URL}/api/boards`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage.getItem('userToken')}`
      },
      body: JSON.stringify({ board_id: postId })
    });
    if (!response.ok) {
      throw new Error('게시글 삭제에 실패했습니다.');
    }

    return await response.json();
  };

  const { mutate: deletePostMutate } = useMutation(deletePost, {
    onSuccess: () => {
      console.log('게시글 삭제에 성공했습니다.');
      navigate(-1);
      queryClient.invalidateQueries(['posts']);
    },
    onError: error => {
      console.error(error);
    }
  });

  // 좋아요 등록, 취소 api
  const toggleLike = async () => {
    const response = await fetch(`${BASE_URL}/api/likes`, {
      method: detail.user_like ? 'DELETE' : 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage.getItem('userToken')}`
      },
      body: JSON.stringify({ board_id: postId })
    });
    if (!response.ok) {
      throw new Error('좋아요 처리에 실패했습니다.');
    }

    return await response.json();
  };

  const { mutate: toggleLikeMutate } = useMutation(toggleLike, {
    onSuccess: () => {
      console.log('좋아요 처리에 성공했습니다.');
      queryClient.invalidateQueries(['detail']);
    },
    onError: error => {
      console.error(error);
    }
  });

  const handleClickLike = () => {
    toggleLikeMutate();
  };

  // 게시글 삭제 핸들러
  const handleDeletePost = () => {
    const check = window.confirm('게시글을 삭제하시겠습니까?');
    if (!check) return;

    if (!sessionStorage.getItem('userToken')) return;

    try {
      deletePostMutate();
    } catch (error) {
      console.error(error);
    }
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
        </div>
        <button className={`like-btn ${detail.user_like ? '' : 'disabled'}`}>
          <img src={IconLike} alt="좋아요" onClick={handleClickLike} />
          {detail.like_cnt}
        </button>
      </div>
    </Style.DetailContainer>
  );
};

export default PostDetail;
