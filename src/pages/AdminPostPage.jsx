import Header from '../admins/adminCommon/components/Header';
import AdminTable from '../admins/adminPost/components/AdminTable';
import AdminBlock from '../admins/adminCommon/components/AdminBlock';
import AdminSideBar from '../admins/adminCommon/components/AdminSideBar';
import { POSTS_BUTTON } from '../admins/adminCommon/constants/sideBarCategory';
import { AdminMainContainer } from '../admins/adminCommon/styledComponents/AdminMainContainer';

const AdminPostPage = () => {
  return (
    <>
      <Header />
      <AdminBlock>
        <AdminSideBar nowCategoryName={POSTS_BUTTON} />
        <AdminMainContainer>
          <AdminTable />
        </AdminMainContainer>
      </AdminBlock>
    </>
  );
};

export default AdminPostPage;
