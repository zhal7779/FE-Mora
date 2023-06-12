import { useRef, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { fetchReadPlanInfoDetail, fetchUpdatePlan } from '../apis/planApis';

import {
  ModalTitle,
  ModalHeader,
  ModalButton,
  ModalOverlay,
  ModalSubTitle,
  ModalContentP,
  ModalButtonBlock,
  ModalContentInput,
  ModalContentBlock,
  ModalHeaderButton,
  ModalContentTextarea,
} from '../styledComponents/ModalComponents';

const PlanModal = ({ id, handleModalCancelClick }) => {
  const [updatable, setUpdatable] = useState(false);
  const [contents, setContents] = useState({
    title: '',
    content: '',
    startDate: '',
    endDate: '',
    links: '',
  });
  const firstInput = useRef(null);

  const handleUpdatable = () => {
    setUpdatable(true);
    if (!updatable) firstInput.current.focus();
  };

  const handleChangeContents = (e) => {
    const changedValue = e.target.name;
    const newContents = {
      ...contents,
    };
    newContents[changedValue] = e.target.value;

    setContents(newContents);
  };

  const handleUpdate = () => {
    const result = confirm('수정하시겠습니까?');
    if (result) {
      updateNotification(id, contents);
      handleUpdatable();
      handleModalCancelClick();
    }
  };

  const handleCloseModal = () => {
    handleModalCancelClick();
    setUpdatable(false);
  };

  const { data, isLoading, error } = useQuery(
    ['admin', 'notification', 'detail', 'get'],
    () => fetchReadPlanInfoDetail(id),
    {
      onSuccess(data) {
        let newLinks = '';
        data.PlanLinks.map((link) => {
          newLinks += `${link.url}\n`;
        });
        setContents({
          title: data.title,
          content: data.content,
          startDate: data.start_date.slice(0, 10),
          endDate: data.end_date.slice(0, 10),
          links: newLinks,
        });
      },
    }
  );

  const { mutate: updateNotification, error: updateError } = useMutation(
    async (id) => await fetchUpdatePlan(id, contents),
    {
      onError(updateError) {
        console.log(updateError);
      },
    }
  );

  if (isLoading) return <span>로딩중...</span>;
  if (error) return <span>An error has occurred: {error.message}</span>;

  if (updateError) return <span>An updateError has occurred: {updateError.message}</span>;

  return (
    <>
      <ModalOverlay onClick={handleModalCancelClick} />
      <ModalContentBlock className='modal-content-block'>
        <ModalHeader className='modal-header'>
          <ModalTitle className='modal-title'>일정 정보</ModalTitle>
          <ModalHeaderButton
            className='modal-button-update'
            onClick={handleUpdatable}
            $purple
            $header
          >
            수정하기
          </ModalHeaderButton>
        </ModalHeader>

        <ModalSubTitle>관리자</ModalSubTitle>
        <ModalContentP>{data.Admin.name}</ModalContentP>
        <ModalSubTitle>제목</ModalSubTitle>
        <ModalContentInput
          value={contents.title}
          onChange={handleChangeContents}
          name='title'
          readOnly={!updatable}
          ref={firstInput}
        />
        <ModalSubTitle>내용</ModalSubTitle>
        <ModalContentTextarea
          value={contents.content}
          onChange={handleChangeContents}
          name='content'
          readOnly={!updatable}
        />
        <ModalSubTitle>시작일</ModalSubTitle>
        <ModalContentInput
          type='date'
          value={contents.startDate}
          onChange={handleChangeContents}
          name='startDate'
          readOnly={!updatable}
        />
        <ModalSubTitle>종료일</ModalSubTitle>
        <ModalContentInput
          type='date'
          value={contents.endDate}
          onChange={handleChangeContents}
          name='endDate'
          readOnly={!updatable}
        />
        <ModalSubTitle>링크</ModalSubTitle>
        <ModalContentTextarea
          value={contents.links}
          onChange={handleChangeContents}
          name='links'
          readOnly={!updatable}
        />

        <ModalButtonBlock className='modal-button-block'>
          <ModalButton className='modal-button-submit' onClick={handleUpdate} $purple>
            수정
          </ModalButton>
          <ModalButton className='modal-button-ok' onClick={handleCloseModal}>
            확인
          </ModalButton>
        </ModalButtonBlock>
      </ModalContentBlock>
    </>
  );
};

export default PlanModal;
