import React, { useEffect, useState } from 'react';
import { ReactComponent as LeftIcon } from '../../assets/icons/fi_chevron-left.svg';
import { ReactComponent as RightIcon } from '../../assets/icons/fi_chevron-right.svg';
import * as Style from '../styleComponents/CalendarModal';
import rabbitImg from '../../assets/images/rabbitStudyng.png';
import { addDays, subDays, format } from 'date-fns';
import { useQuery, useQueryClient } from 'react-query';
import { fetchScheduleYMD } from '../api/scheduleApi';

const CalendarModal = ({ onModal, date }) => {
  //모달 종료
  const handleClickClose = () => {
    onModal(false);
  };
  const queryClient = useQueryClient();
  const { data } = useQuery('scheduleYMD', () => fetchScheduleYMD(dateChanged), {
    enabled: false, // 초기에 쿼리가 자동으로 실행되지 않게 설정
  });

  const [formatDate, setFormatDate] = useState(date);
  //날짜 포맷터 함수 ex) 2023-06-13 =>  2023년 06월 13일
  const dateFormatter = (date) => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    const newDate = `${year}년 ${month}월 ${day}일`;
    return setFormatDate(newDate);
  };

  const [dateChanged, setDateChaged] = useState(date);

  useEffect(() => {
    dateFormatter(date);
    // 첫 렌더링 시 데이터를 가져오기 위해 비동기적으로 fetchScheduleYMD 함수 호출
    queryClient.prefetchQuery('scheduleYMD');
  }, []);

  //prev, next 버튼 클릭시 날짜 변경 함수
  const handleDateChange = async (type) => {
    const count = 1;
    //현재 날짜
    const currentDate = new Date(dateChanged);
    let newDate = '';
    //add 일 경우 1일씩 날짜 증가
    if (type === 'add') {
      newDate = addDays(currentDate, count);
      //sub 일 경우 1일씩 날짜 감소
    } else if (type === 'sub') {
      newDate = subDays(currentDate, count);
    }
    // 출력한 날짜 yyyy-mm-dd 형식으로 바꿈
    const formmaterDate = format(newDate, 'yyyy-MM-dd');
    //쿼리에 넣어줄 dateChanged state, formmaterDate로 변경
    setDateChaged(formmaterDate);
    // 기존 캐시된 데이터를 리셋
    queryClient.resetQueries('scheduleYMD', { exact: true });
    // 비동기적으로 변경된 날짜에 새로운 데이터 요청
    queryClient.prefetchQuery('scheduleYMD', () => fetchScheduleYMD(formmaterDate));

    dateFormatter(formmaterDate);
  };

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
            {data !== undefined ? (
              data.length > 0 ? (
                data.map((item) => (
                  <div className='main' key={item.id}>
                    <span className='header_span'></span>
                    <div className='main_text'>
                      <h5>📆 [{item.title}]</h5>
                      <div>
                        <p>
                          기간: {item.start_date} ~ {item.end_date}
                        </p>
                        <p>내용: {item.content}</p>
                        <p>
                          관련 링크:
                          <br />
                          {item.PlanLinks.map((link) => (
                            <a href={link.url} target='_blank'>
                              {link.url}
                              <br />
                            </a>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className='no_schedule'>
                  <img src={rabbitImg} alt='No schedule' />
                  <p>해당 날짜는 일정이 없습니다.</p>
                </div>
              )
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </Style.Main>
      </Style.Container>
    </>
  );
};

export default CalendarModal;
