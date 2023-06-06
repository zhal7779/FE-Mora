import { useRef, useState } from 'react';
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

const UpdateModal = ({ 인포, modal, toggleModal }) => {
  const modalTitle = '트랙 정보';
  const modalFeature = '수정하기';

  const [updatable, setUpdatable] = useState(false);
  const [contents, setContents] = useState(info);
  const firstInput = useRef(null);

  const handleUpdatable = () => {
    setUpdatable(true);
    if (!updatable) firstInput.current.focus();
  };

  const handleChangeContents = (e) => {
    const idx = e.target.alt;
    const newContents = [...contents];
    newContents[idx].contentValue = e.target.value;
    setContents(newContents);
  };

  return (
    <>
      {modal && (
        <>
          <ModalOverlay onClick={toggleModal} />
          <ModalContentBlock className='modal-content-block'>
            <ModalHeader className='modal-header'>
              <ModalTitle className='modal-title'>{modalTitle}</ModalTitle>
              <ModalHeaderButton
                className='modal-button-update'
                onClick={handleUpdatable}
                $purple
                $header
              >
                {modalFeature}
              </ModalHeaderButton>
            </ModalHeader>
            <div>
              {contents.map((content, idx) => {
                if (content.type !== 'id') {
                  return (
                    <div key={content.type + idx}>
                      <ModalSubTitle className='modal-sub-title'>{content.subTitle}</ModalSubTitle>
                      <ModalContentInput
                        type='text'
                        value={content.contentValue}
                        className='modal-content'
                        onChange={handleChangeContents}
                        readOnly={!updatable}
                        alt={idx}
                        ref={idx === 1 ? firstInput : null}
                      />
                    </div>
                  );
                } else {
                  return (
                    <div key={content.type + idx}>
                      <ModalSubTitle className='modal-sub-title'>번호</ModalSubTitle>
                      <ModalContentP className='modal-content'>
                        {content.contentValue}
                      </ModalContentP>
                    </div>
                  );
                }
              })}
            </div>
            <ModalButtonBlock className='modal-button-block'>
              <ModalButton className='modal-button-submit' $purple>
                {modalFeature.slice(0, 2)}
              </ModalButton>
              <ModalButton
                className='modal-button-ok'
                onClick={() => {
                  setUpdatable(false);
                  toggleModal();
                }}
              >
                확인
              </ModalButton>
            </ModalButtonBlock>
          </ModalContentBlock>
        </>
      )}
    </>
  );
};

export default UpdateModal;
