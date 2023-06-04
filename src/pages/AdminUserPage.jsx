import { useState } from 'react';

import AdminBlock from '../admins/adminUser/components/AdminBlock';
import AdminSideBar from '../admins/adminUser/components/AdminSideBar';
import SearchBar from '../admins/adminUser/components/SearchBar';
import Header from '../admins/adminUser/components/Header';
import AdminTable from '../admins/adminUser/components/AdminTable';
import Modal from '../admins/adminCommon/components/Modal';
import { AdminMainContainer } from '../admins/adminUser/styledComponents/adminMainContainer.js';

const AdminUser = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <Header />
      <AdminBlock>
        <AdminSideBar />
        <AdminMainContainer>
          <SearchBar />
          <AdminTable toggleModal={toggleModal} />
        </AdminMainContainer>
      </AdminBlock>
      <Modal modal={modal} toggleModal={toggleModal} />
    </>
  );
};

export default AdminUser;
