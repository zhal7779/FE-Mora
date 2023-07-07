import HeaderWrite from '../postWrite/HeaderWrite';
import PostWrite from '../postWrite/PostWrite';
import ImageWrite from '../postWrite/ImageWrite';
import HashtagWrite from '../postWrite/HashtagWrite';
import styled from 'styled-components';
import { useState } from 'react';
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
    <PostWriteContainer>
      <HeaderWrite
        data={data}
        showPostImage={showPostImage}
        setShowPostImage={setShowPostImage}
        postId={postId}
      />
      <PostWrite data={data} setData={setData} postId={postId} />
      <ImageWrite data={data} setData={setData} showPostImage={showPostImage} />
      <HashtagWrite data={data} setData={setData} />
    </PostWriteContainer>
  );
};

export default PostWritePage;

const PostWriteContainer = styled.div`
  height: calc(100vh + 270px);
`;
