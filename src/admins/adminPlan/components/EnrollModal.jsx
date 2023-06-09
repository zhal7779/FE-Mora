import { useEffect, useRef, useState } from 'react';

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
} from '../styledComponents/ModalComponents';

const info = [
  {
    type: 'admin_id',
    subTitle: '관리자 이름',
    contentValue: '임지성',
  },
  {
    type: 'title',
    subTitle: '공지 제목',
    contentValue: '',
  },
  {
    type: 'startDate',
    subTitle: '시작일',
    contentValue: '',
  },
  {
    type: 'endDate',
    subTitle: '종료일',
    contentValue: '',
  },
];

const EnrollModal = ({ 인포, enrollModal, toggleEnrollModal }) => {
  const modalTitle = '공지 정보';

  const [contents, setContents] = useState(info);
  const firstInput = useRef(null);

  const handleChangeContents = (e) => {
    console.log(e.target.value);
    const idx = e.target.alt;
    const newContents = [...contents];
    newContents[idx].contentValue = e.target.value;
    setContents(newContents);
  };

  const handleModalClose = () => {
    toggleEnrollModal();
  };

  useEffect(() => {
    firstInput.current.focus();
  }, [enrollModal]);

  return (
    <>
      {enrollModal && (
        <>
          <ModalOverlay onClick={toggleEnrollModal} />
          <ModalContentBlock className='modal-content-block'>
            <ModalHeader className='modal-header'>
              <ModalTitle className='modal-title'>{modalTitle}</ModalTitle>
            </ModalHeader>
            <div>
              {contents.map((content, idx) => {
                if (content.type !== 'admin_id') {
                  return (
                    <div key={content.type + idx}>
                      <ModalSubTitle className='modal-sub-title'>{content.subTitle}</ModalSubTitle>
                      <ModalContentInput
                        type='text'
                        value={content.contentValue}
                        className='modal-content'
                        onChange={handleChangeContents}
                        alt={idx}
                        ref={idx === 1 ? firstInput : null}
                      />
                    </div>
                  );
                } else {
                  return (
                    <div key={content.type + idx}>
                      <ModalSubTitle className='modal-sub-title'>관리자 이름</ModalSubTitle>
                      <ModalContentP className='modal-content'>{'임지성'}</ModalContentP>
                    </div>
                  );
                }
              })}
            </div>
            <ModalButtonBlock className='modal-button-block'>
              <ModalButton className='modal-button-submit' onClick={handleModalClose}>
                취소
              </ModalButton>
              <ModalButton className='modal-button-ok' $purple>
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
