import styled from 'styled-components';
import MainBanner from '../main/MainBanner';
import MainPost from '../main/MainPost';

const MainPage = () => {
  return (
    <MainContainer>
      <MainBanner />
      <MainPost />
    </MainContainer>
  );
};

export default MainPage;

const MainContainer = styled.div``;
