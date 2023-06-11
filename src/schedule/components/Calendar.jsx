import React, { useState, useEffect, useRef } from 'react';
import CalendarModal from './CalendarModal';
import styled from 'styled-components';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import moment from 'moment';
import 'moment/locale/ko';

const MyCalendar = () => {
  useEffect(() => {
    fetch('http://15.164.221.244:5000/api/plans/ym/2023-06', {
      headers: {
        'Content-Type': 'Application/json',
        Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
      },
    })
      .then((res) => console.log(res.json()))
      .catch((err) => console.log(err));
  }, []);

  //한국어 설정
  moment.locale('ko');
  const views = {};
  //이벤트 컬러 변경 함수
  const renderEventContent = (eventInfo) => {
    return (
      <EventColor onClick={handleClickOpen}>
        <i className='event_text'>{eventInfo.event.title}</i>
      </EventColor>
    );
  };
  //모달 open,close
  const [onModal, setOnModal] = useState(false);
  const handleClickOpen = () => {
    setOnModal(true);
  };
  return (
    <Container>
      {/* <Button onClick={handleClickOpen}>모달 클릭</Button> */}
      {onModal ? <CalendarModal onModal={setOnModal} /> : ''}
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        locale='ko'
        views={views}
        eventContent={renderEventContent}
        events={[
          { title: '2차 프로젝트 마감일', date: '2023-06-16' },
          { title: '2차 프로젝트 발표일', date: '2023-06-17' },
        ]}
      />
    </Container>
  );
};

export default MyCalendar;

const Container = styled.section`
  margin-top: 10rem;
  width: 67%;
  height: 100%;
  //토,일 색상 변경
  .fc-day-sat a {
    color: #9169ff;
  }
  .fc-day-sun a {
    color: #6700e6;
  }
  // 요일 헤더 셀
  .fc .fc-col-header-cell-cushion {
    padding: 0.5rem 0;
    font-weight: 600;
    font-size: 1.2rem;
  }
  //헤더 2023년 6월
  .fc .fc-toolbar-title {
    font-size: 2.2rem;
    font-weight: 600;
    color: #242424;
    margin: 0px;
  }
  // 헤더 today, prev,next 버튼색상 변경
  .fc-button-primary {
    background: #d6c9ff;
  }
  .fc-today-button {
    background: #7353ea !important;
  }

  .fc-button {
    border: none;
    box-shadow: none !important;
    &:hover {
      background: #d6c9ff !important;
    }
    &:active {
      background: #d6c9ff !important;
    }
  }
  //prev,next 아이콘 색상 변경
  .fc-icon-chevron-left,
  .fc-icon-chevron-right {
    &::before {
      color: #616161;
    }
  }

  //이벤트
  .fc-event {
    border: none;
  }
`;
const EventColor = styled.div`
  cursor: pointer;
  background: #7353ea;
  font-weight: 500;
  padding: 0.5rem 0;
  .event_text {
    color: #ffffff;
  }
`;
const Button = styled.button`
  margin-top: 10rem;
  padding: 2rem;
`;
