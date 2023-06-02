import * as Style from './Style/MainBannerStyle';
import BannerImg from '../assets/main-banner-img.png';
import { Link } from 'react-router-dom';

const MainBanner = () => {
  return (
    <Style.BannerContainer>
      <div className="main-slogan">
        <div className="main-slogan-side">
          <span>개발 트렌드부터 Q&A까지!</span>
          <br />
          엘리스에서
          <br />
          인정한 레이서
          <br /> 필수 커뮤니티, 모레
          <div className="main-slogan-btn">
            <Link to="#"></Link>
          </div>
        </div>
        <div className="main-image">
          <img src={BannerImg} alt="메인 배너 이미지" />
        </div>
      </div>
    </Style.BannerContainer>
  );
};

export default MainBanner;
