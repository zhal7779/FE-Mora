import * as Style from './styledComponents/HeaderWriteStyle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconGoBack from '../assets/icons/icon-go-back.svg';
import IconPostImage from '../assets/icons/icon-post-img.svg';
import IconWriteCode from '../assets/icons/icon-write-code.svg';
import Button from '../components/Button';

const WriteHeader = ({ showPostImage, setShowPostImage }) => {
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
          <button className="write-code">
            <img src={IconWriteCode} alt="코드 삽입하기" />
          </button>
          <Button value="등록" color="darkPurple" />
        </div>
      </div>
    </Style.HeaderContainer>
  );
};

export default WriteHeader;
