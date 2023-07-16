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
const SearchResultPost = ({ data, count, simple, receiveMenu, type }) => {
    const keyword = (0, react_2.useContext)(SearchContext_1.SearchContext);
    const handleAllView = () => {
        if (type === 'free') {
            receiveMenu(3);
        }
        else if (type === 'Knowledge') {
            receiveMenu(4);
        }
        else {
            receiveMenu(5);
        }
    };
    return ((0, jsx_runtime_1.jsx)(Container, { children: data && data.length === 0 ? ((0, jsx_runtime_1.jsx)(NoData_1.default, {})) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [data && simple === 'simple' && ((0, jsx_runtime_1.jsxs)(Style.AddView, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [type === 'free' ? ((0, jsx_runtime_1.jsx)("p", Object.assign({ className: 'title' }, { children: "\uC790\uC720 \uAC8C\uC2DC\uD310" }))) : type === 'Knowledge' ? ((0, jsx_runtime_1.jsx)("p", Object.assign({ className: 'title' }, { children: "\uC9C0\uC2DD \uACF5\uC720" }))) : ((0, jsx_runtime_1.jsx)("p", Object.assign({ className: 'title' }, { children: "\uC2A4\uD130\uB514 \uBAA8\uC9D1" }))), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: 'total_count' }, { children: count }))] }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ style: { cursor: 'pointer' }, onClick: handleAllView }, { children: [(0, jsx_runtime_1.jsx)("p", Object.assign({ className: 'all_view' }, { children: "\uBAA8\uB450 \uBCF4\uAE30" })), (0, jsx_runtime_1.jsx)(fi_chevron_right_svg_1.ReactComponent, { stroke: '#242424' })] }))] })), data &&
                    data.length &&
                    data.map((item) => ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: '/community/' + item.id }, { children: (0, jsx_runtime_1.jsxs)(Content, { children: [type === 'free' ? ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'subject' }, { children: "\uC790\uC720" }))) : type === 'Knowledge' ? ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'subject' }, { children: "\uC9C0\uC2DD/\uC815\uBCF4" }))) : ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'subject' }, { children: "\uC2A4\uD130\uB514/\uBAA8\uC784" }))), (0, jsx_runtime_1.jsx)("h3", { children: (0, jsx_runtime_1.jsx)(KeywordHighlight_1.KeywordHighlight, { content: item.title, keyword: keyword }) }), (0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsx)(KeywordHighlight_1.KeywordHighlight, { content: item.content, keyword: keyword }) }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'hashtags' }, { children: item.Hashtags.map((hashtag, index) => ((0, jsx_runtime_1.jsxs)("h3", { children: ["#", hashtag.title] }, index))) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'sub_content' }, { children: [(0, jsx_runtime_1.jsxs)("p", { children: ["\uB313\uAE00 ", item.comment_cnt] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("p", { children: ["\uC88B\uC544\uC694 ", item.like_cnt] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uC870\uD68C ", item.view_cnt] })] })] }))] }, item.id) }))))] })) }));
};
exports.default = SearchResultPost;
const Container = styled_components_1.default.section `
  width: 700px;
  border-radius: 4px;
  border: 1px #cbd5e1 solid;
  background: #ffffff;
  height: inherit;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Content = styled_components_1.default.div `
  padding: 2rem;
  border-bottom: 1px #cbd5e1 solid;
  cursor: pointer;
  &:hover {
    background: rgba(233, 233, 238, 0.4);
    transition: 0.2s ease-out;
  }
  .subject {
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    margin-bottom: 1rem;
    background: #eeeafe;
    color: #a58cf5;
    font-weight: 600;
    font-size: 1rem;
  }
  h3 {
    font-size: 1.6rem;
    font-weight: 600;
    padding: 1.6rem 0;
  }
  p {
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 1.4rem;
    line-height: 140%;
  }

  .hashtags {
    display: flex;
    padding-top: 1.6rem;
    h3 {
      color: #94a3b8;
      margin-right: 1rem;
      font-size: 1.2rem;
      font-weight: 500;
    }
  }
  .sub_content {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    margin-bottom: 0;
    p {
      font-size: 1rem;
    }
    div {
      display: flex;
      gap: 1rem;
      p {
        font-size: 1rem;
        color: var(--light-gray);
      }
    }
  }
`;
