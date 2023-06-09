import { useState } from 'react';
import { useGetNotificationInfo } from '../apis/postApi';

import EnrollModal from './EnrollModal';
import AdminTableHead from './AdminTableHead';
import AdminTableBody from './AdminTableBody';
import PageNation from '../../adminCommon/components/PageNation';
import {
  EnrollButton,
  MainContentHeaderBlock,
  TableTitle,
} from '../styledComponents/TableComponent';
import SearchBar from './SearchBar';

const AdminTable = () => {
  const [enrollModal, setEnrollModal] = useState(false);
  const [nowPage, setNowPage] = useState(0);
  const [notification, setNotification] = useState([]);

  const toggleEnrollModal = () => {
    setEnrollModal(!enrollModal);
  };

  const { isLoading, data, error } = useGetNotificationInfo(0, 12);

  if (isLoading) return <span>로딩중...</span>;
  if (error) return <span>An error has occurred: {error.message}</span>;
  if (data) console.log(data);
  return (
    <>
      <SearchBar placeholder={'공지 제목 검색'} setNotification={setNotification} />
      <div>
        <MainContentHeaderBlock>
          <TableTitle className='table-title'>공지 관리</TableTitle>
          <EnrollButton className='modal-button-submit' onClick={toggleEnrollModal} $purple>
            등록
          </EnrollButton>
          {enrollModal && (
            <EnrollModal
              title={'공지 등록'}
              enrollModal={enrollModal}
              toggleEnrollModal={toggleEnrollModal}
            />
          )}
        </MainContentHeaderBlock>

        <AdminTableHead />
        <AdminTableBody notifications={notification.length ? notification : data.objArr} />
        <PageNation
          totalDataNumber={notification.length ? notification.length : data.totalItems}
          numberByPage={12}
          nowPage={nowPage}
          setNowPage={setNowPage}
        />
      </div>
    </>
  );
};

export default AdminTable;
