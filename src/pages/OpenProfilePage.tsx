import React, { useState } from 'react';
import ResigterProfile from '../openProfile/components/ResigterProfile';
import { OpenProfilePageWrapper } from '../search/styledComponents/pageCommonStyle';
import ToggleHeader from '../openProfile/components/ToggleHeader';
import OpenProfile from '../openProfile/components/OpenProfile';
import { RegisterStatusData } from '../openProfile/interface/openProfileInterface';

const OpenProfilePage = () => {
  const [registerStatus, setRegisterStatus] = useState<RegisterStatusData>();
  const handleProfileRegisterStatus = (status: RegisterStatusData) => {
    setRegisterStatus(status);
  };
  return (
    <OpenProfilePageWrapper>
      <ResigterProfile />
      <div className='profile_content '>
        <ToggleHeader handleProfileRegisterStatus={handleProfileRegisterStatus} />
        <OpenProfile registerStatus={registerStatus} />
      </div>
    </OpenProfilePageWrapper>
  );
};
export default OpenProfilePage;
