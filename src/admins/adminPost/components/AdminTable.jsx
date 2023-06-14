import { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchReadPostInfo } from '../apis/postApis';

import { AdminPost } from './AdminPost';
import SearchBar from '../../adminCommon/components/SearchBar';
import LoadingComponent from '../../adminCommon/components/LoadingComponent';
import {
  EnrollButton,
  MainContentHeaderBlock,
  TableSearchResult,
  TableTitle,
  TableTitleBlock,
} from '../styledComponents/TableComponent';

const AdminTable = () => {
  const [keyword, setKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  const { data, isLoading, error } = useQuery(
    ['admin', 'post', 'get', currentPage, keyword],
    async () => await fetchReadPostInfo(currentPage, 15, keyword)
  );

  if (isLoading) return <LoadingComponent search={'게시물 제목'} title={'게시물'} />;
  if (error) return <span>An error has occurred: {error.message}</span>;

  return (
    <>
      <SearchBar placeholder={'게시물 제목 검색'} setKeyword={setKeyword} />

      <MainContentHeaderBlock>
        <TableTitleBlock>
          <TableTitle className='table-title'>게시물 관리</TableTitle>
          {keyword && <TableSearchResult>'{keyword}' 검색결과</TableSearchResult>}
        </TableTitleBlock>
      </MainContentHeaderBlock>

      <AdminPost data={data} />
    </>
  );
};

export default AdminTable;
