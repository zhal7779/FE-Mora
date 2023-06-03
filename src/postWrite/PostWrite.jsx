// import * as Style from './styledComponents/PostWriteStyle';
import styled from 'styled-components';
import { useState } from 'react';
import { categories } from '../community/categoryData';
import IconDown from '../assets/icons/fi_chevron-down.svg';
import IconUp from '../assets/icons/fi_chevron-up.svg';
import IconImageDelete from '../assets/icons/icon-delete-image.svg';
import IconAddImage from '../assets/icons/icon-add-lightgray.svg';

const PostWrite = ({ showPostImage }) => {
  const [showCategory, setShowCategory] = useState(false);
  const [selectCategory, setSelectCategory] = useState('카테고리 선택');

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
    <WriteContainer>
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
    </WriteContainer>
  );
};

export default PostWrite;

const WriteContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 60px 0 400px 0;

  .write-top {
    padding-top: 36px;
  }

  .select-category {
    position: relative;
    padding-bottom: 32px;

    &-btn {
      display: flex;
      align-items: center;

      padding: 10px 10px 10px 14px;
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 1.7rem;
      color: #424242;
      background: #ffffff;
      border: 1px solid #d8e0e9;
      border-radius: 50px;
      cursor: pointer;

      img {
        margin-left: 6px;
      }
    }

    &-list {
      position: absolute;
      left: 0;
      top: 52px;

      display: none;
      flex-direction: column;

      padding: 8px 0;
      background: #ffffff;
      border: 1px solid #d8e0e9;
      box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
      border-radius: 8px;

      &.show {
        display: flex;
      }

      li {
        display: flex;
        align-items: center;

        padding: 4px 16px;
        font-size: 14px;
        font-weight: 500;
        line-height: 22px;
        color: #acacac;
        cursor: pointer;
        transition: 0.2s;

        img {
          width: 22px;
          height: 22px;
          margin-right: 6px;
          filter: grayscale(1) brightness(180%);
          transition: 0.2s;
        }

        &.active,
        &:hover {
          color: #424242;

          img {
            filter: none;
          }
        }
      }
    }
  }

  textarea {
    width: 100%;
    resize: none;
    border: none;

    &#title {
      min-height: 36px;
      margin-bottom: 40px;
      font-weight: 600;
      font-size: 25px;
    }

    &#content {
      min-height: 300px;
      font-weight: 500;
      font-size: 18px;
      border-bottom: 1px solid #e2e8f0;
    }

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #acb2b9;
    }
  }

  .file-upload {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;

    width: 100%;
    padding-top: 20px;

    &-preview {
      position: relative;
      border: 1px solid #d7dce4;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .delete-btn {
        position: absolute;
        top: -10px;
        right: -10px;
      }
    }

    &-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      font-size: 13px;
      line-height: 1.8rem;
      color: #acb2b9;
      border: 1px dashed #d7dce4;
      cursor: pointer;

      input[type='file'] {
        position: absolute;
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        z-index: -1;
      }
    }

    &-preview,
    &-btn {
      width: 100px;
      height: 100px;
      border-radius: 4px;
    }
  }

  button {
    background: none;
    cursor: pointer;
  }
`;
