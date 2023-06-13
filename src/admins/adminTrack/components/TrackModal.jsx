import { useRef, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { fetchReadTrackInfoDetail, fetchUpdateTrack } from '../apis/trackApis';

import {
  ModalTitle,
  ModalHeader,
  ModalButton,
  ModalOverlay,
  ModalSubTitle,
  ModalContentP,
  ModalButtonBlock,
  ModalContentInput,
  ModalContentBlock,
  ModalHeaderButton,
} from '../styledComponents/ModalComponents';

const TrackModal = ({ trackData, handleModalCancelClick }) => {
  console.log(trackData);
  const [updatable, setUpdatable] = useState(false);
  const [contents, setContents] = useState({ name: trackData.name, phase: trackData.phase });
  const firstInput = useRef(null);

  const handleUpdatable = () => {
    setUpdatable(true);
    if (!updatable) firstInput.current.focus();
  };

  const handleChangeContents = (e) => {
    const newContent = { ...contents };
    newContent[e.target.name] = e.target.value;
    setContents(() => newContent);
  };

  const handleUpdate = () => {
    const result = confirm('수정하시겠습니까?');
    if (result) {
      updateTrack();
      handleUpdatable();
      handleModalCancelClick();
    }
  };

  const handleCloseModal = () => {
    handleModalCancelClick();
    setUpdatable(false);
  };

  const { mutate: updateTrack, error: updateError } = useMutation(
    async () => await fetchUpdateTrack(trackData.id, contents),
    {
      onError(updateError) {
        console.error(updateError);
      },
    }
  );

  if (updateError) return <span>An updateError has occurred: {updateError.message}</span>;

  return (
    <>
      <ModalOverlay onClick={handleModalCancelClick} />
      <ModalContentBlock className='modal-content-block'>
        <ModalHeader className='modal-header'>
          <ModalTitle className='modal-title'>트랙 정보</ModalTitle>
          <ModalHeaderButton
            className='modal-button-update'
            onClick={handleUpdatable}
            $purple
            $header
          >
            수정하기
          </ModalHeaderButton>
        </ModalHeader>

        <ModalSubTitle>트랙명</ModalSubTitle>
        <ModalContentInput
          value={contents.name}
          onChange={handleChangeContents}
          name='name'
          readOnly={!updatable}
          ref={firstInput}
        />
        <ModalSubTitle>기수</ModalSubTitle>
        <ModalContentInput
          value={contents.phase}
          onChange={handleChangeContents}
          name='phase'
          readOnly={!updatable}
        />

        <ModalButtonBlock className='modal-button-block'>
          <ModalButton className='modal-button-submit' onClick={handleUpdate} $purple>
            수정
          </ModalButton>
          <ModalButton className='modal-button-ok' onClick={handleCloseModal}>
            확인
          </ModalButton>
        </ModalButtonBlock>
      </ModalContentBlock>
    </>
  );
};

export default TrackModal;
