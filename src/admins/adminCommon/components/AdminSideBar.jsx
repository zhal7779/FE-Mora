import { SideBar } from '../../adminUser/styledComponents/adminSideBar';
import {
  UserSvg,
  ReportSvg,
  CalendarSvg,
  TrackSvg,
  PostsSvg,
  NotificationSvg,
} from './SideBarSVGs';
import {
  USER_SVG,
  REPORT_SVG,
  CALENDAR_SVG,
  TRACK_SVG,
  POSTS_SVG,
  NOTIFICATION_SVG,
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
          {/* 나중에 각 컴포넌트를 Link로 감싸기 */}
          <UserSvg nowCategory={nowCategoryName === USER_SVG && true} />
          <ReportSvg nowCategory={nowCategoryName === REPORT_SVG && true} />
          <CalendarSvg nowCategory={nowCategoryName === CALENDAR_SVG && true} />
          <TrackSvg nowCategory={nowCategoryName === TRACK_SVG && true} />
          <PostsSvg nowCategory={nowCategoryName === POSTS_SVG && true} />
          <NotificationSvg nowCategory={nowCategoryName === NOTIFICATION_SVG && true} />
        </div>
      </div>
    </SideBar>
  );
};

export default AdminSideBar;
