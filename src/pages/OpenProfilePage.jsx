import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResigterProfile from '../openProfile/components/ResigterProfile';
import { Wrapper } from '../search/styledComponents/pageCommonStyle';
import ToggleHeader from '../openProfile/components/ToggleHeader';
const OpenProfilePage = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <ResigterProfile />
        <ToggleHeader />
      </Wrapper>
      <Footer />
    </>
  );
};
export default OpenProfilePage;
