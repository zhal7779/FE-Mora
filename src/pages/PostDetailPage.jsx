import PostDetail from '../postDetail/PostDetail';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostComment from './../postDetail/PostComment';

const PostDetailPage = () => {
  return (
    <>
      <Header />
      <PostDetail />
      <PostComment />
      <Footer />
    </>
  );
};

export default PostDetailPage;
