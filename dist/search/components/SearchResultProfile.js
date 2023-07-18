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
const OpenProfileStyle_1 = require("../../openProfile/styledComponents/OpenProfileStyle");
const fi_chevron_right_svg_1 = require("../../assets/icons/fi_chevron-right.svg");
const Style = __importStar(require("../styledComponents/AddView"));
const KeywordHighlight_1 = require("./KeywordHighlight");
const react_2 = require("react");
const SearchContext_1 = require("../context/SearchContext");
const NoData_1 = __importDefault(require("../../components/NoData"));
const react_router_dom_1 = require("react-router-dom");
const SearchResultProfile = ({ data, count, simple, receiveMenu }) => {
    //검색후 데이터에 키워드 하이라이트 줄 변수
    const keyword = (0, react_2.useContext)(SearchContext_1.SearchContext);
    //모두보기 클릭시 메뉴 2번 프로필 보기로 이동
    const handleAllView = () => {
        receiveMenu(2);
    };
    return ((0, jsx_runtime_1.jsx)(Container, { children: data && data.length === 0 ? ((0, jsx_runtime_1.jsx)(NoData_1.default, {})) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [data && simple === 'simple' && ((0, jsx_runtime_1.jsxs)(Style.AddView, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", Object.assign({ className: 'title' }, { children: "\uD504\uB85C\uD544" })), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: 'total_count' }, { children: count }))] }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ style: { cursor: 'pointer' }, onClick: handleAllView }, { children: [(0, jsx_runtime_1.jsx)("p", Object.assign({ className: 'all_view' }, { children: "\uBAA8\uB450 \uBCF4\uAE30" })), (0, jsx_runtime_1.jsx)(fi_chevron_right_svg_1.ReactComponent, { stroke: 'var(--main-font-color)' })] }))] })), data &&
                    data.map((item) => ((0, jsx_runtime_1.jsxs)(Content, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'img-container' }, { children: (0, jsx_runtime_1.jsx)("img", { className: 'img-content', src: item.img_path, alt: '\uD504\uB85C\uD544' }) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'text_content' }, { children: [(0, jsx_runtime_1.jsx)("h4", { children: item.User.name }), (0, jsx_runtime_1.jsx)("h5", { children: (0, jsx_runtime_1.jsx)(KeywordHighlight_1.KeywordHighlight, { content: item.position, keyword: keyword }) }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'skill' }, { children: item.User.Skills.map((skill) => ((0, jsx_runtime_1.jsxs)("p", { children: ["#", skill.name, " "] }))) }))] }))] }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'button_content' }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: '/openProfile' }, { children: (0, jsx_runtime_1.jsx)(OpenProfileStyle_1.ChatButton, { children: "\uC624\uD508\uD504\uB85C\uD544 \uBCF4\uAE30" }) })) }))] }, item.user_id)))] })) }));
};
exports.default = SearchResultProfile;
const Container = styled_components_1.default.section `
  width: 700px;
  height: inherit;
  background: var(--main-white);
  border: 1px #cbd5e1 solid;
  border-radius: 4px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Content = styled_components_1.default.div `
  padding: 2.4rem;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
  }
  .img-container {
    align-items: center;
  }
  .img-content {
    display: flex;
    align-items: center;
    width: 4.6rem;
    height: 4.6rem;
    border-radius: 50%;
    margin-right: 1.6rem;
    object-fit: cover;
  }
  .skill {
    display: flex;
    gap: 1rem;
  }
  .text_content {
    display: flex;
    flex-direction: column;
  }
  .button_content {
    align-items: center;
  }
  h4 {
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  h5 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.2rem;
    color: #94a3b8;
  }
  border-bottom: 1px #cbd5e1 solid;
`;
