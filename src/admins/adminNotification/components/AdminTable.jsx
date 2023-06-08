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

const AdminTable = () => {
  const [enrollModal, setEnrollModal] = useState(false);
  const [nowPage, setNowPage] = useState(0);

  const toggleEnrollModal = () => {
    setEnrollModal(!enrollModal);
  };

  const { isLoading, data, error } = useGetNotificationInfo(0, 12);

  if (isLoading) return <span>로딩중...</span>;
  if (error) return <span>An error has occurred: {error.message}</span>;

  return (
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
      <AdminTableBody notifications={data.objArr} />
      <PageNation
        totalDataNumber={30}
        numberByPage={12}
        nowPage={nowPage}
        setNowPage={setNowPage}
      />
    </div>
  );
};

export default AdminTable;
