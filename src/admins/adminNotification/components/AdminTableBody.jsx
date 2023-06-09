import { useState } from 'react';

import { useDeleteNotification } from '../apis/postApi';
import { DetailBtn, NotificationInfo } from '../styledComponents/TableComponent';
import DeleteButton from './DeleteButton';

const AdminTableBody = ({ notifications }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <ul className='user-info-list'>
      {notifications.map((data, idx) => {
        return (
          <NotificationInfo className='user-info' key={idx} name={data.id}>
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
                const response = confirm('삭제하시겠습니까?');
                if (response) {
                  useDeleteNotification(data.id);
                }
              }}
            />
          </NotificationInfo>
        );
      })}
    </ul>
  );
};

export default AdminTableBody;
