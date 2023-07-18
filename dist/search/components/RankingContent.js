"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const RankingList_1 = __importDefault(require("./RankingList"));
const useWindowSize_1 = require("../../hooks/useWindowSize");
const Button_1 = __importDefault(require("../../components/Button"));
const react_2 = require("react");
const RankingModal_1 = __importDefault(require("./RankingModal"));
const RankingContent = ({ data }) => {
    const { isSize } = (0, useWindowSize_1.useWindowSize)();
    const [isOpenModal, setIsOpenModal] = (0, react_2.useState)(false);
    const modalOpenOrClose = () => {
        setIsOpenModal(!isOpenModal);
    };
    return ((0, jsx_runtime_1.jsx)(Container, { children: isSize ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(TitleContent, { children: [(0, jsx_runtime_1.jsx)("h5", { children: "\uBAA8\uC5EC\uB77C \uB808\uC774\uC11C TOP10\uD83D\uDD25" }), (0, jsx_runtime_1.jsx)("p", { children: "\uC9C0\uB09C 24\uC2DC\uAC04 \uB3D9\uC548" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAC00\uC7A5 \uC778\uAE30\uAC00 \uC88B\uC558\uB358 \uAC8C\uC2DC\uBB3C\uC744 \uB9CC\uB098\uBCF4\uC138\uC694." })] }), (0, jsx_runtime_1.jsx)(RankingList_1.default, { data: data })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [isOpenModal && (0, jsx_runtime_1.jsx)(RankingModal_1.default, { data: data, modalOpenOrClose: modalOpenOrClose }), (0, jsx_runtime_1.jsxs)(TitleContent, { children: [(0, jsx_runtime_1.jsx)("h5", { children: "\uBAA8\uC5EC\uB77C \uB808\uC774\uC11C TOP10\uD83D\uDD25" }), (0, jsx_runtime_1.jsx)("p", { children: "\uC9C0\uB09C 24\uC2DC\uAC04 \uB3D9\uC548" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAC00\uC7A5 \uC778\uAE30\uAC00 \uC88B\uC558\uB358 \uAC8C\uC2DC\uBB3C\uC744 \uB9CC\uB098\uBCF4\uC138\uC694." })] }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'button-content' }, { children: (0, jsx_runtime_1.jsx)(Button_1.default, { value: '\uC778\uAE30\uAC8C\uC2DC\uAE00 \uBCF4\uAE30', color: 'darkPurple', onClick: modalOpenOrClose }) }))] })) }));
};
exports.default = RankingContent;
const Container = styled_components_1.default.section `
  position: sticky;
  top: 100px;
  width: 27%;
  padding: 2rem 1.6rem;
  background: var(--main-white);
  border: 1px #cbd5e1 solid;
  border-radius: 4px;
  height: 100%;
  @media (max-width: 768px) {
    position: static;
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 2rem 2rem;

    .button-content {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1.6rem;
  }
`;
const TitleContent = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 0.5rem;
  width: 100%;
  h5 {
    font-weight: 700;
    font-size: 1.8rem;
    padding-bottom: 1rem;
  }
  p {
    font-weight: 600;
    font-size: 1.2rem;
    color: #605ea0;
    padding-bottom: 0.5rem;
  }
`;
