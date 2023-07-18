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
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const Style = __importStar(require("../styledComponents/AddView"));
const fi_chevron_right_svg_1 = require("../../assets/icons/fi_chevron-right.svg");
const KeywordHighlight_1 = require("./KeywordHighlight");
const react_2 = require("react");
const SearchContext_1 = require("../context/SearchContext");
const NoData_1 = __importDefault(require("../../components/NoData"));
const react_router_dom_1 = require("react-router-dom");
const SearchResultQnA = ({ data, count, simple, receiveMenu }) => {
    const keyword = (0, react_2.useContext)(SearchContext_1.SearchContext);
    const handleAllView = () => {
        receiveMenu(6);
    };
    return ((0, jsx_runtime_1.jsx)(Container, { children: data && data.length === 0 ? ((0, jsx_runtime_1.jsx)(NoData_1.default, {})) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [data && simple === 'simple' && ((0, jsx_runtime_1.jsxs)(Style.AddView, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", Object.assign({ className: 'title' }, { children: "\uB808\uC774\uC11C Q&A" })), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: 'total_count' }, { children: count }))] }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ style: { cursor: 'pointer' }, onClick: handleAllView }, { children: [(0, jsx_runtime_1.jsx)("p", Object.assign({ className: 'all_view' }, { children: "\uBAA8\uB450 \uBCF4\uAE30" })), (0, jsx_runtime_1.jsx)(fi_chevron_right_svg_1.ReactComponent, { stroke: '#242424' })] }))] })), data &&
                    data.map((item) => ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: '/community/' + item.id }, { children: (0, jsx_runtime_1.jsxs)(Content, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'main_content' }, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Q" }), (0, jsx_runtime_1.jsx)("h2", { children: (0, jsx_runtime_1.jsx)(KeywordHighlight_1.KeywordHighlight, { content: item.title, keyword: keyword }) })] }), (0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsx)(KeywordHighlight_1.KeywordHighlight, { content: item.content, keyword: keyword }) })] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'hashtags' }, { children: item.Hashtags.map((hashtag, index) => ((0, jsx_runtime_1.jsxs)("h3", { children: ["#", hashtag.title] }, index))) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'sub_content' }, { children: [(0, jsx_runtime_1.jsxs)("p", { children: ["\uB313\uAE00 ", item.comment_cnt] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("p", { children: ["\uC88B\uC544\uC694 ", item.like_cnt] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uC870\uD68C ", item.view_cnt] })] })] }))] }, item.id) }))))] })) }));
};
exports.default = SearchResultQnA;
const Container = styled_components_1.default.section `
  width: 700px;
  height: inherit;
  border: 1px #cbd5e1 solid;
  border-radius: 4px;
  background: #ffffff;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Content = styled_components_1.default.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px #cbd5e1 solid;
  padding: 2rem 1.6rem;
  cursor: pointer;
  &:hover {
    background: rgba(233, 233, 238, 0.4);
    transition: 0.2s ease-out;
  }

  .main_content {
    width: 100%;
    div {
      display: flex;
      align-items: center;
      font-size: 1.8rem;
      margin: 1rem 0 2rem 0;
      font-weight: 600;
      strong {
        margin-right: 1rem;
        color: var(--dark-purple);
      }
    }

    p {
      font-size: 1.3rem;
      margin-bottom: 2rem;
      line-height: 140%;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }
  .hashtags {
    display: flex;
    h3 {
      color: #94a3b8;
      margin-right: 1rem;
      font-size: 1.4rem;
      font-weight: 500;
      margin-bottom: 2rem;
    }
  }
  .sub_content {
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0;
    div {
      display: flex;
      gap: 1rem;
      p {
        color: var(--light-gray);
      }
    }
  }
`;
