import { Link, useNavigate } from 'react-router-dom';

import { SideBar, SideBarButtonBlock } from '../styledComponents/AdminSideBarStyle';
import {
  UserButton,
  PlanButton,
  TrackButton,
  PostsButton,
  NotificationButton,
} from './SideBarSVGs';
import {
  USER_BUTTON,
  PLAN_BUTTON,
  TRACK_BUTTON,
  POSTS_BUTTON,
  NOTIFICATION_BUTTON,
} from '../constants/sideBarCategory';

const AdminSideBar = ({ nowCategoryName }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    const result = confirm('로그아웃 하시겠습니까?');
    if (result) {
      sessionStorage.removeItem('adminToken');
      alert('로그아웃 되었습니다.');
      navigate('/admin/login');
    }
  };

  return (
    <SideBar>
      <div>
        <h1>관리자</h1>
        <SideBarButtonBlock onClick={handleLogOut}>로그아웃</SideBarButtonBlock>
      </div>
      <div className='management-list'>
        <p>관리 목록</p>
        <div>
          <Link to='/admin/posts'>
            <PostsButton
              nowCategory={nowCategoryName === POSTS_BUTTON && true}
              title={'게시물 관리'}
            />
          </Link>
          <Link to='/admin/users'>
            <UserButton
              nowCategory={nowCategoryName === USER_BUTTON && true}
              title={'사용자 관리'}
            />
          </Link>
          <Link to='/admin/notifications'>
            <NotificationButton
              nowCategory={nowCategoryName === NOTIFICATION_BUTTON && true}
              title={'공지사항 관리'}
            />
          </Link>
          <Link to='/admin/plans'>
            <PlanButton nowCategory={nowCategoryName === PLAN_BUTTON && true} title={'일정 관리'} />
          </Link>
          <Link to='/admin/tracks'>
            <TrackButton
              nowCategory={nowCategoryName === TRACK_BUTTON && true}
              title={'트랙 관리'}
            />
          </Link>
        </div>
      </div>
    </SideBar>
  );
};

export default AdminSideBar;
