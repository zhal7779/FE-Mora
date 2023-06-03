import styled from 'styled-components';
import { useState } from 'react';
import Footer from '../components/Footer';
import HeaderWrite from '../postWrite/HeaderWrite';
import PostWrite from '../postWrite/PostWrite';

const PostWritePage = () => {
  const [showPostImage, setShowPostImage] = useState(false);
  return (
    <>
      <HeaderWrite
        showPostImage={showPostImage}
        setShowPostImage={setShowPostImage}
      />
      <PostWrite showPostImage={showPostImage} />
      <Footer />
    </>
  );
};

export default PostWritePage;

const WriteContainer = styled.div``;
