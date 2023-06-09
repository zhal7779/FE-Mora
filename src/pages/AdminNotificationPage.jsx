import Header from '../admins/adminCommon/components/Header';
import SearchBar from '../admins/adminCommon/components/SearchBar';
import AdminBlock from '../admins/adminCommon/components/AdminBlock';
import AdminSideBar from '../admins/adminCommon/components/AdminSideBar';
import AdminTable from '../admins/adminNotification/components/AdminTable';
import { NOTIFICATION_BUTTON } from '../admins/adminCommon/constants/sideBarCategory';
import { AdminMainContainer } from '../admins/adminCommon/styledComponents/AdminMainContainer';

const AdminNotificationPage = () => {
  return (
    <>
      <Header />
      <AdminBlock>
        <AdminSideBar nowCategoryName={NOTIFICATION_BUTTON} />
        <AdminMainContainer>
          <SearchBar />
          <AdminTable />
        </AdminMainContainer>
      </AdminBlock>
    </>
  );
};

export default AdminNotificationPage;
