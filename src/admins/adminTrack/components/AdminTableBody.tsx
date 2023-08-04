import { useState } from 'react';
import { useMutation } from 'react-query';
import { fetchDeleteTrack } from '../apis/trackApis';

import TrackModal from './TrackModal';
import DeleteButton from '../../adminCommon/components/DeleteButton';
import { DetailBtn, TrackInfo, TrackListBlock } from '../styledComponents/TableComponent';

interface TrackType {
  name: string;
  phase: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

interface TracksProps {
  tracks: TrackType[];
}

const AdminTableBody = ({ tracks }: TracksProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTrackData, setModalTrackData] = useState({ id: '', name: '', phase: '' });

  const handleDelete = (id: string) => {
    const response = confirm('삭제하시겠습니까?');
    if (response) {
      deleteTrack(id);
      setIsModalOpen(false);
    }
  };

  const handleDetailClick = (id: string, name: string, phase: string) => {
    const newTrackData = {
      ...modalTrackData,
      id,
      name,
      phase,
    };
    setModalTrackData(newTrackData);
    setIsModalOpen(true);
  };

  const handleModalCancelClick = () => {
    setIsModalOpen(false);
  };

  const { mutate: deleteTrack } = useMutation((id: string) => fetchDeleteTrack(id), {
    onError(error) {
      console.error(error);
    },
  });

  return (
    <TrackListBlock className='user-info-list'>
      {tracks.map((data, idx) => {
        return (
          <TrackInfo className='user-info' key={idx}>
            <span className='name'>{data.name}</span>
            <span className='phase'>{`1~${data.phase}`}</span>
            <span className='created-date'>{data.createdAt.slice(0, 10)}</span>
            <span>
              <DetailBtn
                className='detail-btn'
                onClick={() => handleDetailClick(data.id, data.name, data.phase)}
              >
                보기
              </DetailBtn>
            </span>
            <DeleteButton onClick={() => handleDelete(data.id)} />
          </TrackInfo>
        );
      })}
      {isModalOpen && (
        <TrackModal trackData={modalTrackData} handleModalCancelClick={handleModalCancelClick} />
      )}
    </TrackListBlock>
  );
};

export default AdminTableBody;
