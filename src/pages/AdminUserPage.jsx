import { useState } from 'react';

import AdminBlock from '../adminUser/components/AdminBlock';
import AdminSideBar from '../adminUser/components/AdminSideBar';
import SearchBar from '../adminUser/components/SearchBar';
import Modal from '../adminCommon/components/Modal';
import Header from '../adminUser/components/Header';
import AdminTable from '../adminUser/components/AdminTable';
import { AdminMainContainer } from '../adminUser/styledComponents/adminMainContainer';

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
