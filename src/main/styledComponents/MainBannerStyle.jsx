import styled, { keyframes } from 'styled-components';

const moveDiagonally = keyframes`
  from {
    transform: translate(-100%, -200%) scale(0.5);
    opacity: 0;
  }

  to {
    transform: translate(100%, -65%) scale(1);
    opacity: 1;
  }
`;

export const BannerContainer = styled.section`
  position: relative;
  overflow: hidden;
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
    transform: translate(100%, -65%);
    animation: ${moveDiagonally} 1.6s ease-in-out;

    width: 50%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .bg-img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
