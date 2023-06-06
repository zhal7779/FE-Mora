import { DetailBtn, UserInfo } from '../styledComponents/tableComponent';
import tableBodyData from '../data/trackData';
import DeleteButton from './DeleteButton';

const AdminTableBody = ({ toggleDetailModal }) => {
  return (
    <ul className='user-info-list'>
      {tableBodyData.map((info, idx) => {
        return (
          <UserInfo className='user-info' key={idx}>
            {/* 아래애들 컴포넌트로 빼서 prop으로 데이터 넘겨줘서 map 돌릴까? */}
            <span>{idx + 1}</span>
            <span>{info.name}</span>
            <span>{info.phase}</span>
            <span>
              <DetailBtn className='detail-btn' onClick={toggleDetailModal}>
                보기
              </DetailBtn>
            </span>
            <DeleteButton />
          </UserInfo>
        );
      })}
    </ul>
  );
};

export default AdminTableBody;
