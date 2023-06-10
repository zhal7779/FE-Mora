import styled from 'styled-components';

const LoginInput = ({ title, type, placeholder, name, onChange, value }) => {
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
        />
      </InputContainer>
    </LoginInputContainer>
  );
};

export default LoginInput;

const LoginInputContainer = styled.div`
  width: 35.2rem;
  margin: 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const LoginText = styled.h3`
  font-family: 'Noto Sans KR';
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
  padding-top: 0.4rem;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;

  &::placeholder {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    margin-left: 2rem;
    color: #d9d9d9;
  }
`;
