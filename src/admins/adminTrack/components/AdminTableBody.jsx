import { useState } from 'react';
import { useMutation } from 'react-query';
import { fetchDeleteTrack } from '../apis/trackApis';

import TrackModal from './TrackModal';
import DeleteButton from '../../adminCommon/components/DeleteButton';
import { DetailBtn, TrackInfo, TrackListBlock } from '../styledComponents/TableComponent';

const AdminTableBody = ({ tracks }) => {
  console.log(tracks);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTrackId, setModalTrackId] = useState('');

  const handleDelete = (id) => {
    const response = confirm('삭제하시겠습니까?');
    if (response) {
      deleteTrack(id);
      setIsModalOpen(false);
    }
  };

  const handleDetailClick = (id) => {
    setModalTrackId(id);
    setIsModalOpen(true);
  };

  const handleModalCancelClick = () => {
    setIsModalOpen(false);
  };

  const { mutate: deleteTrack, error } = useMutation((id) => fetchDeleteTrack(id), {
    onError(error) {
      console.error(error);
    },
  });

  if (error) return <span>An error has occurred: {error.message}</span>;

  return (
    <TrackListBlock className='user-info-list'>
      {tracks.map((data, idx) => {
        return (
          <TrackInfo className='user-info' key={idx}>
            <span className='title'>{data.name}</span>
            <span className='content'>{`1~${data.phase}`}</span>
            <span>{data.createdAt.slice(0, 10)}</span>
            <span>
              <DetailBtn className='detail-btn' onClick={() => handleDetailClick(data.id)}>
                보기
              </DetailBtn>
            </span>
            <DeleteButton onClick={() => handleDelete(data.id)} />
          </TrackInfo>
        );
      })}
      {isModalOpen && (
        <TrackModal id={modalTrackId} handleModalCancelClick={handleModalCancelClick} />
      )}
    </TrackListBlock>
  );
};

export default AdminTableBody;
