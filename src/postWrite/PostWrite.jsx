import * as Style from './styledComponents/PostWriteStyle';
import { useState, useRef } from 'react';
import { categories } from '../community/categoryData';
import IconDown from '../assets/icons/icon-down.svg';
import IconUp from '../assets/icons/icon-up.svg';
import IconImageDelete from '../assets/icons/icon-delete-image.svg';
import IconHashtagDelete from '../assets/icons/icon-delete-hashtag.svg';
import IconAddImage from '../assets/icons/icon-add-lightgray.svg';
import { useQuery, useMutation } from 'react-query';
import { getDetail } from '../postDetail/service/postDetailService';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
const BASE_URL = process.env.REACT_APP_URL;

const PostWrite = ({ showPostImage, data, setData, postId }) => {
  const [showCategory, setShowCategory] = useState(false);
  const [popularHashtags, setPopularHashtags] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const firstListItemRef = useRef(null);
  const titleTextareaRef = useRef(null);
  const contentTextareaRef = useRef(null);
  const { data: detail } = useQuery(['detail', postId], () =>
    getDetail(postId)
  );

  useEffect(() => {
    const titleTextareaEl = titleTextareaRef.current;
    const contentTextareaEl = contentTextareaRef.current;

    if (titleTextareaEl) {
      titleTextareaEl.style.height = 'auto';
      titleTextareaEl.style.height = `${titleTextareaEl.scrollHeight}px`;
    }

    if (contentTextareaEl) {
      contentTextareaEl.style.height = 'auto';
      contentTextareaEl.style.height = `${contentTextareaEl.scrollHeight}px`;
    }
  }, [data]);

  useEffect(() => {
    if (firstListItemRef.current) {
      firstListItemRef.current.focus();
    }
    console.log(firstListItemRef.current);
  }, []);

  useEffect(() => {
    if (detail) {
      setData(prevData => ({
        ...prevData,
        category: detail.category,
        title: detail.title,
        content: detail.content,
        hashtags: detail.Hashtags,
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

  // 인기 해쉬태그 조회
  const fetchHashtags = async keyword => {
    const response = await fetch(`${BASE_URL}/api/hashtags?keyword=${keyword}`);

    if (!response.ok) {
      throw new Error('인기 해쉬태그 조회에 실패했습니다.');
    }

    const result = await response.json();
    setPopularHashtags(result);
  };

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

  // 해쉬태그 change핸들러
  const handleChangeHashtag = async e => {
    const inputValue = e.target.value;
    setInputValue(inputValue);

    if (inputValue.length > 0) {
      try {
        await fetchHashtags(inputValue);
      } catch {
        console.error(error);
      }
    }

    if (inputValue.length > 30) {
      Swal.fire({
        icon: 'warning',
        title: '해쉬태그는 30자 이하로 작성해주세요!',
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  // 해쉬태그 추가
  const handleAddHashtag = hashtag => {
    if (hashtag.length !== 0) {
      setData(prevData => ({
        ...prevData,
        hashtags: [...prevData.hashtags, hashtag]
      }));
    }
  };

  const handleHashtagKeyPress = e => {
    if (e.key === 'Enter') {
      handleAddHashtag(e.target.value);
      e.target.value = '';
    }
  };

  const handleHashtagOnClick = selectedHashtag => {
    handleAddHashtag(selectedHashtag);
    setInputValue('');
  };

  // 키보드로 해쉬태그 선택
  const handleHashtagKeyDown = e => {
    const currentListItem = firstListItemRef.current;
    console.log(currentListItem);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextListItem = currentListItem.nextElementSibling;
      console.log(nextListItem);

      if (nextListItem) {
        nextListItem.focus();
        setInputValue(nextListItem.textContent);

        setSelectedItem(nextListItem);
      }
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const previousListItem = currentListItem.previousElementSibling;
      console.log(previousListItem);

      if (previousListItem) {
        previousListItem.focus();
        setInputValue(previousListItem.textContent);

        setSelectedItem(previousListItem);
      }
    }

    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  // 해쉬태그 삭제
  const handleHashtagDelete = index => {
    setData(prevData => {
      const updatedHashtags = [...prevData.hashtags];
      updatedHashtags.splice(index, 1);
      return { ...prevData, hashtags: updatedHashtags };
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
          onChange={handleWriteTitle}
          ref={titleTextareaRef}
        ></textarea>
      </div>
      <textarea
        name="content"
        id="content"
        placeholder="글을 작성해서 레이서 동료들과 생각을 공유해보세요! "
        value={data.content}
        onChange={handleWriteContent}
        ref={contentTextareaRef}
      ></textarea>
      {showPostImage && (
        <ul className="file-upload">
          {data.images.length > 0 &&
            data.images.map((image, index) => (
              <li className="file-upload-preview" key={index}>
                <img src={image.img_path} alt={`이미지` + index} />
                <button
                  className="delete-btn"
                  onClick={() => handleImageDelete(index)}
                >
                  <img src={IconImageDelete} alt="이미지 삭제" />
                </button>
              </li>
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
        </ul>
      )}
      <div className="hashtags">
        {data.hashtags.length > 0 && (
          <ul className="hashtags-preview">
            {data.hashtags.map((hashtag, index) => (
              <li key={index}>
                <span>#</span>
                {hashtag}
                <button
                  className="hashtag-delete"
                  onClick={() => handleHashtagDelete(index)}
                >
                  <img src={IconHashtagDelete} alt="해쉬태그 삭제" />
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="hashtags-input">
          <span>#</span>
          <input
            type="text"
            placeholder="태그를 입력하세요. (예: #react, #javascript)"
            id="hashtagInput"
            value={inputValue}
            onChange={handleChangeHashtag}
            onKeyUp={handleHashtagKeyPress}
            onKeyDown={handleHashtagKeyDown}
          />
          {popularHashtags.length > 0 && inputValue !== '' && (
            <ul className="hashtags-popular">
              {popularHashtags.map((hashtag, index) => (
                <li
                  key={index}
                  ref={index === 0 ? firstListItemRef : null}
                  className={selectedItem === index ? 'selected' : ''}
                  onClick={() => handleHashtagOnClick(hashtag)}
                >
                  {hashtag}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Style.WriteContainer>
  );
};

export default PostWrite;
