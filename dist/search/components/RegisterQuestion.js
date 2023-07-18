"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const help_png_1 = __importDefault(require("../../assets/images/help.png"));
const cat_png_1 = __importDefault(require("../../assets/images/cat.png"));
const Button_1 = __importDefault(require("../../components/Button"));
const react_router_dom_1 = require("react-router-dom");
const RegisterQuestion = ({ type }) => {
    return ((0, jsx_runtime_1.jsx)(Container, { children: type === 'study' ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("img", { className: 'cat-img-content', src: cat_png_1.default }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "\uC544\uC9C1 \uC2A4\uD130\uB514\uB97C \uBABB \uAD6C\uD558\uC168\uB098\uC694?" }), (0, jsx_runtime_1.jsx)("p", { children: "\uD568\uAED8 \uACF5\uBD80\uD560 \uC2A4\uD130\uB514\uB97C \uCC3E\uC544\uBCFC\uAE4C\uC694?" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: '/community/post/study' }, { children: (0, jsx_runtime_1.jsx)(Button_1.default, { value: '스터디 찾으러 가기', color: 'darkPurple' }) }))] })] })) : type === 'Q&A' ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("img", { className: 'help-img-content', src: help_png_1.default, style: { paddingBottom: '1rem' } }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "\uAD81\uAE08\uD55C \uB0B4\uC6A9\uC744 \uD574\uACB0\uD558\uC9C0 \uBABB\uD588\uB098\uC694?" }), (0, jsx_runtime_1.jsx)("p", { children: "\uB808\uC774\uC11C Q&A\uC5D0\uC11C \uBE60\uB978 \uB2F5\uBCC0\uC744 \uB4DC\uB824\uC694." }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: '/write' }, { children: (0, jsx_runtime_1.jsx)(Button_1.default, { value: '질문하러 가기', color: 'darkPurple' }) }))] })] })) : ('') }));
};
exports.default = RegisterQuestion;
const Container = styled_components_1.default.span `
  position: sticky;
  width: 30%;
  top: 260px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.4rem 1.6rem;
  border-radius: 4px;
  border: 1px solid #cbd5e1;
  background: #ffffff;
  font-size: 1.6rem;
  gap: 1rem;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  strong {
    font-weight: 600;
    padding-bottom: 1rem;
  }
  p {
    font-weight: 500;
    color: #64748b;
    margin-bottom: 2rem;
  }
  .cat-img-content {
    width: 16rem;
    margin-bottom: 2rem;
  }
  .help-img-content {
    width: 16rem;
    margin-bottom: 2rem;
  }
  @media (max-width: 768px) {
    width: 90%;
    height: 15.4rem;
    position: static;
    flex-direction: row-reverse;
    padding: 0 1.4rem;
    justify-content: space-between;
    .cat-img-content {
      margin: 3rem 0 0 0;
    }
    .help-img-content {
      margin: 1rem 0 0 0;
    }
  }
  @media (max-width: 480px) {
    flex-direction: column;
    height: auto;
    font-size: 1.5rem;
    padding: 1.4rem 1.2rem;
    .cat-img-content {
      width: 9rem;
      /* margin: 5.7rem 0 0 0; */
    }
    .help-img-content {
      width: 10rem;
      /* margin: 1rem 0 0 0; */
    }
  }
`;
