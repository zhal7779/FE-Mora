import styled from 'styled-components';
import React, { forwardRef, Ref } from 'react';

interface LoginInputProps {
  title: string;
  type: string;
  placeholder: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const LoginInput = (
  { title, type, placeholder, name, onChange, value, onKeyDown }: LoginInputProps,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <LoginInputContainer>
      <LoginText>{title}</LoginText>
      <InputContainer>
        <Input
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value={value}
          onKeyDown={onKeyDown}
          ref={ref}
        />
      </InputContainer>
    </LoginInputContainer>
  );
};

export default forwardRef(LoginInput);

const LoginInputContainer = styled.div`
  width: 35.2rem;
  margin: 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const LoginText = styled.h3`
  font-weight: 700;
  font-size: 2rem;
  line-height: 2rem;
  margin: 0;
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
`;

const InputContainer = styled.div`
  height: 48px;
  width: 100%;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border: 2px solid #d8e0e9;
  border-radius: 12px;
  padding-left: 1rem;
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;

  &::placeholder {
    font-style: normal;
    font-weight: 600;
    font-size: 2rem;
    line-height: 24px;
    color: #d9d9d9;
  }
`;
