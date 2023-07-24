import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { useWindowSize } from '../../hooks/useWindowSize';

const ResigterProfile = () => {
  const { mobileSize } = useWindowSize();
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
          {mobileSize ? (
            <Button value='작성하기' color='darkPurple' />
          ) : (
            <Button value='오픈 프로필 작성하기' color='darkPurple' />
          )}
        </Link>
      </ButtonContent>
    </Container>
  );
};

export default ResigterProfile;
const Container = styled.section`
  position: sticky;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  top: 0;
  height: 100%;
  margin-bottom: 36rem;
  background: var(--main-white);
  padding: 6rem 1rem 0;
  @media (max-width: 1024px) {
    padding: 6rem 2rem 0;
  }
  @media (max-width: 768px) {
    position: static;
    flex-direction: row;
    margin-bottom: 0;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 480px) {
    align-items: center;
  }
`;
const TextContent = styled.div`
  font-size: 2.5rem;
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
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const ButtonContent = styled.div`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
