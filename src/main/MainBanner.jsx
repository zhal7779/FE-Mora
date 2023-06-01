import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainBanner = () => {
  return (
    <Banner>
      <div className="main-slogan">
        <div className="main-slogan-text">
          <span>개발 트렌드부터 Q&A까지!</span>
          <br />
          엘리스에서
          <br />
          인정한 레이서
          <br /> 필수 커뮤니티, 모레
        </div>
        <Link to="#" className="main-slogan-btn"></Link>
      </div>
    </Banner>
  );
};

export default MainBanner;

const Banner = styled.section`
  height: 925px;

  .main-slogan {
    width: 1280px;
    margin: 0 auto;

    &-text {
      font-size: 48px;
      font-weight: 700;
      color: #fff;

      span {
        margin-bottom: 10px;
        font-size: 24px;
      }
    }
  }
`;
