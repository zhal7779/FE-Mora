import { useRef, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { fetchReadNotificationInfoDetail, fetchUpdateNotification } from '../apis/notificationApis';

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

interface NotificationModalProps {
  id: string;
  handleModalCancelClick: () => void;
}

interface ContentsProps {
  title: string;
  content: string;
}

const NotificationModal = ({ id, handleModalCancelClick }: NotificationModalProps) => {
  const [updatable, setUpdatable] = useState(false);
  const [contents, setContents] = useState<ContentsProps>({ title: '', content: '' });
  const firstInput = useRef<HTMLInputElement>(null);

  const handleUpdatable = () => {
    setUpdatable(true);
    if (!updatable && firstInput.current) firstInput.current.focus();
  };

  const handleChangeContents = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newContent = { ...contents };
    newContent[e.target.name as keyof ContentsProps] = e.target.value;
    setContents(() => newContent);
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

  const { data, isLoading } = useQuery(
    ['admin', 'notification', 'detail', 'get'],
    () => fetchReadNotificationInfoDetail(id),
    {
      onSuccess(data) {
        setContents({ title: data.title, content: data.content });
      },
    }
  );

  const { mutate: updateNotification } = useMutation(
    async () => await fetchUpdateNotification(id, contents),
    {
      onError(updateError) {
        console.error(updateError);
      },
    }
  );

  if (isLoading) return <span>로딩중...</span>;

  return (
    <>
      <ModalOverlay onClick={handleModalCancelClick} />
      <ModalContentBlock className='modal-content-block'>
        <ModalHeader className='modal-header'>
          <ModalTitle className='modal-title'>공지 정보</ModalTitle>
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

export default NotificationModal;
