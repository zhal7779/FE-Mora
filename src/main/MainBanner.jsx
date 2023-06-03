import * as Style from './styledComponents/MainBannerStyle';
import BannerImg from '../assets/images/main-banner-img.png';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
// import SpeedAnimation from './SpeedAnimation';

const MainBanner = () => {
  return (
    <Style.BannerContainer>
      {/* <SpeedAnimation /> */}
      <div className="main-slogan">
        <div className="main-slogan-side">
          <span>개발 트렌드부터 Q&A까지!</span>
          <br />
          엘리스에서
          <br />
          인정한 레이서
          <br /> 필수 커뮤니티, 모레
          <Button value="지금 시작하기" color="darkPurple">
            <Link to="/login"></Link>
          </Button>
        </div>
        <div className="main-image">
          <img src={BannerImg} alt="메인 배너 이미지" />
        </div>
      </div>
    </Style.BannerContainer>
  );
};

export default MainBanner;
