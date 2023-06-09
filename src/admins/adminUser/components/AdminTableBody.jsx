import { useState } from 'react';

import { DetailBtn, UserInfo } from '../styledComponents/TableComponent';
import tableBodyData from '../data/userData';
import DeleteButton from './DeleteButton';
import UserModal from './UserModal';

const AdminTableBody = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <ul className='user-info-list'>
      {tableBodyData.map((info) => {
        return (
          <UserInfo className='user-info' key={info.userId}>
            {/* 아래애들 컴포넌트로 빼서 prop으로 데이터 넘겨줘서 map 돌릴까? */}
            <span>{info.userId}</span>
            <span>{info.name}</span>
            <span className='email'>{info.email}</span>
            <span className='password'>{info.password}</span>
            <span>{info.createdDate}</span>
            <span>
              <DetailBtn className='detail-btn' onClick={toggleModal}>
                보기
              </DetailBtn>
            </span>
            <DeleteButton />
          </UserInfo>
        );
      })}
      <UserModal modal={modal} toggleModal={toggleModal} />
    </ul>
  );
};

export default AdminTableBody;
