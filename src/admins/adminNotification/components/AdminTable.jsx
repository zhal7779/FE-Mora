import { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchReadNotificationInfo } from '../apis/notificationApis';

import PageNation from './PageNation';
import EnrollModal from './EnrollModal';
import AdminTableHead from './AdminTableHead';
import AdminTableBody from './AdminTableBody';
import SearchBar from '../../adminCommon/components/SearchBar';
import {
  EnrollButton,
  MainContentHeaderBlock,
  TableSearchResult,
  TableTitle,
  TableTitleBlock,
} from '../styledComponents/TableComponent';

const AdminTable = () => {
  const [enrollModal, setEnrollModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [keyword, setKeyword] = useState('');

  const toggleEnrollModal = () => {
    setEnrollModal(!enrollModal);
  };

  const { data, isLoading, error } = useQuery(
    ['admin', 'notification', 'get', currentPage, keyword],
    async () => await fetchReadNotificationInfo(currentPage, 12, keyword)
  );

  if (isLoading) return <span>로딩중...</span>;
  if (error) return <span>An error has occurred: {error.message}</span>;

  return (
    <>
      <SearchBar placeholder={'공지 제목 검색'} setKeyword={setKeyword} />

      <MainContentHeaderBlock>
        <TableTitleBlock>
          <TableTitle className='table-title'>공지 관리</TableTitle>
          {keyword && <TableSearchResult>'{keyword}' 검색결과</TableSearchResult>}
        </TableTitleBlock>
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
        totalPages={data.totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default AdminTable;
