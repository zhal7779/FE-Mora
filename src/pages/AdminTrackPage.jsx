import { useState } from 'react';

import Modal from '../admins/adminCommon/components/Modal';
import Header from '../admins/adminCommon/components/Header';
import SearchBar from '../admins/adminCommon/components/SearchBar';
import AdminTable from '../admins/adminTrack/components/AdminTable';
import AdminBlock from '../admins/adminCommon/components/AdminBlock';
import AdminSideBar from '../admins/adminCommon/components/AdminSideBar';
import { TRACK_BUTTON } from '../admins/adminCommon/constants/sideBarCategory';
import { AdminMainContainer } from '../admins/adminCommon/styledComponents/adminMainContainer';

const AdminTrackPage = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <Header />
      <AdminBlock>
        <AdminSideBar nowCategoryName={TRACK_BUTTON} />
        <AdminMainContainer>
          <SearchBar />
          <AdminTable toggleModal={toggleModal} />
        </AdminMainContainer>
      </AdminBlock>
      <Modal modal={modal} toggleModal={toggleModal} />
    </>
  );
};

export default AdminTrackPage;
