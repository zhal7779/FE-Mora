import { DetailBtn, UserInfo } from '../styledComponents/TableComponent';
import tableBodyData from '../data/planData';
import DeleteButton from './DeleteButton';

const AdminTableBody = () => {
  return (
    <ul className='user-info-list'>
      {tableBodyData.map((info, idx) => {
        return (
          <UserInfo className='user-info' key={idx}>
            {/* 아래애들 컴포넌트로 빼서 prop으로 데이터 넘겨줘서 map 돌릴까? */}
            <span>{info.adminId}</span>
            {/* 나중에 링크 있으면  */}
            <span className='title'>{info.title}</span>
            <span>{info.startDate}</span>
            <span>{info.endDate}</span>
            <span>{info.createdAt}</span>
            <span>
              <DetailBtn className='detail-btn'>보기</DetailBtn>
            </span>
            <DeleteButton />
          </UserInfo>
        );
      })}
    </ul>
  );
};

export default AdminTableBody;
