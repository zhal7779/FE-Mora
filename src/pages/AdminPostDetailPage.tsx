import { useParams } from 'react-router-dom';

import Header from '../admins/adminCommon/components/Header';
import AdminPostDetail from '../admins/adminPost/components/AdminPostDetail';

const AdminPostDetailPage = () => {
  const { boardId } = useParams();

  return (
    <>
      <Header />
      {boardId && <AdminPostDetail postId={boardId} />}
    </>
  );
};

export default AdminPostDetailPage;
