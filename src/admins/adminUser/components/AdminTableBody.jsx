import { DetailBtn, UserInfo } from '../styledComponents/tableComponent';
import tableBodyData from '../data/userData';

const AdminTableBody = ({ toggleModal }) => {
  return (
    <ul className='user-info-list'>
      {tableBodyData.map((info) => {
        return (
          <UserInfo className='user-info' key={info.userId}>
            {/* 아래애들 컴포넌트로 빼서 prop으로 데이터 넘겨줘서 map 돌릴까? */}
            <span>{info.userId}</span>
            <span>{info.name}</span>
            <span>{info.email}</span>
            <span>{info.password}</span>
            <span>{info.createdDate}</span>
            <span>
              <DetailBtn className='detail-btn' onClick={toggleModal}>
                보기
              </DetailBtn>
            </span>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='22'
                height='22'
                fill='none'
                onClick={() => {
                  const response = confirm('삭제하시겠습니까?');
                }}
              >
                <path
                  stroke='#FF1300'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.8'
                  d='M2.75 5.5h16.5M7.333 5.5V3.667a1.833 1.833 0 0 1 1.834-1.834h3.666a1.833 1.833 0 0 1 1.834 1.834V5.5m2.75 0v12.833a1.833 1.833 0 0 1-1.834 1.834H6.417a1.833 1.833 0 0 1-1.834-1.834V5.5h12.834ZM12.833 10.083v5.5M9.167 10.083v5.5'
                />
              </svg>
            </span>
          </UserInfo>
        );
      })}
    </ul>
  );
};

export default AdminTableBody;
