import * as Style from '../styledComponents/PostWriteStyle';
import IconDown from '../../assets/icons/icon-down.svg';
import IconUp from '../../assets/icons/icon-up.svg';
import { useState, useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import { categories } from '../../community/data/categoryData';
import { fetchPostDetail } from '../../postDetail/api/apis';
import { writeProps } from '../types/types';
import Swal from 'sweetalert2';

const PostWrite = ({
  data,
  setData,
  postId
}: Pick<writeProps, 'data' | 'setData' | 'postId'>) => {
  const [showCategory, setShowCategory] = useState(false);
  const titleTextareaRef = useRef(null);
  const contentTextareaRef = useRef(null);

  // 게시글 수정일 경우 해당 게시글의 콘텐츠 내용 보여주기
  useEffect(() => {
    if (postId !== null) {
      const fetchData = async () => {
        const detail = await fetchPostDetail(postId);

        setData(prevData => ({
          ...prevData,
          category: detail.category,
          title: detail.title,
          content: detail.content,
          hashtags: detail.Hashtags,
          images: detail.Photos
        }));
      };

      fetchData();
    }
  }, [postId]);

  // textarea 높이 유동적 변경
  const textareaHeight = (el: HTMLElement) => {
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  };
  useEffect(() => {
    if (titleTextareaRef.current) {
      textareaHeight(titleTextareaRef.current);
    }

    if (contentTextareaRef.current) {
      textareaHeight(contentTextareaRef.current);
    }
  }, [data]);

  // 카테고리 선택
  const handleSelectCategory = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    setData({ ...data, category: target.getAttribute('id') as string });
    setShowCategory(false);
  };

  // 제목 작성
  const handleWriteTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
  const handleWriteContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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

  return (
    <Style.WriteContainer>
      <div className="write-top">
        <div className="select-category">
          <button
            className="select-category-btn"
            onClick={() => setShowCategory(!showCategory)}
          >
            {data.category
              ? categories.find(category => category.id === data.category)?.name
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
                id={category.id}
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
    </Style.WriteContainer>
  );
};

export default PostWrite;
