import React from 'react';
import styled from 'styled-components';
const NoData = () => {
  return (
    <Content>
      <img src='static/media/no-data-image.64c9ff0eb8587dac16cb266cc4a9f5b9.svg' />
      <strong>검색 결과가 없어요.</strong>
      <p>다른 키워드로 검색해보세요!</p>
    </Content>
  );
};

export default NoData;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8rem 0;
  align-items: center;
  strong {
    color: #616161;
    font-size: 1.6rem;
    margin-bottom: 1.6rem;
    font-weight: 600;
  }
  p {
    color: #616161;
    font-size: 1.4rem;
  }
`;
