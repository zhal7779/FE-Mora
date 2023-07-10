import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../assets/icons/fi_search.svg';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ handleClose }) => {
  const navigate = useNavigate();
  //input 처리
  const [input, setInput] = useState('');
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

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
            onKeyDown={(e) => {
              if ('Enter' === e.key) {
                handleClickOutside();
                navigate('/search', { state: input });
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
  z-index: 100;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
`;
const Container = styled.div`
  position: fixed;
  z-index: 200;
  width: 100%;
  background: var(--main-white);
`;
const Content = styled.div`
  max-width: 1280px;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 3.2rem;
`;
const Input = styled.input`
  padding: 1.4rem;
  font-weight: 500;
  font-size: 3rem;
  width: 100%;
  border: none;
  outline: none;
  ::placeholder {
    color: #94a3b8;
  }

  @media (max-width: 768px) {
    font-size: 2.6rem;
    padding: 1.2rem;
  }
  @media (max-width: 480px) {
    font-size: 2rem;
    padding: 0.6rem;
  }
`;
