import React, { useState } from 'react';
import ScheduleCategory from '../schedule/components/ScheduleCategory';
import { SchedulePageWrapper } from '../search/styledComponents/pageCommonStyle';
import Notification from '../schedule/components/Notification';

import Calendar from '../schedule/components/Calendar';
const SchedulePage = () => {
  //menu === 0? 공지사항
  //menu === 1? 일정표
  const [menu, setMenu] = useState(0);

  const handleClickMenu = (category) => {
    setMenu(category);
  };
  return (
    <SchedulePageWrapper>
      <ScheduleCategory setMenu={handleClickMenu} />
      {menu === 0 ? <Notification /> : menu === 1 ? <Calendar /> : ''}
    </SchedulePageWrapper>
  );
};

export default SchedulePage;
