import { useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { fetchUpdateTrack } from '../apis/trackApis';

import {
  ModalTitle,
  ModalHeader,
  ModalButton,
  ModalOverlay,
  ModalSubTitle,
  ModalButtonBlock,
  ModalContentInput,
  ModalContentBlock,
  ModalHeaderButton,
} from '../styledComponents/ModalComponents';

interface ContentsType {
  name: string;
  phase: string;
}

interface TrackDataType extends ContentsType {
  id: string;
  createdAt?: string;
  updatedAt?: string;
}

interface TrackModalProps {
  trackData: TrackDataType;
  handleModalCancelClick: () => void;
}

const TrackModal = ({ trackData, handleModalCancelClick }: TrackModalProps) => {
  const [updatable, setUpdatable] = useState(false);
  const [contents, setContents] = useState<ContentsType>({
    name: trackData.name,
    phase: trackData.phase,
  });
  const firstInput = useRef<HTMLInputElement>(null);

  const handleUpdatable = () => {
    setUpdatable(true);
    if (!updatable && firstInput.current) {
      firstInput.current.focus();
    }
  };

  const handleChangeContents = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newContent = { ...contents };
    newContent[e.target.name as keyof ContentsType] = e.target.value;
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

  const { mutate: updateTrack } = useMutation(
    async () => await fetchUpdateTrack(trackData.id, contents),
    {
      onError(updateError) {
        console.error(updateError);
      },
    }
  );

  return (
    <>
      <ModalOverlay onClick={handleModalCancelClick} />
      <ModalContentBlock className='modal-content-block'>
        <ModalHeader className='modal-header'>
          <ModalTitle className='modal-title'>트랙 정보</ModalTitle>
          <ModalHeaderButton className='modal-button-update' onClick={handleUpdatable}>
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
