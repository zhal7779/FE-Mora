import React, { useEffect, useState } from 'react';
import { ReactComponent as LeftIcon } from '../../assets/icons/fi_chevron-left.svg';
import { ReactComponent as RightIcon } from '../../assets/icons/fi_chevron-right.svg';
import * as Style from '../styleComponents/CalendarModal';
import rabbitImg from '../../assets/images/rabbitStudyng.png';
import { addDays, subDays, format } from 'date-fns';

const CalendarModal = ({ onModal, date }) => {
  const handleClickClose = () => {
    onModal(false);
  };

  const [formatDate, setFormatDate] = useState('');
  //날짜 포맷터 함수
  const dateFormatter = (date) => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    const newDate = `${year}년 ${month}월 ${day}일`;
    return setFormatDate(newDate);
  };

  useEffect(() => {
    dateFormatter(date);
  }, []);
  const [dateChanged, setDateChaged] = useState(date);

  //prev, next 버튼 클릭시 날짜 변경 함수
  const handleDateChange = (type) => {
    const count = 1;
    //현재 날짜
    const currentDate = new Date(dateChanged);
    let newDate = '';

    if (type === 'add') {
      newDate = addDays(currentDate, count);
    } else if (type === 'sub') {
      newDate = subDays(currentDate, count);
    }
    const formmaterDate = format(newDate, 'yyyy-MM-dd');
    setDateChaged(formmaterDate);
    dateFormatter(formmaterDate);
  };

  const data = [];

  return (
    <>
      <Style.Background onClick={handleClickClose} />
      <Style.Container>
        <Style.Content>
          <div className='date'>
            <span onClick={() => handleDateChange('sub')}>
              <LeftIcon stroke='#616161' />
            </span>
            <h5>{formatDate}</h5>
            <span onClick={() => handleDateChange('add')}>
              <RightIcon stroke='#616161' />
            </span>
          </div>
          <span className='close_btn' onClick={handleClickClose}>
            &times;
          </span>
        </Style.Content>
        <Style.Main>
          <div className='scroll'>
            {data.length === 0 && (
              <div className='no_schedule'>
                <img src={rabbitImg} />
                <p>해당 날짜는 일정이 없습니다.</p>
              </div>
            )}
            {data.map((item, index) => (
              <div className='main' key={index}>
                <span className='header_span'></span>
                <div className='main_text'>
                  <h5>📆 [{item.title}]</h5>
                  <div>
                    <p>기간: {item.term}</p>
                    <p>내용: {item.contnet}</p>
                    <p>관련 링크: {item.link}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Style.Main>
      </Style.Container>
    </>
  );
};

export default CalendarModal;
