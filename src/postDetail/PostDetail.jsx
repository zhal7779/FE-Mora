import { React, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Style from './styledComponents/PostDetailStyle';
import IconLike from '../assets/icons/icon-like.svg';
import UserProfile from '../assets/images/rabbitProfile.png';
import formatTime from '../community/utils/formatTime';
import IconMore from '../assets/icons/icon-more.svg';
import { getDetail, likePost } from './service/postDetailService';
import { useQuery, useMutation } from 'react-query';
const BASE_URL = process.env.REACT_APP_URL;

const PostDetail = ({ postId }) => {
  const [postOption, setPostOption] = useState(false);
  const [isLiked, setIsLiked] = useState(null);
  const { status, data, error } = useQuery(['detail', postId], () =>
    getDetail(postId)
  );
  const navigate = useNavigate();

  // 게시글 삭제 api
  const deletePost = async () => {
    const response = await fetch(`${BASE_URL}api/boards`, {
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
    },
    onError: error => {
      console.error(error);
    }
  });

  useEffect(() => {
    fetchLikeStatus();
  }, []);

  // 좋아요 조회 api
  const fetchLikeStatus = async () => {
    const response = await fetch(`${BASE_URL}api/likes`, {
      headers: {
        authorization: `Bearer ${sessionStorage.getItem('userToken')}`
      }
    });

    if (!response.ok) {
      throw new Error('좋아요 상태를 가져오는데 실패했습니다.');
    }

    const result = await response.json();
    console.log(result);
    setIsLiked(result.isLiked);
  };

  // 좋아요 등록, 취소 api
  const toggleLike = async () => {
    const response = await fetch(`${BASE_URL}api/likes`, {
      method: isLiked ? 'DELETE' : 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage.getItem('userToken')}`
      },
      body: JSON.stringify({ board_id: postId })
    });
    if (!response.ok) {
      throw new Error('좋아요 처리에 실패했습니다.');
    }

    setIsLiked(!isLiked);
    return await response.json();
  };

  // const { mutate: addLikeMutate } = useMutation(addLike, {
  //   onSuccess: () => {
  //     console.log('좋아요를 눌렀습니다!');
  //   },
  //   onError: error => {
  //     console.error(error);
  //   }
  // });

  // 좋아요 삭제 api
  // const deleteLike = async () => {
  //   const response = await fetch(`${BASE_URL}api/likes`, {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       authorization: `Bearer ${sessionStorage.getItem('userToken')}`
  //     },
  //     body: JSON.stringify({ board_id: postId })
  //   });
  //   if (!response.ok) {
  //     throw new Error('좋아요 취소에 실패했습니다.');
  //   }

  //   return await response.json();
  // };

  // const { mutate: deleteLikeMutate } = useMutation(deleteLike, {
  //   onSuccess: () => {
  //     console.log('좋아요를 취소했습니다ㅜㅜ');
  //   },
  //   onError: error => {
  //     console.error(error);
  //   }
  // });

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

  // 좋아요 등록/삭제 핸들러
  // const handleToggleLike = () => {
  //   setIsLiked(!isLiked);
  //   if (isLiked) {
  //     addLikeMutate();
  //   } else {
  //     deleteLikeMutate();
  //   }
  // };

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
          <h2>{data.title}</h2>
          {sessionStorage.getItem('userToken') && (
            <div className="post-option">
              <button onClick={() => setPostOption(!postOption)}>
                <img src={IconMore} alt="열기" />
              </button>
              <ul className={`post-option-list ${postOption ? 'show' : ''}`}>
                <li>
                  <Link to={`/write?postId=${data.id}`}>✍️ 수정하기</Link>
                </li>
                <li onClick={handleDeletePost}>❌ 삭제하기</li>
              </ul>
            </div>
          )}
        </div>
        <p className="view">조회 {data.view_cnt}</p>
      </div>
      <div className="writer">
        <div className="writer-img">
          {data.user_detail.img_path ? (
            <img src={data.user_detail.img_path} alt="작성자 프로필" />
          ) : (
            <img src={UserProfile} alt="작성자 프로필" />
          )}
        </div>
        <div className="writer-info">
          <p className="writer-info-name">{data.User.name}</p>
          <div>
            <p className="writer-info-position">{data.user_detail.position}</p>
            <p className="writer-info-time">{formatTime(data.createdAt)}</p>
          </div>
        </div>
      </div>
      <div className="content">
        {data.Photos.length > 0 && (
          <ul className="content-img">
            {data.Photos.map((image, index) => (
              <li key={index}>
                <img src={image.img_path} alt={image.origin_name} />
              </li>
            ))}
          </ul>
        )}
        <div className="content-text">{data.content}</div>
        <button className={`like-btn ${isLiked ? '' : 'disabled'}`}>
          <img src={IconLike} alt="좋아요" onClick={toggleLike} />
          {isLiked ? data.like_cnt + 1 : data.like_cnt}
        </button>
      </div>
    </Style.DetailContainer>
  );
};

export default PostDetail;
