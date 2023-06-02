import styled from 'styled-components';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
import MainBanner from '../main/MainBanner';
import MainPost from '../main/MainPost';

const MainPage = () => {
  return (
    <>
      <MainContainer>
        {/* <Header /> */}
        <MainBanner />
        <MainPost />
        {/* <Footer /> */}
      </MainContainer>
    </>
  );
};

export default MainPage;

const MainContainer = styled.div`
  /* width: 100%;
  height: 100vh; */
`;
