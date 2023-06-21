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

const NotificationModal = ({ id, handleModalCancelClick }) => {
  const [updatable, setUpdatable] = useState(false);
  const [contents, setContents] = useState({ title: '', content: '' });
  const firstInput = useRef(null);

  const handleUpdatable = () => {
    setUpdatable(true);
    if (!updatable) firstInput.current.focus();
  };

  const handleChangeContents = (e) => {
    const newContent = { ...contents };
    newContent[e.target.name] = e.target.value;
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

  const { data, isLoading, error } = useQuery(
    ['admin', 'notification', 'detail', 'get'],
    () => fetchReadNotificationInfoDetail(id),
    {
      onSuccess(data) {
        setContents({ title: data.title, content: data.content });
      },
    }
  );

  const { mutate: updateNotification, error: updateError } = useMutation(
    async () => await fetchUpdateNotification(id, contents),
    {
      onError(updateError) {
        console.error(updateError);
      },
    }
  );

  if (isLoading) return <span>로딩중...</span>;

  if (updateError) return <span>An updateError has occurred: {updateError.message}</span>;

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
