import { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchReadNotificationInfo } from '../apis/postApi';

import SearchBar from './SearchBar';
import EnrollModal from './EnrollModal';
import AdminTableHead from './AdminTableHead';
import AdminTableBody from './AdminTableBody';
import PageNation from '../../adminCommon/components/PageNation';
import {
  EnrollButton,
  MainContentHeaderBlock,
  TableTitle,
} from '../styledComponents/TableComponent';

const AdminTable = () => {
  const [enrollModal, setEnrollModal] = useState(false);
  const [nowPage, setNowPage] = useState(0);
  const [notification, setNotification] = useState([]);

  const toggleEnrollModal = () => {
    setEnrollModal(!enrollModal);
  };

  // const { isLoading, data, error } = useGetNotificationInfo(0, 12);
  const { data, isLoading, error } = useQuery(
    ['admin', 'notification', 'get'],
    () => fetchReadNotificationInfo(0, 12, ''),
    {
      staleTime: Infinity,
    }
  );

  if (isLoading) return <span>로딩중...</span>;
  if (error) return <span>An error has occurred: {error.message}</span>;

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
          totalDataNumber={notification.length || data.totalItems}
          numberByPage={12}
          nowPage={nowPage}
          setNowPage={setNowPage}
          keyword={notification || ''}
        />
      </div>
    </>
  );
};

export default AdminTable;
