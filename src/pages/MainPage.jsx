import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainBanner from '../main/MainBanner';
import MainPost from '../main/MainPost';

const MainPage = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <MainBanner />
        <MainPost />
      </MainContainer>
      <Footer />
    </>
  );
};

export default MainPage;

const MainContainer = styled.div`
  padding-top: 60px;
`;
