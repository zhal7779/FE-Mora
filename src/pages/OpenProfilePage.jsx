import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResigterProfile from '../openProfile/components/ResigterProfile';
import { OpenProfilePageWrapper } from '../search/styledComponents/pageCommonStyle';
import ToggleHeader from '../openProfile/components/ToggleHeader';
import OpenProfile from '../openProfile/components/OpenProfile';
const OpenProfilePage = () => {
  return (
    <OpenProfilePageWrapper>
      <ResigterProfile />
      <div>
        <ToggleHeader />
        <OpenProfile />
      </div>
    </OpenProfilePageWrapper>
  );
};
export default OpenProfilePage;
