import {
  SideBar,
  SideBarBtn,
  SideBarListSvg,
  ManagementListTitle,
} from '../styledComponents/adminSideBar';

const AdminSideBar = () => {
  return (
    <SideBar>
      <div>
        <h1>관리자</h1>
      </div>
      <div className='management-list'>
        <p>관리 목록</p>
        <div>
          <SideBarBtn className='side-bar-btn'>
            <SideBarListSvg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              cSideSideBarListSvg='side-bar-list-svg'
            >
              <path
                stroke='#7353EA'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.8'
                d='M23 21v-2a4 4 0 0 0-3-3.87M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M16 3.13a4 4 0 0 1 0 7.75M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z'
              />
            </SideBarListSvg>
            <ManagementListTitle className='management-list-title' style={{ color: 'black' }}>
              사용자 관리
            </ManagementListTitle>
          </SideBarBtn>
          <SideBarBtn className='side-bar-btn'>
            <SideBarListSvg
              xmlns='http://www.w3.org/2000/svg'
              className='side-bar-list-svg'
              fill='none'
            >
              <path
                stroke='#ADADAD'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.8'
                d='M11 5 6 9H2v6h4l5 4V5ZM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07'
              />
            </SideBarListSvg>
            <ManagementListTitle className='management-list-title'>신고 관리</ManagementListTitle>
          </SideBarBtn>
          <SideBarBtn className='side-bar-btn'>
            <SideBarListSvg
              xmlns='http://www.w3.org/2000/svg'
              className='side-bar-list-svg'
              fill='none'
            >
              <path
                fill='#ADADAD'
                d='M19.87 8.6A1 1 0 0 0 19 8h-4.58l1.27-4.74a1 1 0 0 0-.52-1.157A1 1 0 0 0 14.73 2h-7a1 1 0 0 0-1 .74l-2.68 10a1 1 0 0 0 .524 1.159c.139.068.292.102.446.101h3.87l-1.81 6.74a1 1 0 0 0 1.71.93l10.9-12a1 1 0 0 0 .18-1.07Zm-9.79 8.68 1.07-4a1 1 0 0 0-.52-1.157 1 1 0 0 0-.44-.103H6.35L8.49 4h4.93l-1.27 4.74a1 1 0 0 0 1 1.26h3.57l-6.64 7.28Z'
              />
            </SideBarListSvg>
            <ManagementListTitle className='management-list-title'>일정 관리</ManagementListTitle>
          </SideBarBtn>
          <SideBarBtn className='side-bar-btn'>
            <SideBarListSvg
              xmlns='http://www.w3.org/2000/svg'
              className='side-bar-list-svg'
              fill='none'
            >
              <path
                fill='#ADADAD'
                d='M12 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7-12h-1V2a1 1 0 0 0-2 0v1H8V2a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Zm1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9h16v9Zm0-11H4V6a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V5h8v1a1 1 0 0 0 2 0V5h1a1 1 0 0 1 1 1v3ZM7 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
              />
            </SideBarListSvg>
            <ManagementListTitle className='management-list-title'>트랙 관리</ManagementListTitle>
          </SideBarBtn>
          <SideBarBtn className='side-bar-btn'>
            <SideBarListSvg
              xmlns='http://www.w3.org/2000/svg'
              className='side-bar-list-svg'
              fill='none'
            >
              <path
                fill='#ADADAD'
                d='M19.991 2.002a1 1 0 0 0-1 1v.637a9.036 9.036 0 0 1-7 3.363h-6a3.003 3.003 0 0 0-3 3v2a3.003 3.003 0 0 0 3 3h.484l-2.403 5.606a.999.999 0 0 0 .92 1.394h4a.999.999 0 0 0 .918-.607l2.724-6.355a9.026 9.026 0 0 1 6.357 3.325v.637a1 1 0 0 0 2 0v-16a.998.998 0 0 0-1-1Zm-14 11a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v4h-1Zm2.341 7H6.508l2.142-5h1.825l-2.143 5Zm10.66-4.478a11.052 11.052 0 0 0-7-2.522h-3v-4h3a11.053 11.053 0 0 0 7-2.522v9.044Z'
              />
            </SideBarListSvg>
            <ManagementListTitle className='management-list-title'>게시물 관리</ManagementListTitle>
          </SideBarBtn>
          <SideBarBtn className='side-bar-btn'>
            <SideBarListSvg
              cSideSideBarListSvg='side-bar-list-svg'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M17 11H18C18.2652 11 18.5196 10.8946 18.7071 10.7071C18.8946 10.5196 19 10.2652 19 10V9C19 8.73478 18.8946 8.48043 18.7071 8.29289C18.5196 8.10536 18.2652 8 18 8H17C16.7348 8 16.4804 8.10536 16.2929 8.29289C16.1054 8.48043 16 8.73478 16 9V10C16 10.2652 16.1054 10.5196 16.2929 10.7071C16.4804 10.8946 16.7348 11 17 11ZM6 12H11C11.2652 12 11.5196 11.8946 11.7071 11.7071C11.8946 11.5196 12 11.2652 12 11C12 10.7348 11.8946 10.4804 11.7071 10.2929C11.5196 10.1054 11.2652 10 11 10H6C5.73478 10 5.48043 10.1054 5.29289 10.2929C5.10536 10.4804 5 10.7348 5 11C5 11.2652 5.10536 11.5196 5.29289 11.7071C5.48043 11.8946 5.73478 12 6 12ZM22 4H2C1.73478 4 1.48043 4.10536 1.29289 4.29289C1.10536 4.48043 1 4.73478 1 5V19C1 19.2652 1.10536 19.5196 1.29289 19.7071C1.48043 19.8946 1.73478 20 2 20H22C22.2652 20 22.5196 19.8946 22.7071 19.7071C22.8946 19.5196 23 19.2652 23 19V5C23 4.73478 22.8946 4.48043 22.7071 4.29289C22.5196 4.10536 22.2652 4 22 4ZM21 18H3V6H21V18ZM6 16H11C11.2652 16 11.5196 15.8946 11.7071 15.7071C11.8946 15.5196 12 15.2652 12 15C12 14.7348 11.8946 14.4804 11.7071 14.2929C11.5196 14.1054 11.2652 14 11 14H6C5.73478 14 5.48043 14.1054 5.29289 14.2929C5.10536 14.4804 5 14.7348 5 15C5 15.2652 5.10536 15.5196 5.29289 15.7071C5.48043 15.8946 5.73478 16 6 16Z'
                fill='#ADADAD'
              />
            </SideBarListSvg>
            <ManagementListTitle className='management-list-title'>
              공지사항 관리
            </ManagementListTitle>
          </SideBarBtn>
        </div>
      </div>
    </SideBar>
  );
};

export default AdminSideBar;
