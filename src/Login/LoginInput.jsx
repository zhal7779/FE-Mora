import styled from 'styled-components';

const LoginInput = ({ title, type, placeholder, name, onChange }) => {
  return (
    <LoginInputContainer>
      <LoginText>{title}</LoginText>
      <Input type={type} placeholder={placeholder} name={name} onChange={onChange} />
    </LoginInputContainer>
  );
};

export default LoginInput;

const LoginInputContainer = styled.div`
  width: 35.2rem;
  height: 82px;
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

const Input = styled.input`
  box-sizing: border-box;
  width: 352px;
  height: 48px;
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
