import React, { useState } from 'react';
import styled from 'styled-components';
import { CategoryContainer } from '../../community/styledComponents/CategoryStyle';
import { ReactComponent as MegaphoneIcon } from '../../assets/icons/u_megaphone.svg';
import { ReactComponent as CalendarIcon } from '../../assets/icons/u_calendar-alt.svg';

const ScheduleCategory = ({ setMenu }) => {
  const [selectedCategory, setSelectedCategory] = useState('notice');
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setMenu(category);
  };

  return (
    <CategoryContainer style={{ marginTop: '6rem' }}>
      <Title>
        <h2>정비소🚗</h2>
        {/* <p>엘리스 공지사항과</p>
        <p>일정을 모아놨어요.</p> */}
      </Title>
      <div className='category-list'>
        <p className='category-list-title'>토픽</p>
        <ul>
          <li>
            <a
              onClick={() => handleCategorySelect('notice')}
              className={selectedCategory === 'notice' ? 'active' : ''}
            >
              {selectedCategory === 'notice' ? (
                <MegaphoneIcon fill='#7353EA' />
              ) : (
                <MegaphoneIcon fill='var(--light-gray)' />
              )}
              <p>공지사항</p>
            </a>
          </li>
          <li>
            <a
              onClick={() => handleCategorySelect('calendar')}
              className={selectedCategory === 'calendar' ? 'active' : ''}
            >
              {selectedCategory === 'calendar' ? (
                <CalendarIcon fill='#7353EA' />
              ) : (
                <CalendarIcon fill='var(--light-gray)' />
              )}

              <p>일정표</p>
            </a>
          </li>
        </ul>
      </div>
    </CategoryContainer>
  );
};

export default ScheduleCategory;
const Title = styled.div`
  h2 {
    padding-bottom: 20px;
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 2.9rem;
  }
`;
