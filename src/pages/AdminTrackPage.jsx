import { useState } from 'react';

import Header from '../admins/adminCommon/components/Header';
import SearchBar from '../admins/adminCommon/components/SearchBar';
import AdminBlock from '../admins/adminCommon/components/AdminBlock';
import AdminSideBar from '../admins/adminCommon/components/AdminSideBar';
import { TRACK_BUTTON } from '../admins/adminCommon/constants/sideBarCategory';
import { AdminMainContainer } from '../admins/adminCommon/styledComponents/adminMainContainer';
import TrackModal from '../admins/adminTrack/components/TrackModal';
import AdminTable from '../admins/adminTrack/components/AdminTable';

const AdminTrackPage = () => {
  const [detailModal, setDetailModal] = useState(false);

  const toggleDetailModal = () => {
    setDetailModal(!detailModal);
  };

  return (
    <>
      <Header />
      <AdminBlock>
        <AdminSideBar nowCategoryName={TRACK_BUTTON} />
        <AdminMainContainer>
          <SearchBar />
          <AdminTable toggleDetailModal={toggleDetailModal} />
        </AdminMainContainer>
      </AdminBlock>
      <TrackModal detailModal={detailModal} toggleDetailModal={toggleDetailModal} />
    </>
  );
};

export default AdminTrackPage;
