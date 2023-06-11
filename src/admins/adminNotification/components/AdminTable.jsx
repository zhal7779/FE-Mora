import { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchReadNotificationInfo } from '../apis/postApi';

import SearchBar from './SearchBar';
import PageNation from './PageNation';
import EnrollModal from './EnrollModal';
import AdminTableHead from './AdminTableHead';
import AdminTableBody from './AdminTableBody';
import {
  EnrollButton,
  MainContentHeaderBlock,
  TableTitle,
} from '../styledComponents/TableComponent';

const AdminTable = () => {
  const [enrollModal, setEnrollModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchResult, setSearchResult] = useState([]);
  const [keyword, setKeyword] = useState('');

  const toggleEnrollModal = () => {
    setEnrollModal(!enrollModal);
  };

  const { data, isLoading, error } = useQuery(
    ['admin', 'notification', 'get', currentPage],
    async () => await fetchReadNotificationInfo(currentPage, 12, keyword)
  );

  if (isLoading) return <span>로딩중...</span>;
  if (error) return <span>An error has occurred: {error.message}</span>;

  return (
    <>
      <SearchBar
        placeholder={'공지 제목 검색'}
        setSearchResult={setSearchResult}
        keyword={keyword}
        setKeyword={setKeyword}
      />

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
      <AdminTableBody notifications={searchResult.length ? searchResult : data.objArr} />
      <PageNation
        totalPages={data.totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default AdminTable;
