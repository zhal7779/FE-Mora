import { DetailBtn, NotificationInfo } from '../styledComponents/TableComponent';
import DeleteButton from './DeleteButton';

const AdminTableBody = ({ notifications }) => {
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
              <DetailBtn className='detail-btn'>보기</DetailBtn>
            </span>
            <DeleteButton />
          </NotificationInfo>
        );
      })}
    </ul>
  );
};

export default AdminTableBody;
