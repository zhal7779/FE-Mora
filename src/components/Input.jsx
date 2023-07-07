import React from 'react';
import styled from 'styled-components';
import searchIcon from '../assets/icons/u_search.svg';

const Input = ({ width, onChange, value }) => {
  // 이렇게 props 적용해서 쓰기
  // <Input width='50%' />
  // <Input width='75%' />

  return (
    <InputContainer width={width} onChange={onChange} value={value}>
      <SearchIcon src={searchIcon} alt="Search" />
      <InputElement type="text" placeholder="키워드를 입력해주세요" />
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.div`
  position: relative;
  width: ${({ width }) => width};
`;

const InputElement = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  padding-left: 40px;
  border: 1px solid #d8e0e9;
  border-radius: 4px;
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.3rem;
  color: #242424;
`;

const SearchIcon = styled.img`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`;
