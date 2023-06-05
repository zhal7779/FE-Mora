import React from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';

const ToggleHeader = () => {
  return (
    <Container>
      <p>오픈 프로필 올리기</p>
      <Toggle />
    </Container>
  );
};

export default ToggleHeader;

const Container = styled.div`
  display: flex;
  width: 634px;
  height: 24px;
  justify-content: space-between;
  align-items: center;
  margin: 8rem 0 2rem 0;

  p {
    font-size: 1.4rem;
    color: #242424;
    font-weight: 600;
  }
`;
