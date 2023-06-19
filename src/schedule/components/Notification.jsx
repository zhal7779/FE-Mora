import React, { useState } from 'react';
import * as Style from '../styleComponents/NotificationStyle';
import { ReactComponent as DownIcon } from '../../assets/icons/fi_chevron-down.svg';
import { ReactComponent as UpIcon } from '../../assets/icons/fi_chevron-up.svg';
import rabbitImg from '../../assets/images/eliceRabbit-removebg-preview.png';
import { useQuery } from 'react-query';
import { fetchNotice } from '../api/scheduleApi';
import Pagination from './Pagination';
import Input from '../../components/Input';
const Notification = () => {
  //검색창 인풋
  const [inputValue, setInputValue] = useState('');

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };
  console.log(inputValue);
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
  const [page, setPage] = useState(0);
  const handleClickPage = (number) => {
    setPage(number);
  };

  const { data, isLoading } = useQuery(['notice', inputValue, page], () =>
    fetchNotice(page, inputValue)
  );
  if (isLoading) {
    return <div>'fhe'</div>;
  }
  return (
    <Style.Container>
      <div className='header_title'>
        <h4>엘리스에 올라온 중요한 공지사항이에요!</h4>
        <img src={rabbitImg} />
      </div>
      <Input width='100%' onChange={handleOnChange} value={inputValue} />
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
          <img src='http://www.moyeora-racer.com/static/media/no-data-image.7c445de03420d586e6ca540e13c4cd7c.svg' />
          <p>해당하는 공지사항이 없습니다.</p>
        </div>
      )}
      {data && data.objArr && data.objArr.length > 0 && (
        <Pagination
          pages={data.totalPages}
          currentPage={data.currentPage}
          clickPage={handleClickPage}
        />
      )}
    </Style.Container>
  );
};

export default Notification;
