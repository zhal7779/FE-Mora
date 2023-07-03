import React from 'react';
import styled from 'styled-components';
import RankingList from './RankingList';

const RankingContent = ({ data }) => {
  return (
    <Container>
      <TitleContent>
        <h5>모여라 레이서 TOP10🔥</h5>
        <p>지난 24시간 동안</p>
        <p>가장 인기가 좋았던 게시물을 만나보세요.</p>
      </TitleContent>
      <RankingList data={data} />
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
`;
const TitleContent = styled.div`
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
