import styled from 'styled-components';

const SearchBarBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
  padding: 1.1rem 1.3rem;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  margin-bottom: 5rem;
`;
const SearchBarInput = styled.input`
  width: 100%;
  height: 2rem;
  padding-top: 0.2rem;

  border: none;

  font-size: 1.6rem;

  &::placeholder {
    color: #d4d4d4;
  }
  &:focus {
    outline: none;
  }
`;

const SearchBar = () => {
  return (
    <SearchBarBlock>
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'>
        <path
          fill='#94A3B8'
          d='M10 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 12.606 4.192l5.101 5.1a1 1 0 0 1-1.414 1.415l-5.1-5.1A7 7 0 0 1 3 10Z'
          clipRule='evenodd'
        />
      </svg>
      <SearchBarInput type='text' placeholder='사용자 이름 검색' />
    </SearchBarBlock>
  );
};

export default SearchBar;
