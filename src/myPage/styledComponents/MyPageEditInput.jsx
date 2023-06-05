import styled from 'styled-components';

const MyPageEditInput = ({ title, type, placeholder, name, onChange, value }) => {
  return (
    <MyPageEditInputContainer>
      <MyPageEditInputText>{title}</MyPageEditInputText>
      <InputContainer>
        <Input
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value={value}
        />
      </InputContainer>
    </MyPageEditInputContainer>
  );
};

export default MyPageEditInput;

const MyPageEditInputContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const MyPageEditInputText = styled.h3`
  font-family: 'Noto Sans KR';
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 2rem;
  margin: 0;
  margin-right: 1.5rem;
  margin-bottom: 0.5rem;
`;

const InputContainer = styled.div`
  height: 40px;
  width: 100%;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border: 1px solid #d8e0e9;
  border-radius: 8px;
  padding-left: 1rem;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;

  &::placeholder {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    margin-left: 2rem;
    color: #d9d9d9;
  }
`;
