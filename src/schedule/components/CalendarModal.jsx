import React from 'react';
import { ReactComponent as LeftIcon } from '../../assets/icons/fi_chevron-left.svg';
import { ReactComponent as RightIcon } from '../../assets/icons/fi_chevron-right.svg';
import * as Style from '../styleComponents/CalendarModal';
const CalendarModal = () => {
  const data = [
    {
      title: '직무멘토링 강의 자료 업로드 안내 & 만족도 조사',
      term: '5월 26일 (금) 밤 12시까지',
      contnet:
        '지난주 5/24, 5/26 진행된 직무멘토링 강의자료가 업로드 되었습니다. 참여하신 분들은 만족도 조사 진행해주세요!',
      link: 'https://uuu/miyoung',
    },
    {
      title:
        '커리어 빌드업 로드맵 과목 - <직무 멘토링> 받고, 멘토링 받은 내용 정리하고 이력서 점검 및 보완하기',
      term: '5월 26일 (금) 밤 12시까지',
      contnet:
        '지난주 수요일(5/24), 금요일(5/25) 직무멘토링에 참여하신 분들은, 멘토링에서 아래 로드맵 과제를 통해 기록해주세요! 멘토링에 참여하지 않은 분들은, 취업매니저님께 받은 피드백을 기록해주시기 바랍니다.',
      link: 'https://uuu/miyoung',
    },
    {
      title: '직무멘토링 강의 자료 업로드 안내 & 만족도 조사',
      term: '5월 26일 (금) 밤 12시까지',
      contnet:
        '지난주 5/24, 5/26 진행된 직무멘토링 강의자료가 업로드 되었습니다. 참여하신 분들은 만족도 조사 진행해주세요!',
      link: 'https://uuu/miyoung',
    },
  ];

  return (
    <Style.Container>
      <Style.Content>
        <div className='date'>
          <span>
            <LeftIcon stroke='#616161' />
          </span>
          <h5>2023년 6월 7일</h5>
          <span>
            <RightIcon stroke='#616161' />
          </span>
        </div>
        <span className='close_btn'>&times;</span>
      </Style.Content>
      <Style.Main>
        <div className='scroll'>
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
  );
};

export default CalendarModal;
