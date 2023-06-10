import { useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';

import {
  ModalOverlay,
  ModalContentBlock,
  ModalTitle,
  ModalSubTitle,
  ModalContentInput,
  ModalContentP,
  ModalButtonBlock,
  ModalHeader,
  ModalHeaderButton,
  ModalButton,
} from '../styledComponents/ModalComponents';
import { fetchReadNotificationInfoDetail } from '../apis/postApi';

const NotificationModal = () => {
  const [updatable, setUpdatable] = useState(false);
  const [contents, setContents] = useState({ title: '', content: '' });
  const firstInput = useRef(null);
  let [searchParams] = useSearchParams();

  const handleUpdatable = () => {
    setUpdatable(true);
    if (!updatable) firstInput.current.focus();
  };

  const handleChangeContents = () => {};

  const id = searchParams.get('id');

  const { data, isLoading, error } = useQuery(
    ['admin', 'notification', , 'detail', 'get'],
    () => fetchReadNotificationInfoDetail(id),
    {
      staleTime: Infinity,
    }
  );

  if (isLoading) return <span>로딩중...</span>;
  if (error) return <span>An error has occurred: {error.message}</span>;
  if (data) console.log(data);

  return (
    <>
      <ModalOverlay />
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

        <div></div>

        <ModalButtonBlock className='modal-button-block'>
          <ModalButton className='modal-button-submit' $purple>
            수정
          </ModalButton>
          <ModalButton
            className='modal-button-ok'
            onClick={() => {
              setUpdatable(false);
            }}
          >
            확인
          </ModalButton>
        </ModalButtonBlock>
      </ModalContentBlock>
    </>
  );
};

export default NotificationModal;
