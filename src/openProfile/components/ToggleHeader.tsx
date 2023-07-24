import React from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';
import { RegisterProps } from '../types/openProfileType';

const ToggleHeader = ({ handleProfileRegisterStatus }: RegisterProps) => {
  return (
    <Container>
      <p>오픈 프로필 올리기</p>
      <Toggle handleProfileRegisterStatus={handleProfileRegisterStatus} />
    </Container>
  );
};

export default ToggleHeader;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 6rem 0.5rem 2.8rem 0.5rem;
  p {
    font-size: 1.4rem;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 4rem 0 2rem 0;
  }

  @media (max-width: 480px) {
    margin: 0 0 2rem 0;
  }
`;
