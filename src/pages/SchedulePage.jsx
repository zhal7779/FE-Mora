import React from 'react';
import ScheduleCategory from '../schedule/components/ScheduleCategory';
import { Wrapper } from '../search/styledComponents/pageCommonStyle';
import NotificationList from '../schedule/components/NotificationList';
const SchedulePage = () => {
  return (
    <Wrapper>
      <ScheduleCategory />
      <NotificationList />
    </Wrapper>
  );
};

export default SchedulePage;
