import * as Style from './styledComponents/PostWriteStyle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../community/categoryData';
import IconDown from '../assets/icons/icon-down.svg';
import IconUp from '../assets/icons/icon-up.svg';
import IconImageDelete from '../assets/icons/icon-delete-image.svg';
import IconAddImage from '../assets/icons/icon-add-lightgray.svg';

const REACT_APP_URL = process.env.REACT_APP_URL;

const PostWrite = ({ showPostImage }) => {
  const [showCategory, setShowCategory] = useState(false);
  const [formData, setFormData] = useState({
    category: '카테고리 선택',
    title: '',
    content: ''
  });
  const [imageData, setImageData] = useState([]);

  const handleChange = e => {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleSelectCategory = e => {
    setFormData({ ...formData, category: e.target.innerText });
    setShowCategory(false);
  };

  const handleAddImage = e => {
    const files = e.target.files;
    const selectedImages = [...files];

    // const existingCheck = selectedImages.filter(selectedImage => {
    //   imageData.some(
    //     existingImage => existingImage.name === selectedImage.name
    //   );
    // });

    // if (existingCheck.length > 0) {
    //   alert('이미 선택한 이미지입니다!');
    //   return;
    // }

    setImageData(prevImageData => [...prevImageData, ...selectedImages]);
  };

  const handleImageDelete = imageName => {
    setImageData(prevImageData => {
      const updatedImageData = prevImageData.filter(
        image => image.name !== imageName
      );
      return [...updatedImageData];
    });
  };

  return (
    <Style.WriteContainer>
      <div className="write-top">
        <div className="select-category">
          <button
            className="select-category-btn"
            onClick={() => setShowCategory(!showCategory)}
          >
            {formData.category}
            {showCategory ? (
              <img src={IconUp} alt="카테고리 목록보기" />
            ) : (
              <img src={IconDown} alt="카테고리 목록닫기" />
            )}
          </button>
          <ul className={`select-category-list ${showCategory ? 'show' : ''}`}>
            {categories.map(category => (
              <li
                key={category.name}
                onClick={handleSelectCategory}
                className={formData.category === category.name ? 'active' : ''}
              >
                <img src={category.icon} alt="카테고리 아이콘" />
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        <textarea
          name="title"
          id="title"
          rows="1"
          placeholder="제목을 입력해주세요"
          onChange={handleChange}
        ></textarea>
      </div>
      <textarea
        name="content"
        id="content"
        placeholder="글을 작성해서 레이서 동료들과 생각을 공유해보세요! "
        onChange={handleChange}
      ></textarea>
      {showPostImage && (
        <div className="file-upload">
          {imageData.length > 0 &&
            imageData.map(image => (
              <div
                className="file-upload-preview"
                key={image.name + image.size}
              >
                <img src={URL.createObjectURL(image)} alt={image.name} />
                <button
                  className="delete-btn"
                  onClick={() => handleImageDelete(image.name)}
                >
                  <img src={IconImageDelete} alt="이미지 삭제" />
                </button>
              </div>
            ))}
          <label htmlFor="file" className="file-upload-btn">
            <input
              type="file"
              name="file"
              id="file"
              multiple
              accept="image/*"
              onChange={handleAddImage}
            />
            <img src={IconAddImage} alt="" />
            사진 추가
          </label>
        </div>
      )}
    </Style.WriteContainer>
  );
};

export default PostWrite;
