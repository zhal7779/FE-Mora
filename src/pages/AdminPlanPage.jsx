import Header from '../admins/adminCommon/components/Header';
import SearchBar from '../admins/adminCommon/components/SearchBar';
import AdminTable from '../admins/adminPlan/components/AdminTable';
import AdminBlock from '../admins/adminCommon/components/AdminBlock';
import AdminSideBar from '../admins/adminCommon/components/AdminSideBar';
import { PLAN_BUTTON } from '../admins/adminCommon/constants/sideBarCategory';
import { AdminMainContainer } from '../admins/adminCommon/styledComponents/AdminMainContainer';

const AdminPlanPage = () => {
  return (
    <>
      <Header />
      <AdminBlock>
        <AdminSideBar nowCategoryName={PLAN_BUTTON} />
        <AdminMainContainer>
          <SearchBar />
          <AdminTable />
        </AdminMainContainer>
      </AdminBlock>
    </>
  );
};

export default AdminPlanPage;
