import * as Style from '../styledComponents/HeaderWriteStyle';
import { useNavigate } from 'react-router-dom';
import IconGoBack from '../../assets/icons/icon-go-back.svg';
import IconPostImage from '../../assets/icons/icon-post-img.svg';
import Button from '../../components/Button';
import { useMutation } from 'react-query';
import { useEffect } from 'react';
import { registerPost } from '../api/apis';
import { requestFormData, writeProps } from '../types/types';
import Swal from 'sweetalert2';

const WriteHeader = ({
  showPostImage,
  setShowPostImage,
  data,
  postId
}: Pick<
  writeProps,
  'showPostImage' | 'setShowPostImage' | 'data' | 'postId'
>) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (postId) {
      setShowPostImage(true);
    }
  }, [postId]);

  const { mutate } = useMutation(registerPost, {
    onSuccess: boardId => {
      if (!postId) {
        navigate(`/community/${boardId}`);
      } else {
        navigate(`/community/post/free`);
      }
    },
    onError: error => {
      console.error(error);
    }
  });

  // 게시글 등록/수정
  const handleRegisterPost = () => {
    const { category, title, content, hashtags, images } = data;
    const imgArr = images.map(img => img.img_path);

    const postData: requestFormData = {
      category: category,
      title: title,
      content: content,
      hashtags: hashtags,
      images: imgArr
    };

    if (postId) {
      postData.board_id = postId;
    }

    if (category === '') {
      Swal.fire({
        icon: 'warning',
        title: '카테고리를 선택해주세요.',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    } else if (title === '') {
      Swal.fire({
        icon: 'warning',
        title: '제목을 작성해주세요.',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    } else if (content === '') {
      Swal.fire({
        icon: 'warning',
        title: '본문을 작성해주세요.',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    } else {
      Swal.fire({
        icon: 'question',
        title: '게시글을 등록하시겠습니까?',
        showCancelButton: true,
        confirmButtonText: '등록',
        cancelButtonText: '취소'
      }).then(result => {
        if (result.isConfirmed) {
          try {
            mutate({ postId, postData });
          } catch (error) {
            console.error(error);
          }
        } else {
          return;
        }
      });
    }
  };

  const handleGoBack = () => {
    Swal.fire({
      icon: 'question',
      title: '작성을 취소하고 게시글 페이지로 이동하시겠습니까?',
      showCancelButton: true,
      confirmButtonText: '확인',
      cancelButtonText: '취소'
    }).then(result => {
      if (result.isConfirmed) {
        navigate(-1);
        return;
      } else {
        return;
      }
    });
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
