import { useState } from 'react';
import { useMutation } from 'react-query';
import { fetchDeletePlan } from '../apis/planApis';

import PlanModal from './PlanModal';
import DeleteButton from '../../adminCommon/components/DeleteButton';
import { DetailBtn, PlanInfo, PlanListBlock } from '../styledComponents/TableComponent';

const AdminTableBody = ({ plans }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPlanId, setModalPlanId] = useState('');

  const handleDelete = (id) => {
    const response = confirm('삭제하시겠습니까?');
    if (response) {
      deletePlan(id);
      setIsModalOpen(false);
    }
  };

  const handleDetailClick = (id) => {
    setModalPlanId(id);
    setIsModalOpen(true);
  };

  const handleModalCancelClick = () => {
    setIsModalOpen(false);
  };

  const { mutate: deletePlan, error } = useMutation((id) => fetchDeletePlan(id), {
    onError(error) {
      console.error(error);
    },
  });

  return (
    <PlanListBlock className='user-info-list'>
      {plans.map((data, idx) => {
        return (
          <PlanInfo className='user-info' key={idx}>
            <span>{data.Admin.name}</span>
            <span className='title'>{data.title}</span>
            <span className='content'>{data.content}</span>
            <span>{data.startDate.slice(0, 10)}</span>
            <span>{data.endDate.slice(0, 10)}</span>
            <span>
              <DetailBtn className='detail-btn' onClick={() => handleDetailClick(data.id)}>
                보기
              </DetailBtn>
            </span>
            <DeleteButton onClick={() => handleDelete(data.id)} />
          </PlanInfo>
        );
      })}
      {isModalOpen && (
        <PlanModal id={modalPlanId} handleModalCancelClick={handleModalCancelClick} />
      )}
    </PlanListBlock>
  );
};

export default AdminTableBody;
