import styled, { keyframes } from 'styled-components';

const moveDiagonally = keyframes`
  from {
    transform: translate(-100%, -200%) scale(0.1);
    opacity: 0;
  }

  to {
    transform: translate(100%, -65%) scale(1);
    opacity: 1;  
  }

`;

const moveDiagonallyMobile = keyframes`
  from {
    transform: translate(-100%, -200%) scale(0.1);
    opacity: 0;
  }

  to {
    transform: translate(80%, 0%) scale(1.2);
    opacity: 1;  
  }

`;

const shakeAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
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
    padding: 0 20px;
    margin: 0 auto;

    &-side {
      position: relative;
      padding-top: 290px;

      font-size: 4.8rem;
      font-weight: 700;
      color: #fff;
      line-height: 6.4rem;
      word-break: keep-all;

      z-index: 1;

      span {
        display: block;
        padding-bottom: 14px;

        font-size: 2.2rem;
        line-height: 2.8rem;
        font-weight: 500;
        word-break: keep-all;
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
      width: 95%;
      height: 95%;
      object-fit: contain;
      animation: ${shakeAnimation} 2s ease-in-out infinite;
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

  @media (max-width: 768px) {
    height: calc(100vh - 60px);

    .main-slogan {
      &-side {
        padding-top: 150px;
        font-size: 4.5rem;
        line-height: 6.1rem;
      }
    }

    .main-image {
      transform: translate(80%, 0%) scale(1.2);
      animation: ${moveDiagonallyMobile} 1.6s ease-in-out;
    }
  }
`;
