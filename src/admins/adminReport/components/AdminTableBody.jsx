import { useState } from 'react';

import { DetailBtn, UserInfo } from '../styledComponents/TableComponent';
import tableBodyData from '../data/userData';
import DeleteButton from './DeleteButton';
import ReportModal from './ReportModal';

const AdminTableBody = () => {
  const [detailModal, setDetailModal] = useState(false);

  const toggleDetailModal = () => {
    setDetailModal(!detailModal);
  };

  return (
    <ul className='user-info-list'>
      {tableBodyData.map((info, idx) => {
        return (
          <UserInfo className='user-info' key={idx}>
            {/* 아래애들 컴포넌트로 빼서 prop으로 데이터 넘겨줘서 map 돌릴까? */}
            <span>{info.fromUser}</span>
            <span>→</span>
            <span>{info.toUser}</span>
            <span className='content'>{info.content}</span>
            <span>{info.reportType === 1 ? '게시글' : '댓글'}</span>
            <span>{info.reportStatus === 0 ? '미완' : <u>완료</u>}</span>
            <span>{info.createAt}</span>
            <span>
              <DetailBtn className='detail-btn' onClick={toggleDetailModal}>
                보기
              </DetailBtn>
            </span>
            <DeleteButton />
          </UserInfo>
        );
      })}
      {/* 모달도 페이지처럼 접근하자. 서치파람으로 id 넘겨줘서 api로 받자. 그럼 이건 나중에 */}
      {detailModal && <ReportModal infos={tableBodyData} toggleDetailModal={toggleDetailModal} />}
    </ul>
  );
};

export default AdminTableBody;
