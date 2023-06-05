import * as Style from './styledComponents/PostCommentStyle';
import Button from '../components/Button';
import IconMore from '../assets/icons/icon-more.svg';
import { useState } from 'react';

const PostComment = () => {
  const [commentOption, setCommentOption] = useState(false);

  // utils로 빼기
  const handleChange = e => {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
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
            onChange={handleChange}
          ></textarea>
          <Button value="등록" color="darkPurple" />
        </div>
      </div>
      <div className="comment-content">
        <h3>댓글👀</h3>
        <ul className="comment-content-list">
          <li>
            <div className="writer">
              <div className="writer-img">{/* <img src={} alt=""/> */}</div>
              <div className="writer-info">
                <p className="writer-info-name">김코딩</p>
                <div>
                  <p className="writer-info-position">레이서</p>
                  <p className="writer-info-time">5분전</p>
                </div>
              </div>
            </div>
            <p className="comment-content">
              전 걸그룹 노래 주로 듣습니다. 기분이 좋아지고 신이 납니다.
              뉴진스의 하입보이 추천하고 갑니다~ 💃
            </p>
            <div className="comment-option">
              <button onClick={() => setCommentOption(!commentOption)}>
                <img src={IconMore} alt="열기" />
              </button>
              <ul
                className={`comment-option-list ${commentOption ? 'show' : ''}`}
              >
                <li>신고하기</li>
                <li>삭제하기</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </Style.CommentContainer>
  );
};

export default PostComment;
