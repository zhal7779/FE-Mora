import { Link } from 'react-router-dom';
import { SideBar } from '../styledComponents/AdminSideBarStyle';
import {
  UserButton,
  ReportButton,
  PlanButton,
  TrackButton,
  PostsButton,
  NotificationButton,
} from './SideBarSVGs';
import {
  USER_BUTTON,
  REPORT_BUTTON,
  PLAN_BUTTON,
  TRACK_BUTTON,
  POSTS_BUTTON,
  NOTIFICATION_BUTTON,
} from '../constants/sideBarCategory';

const AdminSideBar = ({ nowCategoryName }) => {
  return (
    <SideBar>
      <div>
        <h1>관리자</h1>
      </div>
      <div className='management-list'>
        <p>관리 목록</p>
        <div>
          <Link to='/admin/users'>
            <UserButton
              nowCategory={nowCategoryName === USER_BUTTON && true}
              title={'사용자 관리'}
            />
          </Link>
          <Link to='/admin/reports'>
            <ReportButton
              nowCategory={nowCategoryName === REPORT_BUTTON && true}
              title={'신고 관리'}
            />
          </Link>
          <Link to='/admin/posts'>
            <PostsButton
              nowCategory={nowCategoryName === POSTS_BUTTON && true}
              title={'게시물 관리'}
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
