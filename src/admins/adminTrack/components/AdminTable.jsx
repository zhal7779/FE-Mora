import { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchReadTrackInfo } from '../apis/trackApis';

import EnrollModal from './EnrollModal';
import AdminTableHead from './AdminTableHead';
import AdminTableBody from './AdminTableBody';
import SearchBar from '../../adminCommon/components/SearchBar';
import PageNation from '../../adminCommon/components/PageNation';
import LoadingComponent from '../../adminCommon/components/LoadingComponent';
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
    ['admin', 'track', 'get', currentPage, keyword],
    async () => await fetchReadTrackInfo(currentPage, 12, keyword)
  );

  if (isLoading) return <LoadingComponent search={'트랙명'} title={'트랙'} />;
  if (error) return <span>An error has occurred: {error.message}</span>;

  return (
    <>
      <SearchBar placeholder={'트랙명 검색'} setKeyword={setKeyword} />

      <MainContentHeaderBlock>
        <TableTitleBlock>
          <TableTitle className='table-title'>트랙 관리</TableTitle>
          {keyword && <TableSearchResult>'{keyword}' 검색결과</TableSearchResult>}
        </TableTitleBlock>
        <EnrollButton className='modal-button-submit' onClick={toggleEnrollModal} $purple>
          등록
        </EnrollButton>
        {enrollModal && (
          <EnrollModal
            title={'트랙 등록'}
            enrollModal={enrollModal}
            toggleEnrollModal={toggleEnrollModal}
          />
        )}
      </MainContentHeaderBlock>

      <AdminTableHead />
      <AdminTableBody tracks={data.objArr} />

      <PageNation
        totalPages={data.totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default AdminTable;
