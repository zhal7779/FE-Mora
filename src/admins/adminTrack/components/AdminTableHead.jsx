import { TableRowInfo } from '../styledComponents/tableComponent';
import tableColumnData from '../data/tableColumnData';

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
