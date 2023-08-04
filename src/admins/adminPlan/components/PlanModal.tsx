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

interface PlanModalProps {
  id: string;
  handleModalCancelClick: () => void;
}

interface ContentsProps {
  title: string;
  content: string;
  startDate: string;
  endDate: string;
  links: string;
}

interface LinksProps {
  url: string;
}

const PlanModal = ({ id, handleModalCancelClick }: PlanModalProps) => {
  const [updatable, setUpdatable] = useState(false);
  const [contents, setContents] = useState<ContentsProps>({
    title: '',
    content: '',
    startDate: '',
    endDate: '',
    links: '',
  });
  const firstInput = useRef<HTMLInputElement>(null);

  const handleUpdatable = () => {
    setUpdatable(true);
    if (!updatable && firstInput.current) firstInput.current.focus();
  };

  const handleChangeContents = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const changedValue = e.target.name;
    const newContents = {
      ...contents,
    };
    newContents[changedValue as keyof ContentsProps] = e.target.value;

    setContents(newContents);
  };

  const handleUpdate = () => {
    const result = confirm('수정하시겠습니까?');
    if (result) {
      updateNotification();
      handleUpdatable();
      handleModalCancelClick();
    }
  };

  const handleCloseModal = () => {
    handleModalCancelClick();
    setUpdatable(false);
  };

  const { data } = useQuery(
    ['admin', 'plan', 'detail', 'get', id],
    () => fetchReadPlanInfoDetail(id),
    {
      onSuccess(data) {
        let newLinks = '';
        data.PlanLinks.map((link: LinksProps) => {
          newLinks += `${link.url}\n`;
        });
        setContents({
          ...data,
          startDate: data.startDate.slice(0, 10),
          endDate: data.endDate.slice(0, 10),
          links: newLinks,
        });
      },
    }
  );

  const { mutate: updateNotification } = useMutation(
    async () => await fetchUpdatePlan(id, contents),
    {
      onError(updateError) {
        console.error(updateError);
      },
    }
  );

  return (
    <>
      <ModalOverlay onClick={handleModalCancelClick} />
      <ModalContentBlock className='modal-content-block'>
        <ModalHeader className='modal-header'>
          <ModalTitle className='modal-title'>일정 정보</ModalTitle>
          <ModalHeaderButton className='modal-button-update' onClick={handleUpdatable}>
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
