import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../assets/icons/fi_search.svg';
import { SearchContext } from '../context/SearchContext';
import { useContext } from 'react';
import { CountArrData } from '../interface/searchInterface';

interface Props {
  handleSubSearch: (keyword: string) => void;
  menu: string;
  count: CountArrData;
}

const SearchResultBar = ({ handleSubSearch, menu, count }: Props) => {
  const keyword = useContext(SearchContext);
  //검색창 input
  const [input, setInput] = useState(keyword);
  //검색결과
  const [resultKeyword, setResultKeyword] = useState(keyword);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // 검색 결과 전달
  const handleSearchResult = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ('Enter' === e.key) {
      setResultKeyword(input);
      handleSubSearch(input);
    }
  };

  return (
    <Container>
      <div className='main-div'>
        <Content>
          <div className='sub-search-content'>
            <SearchIcon style={{ width: '2.4rem', height: '2.4rem', stroke: '#94a3b8' }} />
            <input
              type='text'
              value={input}
              onChange={handleInputChange}
              placeholder='회사, 사람, 키워드로 검색'
              onKeyDown={handleSearchResult}
              autoFocus
            ></input>
          </div>
        </Content>
      </div>
      <div className='main-div'>
        <Content>
          <div className='result-text-content'>
            <p>{resultKeyword} 검색결과 </p>
            {menu === 'all' ? (
              <p> {count.total}건</p>
            ) : menu === 'openProfile' ? (
              <p> {count.openProfile}건</p>
            ) : menu === 'free' ? (
              <p>{count.free}건</p>
            ) : menu === 'Knowledge' ? (
              <p>{count.knowledge}건</p>
            ) : menu === 'study' ? (
              <p>{count.study}건</p>
            ) : (
              <p>{count.question}건</p>
            )}
          </div>
        </Content>
      </div>
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
  background: var(--main-white);
  .main-div {
    border-bottom: #cbd5e1 1px solid;
  }
  @media (max-width: 480px) {
    top: 6.7rem;
  }
`;
const Content = styled.div`
  max-width: 1024px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  .sub-search-content {
    width: 100%;
    display: flex;
    align-items: center;
    input {
      padding: 1.6rem;
      width: 100%;
      font-weight: 500;
      font-size: 2.4rem;
      border: none;
      outline: none;
      ::placeholder {
        color: #94a3b8;
      }
    }
  }
  .result-text-content {
    display: flex;
    margin: 1.8rem 0;
    gap: 1.4rem;
    p {
      font-weight: 600;
      font-size: 1.6rem;
      display: flex;
      align-items: center;
    }
  }
  @media (max-width: 768px) {
    max-width: 100%;
    .sub-search-content {
      margin-left: 2rem;
      input {
        font-size: 2.2rem;
        padding: 1.4rem;
      }
    }
    .result-text-content {
      margin-left: 2rem;
      p {
        font-size: 1.5rem;
      }
    }
  }
  @media (max-width: 480px) {
    .sub-search-content {
      input {
        font-size: 1.8rem;
        padding: 1.2rem;
      }
    }
    .result-text-content {
      p {
        font-size: 1.4rem;
      }
    }
  }
`;
