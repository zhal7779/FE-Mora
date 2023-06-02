import styled from 'styled-components';
import AdminBlock from './AdminBlock';
import Modal from '../../adminCommon/components/Modal';
import { useState } from 'react';

// admin side bar
const AdminSideBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 208px;
  padding-top: 4rem;
  padding-bottom: 3.6rem;

  & h1 {
    margin-bottom: 1.6rem;

    font-size: 2.4rem;
    font-weight: bold;
  }
  & .management-list > p {
    display: inline-block;
    margin-bottom: 1.4rem;

    color: #64748b;

    font-size: 1.2rem;
    font-weight: 900;
  }
  & .side-bar-btn {
    display: flex;
    align-items: center;
    padding: 0;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border: none;
    margin: 0;

    background-color: #fff;

    cursor: pointer;
  }
  & .side-bar-list-svg {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 0.8rem;

    line-height: 2.4rem;
    vertical-align: middle;
  }
  & .management-list-title {
    color: #adadad;

    font-size: 1.8rem;
    font-weight: bold;
  }
`;

// search bar
const SearchBarBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
  padding: 1.1rem 1.3rem;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  margin-bottom: 5rem;
`;
const SearchBar = styled.input`
  width: 100%;
  height: 2rem;
  padding-top: 0.2rem;

  border: none;

  font-size: 1.6rem;

  &::placeholder {
    color: #d4d4d4;
  }
  &:focus {
    outline: none;
  }
`;

// admin main
const AdminMainContent = styled.div`
  width: 720px;
  padding-top: 3.6rem;

  & .table-title {
    margin-bottom: 2rem;

    font-size: 1.8rem;
    font-weight: bold;
  }

  & .table-row-info,
  & .user-info {
    display: grid;
    grid-template-columns: 4.5rem 5.5rem 22rem 12rem 12rem 9rem 6.5rem;
    grid-template-rows: 4rem;
    justify-items: center;
    align-items: center;
    border-bottom: 1px solid #d6c9ff;
  }
  & .table-row-info {
    border-bottom: 1px solid #000;
  }
  & .user-info:nth-child(even) {
    background-color: #faf7ff;
  }

  & .table-row-info > span,
  & .user-info > span {
    font-size: 1.4rem;
  }
  & .detail-btn {
    padding: 0.7rem 1rem 0.5rem 1rem;
    border: 1px solid #d9d9d9;
    border-radius: 0.4rem;

    background-color: #fcfcfe;

    font-weight: 500;
  }

  & .table-block {
    margin-bottom: 6rem;
  }

  & .page-nation-block {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 10rem;
  }
  & .page-nation-block .page {
    width: 3rem;
    height: 3rem;

    border: 1px solid gray;
    border-radius: 0.4rem;

    font-size: 1.4rem;
    text-align: center;
    line-height: 3rem;

    cursor: pointer;
  }
  & .page-nation-block .page:first-child {
    border: none;

    background-color: #7353ea;
  }
  & .page-nation-block .page:first-child > p {
    color: #ffffff;
  }
`;

