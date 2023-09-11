import { useState } from 'react';
import { useMutation } from 'react-query';
import { fetchDeleteUser } from '../apis/userApis';

import UserModal from './UserModal';
import DeleteButton from '../../adminCommon/components/DeleteButton';
import { DetailBtn, UserInfo } from '../styledComponents/TableComponent';

const AdminTableBody = ({ users }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalUserId, setModalUserId] = useState('');

  const handleDelete = (email) => {
    const response = confirm('삭제하시겠습니까?');
    if (response) {
      deleteUser(email);
      setIsModalOpen(false);
    }
  };

  const handleDetailClick = (id) => {
    setModalUserId(id);
    setIsModalOpen(true);
  };

  const handleModalCancelClick = () => {
    setIsModalOpen(false);
  };

  const { mutate: deleteUser, error } = useMutation((email) => fetchDeleteUser(email), {
    onError(error) {
      console.error(error);
    },
  });

  return (
    <ul className='user-info-list'>
      {users.map((data, idx) => {
        return (
          <UserInfo className='user-info' key={idx}>
            <span className='name'>{data.name}</span>
            <span className='email'>{data.email}</span>
            <span className='password'>**********</span>
            <span className='created-date'>{data.createdAt.slice(0, 10)}</span>
            <span>
              <DetailBtn className='detail-btn' onClick={() => handleDetailClick(data.id)}>
                보기
              </DetailBtn>
            </span>
            <DeleteButton onClick={() => handleDelete(data.email)} />
          </UserInfo>
        );
      })}
      {isModalOpen && (
        <UserModal id={modalUserId} handleModalCancelClick={handleModalCancelClick} />
      )}
    </ul>
  );
};

export default AdminTableBody;
