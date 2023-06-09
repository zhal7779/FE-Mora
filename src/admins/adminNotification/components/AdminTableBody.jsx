import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { fetchDeleteNotification } from '../apis/postApi';

import { DetailBtn, NotificationInfo } from '../styledComponents/TableComponent';
import DeleteButton from './DeleteButton';

const AdminTableBody = ({ notifications }) => {
  const [modal, setModal] = useState(false);
  const queryClient = useQueryClient();

  const toggleModal = () => {
    setModal(!modal);
  };

  const { mutate: deleteNotification, error } = useMutation(
    (id) => {
      fetchDeleteNotification(id);
    },
    {
      onSuccess() {
        queryClient.invalidateQueries(['admin', 'notification', 'get']);
      },
      onError(error) {
        console.log(error);
      },
    }
  );

  const handleDelete = (id) => {
    const response = confirm('삭제하시겠습니까?');
    if (response) {
      deleteNotification(id);
      // 얘는 그냥 컴포넌트 리렌더링 하기 위한 코드. 의미 없다.
      // 근데 이렇게 쓰는 게 맞나?
      setModal(false);
    }
  };

  if (error) return <span>An error has occurred: {error.message}</span>;

  return (
    <ul className='user-info-list'>
      {notifications.map((data, idx) => {
        return (
          <NotificationInfo className='user-info' key={idx}>
            {/* 아래애들 컴포넌트로 빼서 prop으로 데이터 넘겨줘서 map 돌릴까? */}
            <span>{data.Admin.name}</span>
            <span className='title'>{data.title}</span>
            <span className='content'>{data.content}</span>
            <span>{data.createdAt.slice(0, 10)}</span>
            <span>
              <DetailBtn className='detail-btn' modal={modal} toggleModal={toggleModal}>
                보기
              </DetailBtn>
            </span>
            {/* 삭제 함수에 id 실어서 보내기 */}
            <DeleteButton
              onClick={() => {
                handleDelete(data.id);
              }}
            />
          </NotificationInfo>
        );
      })}
    </ul>
  );
};

export default AdminTableBody;
