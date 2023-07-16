import styled from 'styled-components';
import searchIcon from '../assets/icons/u_search.svg';

interface InputProps {
  width: string;
  onChange: () => void;
  value: string;
}

const Input = ({ width, onChange, value }: InputProps) => {
  return (
    <InputContainer width={width}>
      <SearchIcon src={searchIcon} alt='Search' />
      <InputElement
        type='text'
        placeholder='키워드를 입력해주세요'
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default Input;

interface InputContainerProps {
  width: string;
}

const InputContainer = styled.div<InputContainerProps>`
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
