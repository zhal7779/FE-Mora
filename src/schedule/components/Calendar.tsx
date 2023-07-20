import React, { useState, useRef } from 'react';
import * as Style from '../styleComponents/CalendarStyle';
import CalendarModal from './CalendarModal';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import moment from 'moment';
import 'moment/locale/ko';
import { useQuery } from 'react-query';
import { fetchSchedule } from '../api/scheduleApi';
import { format } from 'date-fns';

interface dateData {
  dateStr: string;
}

interface CalendarMonthData {
  title: string;
  start_date: string;
  end_date: string;
  id: string;
}
interface CalendarCustomData {
  event: {
    title: string;
  };
}
const MyCalendar = () => {
  //모달 open,close
  const [onModal, setOnModal] = useState(false);
  const handleClickOpen = () => {
    setOnModal(!onModal);
  };
  //처음 렌더링시 현재 날짜 추출
  const [selectedYearMonth, setSelectedYearMonth] = useState(format(new Date(), 'yyyy-MM'));

  //prev,next 클릭시 추출한 날짜 변환 함수
  // return  => 2023-06
  const dateConversion = (currentDate: Date) => {
    const resultDate = format(currentDate, 'yyyy-MM');
    return resultDate;
  };

  //prev 버튼 날짜 추출
  const calendarRef = useRef<FullCalendar | null>(null);
  // buttonType === prev => 이전달, 이전달 date 추출
  // buttonType === next 버튼 => 다음달, 다음달 date 추출
  // buttonType === today 버튼 => 현재달, 오늘 date 추출
  const handleButtonClick = (buttonType: string) => {
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
  const [selectedDate, setSelectedDate] = useState<string>('');
  const handleDateClick = (info: dateData) => {
    setSelectedDate(info.dateStr);
    handleClickOpen();
  };

  const { data, isLoading } = useQuery('schedule', () =>
    fetchSchedule({ type: 'ym', date: selectedYearMonth })
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  // 받아온 데이터 풀캘린더 event 형식으로 변환
  const eventData = data.map((item: CalendarMonthData) => ({
    title: item.title,
    start: item.start_date,
    end: item.end_date,
    sortIdx: item.id,
  }));

  //한국어 설정
  moment.locale('ko');
  const views = {};
  //이벤트 컬러 변경 함수
  const renderEventContent = (eventInfo: CalendarCustomData) => {
    return (
      <Style.EventColor>
        <i className='event_text'>{eventInfo.event.title}</i>
      </Style.EventColor>
    );
  };
  return (
    <Style.Container>
      {onModal ? <CalendarModal handleClickOpen={handleClickOpen} date={selectedDate} /> : ''}
      <div>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          ref={calendarRef}
          initialView='dayGridMonth'
          //한글 변환시 1일, 2일,3일 => 1,2,3으로 바꿈
          dayCellContent={({ date }) => date.getDate()}
          dateClick={handleDateClick}
          locale='ko'
          views={views}
          eventContent={renderEventContent}
          events={eventData}
          eventOverlap={false}
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
      </div>
    </Style.Container>
  );
};

export default MyCalendar;
