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
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Style = __importStar(require("./styledComponents/RecommendPostStyle"));
const react_query_1 = require("react-query");
const react_router_dom_1 = require("react-router-dom");
const apis_1 = require("./api/apis");
const RecommendPost = ({ searchTerm, selectedCategoryId }) => {
    const { data, isSuccess } = (0, react_query_1.useQuery)(['posts', selectedCategoryId], () => (0, apis_1.fetchRecommendPosts)(selectedCategoryId));
    return ((0, jsx_runtime_1.jsx)(Style.RecommendContainer, { children: searchTerm === '' && isSuccess && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "\uCD94\uCC9C \uAC8C\uC2DC\uAE00" }), (0, jsx_runtime_1.jsx)("ul", { children: data.map(post => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, Object.assign({ to: `/community/${post.id}` }, { children: [(0, jsx_runtime_1.jsx)("p", Object.assign({ className: "recommend-tag" }, { children: "\uCD94\uCC9C" })), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "recommend-title" }, { children: post.title })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "recommend-info" }, { children: [(0, jsx_runtime_1.jsxs)("p", { children: ["\uB313\uAE00 ", post.comment_cnt] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("p", { children: ["\uC88B\uC544\uC694 ", post.like_cnt] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uC870\uD68C ", post.view_cnt] })] })] }))] })) }, post.id))) })] })) }));
};
exports.default = RecommendPost;
