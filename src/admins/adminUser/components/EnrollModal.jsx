import { useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { fetchCreateUser } from '../apis/userApis';

import {
  ModalTitle,
  ModalHeader,
  ModalButton,
  ModalOverlay,
  ModalSubTitle,
  ModalContentP,
  ModalButtonBlock,
  ModalContentBlock,
  ModalContentInput,
} from '../styledComponents/ModalComponents';

const EnrollModal = ({ title, enrollModal, toggleEnrollModal }) => {
  const [contents, setContents] = useState({ email: '', password: '', name: '' });
  const titleInput = useRef(null);

  const handleFormChange = (e) => {
    const changedValue = e.target.name;
    const newContents = {
      ...contents,
    };
    newContents[changedValue] = e.target.value;

    setContents(newContents);
  };

  const handleSubmit = () => {
    const result = confirm('사용자를 생성하시겠습니까?');
    if (result) {
      createUser(contents);
      toggleEnrollModal();
    }
  };

  useEffect(() => {
    titleInput.current.focus();
  }, [enrollModal]);

  const { mutate: createUser, error } = useMutation(async () => await fetchCreateUser(contents), {
    onError(error) {
      console.error(error);
    },
  });

  if (error) return <span>An error has occurred: {error.message}</span>;

  return (
    <>
      {enrollModal && (
        <>
          <ModalOverlay onClick={toggleEnrollModal} />
          <ModalContentBlock className='modal-content-block'>
            <ModalHeader className='modal-header'>
              <ModalTitle className='modal-title'>{title}</ModalTitle>
            </ModalHeader>

            <ModalSubTitle className='modal-sub-title'>관리자</ModalSubTitle>
            <ModalContentP className='modal-content'>{'엘리스 토낑'}</ModalContentP>
            <ModalSubTitle className='modal-sub-title'>이메일</ModalSubTitle>
            <ModalContentInput
              type='text'
              name='email'
              value={contents.email}
              ref={titleInput}
              className='modal-content'
              onChange={handleFormChange}
            />
            <ModalSubTitle className='modal-sub-title'>비밀번호</ModalSubTitle>
            <ModalContentInput
              type='text'
              name='password'
              value={contents.password}
              className='modal-content'
              onChange={handleFormChange}
            />
            <ModalSubTitle className='modal-sub-title'>이름</ModalSubTitle>
            <ModalContentInput
              type='text'
              name='name'
              value={contents.name}
              className='modal-content'
              onChange={handleFormChange}
            />

            <ModalButtonBlock className='modal-button-block'>
              <ModalButton className='modal-button-submit' onClick={toggleEnrollModal}>
                취소
              </ModalButton>
              <ModalButton type='submit' className='modal-button-ok' onClick={handleSubmit} $purple>
                등록
              </ModalButton>
            </ModalButtonBlock>
          </ModalContentBlock>
        </>
      )}
    </>
  );
};

export default EnrollModal;
