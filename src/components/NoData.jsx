import React from 'react';
import styled from 'styled-components';
const NoData = () => {
  return (
    <Content>
      <img src='http://www.moyeora-racer.com/static/media/no-data-image.7c445de03420d586e6ca540e13c4cd7c.svg' />
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
