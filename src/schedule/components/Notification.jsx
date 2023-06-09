import React, { useState } from 'react';
import * as Style from '../styleComponents/NotificationStyle';
import { ReactComponent as DownIcon } from '../../assets/icons/fi_chevron-down.svg';
import { ReactComponent as UpIcon } from '../../assets/icons/fi_chevron-up.svg';
import rabbitImg from '../../assets/images/eliceRabbit-removebg-preview.png';
import data from './notice.json';
import Input from '../../components/Input';
const Notification = () => {
  //검색창 인풋
  const [inputValue, setValue] = useState('');
  const handleOnchange = (e) => {
    setValue(e.target.value);
  };

  const [view, setView] = useState([]);
  //view Open, close
  const handleClickView = (index) => {
    setView((prevContent) => {
      if (!prevContent.includes(index)) {
        return [...prevContent, index];
      } else {
        return prevContent.filter((idx) => idx !== index);
      }
    });
  };

  return (
    <Style.Container>
      <div className='header_title'>
        <h4>엘리스에 올라온 중요한 공지사항이에요!</h4>
        <img src={rabbitImg} />
      </div>
      <Input width='100%' onChange={handleOnchange} value={inputValue} />
      {data.map((item, index) => (
        <Style.Content key={index}>
          <div className='title' onClick={() => handleClickView(index)}>
            <h5>📢 [{item.title}]</h5>
            {view.includes(index) ? (
              <UpIcon stroke='#616161' strokeWidth='2' width='26' height='26' />
            ) : (
              <DownIcon stroke='#616161' strokeWidth='2' width='26' height='26' />
            )}
          </div>
          {view.includes(index) ? (
            <div className='main_text'>
              <p>{item.text}</p>
            </div>
          ) : (
            ''
          )}
        </Style.Content>
      ))}
    </Style.Container>
  );
};

export default Notification;
