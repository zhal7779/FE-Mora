"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const RankingList_1 = __importDefault(require("./RankingList"));
const styled_components_1 = __importDefault(require("styled-components"));
const RankingModal = ({ data, modalOpenOrClose }) => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Background, { onClick: modalOpenOrClose }), (0, jsx_runtime_1.jsxs)(ModalContainer, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'title-content' }, { children: "\uBAA8\uC5EC\uB77C \uB808\uC774\uC11C TOP10\uD83D\uDD25" })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'main-content' }, { children: (0, jsx_runtime_1.jsx)(RankingList_1.default, { data: data }) }))] })] }));
};
exports.default = RankingModal;
const Background = styled_components_1.default.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 101;
`;
const ModalContainer = styled_components_1.default.div `
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80vh;
  background: var(--main-white);
  z-index: 102;
  border-radius: 12px;
  display: flex;
  flex-direction: column;

  .title-content {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-size: 1.8rem;
    padding: 2rem 0;
    background: var(--main-white);
    border-radius: 12px 12px 0 0;
    border-bottom: 2px solid var(--blue-gray);
  }
  .main-content {
    flex: 1;

    margin: 6rem 0 1rem 0;
    padding: 0 3rem;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 0.8rem;
    }
    &::-webkit-scrollbar-thumb {
      height: 10%;
      background-clip: padding-box;
      background: #d9d9d9;
      border-radius: 5px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
  }

  @media (max-width: 480px) {
    width: 90%;
    height: 70vh;
    .title-content {
      padding: 1.6rem 0;
    }
    .main-content {
      margin: 5.4rem 0 1rem 0;
      padding: 0 1.8rem;
    }
  }
`;
