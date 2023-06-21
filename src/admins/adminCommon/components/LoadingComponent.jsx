import SearchBar from './SearchBar';
import { TableTitle, EnrollButton } from '../../adminNotification/styledComponents/TableComponent';
import {
  MainContentHeaderBlock,
  TableTitleBlock,
} from '../../adminUser/styledComponents/TableComponent';

const LoadingComponent = ({ search, title }) => {
  return (
    <>
      <SearchBar placeholder={search?.slice(0, 4) !== '2023' ? `${search} 검색` : search} />

      <MainContentHeaderBlock>
        <TableTitleBlock>
          <TableTitle className='table-title'>{title} 관리</TableTitle>
        </TableTitleBlock>
        {title !== '게시물' && (
          <EnrollButton className='modal-button-submit' $purple>
            등록
          </EnrollButton>
        )}
      </MainContentHeaderBlock>
    </>
  );
};

export default LoadingComponent;
