import AdminBlock from '../admins/adminCommon/components/AdminBlock';
import AdminSideBar from '../admins/adminCommon/components/AdminSideBar';
import Header from '../admins/adminCommon/components/Header';
import SearchBar from '../admins/adminCommon/components/SearchBar';
import { AdminMainContainer } from '../admins/adminCommon/styledComponents/adminMainContainer';
import { NOTIFICATION_BUTTON } from '../admins/adminCommon/constants/sideBarCategory';

const AdminNotificationPage = () => {
  return (
    <>
      <Header />
      <AdminBlock>
        <AdminSideBar nowCategoryName={NOTIFICATION_BUTTON} />
        <AdminMainContainer>
          <SearchBar />
        </AdminMainContainer>
      </AdminBlock>
    </>
  );
};

export default AdminNotificationPage;
