import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { fetchDeleteNotification } from '../apis/postApi';

import DeleteButton from './DeleteButton';
import NotificationModal from './NotificationModal';
import { DetailBtn, NotificationInfo } from '../styledComponents/TableComponent';

const AdminTableBody = ({ notifications }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalNotificationId, setModalNotificationId] = useState('');
  const queryClient = useQueryClient();

  const handleDelete = (id) => {
    const response = confirm('삭제하시겠습니까?');
    if (response) {
      deleteNotification(id);
      // 얘는 그냥 컴포넌트 리렌더링 하기 위한 코드. 의미 없다.
      // 근데 이렇게 쓰는 게 맞나?
      setModal(false);
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
    onSuccess() {
      queryClient.invalidateQueries(['admin', 'notification', 'get']);
    },
    onError(error) {
      console.log(error);
    },
  });

  if (error) return <span>An error has occurred: {error.message}</span>;

  return (
    <ul className='user-info-list'>
      {notifications.map((data, idx) => {
        return (
          <NotificationInfo className='user-info' key={idx}>
            <span>{data.Admin.name}</span>
            <span className='title'>{data.title}</span>
            <span className='content'>{data.content}</span>
            <span>{data.createdAt.slice(0, 10)}</span>
            <span>
              <DetailBtn className='detail-btn' onClick={() => handleDetailClick(data.id)}>
                보기
              </DetailBtn>
            </span>
            <DeleteButton
              onClick={() => {
                handleDelete(data.id);
              }}
            />
          </NotificationInfo>
        );
      })}
      {isModalOpen && (
        <NotificationModal
          id={modalNotificationId}
          handleModalCancelClick={handleModalCancelClick}
        />
      )}
    </ul>
  );
};

export default AdminTableBody;
