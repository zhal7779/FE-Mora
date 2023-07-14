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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const fi_search_svg_1 = require("../../assets/icons/fi_search.svg");
const SearchContext_1 = require("../context/SearchContext");
const react_2 = require("react");
const SearchResultBar = ({ handleSubSearch, menu, count }) => {
    const keyword = (0, react_2.useContext)(SearchContext_1.SearchContext);
    //검색창 input
    const [input, setInput] = (0, react_1.useState)(keyword);
    //검색결과
    const [resultKeyword, setResultKeyword] = (0, react_1.useState)(keyword);
    const handleInputChange = (e) => {
        setInput(e.target.value);
    };
    // 검색 결과 전달
    const handleSearchResult = (e) => {
        if ('Enter' === e.key) {
            setResultKeyword(input);
            handleSubSearch(input);
        }
    };
    return ((0, jsx_runtime_1.jsxs)(Container, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'main-div' }, { children: (0, jsx_runtime_1.jsx)(Content, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'sub-search-content' }, { children: [(0, jsx_runtime_1.jsx)(fi_search_svg_1.ReactComponent, { style: { width: '2.4rem', height: '2.4rem', stroke: '#94a3b8' } }), (0, jsx_runtime_1.jsx)("input", { type: 'text', value: input, onChange: handleInputChange, placeholder: '\uD68C\uC0AC, \uC0AC\uB78C, \uD0A4\uC6CC\uB4DC\uB85C \uAC80\uC0C9', onKeyDown: handleSearchResult, autoFocus: true })] })) }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'main-div' }, { children: (0, jsx_runtime_1.jsx)(Content, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'result-text-content' }, { children: [(0, jsx_runtime_1.jsxs)("p", { children: [resultKeyword, " \uAC80\uC0C9\uACB0\uACFC "] }), menu === 1 ? ((0, jsx_runtime_1.jsxs)("p", { children: [" ", count.total, "\uAC74"] })) : menu === 2 ? ((0, jsx_runtime_1.jsxs)("p", { children: [" ", count.free, "\uAC74"] })) : menu === 3 ? ((0, jsx_runtime_1.jsxs)("p", { children: [count.free, "\uAC74"] })) : menu === 4 ? ((0, jsx_runtime_1.jsxs)("p", { children: [count.knowledge, "\uAC74"] })) : menu === 5 ? ((0, jsx_runtime_1.jsxs)("p", { children: [count.study, "\uAC74"] })) : ((0, jsx_runtime_1.jsxs)("p", { children: [count.question, "\uAC74"] }))] })) }) }))] }));
};
exports.default = SearchResultBar;
const Container = styled_components_1.default.div `
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 6rem;
  left: 0;
  background: var(--main-white);
  .main-div {
    border-bottom: #cbd5e1 1px solid;
  }
`;
const Content = styled_components_1.default.div `
  max-width: 1024px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  .sub-search-content {
    width: 100%;
    display: flex;
    align-items: center;
    input {
      padding: 1.6rem;
      width: 100%;
      font-weight: 500;
      font-size: 2.4rem;
      border: none;
      outline: none;
      ::placeholder {
        color: #94a3b8;
      }
    }
  }
  .result-text-content {
    display: flex;
    margin: 1.8rem 0;
    gap: 1.4rem;
    p {
      font-weight: 600;
      font-size: 1.6rem;
      display: flex;
      align-items: center;
    }
  }
  @media (max-width: 768px) {
    max-width: 100%;
    .sub-search-content {
      margin-left: 2rem;
      input {
        font-size: 2.2rem;
        padding: 1.4rem;
      }
    }
    .result-text-content {
      margin-left: 2rem;
      p {
        font-size: 1.5rem;
      }
    }
  }
`;
