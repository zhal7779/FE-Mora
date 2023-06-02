import React from 'react';
import { UserInfo, TableTitle, DetailBtn } from '../styledComponents/tableComponent';
import PageNation from './PageNation';
import AdminTableHead from './AdminTableHead';

const tableBodyData = [
  {
    userId: 1,
    name: '임지성',
    email: 'jisung9105@gmail.com',
    password: 'ahdufpdltj1234^^',
    createdDate: '2023.06.01',
  },
  {
    userId: 2,
    name: '김윤지',
    email: 'yunji9105@gmail.com',
    password: 'sksmsdbswl1234^^',
    createdDate: '2023.06.01',
  },
  {
    userId: 3,
    name: '임지성',
    email: 'jisung9105@gmail.com',
    password: 'ahdufpdltj1234^^',
    createdDate: '2023.06.01',
  },
  {
    userId: 4,
    name: '김윤지',
    email: 'yunji9105@gmail.com',
    password: 'sksmsdbswl1234^^',
    createdDate: '2023.06.01',
  },
  {
    userId: 5,
    name: '임지성',
    email: 'jisung9105@gmail.com',
    password: 'ahdufpdltj1234^^',
    createdDate: '2023.06.01',
  },
  {
    userId: 6,
    name: '김윤지',
    email: 'yunji9105@gmail.com',
    password: 'sksmsdbswl1234^^',
    createdDate: '2023.06.01',
  },
  {
    userId: 7,
    name: '임지성',
    email: 'jisung9105@gmail.com',
    password: 'ahdufpdltj1234^^',
    createdDate: '2023.06.01',
  },
  {
    userId: 8,
    name: '김윤지',
    email: 'yunji9105@gmail.com',
    password: 'sksmsdbswl1234^^',
    createdDate: '2023.06.01',
  },
  {
    userId: 9,
    name: '임지성',
    email: 'jisung9105@gmail.com',
    password: 'ahdufpdltj1234^^',
    createdDate: '2023.06.01',
  },
  {
    userId: 10,
    name: '김윤지',
    email: 'yunji9105@gmail.com',
    password: 'sksmsdbswl1234^^',
    createdDate: '2023.06.01',
  },
  {
    userId: 11,
    name: '임지성',
    email: 'jisung9105@gmail.com',
    password: 'ahdufpdltj1234^^',
    createdDate: '2023.06.01',
  },
  {
    userId: 12,
    name: '김윤지',
    email: 'yunji9105@gmail.com',
    password: 'sksmsdbswl1234^^',
    createdDate: '2023.06.01',
  },
  {
    userId: 13,
    name: '임지성',
    email: 'jisung9105@gmail.com',
    password: 'ahdufpdltj1234^^',
    createdDate: '2023.06.01',
  },
  {
    userId: 14,
    name: '김윤지',
    email: 'yunji9105@gmail.com',
    password: 'sksmsdbswl1234^^',
    createdDate: '2023.06.01',
  },
];

const AdminTableBody = ({ toggleModal }) => {
  return (
    <ul className='user-info-list'>
      {tableBodyData.map((info) => {
        return (
          <UserInfo className='user-info' key={info.userId}>
            <span>{info.userId}</span>
            <span>{info.name}</span>
            <span>{info.email}</span>
            <span>{info.password}</span>
            <span>{info.createdDate}</span>
            <span>
              <DetailBtn className='detail-btn' onClick={toggleModal}>
                보기
              </DetailBtn>
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
          </UserInfo>
        );
      })}
    </ul>
  );
};

const AdminTable = ({ toggleModal }) => {
  return (
    <div>
      <TableTitle className='table-title'>사용자 목록</TableTitle>
      <AdminTableHead />
      <AdminTableBody toggleModal={toggleModal} />
      <PageNation />
    </div>
  );
};

export default AdminTable;
