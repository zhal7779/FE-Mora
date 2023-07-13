import * as Style from '../styledComponents/HashtagWriteStyle';
import { useState, useEffect, useRef } from 'react';
import IconHashtagDelete from '../../assets/icons/icon-delete-hashtag.svg';
import { writeProps } from '../types/types';
import Swal from 'sweetalert2';
const BASE_URL = process.env.REACT_APP_URL;

const HashtagWrite = ({
  data,
  setData
}: Pick<writeProps, 'data' | 'setData'>) => {
  const [popularHashtags, setPopularHashtags] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [index, setIndex] = useState(-1);
  const popularHashtagRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (index !== -1) {
      setInputValue(popularHashtags[index]);
    }
  }, [index]);

  // 인기 해쉬태그 조회 api
  const fetchHashtags = async (keyword: string): Promise<string[]> => {
    const response = await fetch(`${BASE_URL}/api/hashtags?keyword=${keyword}`);

    if (!response.ok) {
      throw new Error('인기 해쉬태그 조회에 실패했습니다.');
    }

    const result = await response.json();
    setPopularHashtags(result);
    return result;
  };

  // 해쉬태그 change핸들러
  const handleChangeHashtag = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);

    if (inputValue.length > 0) {
      try {
        await fetchHashtags(inputValue);
      } catch (error) {
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
  const handleAddHashtag = (hashtag: string) => {
    if (data.hashtags.includes(hashtag)) {
      Swal.fire({
        icon: 'warning',
        title: '이미 추가된 해쉬태그입니다.',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }
    if (hashtag.length !== 0) {
      setData(prevData => ({
        ...prevData,
        hashtags: [...prevData.hashtags, hashtag]
      }));
    }
  };

  const handleHashtagKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (e.key === 'Enter') {
      handleAddHashtag(target.value);
      setInputValue('');
      setIndex(-1);
    }
  };

  const handleHashtagOnClick = (selectedHashtag: string) => {
    handleAddHashtag(selectedHashtag);
    setInputValue('');
    setIndex(-1);
  };

  // 키보드로 해쉬태그 선택
  const handleHashtagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (popularHashtags.length > 0) {
      switch (e.key) {
        case 'ArrowDown': // up key
          setIndex(index + 1);
          if (popularHashtagRef.current?.childElementCount === index + 1)
            setIndex(0);
          break;
        case 'ArrowUp': // down key
          setIndex(index - 1);
          if (index <= 0) {
            setIndex(popularHashtags.length - 1);
          }
          break;
        case 'Escape': // esc key
          setPopularHashtags([]);
          setIndex(-1);
          break;
      }
    }
  };

  // 해쉬태그 삭제
  const handleHashtagDelete = (index: number) => {
    setData(prevData => {
      const updatedHashtags = [...prevData.hashtags];
      updatedHashtags.splice(index, 1);
      return { ...prevData, hashtags: updatedHashtags };
    });
  };

  return (
    <Style.HashtagContainer>
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
          <ul className="hashtags-popular" ref={popularHashtagRef}>
            {popularHashtags.map((hashtag, idx) => (
              <li
                key={idx}
                className={index === idx ? 'selected' : ''}
                onClick={() => handleHashtagOnClick(hashtag)}
              >
                {hashtag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Style.HashtagContainer>
  );
};

export default HashtagWrite;
