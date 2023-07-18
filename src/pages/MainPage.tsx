import styled from 'styled-components';
import MainBanner from '../main/components/MainBanner';
import MainPost from '../main/components/MainPost';

const MainPage = () => {
  return (
    <>
      <MainContainer>
        <MainBanner />
        <MainPost />
      </MainContainer>
    </>
  );
};

export default MainPage;

const MainContainer = styled.div`
  padding-top: 60px;
`;
