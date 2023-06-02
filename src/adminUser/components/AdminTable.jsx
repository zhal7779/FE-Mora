import React from 'react';
import { TableTitle } from '../styledComponents/tableComponent';
import PageNation from './PageNation';
import AdminTableHead from './AdminTableHead';
import AdminTableBody from './AdminTableBody';

const AdminTable = ({ toggleModal }) => {
  return (
    <div>
      <TableTitle className='table-title'>사용자 목록</TableTitle>
      <AdminTableHead />
      <AdminTableBody toggleModal={toggleModal} />
      <PageNation />
    </div>
  );
};

export default AdminTable;
