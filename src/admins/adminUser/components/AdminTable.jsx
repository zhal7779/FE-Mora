import { useState } from 'react';

import AdminTableHead from './AdminTableHead';
import AdminTableBody from './AdminTableBody';
import PageNation from '../../adminCommon/components/PageNation';
import {
  EnrollButton,
  MainContentHeaderBlock,
  TableTitle,
} from '../styledComponents/TableComponent';

const AdminTable = () => {
  const [enrollModal, setEnrollModal] = useState(false);

  const toggleEnrollModal = () => {
    setEnrollModal(!enrollModal);
  };

  // 추후 api 받아오는 걸로 변경 예정(얘도 함수로 따로 빼서 객체로 넘긴 다음 구조분해할당으로 값 2개 받아오자!)
  const totalNumber = 30,
    numberByPage = 14;

  return (
    <div>
      <MainContentHeaderBlock>
        <TableTitle className='table-title'>사용자 목록</TableTitle>
        <EnrollButton className='modal-button-submit' onClick={toggleEnrollModal} $purple>
          등록
        </EnrollButton>
        {enrollModal && <EnrollModal enrollModal={true} toggleEnrollModal={toggleEnrollModal} />}
      </MainContentHeaderBlock>

      <AdminTableHead />
      <AdminTableBody />
      <PageNation totalDataNumber={totalNumber} numberByPage={numberByPage} />
    </div>
  );
};

export default AdminTable;
