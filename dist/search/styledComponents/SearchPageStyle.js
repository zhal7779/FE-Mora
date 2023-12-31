"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavItem = exports.NavContainer = exports.ProfileWrapper = exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.div `
  width: 100%;
  background: #f0f1f3;
`;
exports.ProfileWrapper = styled_components_1.default.div `
  width: 1024px;
  height: 100%;
  display: flex;
  margin-top: 22rem;
  padding: 6rem 0 20rem 0;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
exports.NavContainer = styled_components_1.default.nav `
  z-index: 1;
  position: fixed;
  top: 17.7rem;
  background: var(--main-white);
  width: 100%;
  border-bottom: #cbd5e1 1px solid;
  .content {
    max-width: 1024px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }
  .search-nav {
    display: flex;
    gap: 0.8rem;
  }

  .swiper-wrapper {
    display: flex;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: fixed;
    top: 18.6rem;
    background-color: var(--main-white);
    padding: 2rem 0;
  }
  .swiper-button-prev {
    left: var(--swiper-navigation-sides-offset, 0px);
    right: auto;
  }

  .swiper-button-next {
    right: var(--swiper-navigation-sides-offset, 0px);
    left: auto;
  }

  @media (max-width: 768px) {
    top: 17rem;
    .content {
      max-width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  @media (max-width: 480px) {
    top: 17rem;
    .content {
      padding: 0 1.4rem;
    }
    .mobile-nav-item {
      padding: 1.7rem 0;
      font-size: 1.3rem;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        line-height: 1.2;
        width: auto;
        color: var(--dark-gray);
      }
    }
    .mobile-nav-item.active {
      background: #eeeafe;
      border-radius: 5px;
      padding: 1rem 0;
      margin: 0.7rem 0;
    }
    .mobile-nav-item.active p {
      color: #522bae;
    }
  }
`;
exports.NavItem = styled_components_1.default.div `
  ${(props) => (props.active ? 'border-bottom: 0.3rem solid #522bae;' : '')}
  p {
    font-size: 1.6rem;
    font-weight: 700;
    padding: 1.6rem;
    cursor: pointer;
    color: ${(props) => (props.active ? 'var(--main-font-color)' : 'var(--light-gray)')};
  }
  @media (max-width: 768px) {
    p {
      font-size: 1.5rem;
      padding: 1.6rem 0.8rem;
    }
  }
`;
