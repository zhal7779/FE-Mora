import { useState } from 'react';
import { useMutation } from 'react-query';
import { fetchDeleteNotification } from '../apis/notificationApis';

import NotificationModal from './NotificationModal';
import DeleteButton from '../../adminCommon/components/DeleteButton';
import {
  DetailBtn,
  NotificationInfo,
  NotificationListBlock,
} from '../styledComponents/TableComponent';

const AdminTableBody = ({ notifications }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalNotificationId, setModalNotificationId] = useState('');

  const handleDelete = (id) => {
    const response = confirm('삭제하시겠습니까?');
    if (response) {
      deleteNotification(id);
      setIsModalOpen(false);
    }
  };

  const handleDetailClick = (id) => {
    setModalNotificationId(id);
    setIsModalOpen(true);
  };

  const handleModalCancelClick = () => {
    setIsModalOpen(false);
  };

  const { mutate: deleteNotification, error } = useMutation((id) => fetchDeleteNotification(id), {
    onError(error) {
      console.error(error);
    },
  });

  if (error) return <span>An error has occurred: {error.message}</span>;

  return (
    <NotificationListBlock className='user-info-list'>
      {notifications.map((data, idx) => {
        return (
          <NotificationInfo className='user-info' key={idx}>
            <span>{data.Admin?.name || '관리자'}</span>
            <span className='title'>{data.title}</span>
            <span className='content'>{data.content}</span>
            <span>{data.createdAt.slice(0, 10)}</span>
            <span>
              <DetailBtn className='detail-btn' onClick={() => handleDetailClick(data.id)}>
                보기
              </DetailBtn>
            </span>
            <DeleteButton onClick={() => handleDelete(data.id)} />
          </NotificationInfo>
        );
      })}
      {isModalOpen && (
        <NotificationModal
          id={modalNotificationId}
          handleModalCancelClick={handleModalCancelClick}
        />
      )}
    </NotificationListBlock>
  );
};

export default AdminTableBody;
