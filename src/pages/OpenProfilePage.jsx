import React, { useState } from 'react';
import ResigterProfile from '../openProfile/components/ResigterProfile';
import { OpenProfilePageWrapper } from '../search/styledComponents/pageCommonStyle';
import ToggleHeader from '../openProfile/components/ToggleHeader';
import OpenProfile from '../openProfile/components/OpenProfile';
const OpenProfilePage = () => {
  const [registerstatus, setRegisterStatus] = useState();
  const handleProfileRegisterStatus = (status) => {
    setRegisterStatus(status);
  };
  return (
    <OpenProfilePageWrapper>
      <ResigterProfile />
      <div className='content'>
        <ToggleHeader handleProfileRegisterStatus={handleProfileRegisterStatus} />
        <OpenProfile registerstatus={registerstatus} />
      </div>
    </OpenProfilePageWrapper>
  );
};
export default OpenProfilePage;
