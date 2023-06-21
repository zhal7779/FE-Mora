import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ScheduleCategory from '../schedule/components/ScheduleCategory';
import { SchedulePageWrapper } from '../search/styledComponents/pageCommonStyle';
import Notification from '../schedule/components/Notification';
import Calendar from '../schedule/components/Calendar';

const SchedulePage = () => {
  const [category, setCategory] = useState('notice');

  const navigate = useNavigate();

  const handleSetCategory = (category) => {
    setCategory(category);
  };
  useEffect(() => {
    if (category === 'notice') {
      navigate('/schedule/notice');
    } else if (category === 'calendar') {
      navigate('/schedule/calendar');
    }
  }, [category, navigate]);
  return (
    <SchedulePageWrapper>
      <ScheduleCategory setMenu={handleSetCategory} />
      {category === 'notice' ? <Notification /> : category === 'calendar' ? <Calendar /> : null}
    </SchedulePageWrapper>
  );
};

export default SchedulePage;
