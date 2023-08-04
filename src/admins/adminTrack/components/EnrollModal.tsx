import { useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { fetchCreateTrack } from '../apis/trackApis';

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
  name: string;
  phase: string;
}

const EnrollModal = ({ title, enrollModal, toggleEnrollModal }: EnrollModalProps) => {
  const [adminName, setAdminName] = useState('');
  const [contents, setContents] = useState<ContentsType>({ name: '', phase: '' });
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
    const result = confirm('공지를 등록하시겠습니까?');
    if (result) {
      createNotification(contents);
      toggleEnrollModal();
    }
  };

  const { mutate: createNotification } = useMutation(
    async (contents: ContentsType) => await fetchCreateTrack(contents),
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
            <ModalSubTitle className='modal-sub-title'>트랙명</ModalSubTitle>
            <ModalContentInput
              type='text'
              name='name'
              value={contents.name}
              ref={titleInput}
              className='modal-content'
              onChange={handleFormChange}
              placeholder='트랙명 ex) SW'
            />
            <ModalSubTitle className='modal-sub-title'>기수</ModalSubTitle>
            <ModalContentInput
              type='number'
              name='phase'
              value={contents.phase}
              className='modal-content'
              onChange={handleFormChange}
              placeholder='숫자만 입력할 수 있습니다. ex) 8'
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
