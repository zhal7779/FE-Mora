import Header from '../admins/adminCommon/components/Header';
import AdminBlock from '../admins/adminCommon/components/AdminBlock';
import AdminSideBar from '../admins/adminCommon/components/AdminSideBar';
import { TRACK_BUTTON } from '../admins/adminCommon/constants/sideBarCategory';
import { AdminMainContainer } from '../admins/adminCommon/styledComponents/AdminMainContainer';

import AdminTable from '../admins/adminTrack/components/AdminTable';

const AdminTrackPage = () => {
  return (
    <>
      <Header />
      <AdminBlock>
        <AdminSideBar nowCategoryName={TRACK_BUTTON} />
        <AdminMainContainer>
          <AdminTable />
        </AdminMainContainer>
      </AdminBlock>
    </>
  );
};

export default AdminTrackPage;
