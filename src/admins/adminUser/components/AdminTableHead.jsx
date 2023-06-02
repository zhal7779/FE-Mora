import { TableRowInfo } from '../styledComponents/tableComponent';

const tableColumnData = ['유저ID', '이름', '이메일', '비밀번호', '가입 날짜', '상세보기', '삭제'];

const AdminTableHead = () => {
  return (
    <TableRowInfo className='table-row-info'>
      {tableColumnData.map((columnName, idx) => {
        return <span key={columnName + idx}>{columnName}</span>;
      })}
    </TableRowInfo>
  );
};

export default AdminTableHead;
