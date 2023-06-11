import React, { useState, useEffect, useRef } from 'react';
import * as Style from '../styleComponents/CalendarStyle';
import CalendarModal from './CalendarModal';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import moment from 'moment';
import 'moment/locale/ko';
import { useQuery } from 'react-query';
import interactionPlugin from '@fullcalendar/interaction';

const fetchSchedule = async () => {
  const response = await fetch(`${process.env.REACT_APP_URL}/api/plans/ym/2023-06`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
    },
  });
  const data = await response.json();
  return data;
};
const MyCalendar = () => {
  //모달 open,close
  const [onModal, setOnModal] = useState(false);
  const handleClickOpen = () => {
    setOnModal(true);
  };

  // 날짜 클릭 이벤트 핸들러, 클릭한 날짜를 가져온다.
  // ex) 2023-06-12
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
  };
  // console.log(selectedDate);
  const calendarRef = useRef();
  const handlePrevButtonClick = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.prev();
    const currentDate = calendarApi.getDate();
    console.log(currentDate);
  };

  const handleNextButtonClick = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.next();
    const currentDate = calendarApi.getDate();
    console.log(currentDate);
  };

  const { data, isLoading, isError } = useQuery('schedule', fetchSchedule);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {isError.message}</span>;
  }

  //한국어 설정
  moment.locale('ko');
  const views = {};
  //이벤트 컬러 변경 함수
  const renderEventContent = (eventInfo) => {
    return (
      <Style.EventColor onClick={handleClickOpen}>
        <i className='event_text'>{eventInfo.event.title}</i>
      </Style.EventColor>
    );
  };

  return (
    <Style.Container>
      {onModal ? <CalendarModal onModal={setOnModal} /> : ''}
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        ref={calendarRef}
        initialView='dayGridMonth'
        dateClick={handleDateClick}
        locale='ko'
        views={views}
        eventContent={renderEventContent}
        events={[
          { title: '2차 프로젝트 마감일', date: '2023-06-16' },
          { title: '2차 프로젝트 발표일', date: '2023-06-17' },
        ]}
        customButtons={{
          prev: {
            text: '이전',
            click: handlePrevButtonClick,
          },
          next: {
            text: '다음',
            click: handleNextButtonClick,
          },
        }}
      />
    </Style.Container>
  );
};

export default MyCalendar;
