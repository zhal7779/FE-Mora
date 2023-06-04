import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../assets/icons/fi_search.svg';
import { useNavigate } from 'react-router-dom';
const SearchBar = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <Background>
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
                document.body.style.overflow = 'auto';
              }
            }}
            placeholder='회사, 사람, 키워드로 검색'
          ></Input>
        </Content>
      </Container>
    </Background>
  );
};
export default SearchBar;

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
const Background = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
`;
