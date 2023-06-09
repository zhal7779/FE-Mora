import { useEffect, useRef, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { fetchCreateNotification } from '../apis/postApi';

import {
  ModalOverlay,
  ModalContentBlock,
  ModalTitle,
  ModalSubTitle,
  ModalContentInput,
  ModalContentP,
  ModalButtonBlock,
  ModalHeader,
  ModalButton,
  ModalContentTextarea,
} from '../styledComponents/ModalComponents';

const EnrollModal = ({ title, enrollModal, toggleEnrollModal }) => {
  const [contents, setContents] = useState({ title: '', content: '' });
  const titleInput = useRef(null);
  const queryClient = useQueryClient();

  // useMutate 쿼리 사용
  const { mutate: createNotification, error } = useMutation(
    () => fetchCreateNotification(contents),
    {
      onSuccess() {
        queryClient.invalidateQueries(['admin', 'notification', 'get']);
      },
      onError(error) {
        console.log(error);
      },
    }
  );

  // 모달 열면 default focus 지정
  useEffect(() => {
    titleInput.current.focus();
  }, [enrollModal]);

  // form data state 업데이트
  const handleFormChange = (e) => {
    const changedValue = e.target.name;
    const newContents = {
      ...contents,
    };
    newContents[changedValue] = e.target.value;

    setContents(newContents);
  };

  const handleSubmit = () => {
    // 어쩔 수 없다. reload를 시켜야 하니까 새로고침 해야겠다.
    // 새로고침 안하고 게시물이 등록되었을 때 api를 다시 호출할 순 없나?
    const result = confirm('공지를 등록하시겠습니까?');
    if (result) {
      createNotification(contents);
      toggleEnrollModal();
    }
  };

  // useMutate return value에 따른 처리
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

            <>
              <ModalSubTitle className='modal-sub-title'>관리자</ModalSubTitle>
              <ModalContentP className='modal-content'>{'임지성'}</ModalContentP>
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
                <ModalButton
                  type='submit'
                  className='modal-button-ok'
                  onClick={handleSubmit}
                  $purple
                >
                  등록
                </ModalButton>
              </ModalButtonBlock>
            </>
          </ModalContentBlock>
        </>
      )}
    </>
  );
};

export default EnrollModal;
