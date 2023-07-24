import * as Style from '../styledComponents/MainBannerStyle';
import BannerImg from '../../assets/images/main-banner-img.png';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import BannerBackgroundImg from '../../assets/images/background-effect-img.svg';

const MainBanner = () => {
  const navigate = useNavigate();

  return (
    <Style.BannerContainer>
      <img src={BannerBackgroundImg} alt="배경 이미지" className="bg-img" />
      <div className="main-slogan">
        <div className="main-slogan-side">
          <span>레이서 커뮤니티부터 주요 일정까지 한번에!</span>
          엘리스에서
          <br />
          인정한 레이서
          <br /> 필수 커뮤니티, 모레
          <Button
            value="시작하기"
            color="darkPurple"
            onClick={() => navigate('/login')}
          />
        </div>
        <div className="main-image">
          <img src={BannerImg} alt="메인 배너 이미지" />
        </div>
      </div>
    </Style.BannerContainer>
  );
};

export default MainBanner;
