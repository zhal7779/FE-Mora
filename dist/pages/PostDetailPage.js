"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const PostDetail_1 = __importDefault(require("../postDetail/PostDetail"));
const PostComment_1 = __importDefault(require("./../postDetail/PostComment"));
const react_router_dom_1 = require("react-router-dom");
const PostDetailPage = () => {
    const { board_id } = (0, react_router_dom_1.useParams)();
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(PostDetail_1.default, { postId: board_id }), (0, jsx_runtime_1.jsx)(PostComment_1.default, { postId: board_id })] }));
};
exports.default = PostDetailPage;
