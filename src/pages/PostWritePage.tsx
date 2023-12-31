import HeaderWrite from '../postWrite/components/HeaderWrite';
import PostWrite from '../postWrite/components/PostWrite';
import ImageWrite from '../postWrite/components/ImageWrite';
import HashtagWrite from '../postWrite/components/HashtagWrite';
import styled from 'styled-components';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { responseFormData } from '../postWrite/types/types';

const PostWritePage = () => {
  const [showPostImage, setShowPostImage] = useState(false);
  const [data, setData] = useState<responseFormData>({
    category: '',
    title: '',
    content: '',
    hashtags: [],
    images: []
  });

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const postId = searchParams.get('postId') as string;

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
