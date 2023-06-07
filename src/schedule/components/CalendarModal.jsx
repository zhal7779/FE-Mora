import React from 'react';
import { ReactComponent as LeftIcon } from '../../assets/icons/fi_chevron-left.svg';
import { ReactComponent as RightIcon } from '../../assets/icons/fi_chevron-right.svg';
import * as Style from '../styleComponents/CalendarModal';
const CalendarModal = () => {
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
        <div className='main'>
          <span className='header_span'></span>
          <div className='main_text'>
            <h5>📢 [직무멘토링 강의 자료 업로드 안내 & 만족도 조사]</h5>
            <div>
              <p>기간:</p>
              <p>내용:</p>
              <p>관련 링크:</p>
            </div>
          </div>
        </div>
      </Style.Content>
    </Style.Container>
  );
};

export default CalendarModal;
