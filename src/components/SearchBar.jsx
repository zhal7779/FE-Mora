import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../assets/icons/fi_search.svg';
import { useNavigate } from 'react-router-dom';
// import { useOutClcik } from './OutClickClose';

const SearchBar = ({ handleClose }) => {
  const navigate = useNavigate();
  //input 처리
  const [input, setInput] = useState('');
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  // closeRef(검색창 외부) 클릭시 검색창 닫힘
  // const closeRef = useRef();

  // const handleClickOutside = ({ target }) => {
  //   if (closeRef.current.contains(target)) {
  //     handleClose(false);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener('click', handleClickOutside);

  //   return () => {
  //     window.removeEventListener('click', handleClickOutside);
  //   };
  // }, []);

  const handleClickOutside = () => {
    handleClose(false);
  };
  return (
    <>
      <Container>
        <Content>
          <SearchIcon style={{ width: '3rem', height: '3rem', stroke: '#94a3b8' }} />
          <Input
            type='text'
            value={input}
            onChange={handleInputChange}
            onKeyPress={(e) => {
              if ('Enter' === e.key) {
                navigate('/search');
              }
            }}
            placeholder='회사, 사람, 키워드로 검색'
          ></Input>
        </Content>
      </Container>
      <Background onClick={handleClickOutside} />
    </>
  );
};
export default SearchBar;
const Background = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
`;
const Container = styled.div`
  position: fixed;
  z-index: 2;
  width: 100%;
  background: #ffffff;
`;
const Content = styled.div`
  max-width: 1280px;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 3.2rem 0;
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
