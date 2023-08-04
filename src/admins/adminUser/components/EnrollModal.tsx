import { useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { fetchCreateUser } from '../apis/userApis';

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
} from '../styledComponents/ModalComponents';

interface EnrollModalProps {
  title: string;
  enrollModal: boolean;
  toggleEnrollModal: () => void;
}

interface TokenData {
  name: string;
}

interface ContentsType {
  email: string;
  name: string;
  password: string;
}

const EnrollModal = ({ title, enrollModal, toggleEnrollModal }: EnrollModalProps) => {
  const [adminName, setAdminName] = useState('');
  const [contents, setContents] = useState<ContentsType>({ email: '', password: '', name: '' });
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

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changedValue = e.target.name;
    const newContents = {
      ...contents,
    };
    newContents[changedValue as keyof ContentsType] = e.target.value;

    setContents(newContents);
  };

  const handleSubmit = () => {
    const result = confirm('사용자를 생성하시겠습니까?');
    if (result) {
      createUser(contents);
      toggleEnrollModal();
    }
  };

  const { mutate: createUser } = useMutation(
    async (contents: ContentsType) => await fetchCreateUser(contents),
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
