"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("../components/Button"));
const styled_components_1 = __importDefault(require("styled-components"));
const react_router_dom_1 = require("react-router-dom");
const main_banner_img_png_1 = __importDefault(require("../assets/images/main-banner-img.png"));
const logo2_png_1 = __importDefault(require("../assets/images/logo2.png"));
const NonmemberPage = () => {
    return ((0, jsx_runtime_1.jsxs)(Container, { children: [(0, jsx_runtime_1.jsx)("img", { src: main_banner_img_png_1.default }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'content' }, { children: [(0, jsx_runtime_1.jsx)("img", { src: logo2_png_1.default }), (0, jsx_runtime_1.jsx)("strong", { children: "\uBAA8\uC5EC\uB77C \uB808\uC774\uC11C \uD68C\uC6D0\uB9CC \uC774\uC6A9 \uAC00\uB2A5\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("p", { children: "\uC774\uC6A9\uC744 \uC6D0\uD558\uC2DC\uBA74 \uB85C\uADF8\uC778 \uD6C4 \uC774\uC6A9\uD574\uC8FC\uC138\uC694." }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: '/login' }, { children: (0, jsx_runtime_1.jsx)(Button_1.default, { value: '\uB85C\uADF8\uC778\uD558\uB7EC \uAC00\uAE30', color: 'darkPurple' }) }))] })) })] }));
};
exports.default = NonmemberPage;
const Container = styled_components_1.default.div `
  width: 1024px;
  height: 100vh;
  display: flex;
  margin: 0 auto 0 auto;
  align-items: center;
  justify-content: center;
  background: #eeeafe;
  border-left: #cbd5e1 1px solid;
  border-right: #cbd5e1 1px solid;
  img {
    height: 46rem;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-left: 6rem;
      margin-top: 15rem;
      padding: 5rem 2rem;
      border-radius: 10px;
      background: #fdfdff;
      border: solid #cbd5e1 1px;
      box-shadow: rgba(0, 0, 0, 0.2) 1.9px 1.9px 2.6px;
      img {
        height: 4rem;
        margin-bottom: 5rem;
      }
      strong {
        font-weight: 600;
        padding-bottom: 2rem;
      }
      p {
        color: rgb(96, 94, 160);
        padding-bottom: 5rem;
        font-size: 1.8rem;
      }
    }
  }
  @media (max-width: 480px) {
    flex-direction: column-reverse;
    height: 100%;
    width: 100%;
    gap: 6rem;
    border: none;
    img {
      height: 30rem;
      margin-bottom: 6rem;
    }

    div {
      .content {
        padding: 5rem;
        margin-left: 0;
        padding: 4rem 1.6rem;
        img {
          height: 3.4rem;
          margin-bottom: 3rem;
        }
        strong {
          font-size: 1.8rem;
        }
        p {
          font-size: 1.5rem;
          padding-bottom: 3rem;
        }
      }
    }
  }
  @media (min-width: 480px) and (max-width: 768px) {
    flex-direction: column-reverse;
    height: 100%;
    width: 100%;
    gap: 6rem;
    border: none;

    img {
      height: 36rem;
      margin-bottom: 8rem;
    }
    div {
      .content {
        padding: 5rem;
        margin-left: 0;
      }
    }
  }
`;
