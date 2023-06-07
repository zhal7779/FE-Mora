import React, { useState } from 'react';
import CalendarModal from './CalendarModal';
import styled from 'styled-components';

const Calendar = () => {
  const [onModal, setOnModal] = useState(false);
  const handleClickOpen = () => {
    setOnModal(true);
  };
  return (
    <div>
      <Button onClick={handleClickOpen}>상세보기 클릭</Button>
      {onModal ? <CalendarModal onModal={setOnModal} /> : ''}
    </div>
  );
};

export default Calendar;

const Button = styled.button`
  margin-top: 10rem;
  padding: 2rem;
`;
