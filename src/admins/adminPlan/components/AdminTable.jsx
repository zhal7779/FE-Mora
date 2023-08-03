import { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchReadPlanInfo } from '../apis/planApis';

import EnrollModal from './EnrollModal';
import AdminTableHead from './AdminTableHead';
import AdminTableBody from './AdminTableBody';
import SearchBar from '../../adminCommon/components/SearchBar';
import LoadingComponent from '../../adminCommon/components/LoadingComponent';
import {
  EnrollButton,
  MainContentHeaderBlock,
  TableSearchResult,
  TableTitle,
  TableTitleBlock,
} from '../styledComponents/TableComponent';

const date = new Date();
const year = date.getFullYear();
const temporalMonth = date.getMonth() + 1;
const month = temporalMonth < 10 ? `0${temporalMonth}` : temporalMonth;

const AdminTable = () => {
  const [enrollModal, setEnrollModal] = useState(false);
  const [yearMonth, setYearMonth] = useState(`${year}-${month}`);

  const toggleEnrollModal = () => {
    setEnrollModal(!enrollModal);
  };

  const { data, isLoading } = useQuery(
    ['admin', 'plan', 'get', yearMonth],
    async () => await fetchReadPlanInfo(yearMonth)
  );

  if (isLoading) return <LoadingComponent search={'2023-06'} title={'일정'} />;

  return (
    <>
      <SearchBar placeholder={yearMonth} setYearMonth={setYearMonth} />

      <MainContentHeaderBlock>
        <TableTitleBlock>
          <TableTitle className='table-title'>일정 관리</TableTitle>
          {yearMonth && <TableSearchResult>{yearMonth}</TableSearchResult>}
        </TableTitleBlock>
        <EnrollButton className='modal-button-submit' onClick={toggleEnrollModal} $purple>
          등록
        </EnrollButton>
        {enrollModal && (
          <EnrollModal
            title={'일정 등록'}
            enrollModal={enrollModal}
            toggleEnrollModal={toggleEnrollModal}
          />
        )}
      </MainContentHeaderBlock>

      <AdminTableHead />
      <AdminTableBody plans={data} />
    </>
  );
};

export default AdminTable;
