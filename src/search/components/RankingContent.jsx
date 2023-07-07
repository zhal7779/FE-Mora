import React from 'react';
import styled from 'styled-components';
import RankingList from './RankingList';
import { useWindowSize } from '../../header/components/useWindowSize';
import Button from '../../components/Button';
import { useState } from 'react';
import RankingModal from './RankingModal';

const RankingContent = ({ data }) => {
  const { isSize } = useWindowSize();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const modalOpenOrClose = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <Container>
      {isSize ? (
        <>
          <TitleContent>
            <h5>모여라 레이서 TOP10🔥</h5>
            <p>지난 24시간 동안</p>
            <p>가장 인기가 좋았던 게시물을 만나보세요.</p>
          </TitleContent>
          <RankingList data={data} />
        </>
      ) : (
        <>
          {isOpenModal && <RankingModal data={data} modalOpenOrClose={modalOpenOrClose} />}
          <TitleContent>
            <h5>모여라 레이서 TOP10🔥</h5>
            <p>지난 24시간 동안</p>
            <p>가장 인기가 좋았던 게시물을 만나보세요.</p>
          </TitleContent>
          <div className='button-content'>
            <Button value='인기게시글 보기' color='darkPurple' onClick={modalOpenOrClose} />
          </div>
        </>
      )}
    </Container>
  );
};

export default RankingContent;

const Container = styled.section`
  position: sticky;
  top: 100px;
  width: 27%;
  padding: 2rem 1.6rem;
  background: var(--main-white);
  border: 1px #cbd5e1 solid;
  border-radius: 4px;
  height: 100%;
  @media (max-width: 768px) {
    position: static;
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 2rem 2rem;

    .button-content {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 768px) and (max-width: 1200px) {
  }
`;
const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 0.5rem;
  width: 100%;
  h5 {
    font-weight: 700;
    font-size: 1.8rem;
    padding-bottom: 1rem;
  }
  p {
    font-weight: 600;
    font-size: 1.2rem;
    color: #605ea0;
    padding-bottom: 0.5rem;
  }
`;
