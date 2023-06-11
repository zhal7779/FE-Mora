import React, { useState, useEffect, useRef } from 'react';
import * as Style from '../styleComponents/CalendarStyle';
import CalendarModal from './CalendarModal';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import moment from 'moment';
import 'moment/locale/ko';
import { useQuery } from 'react-query';
import { fetchSchedule } from '../api/scheduleApi';

const MyCalendar = () => {
  //모달 open,close
  const [onModal, setOnModal] = useState(false);
  const handleClickOpen = () => {
    setOnModal(true);
  };

  const [selectedYearMonth, setSelectedYearMonth] = useState(null);

  //prev,next 클릭시 추출한 날짜 변환 함수
  // return  => 2023-06
  const dateConversion = (currentDate) => {
    const year = new Date(currentDate).getFullYear();
    let month = new Date(currentDate).getMonth() + 1;
    month = month <= 9 ? '0' + month : month;
    const resultDate = `${year}-${month}`;
    return resultDate;
  };

  // 처음 렌더링시 현재 날짜 추출
  useEffect(() => {
    const currentDate = new Date();
    const resultDate = dateConversion(currentDate);
    setSelectedYearMonth(resultDate);
  }, []);

  //prev 버튼 날짜 추출
  const calendarRef = useRef();
  // buttonType === prev => 이전달, 이전달 date 추출
  // buttonType === next 버튼 => 다음달, 다음달 date 추출
  // buttonType === today 버튼 => 현재달, 오늘 date 추출
  const handleButtonClick = (buttonType) => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();

      switch (buttonType) {
        case 'prev':
          calendarApi.prev();
          break;
        case 'next':
          calendarApi.next();
          break;
        case 'today':
          calendarApi.today();
          break;
        default:
          break;
      }
      // 추출한 날짜를 dateConversion 함수에 담아 date 변환
      const currentDate = calendarApi.getDate();
      const resultDate = dateConversion(currentDate);
      setSelectedYearMonth(resultDate);
    }
  };

  // 날짜 클릭 이벤트 핸들러, date cell에서 클릭한 날짜를 가져온다.
  // ex) 2023-06-12
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
  };

  const { data, isLoading, isError } = useQuery('schedule', () => fetchSchedule(selectedYearMonth));
  console.log(data);
  // if (isLoading) {
  //   return <span>Loading...</span>;
  // }

  // if (isError) {
  //   return <span>Error: {isError.message}</span>;
  // }

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
            click: () => handleButtonClick('prev'),
          },
          next: {
            click: () => handleButtonClick('next'),
          },
          today: {
            text: 'Today',
            click: () => handleButtonClick('today'),
          },
        }}
      />
    </Style.Container>
  );
};

export default MyCalendar;
