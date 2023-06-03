import styled from 'styled-components';

export const SearchBarBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
  padding: 1.1rem 1.3rem;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  margin-bottom: 5rem;
`;
export const SearchBarInput = styled.input`
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
