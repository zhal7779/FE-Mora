"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeywordHighlight = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
//검색 키워드 하이라이팅 컴포넌트
const KeywordHighlight = ({ content, keyword }) => {
    return content.includes(keyword) ? ((0, jsx_runtime_1.jsxs)("span", { children: [content.split(keyword)[0], (0, jsx_runtime_1.jsx)(Highlight, { children: keyword }), content.split(keyword)[1]] })) : ((0, jsx_runtime_1.jsx)("span", { children: content }));
};
exports.KeywordHighlight = KeywordHighlight;
const Highlight = styled_components_1.default.span `
  background: #fff5ac;
`;
