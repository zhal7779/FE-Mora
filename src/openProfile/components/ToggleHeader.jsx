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
  width: 594px;
  height: 24px;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 4rem;

  p {
    font-size: 1.4rem;
    color: #242424;
    font-weight: 600;
  }
`;
