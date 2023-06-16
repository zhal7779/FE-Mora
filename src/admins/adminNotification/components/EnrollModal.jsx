import { useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { fetchCreateNotification } from '../apis/notificationApis';

import jwt_decode from 'jwt-decode';
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
  ModalContentTextarea,
} from '../styledComponents/ModalComponents';

const EnrollModal = ({ title, enrollModal, toggleEnrollModal }) => {
  const [adminName, setAdminName] = useState('');
  const [contents, setContents] = useState({ title: '', content: '' });
  const titleInput = useRef(null);

  useEffect(() => {
    const sessionToken = sessionStorage.getItem('adminToken');
    const decodedToken = jwt_decode(sessionToken);
    setAdminName(decodedToken.name);
  }, []);

  useEffect(() => {
    titleInput.current.focus();
  }, [enrollModal]);

  const handleFormChange = (e) => {
    const changedValue = e.target.name;
    const newContents = {
      ...contents,
    };
    newContents[changedValue] = e.target.value;

    setContents(newContents);
  };

  const handleSubmit = () => {
    const result = confirm('공지를 등록하시겠습니까?');
    if (result) {
      createNotification(contents);
      toggleEnrollModal();
    }
  };

  const { mutate: createNotification, error } = useMutation(
    async () => await fetchCreateNotification(contents),
    {
      onError(error) {
        console.error(error);
      },
    }
  );

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
            <ModalContentP className='modal-content'>{adminName}</ModalContentP>
            <ModalSubTitle className='modal-sub-title'>제목</ModalSubTitle>
            <ModalContentInput
              type='text'
              name='title'
              value={contents.title}
              ref={titleInput}
              className='modal-content'
              onChange={handleFormChange}
            />
            <ModalSubTitle className='modal-sub-title'>내용</ModalSubTitle>
            <ModalContentTextarea
              type='text'
              name='content'
              value={contents.content}
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
