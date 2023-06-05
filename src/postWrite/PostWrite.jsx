import * as Style from './styledComponents/PostWriteStyle';
import { useState } from 'react';
import { categories } from '../community/categoryData';
import IconDown from '../assets/icons/fi_chevron-down.svg';
import IconUp from '../assets/icons/fi_chevron-up.svg';
import IconImageDelete from '../assets/icons/icon-delete-image.svg';
import IconAddImage from '../assets/icons/icon-add-lightgray.svg';

const PostWrite = ({ showPostImage }) => {
  const [showCategory, setShowCategory] = useState(false);
  const [selectCategory, setSelectCategory] = useState('카테고리 선택');

  // utils로 빼기
  const handleChange = e => {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleSelectCategory = e => {
    setSelectCategory(e.target.innerText);
    setShowCategory(false);
  };

  // 이미지 삭제 함수
  // const handleImageDelete = (imageName) => {
  //   setImageData((prevImageData) => {
  //     const updatedImageData = prevImageData.filter(
  //       (image) => image.name !== imageName
  //     );
  //     return updatedImageData;
  //   });
  // };

  return (
    <Style.WriteContainer>
      <div className="write-top">
        <div className="select-category">
          <button
            className="select-category-btn"
            onClick={() => setShowCategory(!showCategory)}
          >
            {selectCategory}
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
                className={selectCategory === category.name ? 'active' : ''}
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
          {/* {imageData.length > 0 && (
              imageData.map((image) => (
                <div className="file-upload-preview" key={image.name + image.size}>
                  <img src={URL.createObjectURL(image)} alt={image.name} />
                  <button
                    className="delete-btn"
                    onClick={() => handleImageDelete(image.name)}
                  >
                    <img src={IconImageDelete} alt="이미지 삭제" />
                  </button>
                </div>
              ))
            )} */}
          <div className="file-upload-preview">
            <img src="" alt="file.name" />
            <button className="delete-btn">
              <img src={IconImageDelete} alt="이미지 삭제" />
            </button>
          </div>
          <label htmlFor="file" className="file-upload-btn">
            <input
              type="file"
              name="file"
              id="file"
              multiple
              accept="image/*"
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
