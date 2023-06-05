import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as DownIcon } from '../assets/icons/fi_chevron-down.svg';
import { ReactComponent as UpIcon } from '../assets/icons/fi_chevron-up.svg';
import { ReactComponent as PostIcon } from '../assets/icons/post.svg';
const AlarmModal = ({ handleClose }) => {
  const arr = ['이민영', '이민영', '이성호', '김윤지', '김지우', '이혜정', '연정환', '임지성'];
  const [hiddenContent, setHiddenContent] = useState([]);

  //모달 리스트 open, close
  const handleContentClick = (index) => {
    setHiddenContent((prevContent) => {
      // 열려있지 않다면 = 배열에 들어온 인덱스가 없다면 =>  배열에 인덱스 추가
      if (!prevContent.includes(index)) {
        return [...prevContent, index];
        // 열려 있다면 = 배열에 인덱스가 있다면 =>  배열에 들어있는 인덱스 삭제
      } else {
        return prevContent.filter((item) => item !== index);
      }
    });
  };

  const handleClickOutside = () => {
    handleClose(false);
  };

  return (
    <>
      <Container>
        <HeaderContent>
          <p>알림</p>
        </HeaderContent>
        <Scroll>
          {arr.map((item, index) => (
            <Content key={index}>
              <ShowContent>
                <div>
                  <span></span>
                  <ImageIcon src='https://www.chemicalnews.co.kr/news/photo/202210/4996_13445_157.png'></ImageIcon>
                  <strong>{item}</strong>
                  <p>님이 회원님의 게시글에 댓글을 달았습니다.</p>
                </div>
                <div>
                  {hiddenContent.includes(index) ? (
                    <UpIcon onClick={() => handleContentClick(index)} />
                  ) : (
                    <DownIcon
                      stroke='#616161'
                      stroke-width='2'
                      width='22'
                      height='22'
                      onClick={() => handleContentClick(index)}
                    />
                  )}
                </div>
              </ShowContent>
              {hiddenContent.includes(index) ? (
                <HiddenContent>
                  <div style={{ border: '1px solid #e0e0e0' }}>
                    <p>
                      저는 1차 스터디 때 모던 자바스크립트 딥 다이브 책 읽었었는데, 자바스크립트의
                      원리에 대해 깊게 공부할 수 있어서 좋았습니다! 자바스크립트 기초를 다지고
                      싶으시다면 이 책을 한 번 읽어보시는건 어떤가요?
                    </p>
                  </div>
                  <div style={{ background: 'transparent' }}>
                    <PostIcon />
                    <h5>자바스크립트 기초를 탄탄히 하기 위해선 어떻게 하면 좋을까요?</h5>
                  </div>
                </HiddenContent>
              ) : (
                ''
              )}
            </Content>
          ))}
        </Scroll>
      </Container>
      <Background onClick={handleClickOutside} />
    </>
  );
};
export default AlarmModal;

const Background = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  width: 100%;
  height: 100vh;
  background: transparent;
`;

const Container = styled.div`
  position: fixed;
  z-index: 2;
  width: 46rem;
  height: 39.4rem;
  background: #ffffff;
  box-shadow: 2px 3px 10px 2px rgba(0, 0, 0, 0.15);
  border-radius: 12px 0px 12px 12px;
  z-index: 300;
  background: #ffffff;
`;
const HeaderContent = styled.div`
  padding: 1.4rem 1.8rem;
  background: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  p {
    color: #242424;
    font-weight: 600;
    font-size: 1.6rem;
  }
`;
const Scroll = styled.div`
  height: calc(100% - 4.4rem);
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.8rem;
  }
  &::-webkit-scrollbar-thumb {
    height: 10%;
    background-clip: padding-box;
    background: #d9d9d9;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const ShowContent = styled.div`
  display: flex;
  padding: 1.4rem 1rem;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
  }
  span {
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    background: #7353ea;
    margin-right: 1rem;
  }
  strong {
    color: #242424;
    font-weight: 600;
    font-size: 1.4rem;
  }
  p {
    color: #616161;
    font-weight: 400;
    font-size: 1.4rem;
  }
`;

const HiddenContent = styled.div`
  width: 100%;
  padding: 2rem 3rem 0 5rem;
  background: #f7f5ff;
  div {
    display: flex;
    background: #ffffff;
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 1rem;
  }
  p {
    font-weight: 400;
    font-size: 1.4rem;
    color: #242424;
  }
  h5 {
    margin-left: 1rem;
    font-weight: 600;
    font-size: 1.4rem;
    color: #242424;
  }
`;
const ImageIcon = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 1.2rem;
`;
