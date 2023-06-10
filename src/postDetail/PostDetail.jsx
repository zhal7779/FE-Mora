import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Style from './styledComponents/PostDetailStyle';
import IconLike from '../assets/icons/icon-like.svg';
import formatTime from '../community/utils/formatTime';
import IconMore from '../assets/icons/icon-more.svg';
import { deletePost, getDetail, likePost } from './service/postDetailService';
import { useQuery, useMutation, useQueryClient } from 'react-query';

const PostDetail = ({ postId }) => {
  const queryClient = useQueryClient();
  const [postOption, setPostOption] = useState(false);
  const { status, data, error } = useQuery(['detail', postId], () =>
    getDetail(postId)
  );
  const like = data?.like_cnt;

  // 좋아요 기능
  const likeMutation = useMutation(likePost, {
    onSuccess: data => {
      setLike(data.like_cnt);
    },
    onError: error => {
      console.error(error);
    }
  });

  const { mutate } = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
      console.log('게시글 삭제에 성공했습니다.');
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

  const handleDeletePost = () => {
    const check = window.confirm('게시글을 삭제하시겠습니까?');
    if (!check) return;
    try {
      mutate(postId);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLike = () => {
    const isLiked = likeMutation.isLoading || likeMutation.isSuccess;

    if (isLiked) {
      likeMutation.mutate({ postId, like: false });
    } else {
      likeMutation.mutate({ postId, like: true });
    }
  };

  return (
    <Style.DetailContainer>
      <div className="post-head">
        <div className="title">
          <h2>{data.title}</h2>
          <div className="post-option">
            <button onClick={() => setPostOption(!postOption)}>
              <img src={IconMore} alt="열기" />
            </button>
            <ul className={`post-option-list ${postOption ? 'show' : ''}`}>
              <li>
                <Link to="">수정하기</Link>
              </li>
              <li onClick={handleDeletePost}>삭제하기</li>
            </ul>
          </div>
        </div>
        <p className="view">조회 {data.view_cnt}</p>
      </div>
      <div className="writer">
        <div className="writer-img">
          <img src={data.user_detail.img_path} alt="작성자 프로필" />
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
        <div className="content-text">{data.content}</div>
        {data.Photos.length > 0 && (
          <ul className="content-img">
            {data.Photos.map((image, index) => (
              <li key={index}>
                <img src={image.path} alt={image.origin_name} />
              </li>
            ))}
          </ul>
        )}
        <button className="like-btn">
          <img src={IconLike} alt="좋아요" onClick={handleLike} />
          {like}
        </button>
      </div>
    </Style.DetailContainer>
  );
};

export default PostDetail;
