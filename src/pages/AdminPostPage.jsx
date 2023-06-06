import AdminBlock from '../admins/adminCommon/components/AdminBlock';
import AdminSideBar from '../admins/adminCommon/components/AdminSideBar';
import Header from '../admins/adminCommon/components/Header';
import SearchBar from '../admins/adminCommon/components/SearchBar';
import AdminPost from '../admins/adminPost/components/AdminPost';
import { POSTS_BUTTON } from '../admins/adminCommon/constants/sideBarCategory';
import { AdminMainContainer } from '../admins/adminCommon/styledComponents/adminMainContainer';

const AdminPostPage = () => {
  return (
    <>
      <Header />
      <AdminBlock>
        <AdminSideBar nowCategoryName={POSTS_BUTTON} />
        <AdminMainContainer>
          <SearchBar />
          <AdminPost />
        </AdminMainContainer>
      </AdminBlock>
    </>
  );
};

export default AdminPostPage;
