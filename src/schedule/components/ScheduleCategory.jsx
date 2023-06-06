import React, { useState } from 'react';
import styled from 'styled-components';
import { CategoryContainer } from '../../community/styledComponents/CategoryStyle';
import { ReactComponent as MegaphoneIcon } from '../../assets/icons/u_megaphone.svg';
import { ReactComponent as CalendarIcon } from '../../assets/icons/u_calendar-alt.svg';

const ScheduleCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState('공지사항');
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <CategoryContainer style={{ marginTop: '6rem' }}>
      <Title>
        <h2>정비소</h2>
        <p>엘리스 공지사항과</p>
        <p>일정을 모아놨어요.</p>
      </Title>
      <div className='category-list'>
        <p className='category-list-title'>토픽</p>
        <ul>
          <li
            onClick={() => handleCategorySelect('공지사항')}
            className={selectedCategory === '공지사항' ? 'active' : ''}
          >
            {selectedCategory === '공지사항' ? (
              <MegaphoneIcon fill='#7353EA' />
            ) : (
              <MegaphoneIcon fill='#bdbdbd' />
            )}
            <p>공지사항</p>
          </li>
          <li
            onClick={() => handleCategorySelect('일정표')}
            className={selectedCategory === '일정표' ? 'active' : ''}
          >
            {selectedCategory === '일정표' ? (
              <CalendarIcon fill='#7353EA' />
            ) : (
              <CalendarIcon fill='#bdbdbd' />
            )}

            <p>일정표</p>
          </li>
        </ul>
      </div>
    </CategoryContainer>
  );
};

export default ScheduleCategory;
const Title = styled.div`
  p {
    font-size: 1.6rem;
    color: #605ea0;
    padding-bottom: 0.5rem;
  }
`;
