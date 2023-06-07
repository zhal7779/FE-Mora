import { Link } from 'react-router-dom';
import { SideBar } from '../styledComponents/adminSideBar';
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
            <ReportButton nowCategory={nowCategoryName === REPORT_BUTTON && true} />
          </Link>
          <Link to='/admin/plans'>
            <PlanButton nowCategory={nowCategoryName === PLAN_BUTTON && true} />
          </Link>
          <Link to='/admin/tracks'>
            <TrackButton nowCategory={nowCategoryName === TRACK_BUTTON && true} />
          </Link>
          <Link to='/admin/users'>
            <PostsButton nowCategory={nowCategoryName === POSTS_BUTTON && true} />
          </Link>
          <Link to='/admin/users'>
            <NotificationButton nowCategory={nowCategoryName === NOTIFICATION_BUTTON && true} />
          </Link>
        </div>
      </div>
    </SideBar>
  );
};

export default AdminSideBar;
