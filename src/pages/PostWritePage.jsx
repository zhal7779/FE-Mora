import { useState } from 'react';
import HeaderWrite from '../postWrite/HeaderWrite';
import PostWrite from '../postWrite/PostWrite';

const PostWritePage = () => {
  const [showPostImage, setShowPostImage] = useState(false);
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    content: '',
    hashtags: []
  });

  return (
    <>
      <HeaderWrite
        formData={formData}
        showPostImage={showPostImage}
        setShowPostImage={setShowPostImage}
      />
      <PostWrite
        formData={formData}
        setFormData={setFormData}
        showPostImage={showPostImage}
      />
    </>
  );
};

export default PostWritePage;
