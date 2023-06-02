import { useState } from 'react';
import styled from 'styled-components';

import AdminBlock from './AdminBlock';
import AdminSideBar from '../components/AdminSideBar';
import SearchBar from '../components/SearchBar';
import Modal from '../../adminCommon/components/Modal';
import Header from '../components/Header';
import AdminTable from '../components/AdminTable';
import { AdminMainContainer } from '../styledComponents/adminMainContainer';

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
