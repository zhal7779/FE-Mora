import { useRef, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { fetchReadUserInfoDetail, fetchUpdateUser } from '../apis/userApis';

import {
  ModalTitle,
  ModalHeader,
  ModalButton,
  ModalOverlay,
  ModalSubTitle,
  ModalButtonBlock,
  ModalContentInput,
  ModalContentBlock,
  ModalHeaderButton,
} from '../styledComponents/ModalComponents';

const UserModal = ({ id, handleModalCancelClick }) => {
  const [updatable, setUpdatable] = useState(false);
  const [contents, setContents] = useState({ name: '', email: '', password: '' });
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

  const handleUpdate = (email) => {
    const result = confirm('수정하시겠습니까?');
    if (result) {
      updateNotification(email);
      handleUpdatable();
      handleModalCancelClick();
    }
  };

  const handleCloseModal = () => {
    handleModalCancelClick();
    setUpdatable(false);
  };

  const { data, isLoading, error } = useQuery(
    ['admin', 'user', 'detail', 'get'],
    () => fetchReadUserInfoDetail(id),
    {
      onSuccess(data) {
        setContents({ name: data.name, email: data.email, password: '' });
      },
    }
  );

  const { mutate: updateNotification, error: updateError } = useMutation(
    async (email) => await fetchUpdateUser(email, contents),
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
          <ModalTitle className='modal-title'>사용자 정보</ModalTitle>
          <ModalHeaderButton
            className='modal-button-update'
            onClick={handleUpdatable}
            $purple
            $header
          >
            수정하기
          </ModalHeaderButton>
        </ModalHeader>

        <ModalSubTitle>이메일</ModalSubTitle>
        <ModalContentInput
          value={contents.email}
          onChange={handleChangeContents}
          name='email'
          readOnly={!updatable}
          ref={firstInput}
        />
        <ModalSubTitle>이름</ModalSubTitle>
        <ModalContentInput
          value={contents.name}
          onChange={handleChangeContents}
          name='name'
          readOnly={!updatable}
        />
        <ModalSubTitle>비밀번호</ModalSubTitle>
        <ModalContentInput
          value={contents.password}
          onChange={handleChangeContents}
          name='password'
          readOnly={!updatable}
        />

        <ModalButtonBlock className='modal-button-block'>
          <ModalButton
            className='modal-button-submit'
            onClick={() => handleUpdate(data.email)}
            $purple
          >
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

export default UserModal;
