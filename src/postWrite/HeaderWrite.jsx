import * as Style from './styledComponents/HeaderWriteStyle';
import IconGoBack from '../assets/icons/icon-go-back.svg';
import IconPostImage from '../assets/icons/icon-post-img.svg';
import IconWriteCode from '../assets/icons/icon-write-code.svg';
import Button from '../components/Button';

const WriteHeader = () => {
  return (
    <Style.HeaderContainer>
      <div className="header-wrap">
        <button type="button" className="btn-back">
          <img src={IconGoBack} alt="뒤로가기" />
        </button>
        <div className="header-right-btns">
          <button className="post-image">
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
