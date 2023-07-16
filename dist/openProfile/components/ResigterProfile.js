"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const Button_1 = __importDefault(require("../../components/Button"));
const react_router_dom_1 = require("react-router-dom");
const useWindowSize_1 = require("../../hooks/useWindowSize");
const ResigterProfile = () => {
    const { mobileSize } = (0, useWindowSize_1.useWindowSize)();
    return ((0, jsx_runtime_1.jsxs)(Container, { children: [(0, jsx_runtime_1.jsxs)(TextContent, { children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("p", { children: "\uAD6C\uC9C1 \uC911\uC778 \uB808\uC774\uC11C\uBD84\uC740," }) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "\uB808\uC774\uC11C \uC624\uD508 \uD504\uB85C\uD544" }), (0, jsx_runtime_1.jsx)("p", { children: "\uC5D0" })] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("p", { children: "\uB098\uB97C \uB4F1\uB85D\uD574\uBCF4\uC138\uC694!" }) })] }), (0, jsx_runtime_1.jsx)(ButtonContent, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: '/mypage' }, { children: mobileSize ? ((0, jsx_runtime_1.jsx)(Button_1.default, { value: '\uC791\uC131\uD558\uAE30', color: 'darkPurple' })) : ((0, jsx_runtime_1.jsx)(Button_1.default, { value: '\uC624\uD508 \uD504\uB85C\uD544 \uC791\uC131\uD558\uAE30', color: 'darkPurple' })) })) })] }));
};
exports.default = ResigterProfile;
const Container = styled_components_1.default.div `
  position: sticky;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  top: 0;
  height: 100%;
  margin-bottom: 36rem;
  background: var(--main-white);

  @media (max-width: 768px) {
    position: static;
    flex-direction: row;
    margin-bottom: 0;
    align-items: center;
    justify-content: space-between;
    padding: 0 2.4rem;
  }
  @media (max-width: 480px) {
    align-items: center;
    padding: 0 1.4rem;
  }
`;
const TextContent = styled_components_1.default.div `
  margin-top: 6rem;
  font-size: 2.5rem;
  padding-top: 4rem;
  padding-bottom: 3rem;
  div {
    display: flex;
    padding-bottom: 1rem;
  }
  p {
    font-weight: 400;
  }
  strong {
    font-weight: 700;
  }
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;
const ButtonContent = styled_components_1.default.div `
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  @media (max-width: 768px) {
    margin-top: 5rem;
  }
`;
