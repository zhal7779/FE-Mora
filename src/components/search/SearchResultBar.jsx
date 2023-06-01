import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../icons/fi_search.svg';

const SearchResultBar = () => {
  return (
    <Container>
      <MainDiv>
        <SubSearchContent>
          <SearchIcon style={{ width: '2.4rem', height: '2.4rem', stroke: '#94a3b8' }} />
          <input type='text' value={'리액트'} placeholder='회사, 사람, 키워드로 검색'></input>
        </SubSearchContent>
      </MainDiv>
      <MainDiv>
        <ResultTextContent>
          <p>리액트 검색결과 0건</p>
        </ResultTextContent>
      </MainDiv>
    </Container>
  );
};
export default SearchResultBar;
const Container = styled.div`
  position: fixed;
  width: 100%;
  margin-top: 6rem;
  background: #ffffff;
`;
const MainDiv = styled.div`
  border-bottom: #cbd5e1 1px solid;
`;
const SubSearchContent = styled.div`
  max-width: 1024px;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  input {
    padding: 1.6rem;
    width: 100%;
    color: #242424;
    font-weight: 500;
    font-size: 2.4rem;
    border: none;
    outline: none;
    ::placeholder {
      color: #94a3b8;
    }
  }
`;
const ResultTextContent = styled.div`
  max-width: 1024px;
  margin: 1.8rem 0;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  p {
    font-weight: 600;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    color: #242424;
  }
`;
