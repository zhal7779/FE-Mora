import AdminTableHead from './AdminTableHead';
import AdminTableBody from './AdminTableBody';
import PageNation from '../../adminCommon/components/PageNation';
import { MainContentHeaderBlock, TableTitle } from '../styledComponents/TableComponent';

const AdminTable = () => {
  const totalNumber = 30,
    numberByPage = 14;

  return (
    <div>
      <MainContentHeaderBlock>
        <TableTitle className='table-title'>신고 목록</TableTitle>
      </MainContentHeaderBlock>

      <AdminTableHead />
      <AdminTableBody />
      <PageNation totalDataNumber={totalNumber} numberByPage={numberByPage} />
    </div>
  );
};

export default AdminTable;
