import { useState } from 'react';
import HeaderWrite from '../postWrite/HeaderWrite';
import PostWrite from '../postWrite/PostWrite';
import { useLocation } from 'react-router-dom';

const PostWritePage = () => {
  const [showPostImage, setShowPostImage] = useState(false);
  const [data, setData] = useState({
    category: '',
    title: '',
    content: '',
    hashtags: [],
    images: []
  });

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const postId = searchParams.get('postId');

  return (
    <>
      <HeaderWrite
        data={data}
        showPostImage={showPostImage}
        setShowPostImage={setShowPostImage}
        postId={postId}
      />
      <PostWrite
        data={data}
        setData={setData}
        showPostImage={showPostImage}
        postId={postId}
      />
    </>
  );
};

export default PostWritePage;
