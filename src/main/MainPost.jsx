import * as Style from './Style/MainPostStyle';
import { useState } from 'react';

const MainPost = () => {
  return (
    <Style.PostContainer>
      <div className="post-title">
        <h2>모여라레이서 Top 10🔥</h2>
        <p>지난 24시간 동안 가장 인기가 많았던 게시물을 만나보세요.</p>
      </div>
      <ul className="post-list">
        <li>
          <p className="rank">1</p>
          <div>
            <div className="writer">
              <div className="writer-img">{/* <img src={} alt=""/> */}</div>
              <div className="writer-info">
                <p className="writer-info-name">김코딩</p>
                <p className="writer-info-position">레이서</p>
              </div>
            </div>
            <div className="content">
              <div className="content-text">
                <span>이노베이션 캠프 고민</span> | 안녕하세요, 이번에
                부트캠프를 들으려고 찾아보고 있는데 학원은 스파르타 코딩
                클럽으로 결정했는데 고민이 있습니다..! 상담을 받던 중 제가
                강원권 대학을 졸업해서 "이노베이션 캠프" 추천을 받았는데 비교적
                최근에 시작한 사업이라서 그 상담을 받던 중 제가 강원권 대학을
                졸업해서 "이노베이션 캠프" 추천을 받았는데 비교적 최근에 시작한
                사업이라서 그 "이노베이션 캠프" 추천을 받았는데 비교적 최근에
                시작한 사업이라서 그 상담을 받던 중 제가 강원권 대학을 졸업해서
                "이노베이션 캠프" 추천을 받았는데 비교적 최근에 시작한
                사업이라서 그
              </div>
              {/* {contentImg && (
                <div className="content-img">
                  <img src={contentImg} alt=""/>
                </div>
              )} */}
              <div className="content-img">
                게시글 이미지
                {/* <img src={} alt=""/> */}
              </div>
              <div className="count">
                <p>조회 386</p>
                <p>좋아요 46</p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <p className="rank">2</p>
          <div className="preview-box">
            <div className="writer">
              <div className="writer-img">{/* <img src={} alt=""/> */}</div>
              <div className="writer-info">
                <p className="writer-info-name">김코딩</p>
                <p className="writer-info-position">레이서</p>
              </div>
            </div>
            <div className="content">
              <div className="content-text">
                이노베이션 캠프 고민 | 안녕하세요, 이번에 부트캠프를 들으려고
                찾아보고 있는데 학원은 스파르타 코딩 클럽으로 결정했는데 고민이
                있습니다..! 상담을 받던 중 제가 강원권 대학을 졸업해서
                "이노베이션 캠프" 추천을 받았는데 비교적 최근에 시작한
                사업이라서 그
              </div>
              <div className="count">
                <p>조회 386</p>
                <p>좋아요 46</p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <p className="rank">3</p>
          <div className="preview-box">
            <div className="writer">
              <div className="writer-img">{/* <img src={} alt=""/> */}</div>
              <div className="writer-info">
                <p className="writer-info-name">김코딩</p>
                <p className="writer-info-position">레이서</p>
              </div>
            </div>
            <div className="content">
              <div className="content-text">
                이노베이션 캠프 고민 | 안녕하세요, 이번에 부트캠프를 들으려고
                찾아보고 있는데 학원은 스파르타 코딩 클럽으로 결정했는데 고민이
                있습니다..! 상담을 받던 중 제가 강원권 대학을 졸업해서
                "이노베이션 캠프" 추천을 받았는데 비교적 최근에 시작한
                사업이라서 그
              </div>
              {/* {contentImg && (
                <div className="content-img">
                  <img src={} alt=""/>
                </div>
              )} */}
              <div className="content-img">
                게시글 이미지
                {/* <img src={} alt=""/> */}
              </div>
              <div className="count">
                <p>조회 386</p>
                <p>좋아요 46</p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <p className="rank">4</p>
          <div className="preview-box">
            <div className="writer">
              <div className="writer-img">{/* <img src={} alt=""/> */}</div>
              <div className="writer-info">
                <p className="writer-info-name">김코딩</p>
                <p className="writer-info-position">레이서</p>
              </div>
            </div>
            <div className="content">
              <div className="content-text">
                이노베이션 캠프 고민 | 안녕하세요, 이번에 부트캠프를 들으려고
                찾아보고 있는데 학원은 스파르타 코딩 클럽으로 결정했는데 고민이
                있습니다..! 상담을 받던 중 제가 강원권 대학을 졸업해서
                "이노베이션 캠프" 추천을 받았는데 비교적 최근에 시작한
                사업이라서 그
              </div>
              {/* {contentImg && (
                <div className="content-img">
                  <img src={} alt=""/>
                </div>
              )} */}
              <div className="content-img">
                게시글 이미지
                {/* <img src={} alt=""/> */}
              </div>
              <div className="count">
                <p>조회 386</p>
                <p>좋아요 46</p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <p className="rank">5</p>
          <div className="preview-box">
            <div className="writer">
              <div className="writer-img">{/* <img src={} alt=""/> */}</div>
              <div className="writer-info">
                <p className="writer-info-name">김코딩</p>
                <p className="writer-info-position">레이서</p>
              </div>
            </div>
            <div className="content">
              <div className="content-text">
                이노베이션 캠프 고민 | 안녕하세요, 이번에 부트캠프를 들으려고
                찾아보고 있는데 학원은 스파르타 코딩 클럽으로 결정했는데 고민이
                있습니다..! 상담을 받던 중 제가 강원권 대학을 졸업해서
                "이노베이션 캠프" 추천을 받았는데 비교적 최근에 시작한
                사업이라서 그
              </div>
              {/* {contentImg && (
                <div className="content-img">
                  <img src={} alt=""/>
                </div>
              )} */}
              <div className="content-img">
                게시글 이미지
                {/* <img src={} alt=""/> */}
              </div>
              <div className="count">
                <p>조회 386</p>
                <p>좋아요 46</p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <p className="rank">6</p>
          <div className="preview-box">
            <div className="writer">
              <div className="writer-img">{/* <img src={} alt=""/> */}</div>
              <div className="writer-info">
                <p className="writer-info-name">김코딩</p>
                <p className="writer-info-position">레이서</p>
              </div>
            </div>
            <div className="content">
              <div className="content-text">
                이노베이션 캠프 고민 | 안녕하세요, 이번에 부트캠프를 들으려고
                찾아보고 있는데 학원은 스파르타 코딩 클럽으로 결정했는데 고민이
                있습니다..! 상담을 받던 중 제가 강원권 대학을 졸업해서
                "이노베이션 캠프" 추천을 받았는데 비교적 최근에 시작한
                사업이라서 그
              </div>
              <div className="count">
                <p>조회 386</p>
                <p>좋아요 46</p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <p className="rank">7</p>
          <div className="preview-box">
            <div className="writer">
              <div className="writer-img">{/* <img src={} alt=""/> */}</div>
              <div className="writer-info">
                <p className="writer-info-name">김코딩</p>
                <p className="writer-info-position">레이서</p>
              </div>
            </div>
            <div className="content">
              <div className="content-text">
                이노베이션 캠프 고민 | 안녕하세요, 이번에 부트캠프를 들으려고
                찾아보고 있는데 학원은 스파르타 코딩 클럽으로 결정했는데 고민이
                있습니다..! 상담을 받던 중 제가 강원권 대학을 졸업해서
                "이노베이션 캠프" 추천을 받았는데 비교적 최근에 시작한
                사업이라서 그
              </div>
              <div className="count">
                <p>조회 386</p>
                <p>좋아요 46</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </Style.PostContainer>
  );
};

export default MainPost;
