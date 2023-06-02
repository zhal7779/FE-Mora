import styled from 'styled-components';

export const BannerContainer = styled.section`
  height: 925px;
  background-color: #8e90ce;

  .main-slogan {
    position: relative;

    height: 100%;
    max-width: 1280px;
    margin: 0 auto;

    &-side {
      position: relative;
      padding-top: 260px;

      font-size: 4.8rem;
      font-weight: 700;
      color: #fff;
      line-height: 6.3rem;

      z-index: 1;

      span {
        font-size: 2.4rem;
        line-height: 2.4rem;
        font-weight: 400;
        color: #fff;
      }
    }
  }

  .main-image {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);

    width: 50%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
