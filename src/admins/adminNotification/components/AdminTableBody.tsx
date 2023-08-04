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

interface DataProps {
  Admin: { name: string; email: string };
  admin_id: string;
  content: string;
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
}

interface NotificationProps {
  notifications: DataProps[];
}

const AdminTableBody = ({ notifications }: NotificationProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalNotificationId, setModalNotificationId] = useState('');

  const handleDelete = (id: string) => {
    const response = confirm('삭제하시겠습니까?');
    if (response) {
      deleteNotification(id);
      setIsModalOpen(false);
    }
  };

  const handleDetailClick = (id: string) => {
    setModalNotificationId(id);
    setIsModalOpen(true);
  };

  const handleModalCancelClick = () => {
    setIsModalOpen(false);
  };

  const { mutate: deleteNotification } = useMutation((id: string) => fetchDeleteNotification(id), {
    onError(error) {
      console.error(error);
    },
  });

  return (
    <NotificationListBlock className='user-info-list'>
      {notifications.map((data: DataProps, idx: number) => {
        return (
          <NotificationInfo className='user-info' key={idx}>
            <span className='name'>{data.Admin?.name || '관리자'}</span>
            <span className='title'>{data.title}</span>
            <span className='content'>{data.content}</span>
            <span className='created-date'>{data.createdAt.slice(0, 10)}</span>
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
