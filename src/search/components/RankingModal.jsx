import React from 'react';
import RankingList from './RankingList';
import styled from 'styled-components';

const RankingModal = ({ data, modalOpenOrClose }) => {
  return (
    <>
      <Background onClick={modalOpenOrClose} />
      <ModalContainer>
        <div className='title-content'>모여라 레이서 TOP10🔥</div>
        <div className='main-content'>
          <RankingList data={data} />
        </div>
      </ModalContainer>
    </>
  );
};

export default RankingModal;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 101;
`;
const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80vh;
  background: var(--main-white);
  z-index: 102;
  border-radius: 12px;
  display: flex;
  flex-direction: column;

  .title-content {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-size: 1.8rem;
    padding: 2rem 0;
    background: var(--main-white);
    border-radius: 12px 12px 0 0;
    border-bottom: 2px solid var(--blue-gray);
  }
  .main-content {
    flex: 1;
    margin: 6rem 0 1rem 0;
    padding: 0 3rem;
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
  }
`;
