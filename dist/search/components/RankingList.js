"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const styled_components_1 = __importDefault(require("styled-components"));
const RankingList = ({ data }) => {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: data &&
            data.map((item, index) => ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: '/community/' + item.id }, { children: (0, jsx_runtime_1.jsxs)(Content, Object.assign({ rank: index + 1 }, { children: [(0, jsx_runtime_1.jsx)("p", Object.assign({ className: 'ranking' }, { children: index + 1 })), (0, jsx_runtime_1.jsx)("img", { className: 'image_icon', src: item.User.img_path, alt: '\uD504\uB85C\uD544' }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h5", Object.assign({ className: 'title' }, { children: item.title })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'text_content' }, { children: [(0, jsx_runtime_1.jsx)("h5", { children: item.User.name }), (0, jsx_runtime_1.jsxs)("p", { children: [" ", item.User.position] })] }))] })] })) }), item.id))) }));
};
exports.default = RankingList;
const Content = styled_components_1.default.div `
  padding: 1.6rem 0;
  border-bottom: 1px solid var(--blue-gray);
  display: flex;
  align-items: center;
  gap: 1rem;
  .ranking {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${(props) => (props.rank >= 4 ? 'var(--dark-gray)' : '#7353ea')};
    margin: ${(props) => (props.rank < 10 ? '0 1rem 0 0.5rem' : '0 0 0 0.5rem')};
    margin-bottom: 1rem;
  }

  .image_icon {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    object-fit: cover;
  }

  div {
    margin-right: 0.5rem;
  }
  .title {
    ${(props) => props}
    font-weight: 600;
    font-size: 1.4rem;
    cursor: pointer;
    width: 15.9rem;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .text_content {
    display: flex;
    align-items: center;

    margin-top: 1rem;
    h5 {
      font-weight: 600;
      font-size: 1.2em;
      color: #424242;
      padding-right: 0.5rem;
    }
    p {
      font-weight: 700;
      font-size: 1rem;
      color: #605ea0;
      width: 11rem;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
  &:hover {
    background: rgba(233, 233, 238, 0.4);
    transition: 0.2s ease-out;
  }
  @media (max-width: 768px) {
    .title {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    padding: 1.2rem 0;
  }
`;
