import { useState } from 'react';

import EnrollModal from './EnrollModal';
import AdminTableHead from './AdminTableHead';
import AdminTableBody from './AdminTableBody';
import PageNation from '../../adminCommon/components/PageNation';
import {
  EnrollButton,
  MainContentHeaderBlock,
  TableTitle,
} from '../styledComponents/tableComponent';

const AdminTable = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  // 추후 api 받아오는 걸로 변경 예정(얘도 함수로 따로 빼서 객체로 넘긴 다음 구조분해할당으로 값 2개 받아오자!)
  const totalNumber = 30,
    numberByPage = 14;

  return (
    <div>
      <MainContentHeaderBlock>
        <TableTitle className='table-title'>트랙 관리</TableTitle>
        <EnrollButton className='modal-button-submit' onClick={() => setModal(!modal)} $purple>
          등록
        </EnrollButton>
        {modal && <EnrollModal modal={true} toggleModal={toggleModal} />}
      </MainContentHeaderBlock>

      <AdminTableHead />
      <AdminTableBody toggleModal={toggleModal} />
      <PageNation totalDataNumber={totalNumber} numberByPage={numberByPage} />
    </div>
  );
};

export default AdminTable;
