import PostDetail from '../postDetail/PostDetail';
import PostComment from './../postDetail/PostComment';
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
