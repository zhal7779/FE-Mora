import * as Style from './styledComponents/PostWriteStyle';
import { useState } from 'react';
import { categories } from '../community/categoryData';
import IconDown from '../assets/icons/icon-down.svg';
import IconUp from '../assets/icons/icon-up.svg';
import IconImageDelete from '../assets/icons/icon-delete-image.svg';
import IconAddImage from '../assets/icons/icon-add-lightgray.svg';
import { useQuery, useMutation } from 'react-query';
import { getDetail } from '../postDetail/service/postDetailService';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
const BASE_URL = process.env.REACT_APP_URL;

const PostWrite = ({ showPostImage, data, setData, postId }) => {
  const [showCategory, setShowCategory] = useState(false);
  const { data: detail } = useQuery(['detail', postId], () =>
    getDetail(postId)
  );

  useEffect(() => {
    if (detail) {
      setData(prevData => ({
        ...prevData,
        category: detail.category,
        title: detail.title,
        content: detail.content,
        hashtags: detail.hashtags,
        images: detail.Photos
      }));
    }
  }, [detail, setData]);

  // 이미지 등록 api
  const postImage = async imgFormData => {
    const response = await fetch(`${BASE_URL}/api/boards/img`, {
      method: 'POST',
      body: imgFormData,
      headers: {
        authorization: `Bearer ${sessionStorage.getItem('userToken')}`
      }
    });

    if (!response.ok) {
      throw new Error('이미지 등록에 실패하였습니다.');
    }

    const result = await response.json();
    return result;
  };

  // 이미지 등록 mutation
  const { mutate } = useMutation(postImage, {
    onSuccess: data => {
      console.log('게시글 이미지 등록에 성공했습니다.');

      setData(prevFormData => {
        const updatedFormData = {
          ...prevFormData,
          images: [...prevFormData.images, data]
        };
        return updatedFormData;
      });
    },
    onError: error => {
      console.error(error);
    }
  });

  // 카테고리 선택
  const handleSelectCategory = e => {
    setData({ ...data, category: e.target.getAttribute('name') });
    setShowCategory(false);
  };

  // 제목 작성
  const handleWriteTitle = e => {
    const inputValue = e.target.value;
    if (inputValue.length <= 100) {
      setData({ ...data, title: inputValue });
    } else {
      Swal.fire({
        icon: 'warning',
        title: '제목을 100자 이하로 작성해주세요!',
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  // 본문 작성
  const handleWriteContent = e => {
    const inputValue = e.target.value;
    if (inputValue.length <= 500) {
      setData({ ...data, content: inputValue });
    } else {
      Swal.fire({
        icon: 'warning',
        title: '본문을 500자 이하로 작성해주세요!',
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  // textarea 높이 변경
  const handleChange = e => {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleTitleChange = e => {
    handleChange(e);
    handleWriteTitle(e);
  };

  const handleContentChange = e => {
    handleChange(e);
    handleWriteContent(e);
  };

  // 이미지 추가
  const handleAddImage = e => {
    const imgFormData = new FormData();
    const img = e.target.files[0];
    imgFormData.append('img', img);

    mutate(imgFormData);
  };

  // 이미지 삭제
  const handleImageDelete = index => {
    setData(prevData => {
      const updatedImages = [...prevData.images];
      updatedImages.splice(index, 1);
      return { ...prevData, images: updatedImages };
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
            {data.category
              ? categories.find(category => category.id === data.category).name
              : '카테고리 선택'}
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
                name={category.id}
                className={data.category === category.name ? 'active' : ''}
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
          placeholder="제목을 입력해주세요"
          value={data.title}
          onChange={handleTitleChange}
        ></textarea>
      </div>
      <textarea
        name="content"
        id="content"
        placeholder="글을 작성해서 레이서 동료들과 생각을 공유해보세요! "
        value={data.content}
        onChange={handleContentChange}
      ></textarea>
      {showPostImage && (
        <div className="file-upload">
          {data.images.length > 0 &&
            data.images.map((image, index) => (
              <div className="file-upload-preview" key={index}>
                <img src={image.img_path} alt={`이미지` + index} />
                <button
                  className="delete-btn"
                  onClick={() => handleImageDelete(index)}
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
              onChange={e => handleAddImage(e)}
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
