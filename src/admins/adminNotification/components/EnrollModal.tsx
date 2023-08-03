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

interface EnrollModalProps {
  title: string;
  enrollModal: boolean;
  toggleEnrollModal: () => void;
}

interface ContentsProps {
  title: string;
  content: string;
}

interface TokenData {
  name: string;
}

const EnrollModal = ({ title, enrollModal, toggleEnrollModal }: EnrollModalProps) => {
  const [adminName, setAdminName] = useState('');
  const [contents, setContents] = useState<ContentsProps>({ title: '', content: '' });
  const titleInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const sessionToken = sessionStorage.getItem('adminToken');
    const decodedToken = sessionToken && jwt_decode<TokenData>(sessionToken);
    if (decodedToken) setAdminName(decodedToken.name);
  }, []);

  useEffect(() => {
    if (titleInput.current) {
      titleInput.current.focus();
    }
  }, [enrollModal]);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const changedValue = e.target.name;
    const newContents = {
      ...contents,
    };
    newContents[changedValue as keyof ContentsProps] = e.target.value;

    setContents(newContents);
  };

  const handleSubmit = () => {
    const result = confirm('공지를 등록하시겠습니까?');
    if (result) {
      createNotification(contents);
      toggleEnrollModal();
    }
  };

  const { mutate: createNotification } = useMutation(
    async (contents: ContentsProps) => await fetchCreateNotification(contents),
    {
      onError(error) {
        console.error(error);
      },
    }
  );

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
