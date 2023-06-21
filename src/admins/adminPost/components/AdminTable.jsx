import { useState } from 'react';

import { AdminPost } from './AdminPost';
import SearchBar from '../../adminCommon/components/SearchBar';
import {
  MainContentHeaderBlock,
  TableSearchResult,
  TableTitle,
  TableTitleBlock,
} from '../styledComponents/TableComponent';

const AdminTable = () => {
  const [keyword, setKeyword] = useState('');

  return (
    <>
      <SearchBar placeholder={'게시물 제목 검색'} setKeyword={setKeyword} />

      <MainContentHeaderBlock>
        <TableTitleBlock>
          <TableTitle className='table-title'>게시물 관리</TableTitle>
          {keyword && <TableSearchResult>'{keyword}' 검색결과</TableSearchResult>}
        </TableTitleBlock>
      </MainContentHeaderBlock>

      <AdminPost keyword={keyword} />
    </>
  );
};

export default AdminTable;
