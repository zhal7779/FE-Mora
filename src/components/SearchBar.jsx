import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../icons/fi_search.svg';
const SearchBar = () => {
  return (
    <Background>
      <Container>
        <SearchIcon style={{ width: '3rem', height: '3rem', stroke: '#94a3b8' }} />
        <Input placeholder='회사, 사람, 키워드로 검색'></Input>
      </Container>
    </Background>
  );
};
export default SearchBar;

const Container = styled.div`
  position: fixed;
  z-index: 2;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1.6rem 10rem;
  background: #ffffff;
`;
const Input = styled.input`
  padding: 1.4rem;
  color: #242424;
  font-weight: 500;
  font-size: 3rem;
  width: 100%;
  border: none;
  outline: none;
  ::placeholder {
    color: #94a3b8;
  }
`;
const Background = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
`;
