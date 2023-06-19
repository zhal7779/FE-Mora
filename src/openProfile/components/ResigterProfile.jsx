import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const ResigterProfile = () => {
  return (
    <Container>
      <TextContent>
        <div>
          <p>구직 중인 레이서분은,</p>
        </div>
        <div>
          <strong>레이서 오픈 프로필</strong>
          <p>에</p>
        </div>
        <div>
          <p>나를 등록해보세요!</p>
        </div>
      </TextContent>
      <ButtonContent>
        <Link to='/mypage'>
          <Button value={'오픈 프로필 작성하기'} color='darkPurple' />
        </Link>
      </ButtonContent>
    </Container>
  );
};

export default ResigterProfile;
const Container = styled.div`
  position: sticky;
  top: 0;
  height: 100%;
  margin-bottom: 36rem;
`;
const TextContent = styled.div`
  margin-top: 6rem;
  font-size: 2.5rem;
  color: #242424;
  padding-top: 4rem;
  padding-bottom: 3rem;
  div {
    display: flex;
    padding-bottom: 1rem;
  }
  p {
    font-weight: 400;
  }
  strong {
    font-weight: 700;
  }
`;

const ButtonContent = styled.div`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
