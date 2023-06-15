import { useParams } from 'react-router-dom';

import AdminPostDetail from '../admins/adminPost/components/AdminPostDetail';

const AdminPostDetailPage = () => {
  const { boardId } = useParams();

  return <AdminPostDetail postId={boardId} />;
};

export default AdminPostDetailPage;
