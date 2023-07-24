"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerContainer = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const moveDiagonally = (0, styled_components_1.keyframes) `
  from {
    transform: translate(-100%, -200%) scale(0.1);
    opacity: 0;
  }

  to {
    transform: translate(100%, -65%) scale(1);
    opacity: 1;  
  }

`;
const moveDiagonallyMobile = (0, styled_components_1.keyframes) `
  from {
    transform: translate(-100%, -200%) scale(0.1);
    opacity: 0;
  }

  to {
    transform: translate(85%, 0%) scale(1.3);
    opacity: 1;  
  }

`;
const shakeAnimation = (0, styled_components_1.keyframes) `
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
exports.BannerContainer = styled_components_1.default.section `
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
    .main-slogan {
      height: 100vh;

      &-side {
        padding-top: 220px;
        font-size: 4.5rem;
        line-height: 6.1rem;
      }
    }

    .main-image {
      transform: translate(85%, 0%) scale(1.3);
      animation: ${moveDiagonallyMobile} 1.6s ease-in-out;
    }
  }
`;
