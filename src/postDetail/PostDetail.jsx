import { React } from 'react';
import * as Style from './styledComponents/PostDetailStyle';
import IconLike from '../assets/icons/icon-like.svg';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import data from './data/getResData';
import formatTime from '../utils/formatTime';
import IconMore from '../assets/icons/icon-more.svg';

const PostDetail = () => {
  const [postOption, setPostOption] = useState(false);
  return (
    <Style.DetailContainer>
      <div className="post-head">
        {/* <p className="category">{data.category}</p> */}
        <div className="title">
          <h2>{data.title}</h2>
          <div className="post-option">
            <button onClick={() => setPostOption(!postOption)}>
              <img src={IconMore} alt="열기" />
            </button>
            <ul className={`post-option-list ${postOption ? 'show' : ''}`}>
              <li>수정하기</li>
              <li>삭제하기</li>
            </ul>
          </div>
        </div>
        <p className="view">조회 {data.view_cnt}</p>
      </div>
      <div className="writer">
        <div className="writer-img">{/* <img src={} alt=""/> */}</div>
        <div className="writer-info">
          <p className="writer-info-name">김코딩</p>
          <div>
            <p className="writer-info-position">레이서</p>
            <p className="writer-info-time">{formatTime(data.created_at)}</p>
          </div>
        </div>
      </div>
      <div className="content">
        <ul className="content-img">
          {data.images.map((image, index) => (
            <li>
              <img src={image.path} alt={image.origin_name} key={index} />
            </li>
          ))}
        </ul>
        <div className="content-text">{data.content}</div>
        <button className="like-btn">
          <img src={IconLike} alt="좋아요" />
          {data.like_cnt}
        </button>
      </div>
    </Style.DetailContainer>
  );
};

export default PostDetail;
