import React from 'react';
import styled from 'styled-components';
import RankingList from './RankingList';

const RankingContent = () => {
  return (
    <Container>
      <TitleContent>
        <h5>모여라 레이서 TOP10🔥</h5>
        <p>지난 24시간 동안</p>
        <p>가장 인기가 좋았던 게시물을 만나보세요.</p>
      </TitleContent>
      <RankingList />
    </Container>
  );
};

export default RankingContent;

const Container = styled.section`
  width: 292px;
  height: auto;
  padding: 2rem 1.6rem;
  background: #ffffff;
  border: 1px #cbd5e1 solid;
  border-radius: 4px;
`;
const TitleContent = styled.div`
  padding-bottom: 0.5rem;
  h5 {
    font-weight: 700;
    font-size: 1.8rem;
    color: #242424;
    padding-bottom: 1rem;
  }
  p {
    font-weight: 500;
    font-size: 1.2rem;
    color: #65758c;
    padding-bottom: 0.5rem;
  }
`;
