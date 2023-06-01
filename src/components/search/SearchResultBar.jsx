import React from 'react';
import styled from 'styled-components';

const SearchResultBar = () => {
  return (
    <Container>
      <p>리액트 검색결과 0건</p>
    </Container>
  );
};
export default SearchResultBar;
const Container = styled.div`
  background: #ffffff;
  padding: 1.8rem;
  width: 100%;
  display: block;
  border-bottom: #cbd5e1 1px solid;
  p {
    font-weight: 600;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    color: #242424;
  }
`;
