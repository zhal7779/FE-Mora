import tableColumnData from '../data/tableColumnData';
import { TableRowInfo } from '../styledComponents/TableComponent';

const AdminTableHead = () => {
  return (
    <TableRowInfo className='table-row-info'>
      {tableColumnData.map((columnName, idx) => {
        return (
          <span key={columnName + idx} className={columnName}>
            {columnName}
          </span>
        );
      })}
    </TableRowInfo>
  );
};

export default AdminTableHead;
