import {
  ModalOverlay,
  ModalContentBlock,
  ModalTitle,
  ModalSubTitle,
  ModalContentP,
  ModalButtonBlock,
  ModalHeader,
  ModalButton,
} from '../styledComponents/modalComponents';

const ReportModal = ({ infos, toggleDetailModal }) => {
  const modalTitle = '트랙 정보';

  return (
    <>
      <ModalOverlay onClick={toggleDetailModal} />
      <ModalContentBlock className='modal-content-block'>
        <ModalHeader className='modal-header'>
          <ModalTitle className='modal-title'>{modalTitle}</ModalTitle>
        </ModalHeader>

        <>
          {infos.map((info, idx) => {
            return (
              <div key={idx}>
                <ModalSubTitle className='modal-sub-title'>{}</ModalSubTitle>
                <ModalContentP className='modal-content'>{info[subTitles[idx]]}</ModalContentP>
              </div>
            );
          })}
        </>

        <ModalButtonBlock className='modal-button-block'>
          <ModalButton className='modal-button-submit' onClick={toggleDetailModal} $purple>
            취소
          </ModalButton>
          <ModalButton className='modal-button-ok' onClick={toggleDetailModal}>
            확인
          </ModalButton>
        </ModalButtonBlock>
      </ModalContentBlock>
    </>
  );
};

export default ReportModal;
