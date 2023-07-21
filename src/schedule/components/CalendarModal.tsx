import React, { useEffect, useState } from 'react';
import { ReactComponent as LeftIcon } from '../../assets/icons/fi_chevron-left.svg';
import { ReactComponent as RightIcon } from '../../assets/icons/fi_chevron-right.svg';
import * as Style from '../styleComponents/CalendarModalStyle';
import rabbitImg from '../../assets/images/rabbitStudyng.png';
import { addDays, subDays, format } from 'date-fns';
import { useQuery } from 'react-query';
import { fetchSchedule } from '../api/apis';
interface Props {
  handleClickOpen: () => void;
  date: string;
}
interface LinkData {
  url: string;
  length: number;
}
interface CalendarDailyData {
  id: string;
  title: string;
  start_date: string;
  end_date: string;
  content: string;
  PlanLinks: [LinkData];
}
const CalendarModal = ({ handleClickOpen, date }: Props) => {
  //모달 종료
  const handleClickClose = () => {
    handleClickOpen();
  };
  const [dateChanged, setDateChaged] = useState(date);
  const { data } = useQuery(['scheduleYMD', dateChanged], () =>
    fetchSchedule({ type: 'ymd', date: dateChanged })
  );

  const [formatDate, setFormatDate] = useState(date);
  //날짜 포맷터 함수 ex) 2023-06-13 =>  2023년 06월 13일
  const dateFormatter = (date: string) => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    const newDate = `${year}년 ${month}월 ${day}일`;
    return setFormatDate(newDate);
  };

  useEffect(() => {
    dateFormatter(date);
  }, []);

  //prev, next 버튼 클릭시 날짜 변경 함수
  const handleDateChange = async (type: string) => {
    const count = 1;
    //현재 날짜
    const currentDate = new Date(dateChanged);
    let newDate = new Date();
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
    dateFormatter(formmaterDate);
  };

  return (
    <>
      <Style.Background onClick={handleClickClose} />
      <Style.Container>
        <div>
          <div className='date'>
            <span onClick={() => handleDateChange('sub')}>
              <LeftIcon stroke='var(--main-white)' />
            </span>
            <h5>{formatDate}</h5>
            <span onClick={() => handleDateChange('add')}>
              <RightIcon stroke='var(--main-white)' />
            </span>
          </div>
        </div>
        <div className='main-content'>
          <div className='scroll'>
            {data !== undefined ? (
              data.length > 0 ? (
                data.map((item: CalendarDailyData) => (
                  <div className='main' key={item.id}>
                    <span className='header-span'></span>
                    <div className='main-text'>
                      <h5>📆 [{item.title}]</h5>
                      <div>
                        <p>
                          기간: {item.start_date.slice(0, 10)} ~ {item.end_date.slice(0, 10)}
                        </p>
                        <p>내용: {item.content}</p>
                        {item.PlanLinks.length > 0 ? (
                          <p>
                            관련 링크
                            <br />
                            <div className='link-box'>
                              {item.PlanLinks.map((link: LinkData) => (
                                <a href={link.url} target='_blank'>
                                  {link.url}
                                  <br />
                                </a>
                              ))}
                            </div>
                          </p>
                        ) : (
                          ''
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className='no-schedule'>
                  <img src={rabbitImg} alt='No schedule' />
                  <p>해당 날짜는 일정이 없습니다.</p>
                </div>
              )
            ) : (
              ''
            )}
          </div>
        </div>
      </Style.Container>
    </>
  );
};

export default CalendarModal;
