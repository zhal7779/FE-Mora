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
} from '../styledComponents/modalComponents';

// 밖으로 뺄 거
const info = [
  {
    type: 'id',
    subTitle: '번호',
    contentValue: '1',
  },
  {
    type: 'name',
    subTitle: '트랙 이름',
    contentValue: 'SW',
  },
  {
    type: 'phase',
    subTitle: '기수',
    contentValue: '1',
  },
];

const EnrollModal = ({ 인포, enrollModal, toggleEnrollModal }) => {
  const modalTitle = '트랙 정보';

  const [contents, setContents] = useState(info);
  const firstInput = useRef(null);

  const handleChangeContents = (e) => {
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
                if (content.type !== 'id') {
                  return (
                    <div key={content.type + idx}>
                      <ModalSubTitle className='modal-sub-title'>{content.subTitle}</ModalSubTitle>
                      <ModalContentInput
                        type='text'
                        value={''}
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
                      <ModalSubTitle className='modal-sub-title'>번호</ModalSubTitle>
                      <ModalContentP className='modal-content'>{13}</ModalContentP>
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
