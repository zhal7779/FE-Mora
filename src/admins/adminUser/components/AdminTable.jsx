import { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchReadUserInfo } from '../apis/userApis';

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
    ['admin', 'user', 'get', currentPage, keyword],
    async () => await fetchReadUserInfo(currentPage, 12, keyword)
  );

  if (isLoading) return <LoadingComponent search={'사용자 이름'} title={'사용자'} />;
  if (error) return <span>An error has occurred: {error.message}</span>;

  return (
    <>
      <SearchBar placeholder={'사용자 이름 검색'} setKeyword={setKeyword} />

      <MainContentHeaderBlock>
        <TableTitleBlock>
          <TableTitle className='table-title'>사용자 관리</TableTitle>
          {keyword && <TableSearchResult>'{keyword}' 검색결과</TableSearchResult>}
        </TableTitleBlock>
        <EnrollButton className='modal-button-submit' onClick={toggleEnrollModal} $purple>
          등록
        </EnrollButton>
        {enrollModal && (
          <EnrollModal
            title={'사용자 등록'}
            enrollModal={enrollModal}
            toggleEnrollModal={toggleEnrollModal}
          />
        )}
      </MainContentHeaderBlock>

      <AdminTableHead />
      <AdminTableBody users={data.objArr} />

      <PageNation
        totalPages={data.totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default AdminTable;
