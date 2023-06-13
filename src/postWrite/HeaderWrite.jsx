import * as Style from './styledComponents/HeaderWriteStyle';
import { useNavigate } from 'react-router-dom';
import IconGoBack from '../assets/icons/icon-go-back.svg';
import IconPostImage from '../assets/icons/icon-post-img.svg';
import Button from '../components/Button';
import { useMutation } from 'react-query';
const BASE_URL = process.env.REACT_APP_URL;

const WriteHeader = ({ showPostImage, setShowPostImage, data, postId }) => {
  const navigate = useNavigate();
  console.log(data);

  // 게시글 등록 api
  const registerPost = async () => {
    console.log(data);
    const response = await fetch(`${BASE_URL}api/boards`, {
      method: 'POST',
      body: data,
      headers: {
        authorization: `Bearer ${sessionStorage.getItem('userToken')}`
      }
    });

    if (!response.ok) {
      throw new Error('게시글 등록에 실패하였습니다.');
    }

    const result = response.json();
    return result;
  };

  const { mutate } = useMutation(registerPost, {
    onSuccess: boardId => {
      navigate(`/community/${boardId}`);
    },
    onError: error => {
      console.error(error);
    }
  });

  // 게시글 등록
  const handleRegisterPost = async () => {
    const formData = new FormData();
    const { category, title, content, hashtags, images } = data;
    const imgArr = images.map(img => img.img_path);
    formData.append('category', category);
    formData.append('title', title);
    formData.append('content', content);
    formData.append('hashtags', hashtags);
    formData.append('images', imgArr);

    if (category === '카테고리 선택') {
      alert('카테고리를 선택해주세요');
      return;
    } else if (title === '') {
      alert('제목을 입력해주세요');
      return;
    } else if (content === '') {
      alert('본문을 작성해주세요');
      return;
    } else {
      const check = window.confirm('게시글을 등록하시겠습니까?');
      if (!check) return;
    }

    try {
      await mutate(formData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoBack = () => {
    const check = window.confirm(
      '작성을 취소하고 게시글 페이지로 이동하시겠습니까?'
    );
    if (!check) return;
    navigate(-1);
  };

  const handlePostImage = () => {
    showPostImage ? setShowPostImage(false) : setShowPostImage(true);
  };

  return (
    <Style.HeaderContainer>
      <div className="header-wrap">
        <button type="button" className="btn-back" onClick={handleGoBack}>
          <img src={IconGoBack} alt="뒤로가기" />
        </button>
        <div className="header-right-btns">
          <button className="post-image" onClick={handlePostImage}>
            <img src={IconPostImage} alt="이미지 삽입하기" />
          </button>
          <Button
            value={postId ? '수정' : '등록'}
            color="darkPurple"
            onClick={handleRegisterPost}
          />
        </div>
      </div>
    </Style.HeaderContainer>
  );
};

export default WriteHeader;
