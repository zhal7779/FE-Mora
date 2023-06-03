import { TableTitle } from '../styledComponents/tableComponent';
import PageNation from './PageNation';
import AdminTableHead from './AdminTableHead';
import AdminTableBody from './AdminTableBody';

const AdminTable = ({ toggleModal }) => {
  // 추후 api 받아오는 걸로 변경 예정(얘도 함수로 따로 빼서 객체로 넘긴 다음 구조분해할당으로 값 2개 받아오자!)
  const totalNumber = 30,
    numberByPage = 14;

  return (
    <div>
      <TableTitle className='table-title'>사용자 목록</TableTitle>
      <AdminTableHead />
      <AdminTableBody toggleModal={toggleModal} />
      <PageNation totalDataNumber={totalNumber} numberByPage={numberByPage} />
    </div>
  );
};

export default AdminTable;
