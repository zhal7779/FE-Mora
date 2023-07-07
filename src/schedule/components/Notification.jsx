import React, { useState, useCallback } from 'react';
import * as Style from '../styleComponents/NotificationStyle';
import { ReactComponent as DownIcon } from '../../assets/icons/fi_chevron-down.svg';
import { ReactComponent as UpIcon } from '../../assets/icons/fi_chevron-up.svg';
import rabbitImg from '../../assets/images/eliceRabbit-removebg-preview.png';
import { useQuery } from 'react-query';
import { fetchNotice } from '../api/scheduleApi';
import Pagination from './Pagination';
import Input from '../../components/Input';
import { SearchDebounce } from './SearchDebounce';
import { useWindowSize } from '../../header/components/useWindowSize';
const Notification = () => {
  //검색창 인풋
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(0);
  const [view, setView] = useState([]);

  const handleOnChange = (e) => {
    searchDebouncing(e.target.value);
    setInputValue(e.target.value);
  };
  const handleClickPage = (number) => {
    setPage(number);
  };

  // 디바운스하여 0.3초뒤에 검색 실행
  const searchDebouncing = useCallback(
    SearchDebounce((inputValue) => setSearchValue(inputValue)),
    []
  );

  const { data, isSuccess } = useQuery(['notice', searchValue, page], () =>
    fetchNotice(page, searchValue)
  );

  //더보기 Open, close
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
        <div>
          <p>엘리스에 올라온</p>
          <p className='sub-p'> 중요한 공지사항이에요!</p>
        </div>

        <img src={rabbitImg} />
      </div>
      <Input width='100%' value={inputValue} onChange={handleOnChange} />
      {isSuccess && data && data.objArr.length === 0 ? (
        <div className='no_data'>
          <img src='http://www.moyeora-racer.com/static/media/no-data-image.7c445de03420d586e6ca540e13c4cd7c.svg' />
          <p>해당하는 공지사항이 없습니다.</p>
        </div>
      ) : (
        <>
          {data &&
            data.objArr.map((item) => (
              <Style.Content key={item.id}>
                <div className='title' onClick={() => handleClickView(item.id)}>
                  <h5>📢 [{item.title}]</h5>
                  <span>
                    {view.includes(item.id) ? (
                      <UpIcon stroke='var(--main-white)' strokeWidth='2.6' width='18' height='20' />
                    ) : (
                      <DownIcon
                        stroke='var(--main-white)'
                        strokeWidth='2.6'
                        width='18'
                        height='20'
                      />
                    )}
                  </span>
                </div>
                {view.includes(item.id) && (
                  <div className='main_text'>
                    <p>{item.content}</p>
                  </div>
                )}
              </Style.Content>
            ))}
          {data && (
            <Pagination
              pages={data.totalPages}
              currentPage={data.currentPage}
              clickPage={handleClickPage}
            />
          )}
        </>
      )}
    </Style.Container>
  );
};

export default Notification;
