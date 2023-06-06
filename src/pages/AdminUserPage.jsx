import { useState } from 'react';

import Modal from '../admins/adminCommon/components/Modal';
import Header from '../admins/adminCommon/components/Header';
import AdminBlock from '../admins/adminCommon/components/AdminBlock';
import AdminSideBar from '../admins/adminCommon/components/AdminSideBar';
import SearchBar from '../admins/adminCommon/components/SearchBar';
import AdminTable from '../admins/adminUser/components/AdminTable';
import { USER_BUTTON } from '../admins/adminCommon/constants/sideBarCategory';
import { AdminMainContainer } from '../admins/adminCommon/styledComponents/AdminMainContainer';

const AdminUserPage = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <Header />
      <AdminBlock>
        <AdminSideBar nowCategoryName={USER_BUTTON} />
        <AdminMainContainer>
          <SearchBar />
          <AdminTable toggleModal={toggleModal} />
        </AdminMainContainer>
      </AdminBlock>
      <Modal modal={modal} toggleModal={toggleModal} />
    </>
  );
};

export default AdminUserPage;
