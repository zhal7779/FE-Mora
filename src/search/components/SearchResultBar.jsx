import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../assets/icons/fi_search.svg';
import { SearchContext } from '../context/SearchContext';
import { useContext } from 'react';

const SearchResultBar = ({ receiveMenu, handleSubSearch }) => {
  const keyword = useContext(SearchContext);
  //검색창 input
  const [input, setInput] = useState(keyword);
  //검색결과
  const [resultKeyword, setResultKeyword] = useState(keyword);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // 메뉴 번호 전달
  const [menu, setMenu] = useState(1);
  const handleMenuClick = (num) => {
    setMenu(num);
    receiveMenu(num);
  };
  // 검색 결과 전달
  const handleSearchResult = (e) => {
    if ('Enter' === e.key) {
      setResultKeyword(input);
      handleSubSearch(input);
    }
  };

  return (
    <Container>
      <MainDiv>
        <Content>
          <SubSearchContent>
            <SearchIcon style={{ width: '2.4rem', height: '2.4rem', stroke: '#94a3b8' }} />
            <input
              type='text'
              value={input}
              onChange={handleInputChange}
              placeholder='회사, 사람, 키워드로 검색'
              onKeyDown={handleSearchResult}
              autoFocus
            ></input>
          </SubSearchContent>
        </Content>
      </MainDiv>
      <MainDiv>
        <Content>
          <ResultTextContent>
            <p>{resultKeyword} 검색결과 0건</p>
          </ResultTextContent>
        </Content>
      </MainDiv>
      <MainDiv>
        <Content>
          <SearchNav>
            <SearchNavItem onClick={() => handleMenuClick(1)} active={menu === 1}>
              <p>전체</p>
            </SearchNavItem>
            <SearchNavItem onClick={() => handleMenuClick(2)} active={menu === 2}>
              <p>프로필</p>
            </SearchNavItem>
            <SearchNavItem onClick={() => handleMenuClick(3)} active={menu === 3}>
              <p>게시물</p>
            </SearchNavItem>
            <SearchNavItem onClick={() => handleMenuClick(4)} active={menu === 4}>
              <p>레이서 Q&A</p>
            </SearchNavItem>
          </SearchNav>
        </Content>
      </MainDiv>
    </Container>
  );
};
export default SearchResultBar;
const Container = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 6rem;
  left: 0;
  background: #ffffff;
`;
const MainDiv = styled.div`
  border-bottom: #cbd5e1 1px solid;
`;
const Content = styled.div`
  max-width: 1024px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;
const SubSearchContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
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
  margin: 1.8rem 0;
  p {
    font-weight: 600;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    color: #242424;
  }
`;
const SearchNav = styled.div`
  display: flex;
  gap: 0.8rem;
`;
const SearchNavItem = styled.div`
  ${(props) => (props.active ? 'border-bottom: 0.3rem solid #522bae;' : '')}
  p {
    font-size: 1.6rem;
    font-weight: 700;
    padding: 1.6rem;
    cursor: pointer;
    color: ${(props) => (props.active ? '#242424' : '#bdbdbd')};
  }
`;
