import { useState } from 'react';
import HeaderWrite from '../postWrite/HeaderWrite';
import PostWrite from '../postWrite/PostWrite';

const PostWritePage = () => {
  const [showPostImage, setShowPostImage] = useState(false);
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    content: '',
    hashtags: [],
    images: []
  });
  const [previewImg, setPreviewImg] = useState([]);

  return (
    <>
      <HeaderWrite
        formData={formData}
        showPostImage={showPostImage}
        setShowPostImage={setShowPostImage}
        previewImg={previewImg}
      />
      <PostWrite
        formData={formData}
        setFormData={setFormData}
        showPostImage={showPostImage}
        previewImg={previewImg}
        setPreviewImg={setPreviewImg}
      />
    </>
  );
};

export default PostWritePage;
