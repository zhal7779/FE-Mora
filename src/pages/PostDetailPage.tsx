import PostDetail from '../postDetail/components/PostDetail';
import PostComment from '../postDetail/components/PostComment';
import { useParams } from 'react-router-dom';

const PostDetailPage = () => {
  const { board_id } = useParams();

  return (
    <>
      <PostDetail postId={board_id} />
      <PostComment postId={board_id} />
    </>
  );
};

export default PostDetailPage;