const AdminUser = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <header
        style={{
          height: '55px',
          backgroundColor: 'pink',

          fontSize: '24px',
          textAlign: 'center',
          lineHeight: '55px',
        }}
      >
        Header
      </header>
      <AdminBlock>
        <AdminSideBar>
          <div>
            <h1>관리자</h1>
          </div>
          <div className='management-list'>
            <p>관리 목록</p>
            <div>
              <button className='side-bar-btn'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' className='side-bar-list-svg'>
                  <path
                    stroke='#7353EA'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.8'
                    d='M23 21v-2a4 4 0 0 0-3-3.87M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M16 3.13a4 4 0 0 1 0 7.75M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z'
                  />
                </svg>
                <span className='management-list-title' style={{ color: 'black' }}>
                  사용자 관리
                </span>
              </button>
              <button className='side-bar-btn'>
                <svg xmlns='http://www.w3.org/2000/svg' className='side-bar-list-svg' fill='none'>
                  <path
                    stroke='#ADADAD'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.8'
                    d='M11 5 6 9H2v6h4l5 4V5ZM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07'
                  />
                </svg>
                <span className='management-list-title'>신고 관리</span>
              </button>
              <button className='side-bar-btn'>
                <svg xmlns='http://www.w3.org/2000/svg' className='side-bar-list-svg' fill='none'>
                  <path
                    fill='#ADADAD'
                    d='M19.87 8.6A1 1 0 0 0 19 8h-4.58l1.27-4.74a1 1 0 0 0-.52-1.157A1 1 0 0 0 14.73 2h-7a1 1 0 0 0-1 .74l-2.68 10a1 1 0 0 0 .524 1.159c.139.068.292.102.446.101h3.87l-1.81 6.74a1 1 0 0 0 1.71.93l10.9-12a1 1 0 0 0 .18-1.07Zm-9.79 8.68 1.07-4a1 1 0 0 0-.52-1.157 1 1 0 0 0-.44-.103H6.35L8.49 4h4.93l-1.27 4.74a1 1 0 0 0 1 1.26h3.57l-6.64 7.28Z'
                  />
                </svg>
                <span className='management-list-title'>일정 관리</span>
              </button>
              <button className='side-bar-btn'>
                <svg xmlns='http://www.w3.org/2000/svg' className='side-bar-list-svg' fill='none'>
                  <path
                    fill='#ADADAD'
                    d='M12 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7-12h-1V2a1 1 0 0 0-2 0v1H8V2a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Zm1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9h16v9Zm0-11H4V6a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V5h8v1a1 1 0 0 0 2 0V5h1a1 1 0 0 1 1 1v3ZM7 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
                  />
                </svg>
                <span className='management-list-title'>트랙 관리</span>
              </button>
              <button className='side-bar-btn'>
                <svg xmlns='http://www.w3.org/2000/svg' className='side-bar-list-svg' fill='none'>
                  <path
                    fill='#ADADAD'
                    d='M19.991 2.002a1 1 0 0 0-1 1v.637a9.036 9.036 0 0 1-7 3.363h-6a3.003 3.003 0 0 0-3 3v2a3.003 3.003 0 0 0 3 3h.484l-2.403 5.606a.999.999 0 0 0 .92 1.394h4a.999.999 0 0 0 .918-.607l2.724-6.355a9.026 9.026 0 0 1 6.357 3.325v.637a1 1 0 0 0 2 0v-16a.998.998 0 0 0-1-1Zm-14 11a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v4h-1Zm2.341 7H6.508l2.142-5h1.825l-2.143 5Zm10.66-4.478a11.052 11.052 0 0 0-7-2.522h-3v-4h3a11.053 11.053 0 0 0 7-2.522v9.044Z'
                  />
                </svg>
                <span className='management-list-title'>게시물 관리</span>
              </button>
              <button className='side-bar-btn'>
                <svg
                  className='side-bar-list-svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M17 11H18C18.2652 11 18.5196 10.8946 18.7071 10.7071C18.8946 10.5196 19 10.2652 19 10V9C19 8.73478 18.8946 8.48043 18.7071 8.29289C18.5196 8.10536 18.2652 8 18 8H17C16.7348 8 16.4804 8.10536 16.2929 8.29289C16.1054 8.48043 16 8.73478 16 9V10C16 10.2652 16.1054 10.5196 16.2929 10.7071C16.4804 10.8946 16.7348 11 17 11ZM6 12H11C11.2652 12 11.5196 11.8946 11.7071 11.7071C11.8946 11.5196 12 11.2652 12 11C12 10.7348 11.8946 10.4804 11.7071 10.2929C11.5196 10.1054 11.2652 10 11 10H6C5.73478 10 5.48043 10.1054 5.29289 10.2929C5.10536 10.4804 5 10.7348 5 11C5 11.2652 5.10536 11.5196 5.29289 11.7071C5.48043 11.8946 5.73478 12 6 12ZM22 4H2C1.73478 4 1.48043 4.10536 1.29289 4.29289C1.10536 4.48043 1 4.73478 1 5V19C1 19.2652 1.10536 19.5196 1.29289 19.7071C1.48043 19.8946 1.73478 20 2 20H22C22.2652 20 22.5196 19.8946 22.7071 19.7071C22.8946 19.5196 23 19.2652 23 19V5C23 4.73478 22.8946 4.48043 22.7071 4.29289C22.5196 4.10536 22.2652 4 22 4ZM21 18H3V6H21V18ZM6 16H11C11.2652 16 11.5196 15.8946 11.7071 15.7071C11.8946 15.5196 12 15.2652 12 15C12 14.7348 11.8946 14.4804 11.7071 14.2929C11.5196 14.1054 11.2652 14 11 14H6C5.73478 14 5.48043 14.1054 5.29289 14.2929C5.10536 14.4804 5 14.7348 5 15C5 15.2652 5.10536 15.5196 5.29289 15.7071C5.48043 15.8946 5.73478 16 6 16Z'
                    fill='#ADADAD'
                  />
                </svg>
                <span className='management-list-title'>공지사항 관리</span>
              </button>
            </div>
          </div>
        </AdminSideBar>
        <AdminMainContent>
          <SearchBarBlock>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'>
              <path
                fill='#94A3B8'
                d='M10 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 12.606 4.192l5.101 5.1a1 1 0 0 1-1.414 1.415l-5.1-5.1A7 7 0 0 1 3 10Z'
                clipRule='evenodd'
              />
            </svg>
            <SearchBar type='text' placeholder='사용자 이름 검색' />
          </SearchBarBlock>
          {/* table */}
          <h2 className='table-title'>사용자 목록</h2>
          <div className='table-block'>
            <div className='table-row-info' style={{ fontWeight: 'bold' }}>
              <span>유저ID</span>
              <span>이름</span>
              <span>이메일</span>
              <span>비밀번호</span>
              <span>가입 날짜</span>
              <span>상세보기</span>
              <span>삭제</span>
            </div>
            <ul className='user-info-list'>
              <li className='user-info'>
                <span>1</span>
                <span>임지성</span>
                <span>jisung9105@gmail.com</span>
                <span>********</span>
                <span>2023.06.01</span>
                <span>
                  <button className='detail-btn' onClick={toggleModal}>
                    보기
                  </button>
                </span>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='22'
                    height='22'
                    fill='none'
                    onClick={() => {
                      const response = confirm('삭제하시겠습니까?');
                      console.log(response);
                    }}
                  >
                    <path
                      stroke='#FF1300'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.8'
                      d='M2.75 5.5h16.5M7.333 5.5V3.667a1.833 1.833 0 0 1 1.834-1.834h3.666a1.833 1.833 0 0 1 1.834 1.834V5.5m2.75 0v12.833a1.833 1.833 0 0 1-1.834 1.834H6.417a1.833 1.833 0 0 1-1.834-1.834V5.5h12.834ZM12.833 10.083v5.5M9.167 10.083v5.5'
                    />
                  </svg>
                </span>
              </li>
              <li className='user-info'>
                <span>2</span>
                <span>김윤지</span>
                <span>yunji9105@gmail.com</span>
                <span>********</span>
                <span>2023.06.02</span>
                <span>
                  <button className='detail-btn' onClick={toggleModal}>
                    보기
                  </button>
                </span>
                <span>
                  <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' fill='none'>
                    <path
                      stroke='#FF1300'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.8'
                      d='M2.75 5.5h16.5M7.333 5.5V3.667a1.833 1.833 0 0 1 1.834-1.834h3.666a1.833 1.833 0 0 1 1.834 1.834V5.5m2.75 0v12.833a1.833 1.833 0 0 1-1.834 1.834H6.417a1.833 1.833 0 0 1-1.834-1.834V5.5h12.834ZM12.833 10.083v5.5M9.167 10.083v5.5'
                    />
                  </svg>
                </span>
              </li>
              <li className='user-info'>
                <span>1</span>
                <span>임지성</span>
                <span>jisung9105@gmail.com</span>
                <span>********</span>
                <span>2023.06.01</span>
                <span>
                  <button className='detail-btn' onClick={toggleModal}>
                    보기
                  </button>
                </span>
                <span>
                  <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' fill='none'>
                    <path
                      stroke='#FF1300'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.8'
                      d='M2.75 5.5h16.5M7.333 5.5V3.667a1.833 1.833 0 0 1 1.834-1.834h3.666a1.833 1.833 0 0 1 1.834 1.834V5.5m2.75 0v12.833a1.833 1.833 0 0 1-1.834 1.834H6.417a1.833 1.833 0 0 1-1.834-1.834V5.5h12.834ZM12.833 10.083v5.5M9.167 10.083v5.5'
                    />
                  </svg>
                </span>
              </li>
              <li className='user-info'>
                <span>2</span>
                <span>김윤지</span>
                <span>yunji9105@gmail.com</span>
                <span>********</span>
                <span>2023.06.02</span>
                <span>
                  <button className='detail-btn' onClick={toggleModal}>
                    보기
                  </button>
                </span>
                <span>
                  <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' fill='none'>
                    <path
                      stroke='#FF1300'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.8'
                      d='M2.75 5.5h16.5M7.333 5.5V3.667a1.833 1.833 0 0 1 1.834-1.834h3.666a1.833 1.833 0 0 1 1.834 1.834V5.5m2.75 0v12.833a1.833 1.833 0 0 1-1.834 1.834H6.417a1.833 1.833 0 0 1-1.834-1.834V5.5h12.834ZM12.833 10.083v5.5M9.167 10.083v5.5'
                    />
                  </svg>
                </span>
              </li>
              <li className='user-info'>
                <span>1</span>
                <span>임지성</span>
                <span>jisung9105@gmail.com</span>
                <span>********</span>
                <span>2023.06.01</span>
                <span>
                  <button className='detail-btn' onClick={toggleModal}>
                    보기
                  </button>
                </span>
                <span>
                  <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' fill='none'>
                    <path
                      stroke='#FF1300'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.8'
                      d='M2.75 5.5h16.5M7.333 5.5V3.667a1.833 1.833 0 0 1 1.834-1.834h3.666a1.833 1.833 0 0 1 1.834 1.834V5.5m2.75 0v12.833a1.833 1.833 0 0 1-1.834 1.834H6.417a1.833 1.833 0 0 1-1.834-1.834V5.5h12.834ZM12.833 10.083v5.5M9.167 10.083v5.5'
                    />
                  </svg>
                </span>
              </li>
              <li className='user-info'>
                <span>2</span>
                <span>김윤지</span>
                <span>yunji9105@gmail.com</span>
                <span>********</span>
                <span>2023.06.02</span>
                <span>
                  <button className='detail-btn' onClick={toggleModal}>
                    보기
                  </button>
                </span>
                <span>
                  <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' fill='none'>
                    <path
                      stroke='#FF1300'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.8'
                      d='M2.75 5.5h16.5M7.333 5.5V3.667a1.833 1.833 0 0 1 1.834-1.834h3.666a1.833 1.833 0 0 1 1.834 1.834V5.5m2.75 0v12.833a1.833 1.833 0 0 1-1.834 1.834H6.417a1.833 1.833 0 0 1-1.834-1.834V5.5h12.834ZM12.833 10.083v5.5M9.167 10.083v5.5'
                    />
                  </svg>
                </span>
              </li>
              <li className='user-info'>
                <span>1</span>
                <span>임지성</span>
                <span>jisung9105@gmail.com</span>
                <span>********</span>
                <span>2023.06.01</span>
                <span>
                  <button className='detail-btn' onClick={toggleModal}>
                    보기
                  </button>
                </span>
                <span>
                  <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' fill='none'>
                    <path
                      stroke='#FF1300'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.8'
                      d='M2.75 5.5h16.5M7.333 5.5V3.667a1.833 1.833 0 0 1 1.834-1.834h3.666a1.833 1.833 0 0 1 1.834 1.834V5.5m2.75 0v12.833a1.833 1.833 0 0 1-1.834 1.834H6.417a1.833 1.833 0 0 1-1.834-1.834V5.5h12.834ZM12.833 10.083v5.5M9.167 10.083v5.5'
                    />
                  </svg>
                </span>
              </li>
              <li className='user-info'>
                <span>2</span>
                <span>김윤지</span>
                <span>yunji9105@gmail.com</span>
                <span>********</span>
                <span>2023.06.02</span>
                <span>
                  <button className='detail-btn' onClick={toggleModal}>
                    보기
                  </button>
                </span>
                <span>
                  <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' fill='none'>
                    <path
                      stroke='#FF1300'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.8'
                      d='M2.75 5.5h16.5M7.333 5.5V3.667a1.833 1.833 0 0 1 1.834-1.834h3.666a1.833 1.833 0 0 1 1.834 1.834V5.5m2.75 0v12.833a1.833 1.833 0 0 1-1.834 1.834H6.417a1.833 1.833 0 0 1-1.834-1.834V5.5h12.834ZM12.833 10.083v5.5M9.167 10.083v5.5'
                    />
                  </svg>
                </span>
              </li>
              <li className='user-info'>
                <span>1</span>
                <span>임지성</span>
                <span>jisung9105@gmail.com</span>
                <span>********</span>
                <span>2023.06.01</span>
                <span>
                  <button className='detail-btn' onClick={toggleModal}>
                    보기
                  </button>
                </span>
                <span>
                  <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' fill='none'>
                    <path
                      stroke='#FF1300'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.8'
                      d='M2.75 5.5h16.5M7.333 5.5V3.667a1.833 1.833 0 0 1 1.834-1.834h3.666a1.833 1.833 0 0 1 1.834 1.834V5.5m2.75 0v12.833a1.833 1.833 0 0 1-1.834 1.834H6.417a1.833 1.833 0 0 1-1.834-1.834V5.5h12.834ZM12.833 10.083v5.5M9.167 10.083v5.5'
                    />
                  </svg>
                </span>
              </li>
              <li className='user-info'>
                <span>2</span>
                <span>김윤지</span>
                <span>yunji9105@gmail.com</span>
                <span>********</span>
                <span>2023.06.02</span>
                <span>
                  <button className='detail-btn' onClick={toggleModal}>
                    보기
                  </button>
                </span>
                <span>
                  <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' fill='none'>
                    <path
                      stroke='#FF1300'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.8'
                      d='M2.75 5.5h16.5M7.333 5.5V3.667a1.833 1.833 0 0 1 1.834-1.834h3.666a1.833 1.833 0 0 1 1.834 1.834V5.5m2.75 0v12.833a1.833 1.833 0 0 1-1.834 1.834H6.417a1.833 1.833 0 0 1-1.834-1.834V5.5h12.834ZM12.833 10.083v5.5M9.167 10.083v5.5'
                    />
                  </svg>
                </span>
              </li>
              <li className='user-info'>
                <span>1</span>
                <span>임지성</span>
                <span>jisung9105@gmail.com</span>
                <span>********</span>
                <span>2023.06.01</span>
                <span>
                  <button className='detail-btn' onClick={toggleModal}>
                    보기
                  </button>
                </span>
                <span>
                  <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' fill='none'>
                    <path
                      stroke='#FF1300'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.8'
                      d='M2.75 5.5h16.5M7.333 5.5V3.667a1.833 1.833 0 0 1 1.834-1.834h3.666a1.833 1.833 0 0 1 1.834 1.834V5.5m2.75 0v12.833a1.833 1.833 0 0 1-1.834 1.834H6.417a1.833 1.833 0 0 1-1.834-1.834V5.5h12.834ZM12.833 10.083v5.5M9.167 10.083v5.5'
                    />
                  </svg>
                </span>
              </li>
              <li className='user-info'>
                <span>2</span>
                <span>김윤지</span>
                <span>yunji9105@gmail.com</span>
                <span>********</span>
                <span>2023.06.02</span>
                <span>
                  <button className='detail-btn' onClick={toggleModal}>
                    보기
                  </button>
                </span>
                <span>
                  <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' fill='none'>
                    <path
                      stroke='#FF1300'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.8'
                      d='M2.75 5.5h16.5M7.333 5.5V3.667a1.833 1.833 0 0 1 1.834-1.834h3.666a1.833 1.833 0 0 1 1.834 1.834V5.5m2.75 0v12.833a1.833 1.833 0 0 1-1.834 1.834H6.417a1.833 1.833 0 0 1-1.834-1.834V5.5h12.834ZM12.833 10.083v5.5M9.167 10.083v5.5'
                    />
                  </svg>
                </span>
              </li>
              <li className='user-info'>
                <span>1</span>
                <span>임지성</span>
                <span>jisung9105@gmail.com</span>
                <span>********</span>
                <span>2023.06.01</span>
                <span>
                  <button className='detail-btn' onClick={toggleModal}>
                    보기
                  </button>
                </span>
                <span>
                  <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' fill='none'>
                    <path
                      stroke='#FF1300'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.8'
                      d='M2.75 5.5h16.5M7.333 5.5V3.667a1.833 1.833 0 0 1 1.834-1.834h3.666a1.833 1.833 0 0 1 1.834 1.834V5.5m2.75 0v12.833a1.833 1.833 0 0 1-1.834 1.834H6.417a1.833 1.833 0 0 1-1.834-1.834V5.5h12.834ZM12.833 10.083v5.5M9.167 10.083v5.5'
                    />
                  </svg>
                </span>
              </li>
              <li className='user-info'>
                <span>2</span>
                <span>김윤지</span>
                <span>yunji9105@gmail.com</span>
                <span>********</span>
                <span>2023.06.02</span>
                <span>
                  <button className='detail-btn' onClick={toggleModal}>
                    보기
                  </button>
                </span>
                <span>
                  <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' fill='none'>
                    <path
                      stroke='#FF1300'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.8'
                      d='M2.75 5.5h16.5M7.333 5.5V3.667a1.833 1.833 0 0 1 1.834-1.834h3.666a1.833 1.833 0 0 1 1.834 1.834V5.5m2.75 0v12.833a1.833 1.833 0 0 1-1.834 1.834H6.417a1.833 1.833 0 0 1-1.834-1.834V5.5h12.834ZM12.833 10.083v5.5M9.167 10.083v5.5'
                    />
                  </svg>
                </span>
              </li>
            </ul>
          </div>
          {/* page-nation */}
          <div className='page-nation-block'>
            <div className='page'>
              <p>1</p>
            </div>
            <div className='page'>
              <p>2</p>
            </div>
            <div className='page'>
              <p>3</p>
            </div>
            <div className='page'>
              <p>4</p>
            </div>
            <div className='page'>
              <p>5</p>
            </div>
          </div>
        </AdminMainContent>
      </AdminBlock>
      <Modal modal={modal} toggleModal={toggleModal} />
    </>
  );
};

export default AdminUser;
