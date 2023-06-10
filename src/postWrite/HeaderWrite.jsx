import * as Style from './styledComponents/HeaderWriteStyle';
import { useNavigate } from 'react-router-dom';
import IconGoBack from '../assets/icons/icon-go-back.svg';
import IconPostImage from '../assets/icons/icon-post-img.svg';
import Button from '../components/Button';
import { useMutation, useQueryClient } from 'react-query';
import { registerPost } from './service/postWriteService';

const WriteHeader = ({ showPostImage, setShowPostImage, formData }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

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

  const { mutate } = useMutation(registerPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
      console.log('게시글 내용 등록에 성공했습니다.');
    },
    onError: error => {
      console.error(error);
    }
  });

  const handleRegisterPost = async () => {
    const { category, title, content } = formData;

    try {
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

      const data = await mutate(formData);
      console.log(data);
      navigate(`/community/${data.id}`);
    } catch (error) {
      console.error(error);
    }
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
            value="등록"
            color="darkPurple"
            onClick={handleRegisterPost}
          />
        </div>
      </div>
    </Style.HeaderContainer>
  );
};

export default WriteHeader;
