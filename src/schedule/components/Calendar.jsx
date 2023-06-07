import React, { useState } from 'react';
import CalendarModal from './CalendarModal';
import styled from 'styled-components';
import FullCalendar from '@fullcalendar/react';
import daygridPlugin from '@fullcalendar/daygrid';

const Calendar = () => {
  const [onModal, setOnModal] = useState(false);
  const handleClickOpen = () => {
    setOnModal(true);
  };
  return (
    <Container>
      <Button onClick={handleClickOpen}>상세보기 클릭</Button>
      {onModal ? <CalendarModal onModal={setOnModal} /> : ''}
      <FullCalendar
        defaultView='dayGridMonth'
        plugins={[daygridPlugin]}
        events={[
          { title: '2차 프로젝트 마감일', date: '2023-06-16' },
          { title: '2차 프로젝트 발표일', date: '2023-06-17' },
        ]}
      />
    </Container>
  );
};

export default Calendar;
const Container = styled.section`
  width: 67%;
  height: 100%;
`;
const Button = styled.button`
  margin-top: 10rem;
  padding: 2rem;
`;
