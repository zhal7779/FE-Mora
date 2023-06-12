import React, { useState } from 'react';
import * as Style from '../styleComponents/NotificationStyle';
import { ReactComponent as DownIcon } from '../../assets/icons/fi_chevron-down.svg';
import { ReactComponent as UpIcon } from '../../assets/icons/fi_chevron-up.svg';
import rabbitImg from '../../assets/images/eliceRabbit-removebg-preview.png';
import Input from '../../components/Input';
import { useQuery } from 'react-query';
import { fetchNotice } from '../api/scheduleApi';
const Notification = () => {
  //검색창 인풋
  const [inputValue, setValue] = useState('');

  const handleOnchange = (e) => {
    setValue(e.target.value);
  };

  const { data } = useQuery(['notice', inputValue], () => fetchNotice(inputValue));
  console.log(data);

  const [view, setView] = useState([]);
  //view Open, close
  const handleClickView = (id) => {
    setView((prevContent) => {
      if (!prevContent.includes(id)) {
        return [...prevContent, id];
      } else {
        return prevContent.filter((idx) => idx !== id);
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
      {data && data.objArr && data.objArr.length > 0 ? (
        data.objArr.map((item) => (
          <Style.Content key={item.id}>
            <div className='title' onClick={() => handleClickView(item.id)}>
              <h5>📢 [{item.title}]</h5>
              {view.includes(item.id) ? (
                <UpIcon stroke='#616161' strokeWidth='2' width='26' height='26' />
              ) : (
                <DownIcon stroke='#616161' strokeWidth='2' width='26' height='26' />
              )}
            </div>
            {view.includes(item.id) && (
              <div className='main_text'>
                <p>{item.content}</p>
              </div>
            )}
          </Style.Content>
        ))
      ) : (
        <div className='no_data'>
          <img src='static/media/no-data-image.64c9ff0eb8587dac16cb266cc4a9f5b9.svg' />
          <p>해당하는 공지사항이 없습니다.</p>
        </div>
      )}
    </Style.Container>
  );
};

export default Notification;
