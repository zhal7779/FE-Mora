"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const HeaderWrite_1 = __importDefault(require("../postWrite/HeaderWrite"));
const PostWrite_1 = __importDefault(require("../postWrite/PostWrite"));
const ImageWrite_1 = __importDefault(require("../postWrite/ImageWrite"));
const HashtagWrite_1 = __importDefault(require("../postWrite/HashtagWrite"));
const styled_components_1 = __importDefault(require("styled-components"));
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const PostWritePage = () => {
    const [showPostImage, setShowPostImage] = (0, react_1.useState)(false);
    const [data, setData] = (0, react_1.useState)({
        category: '',
        title: '',
        content: '',
        hashtags: [],
        images: []
    });
    const location = (0, react_router_dom_1.useLocation)();
    const searchParams = new URLSearchParams(location.search);
    const postId = searchParams.get('postId');
    return ((0, jsx_runtime_1.jsxs)(PostWriteContainer, { children: [(0, jsx_runtime_1.jsx)(HeaderWrite_1.default, { data: data, showPostImage: showPostImage, setShowPostImage: setShowPostImage, postId: postId }), (0, jsx_runtime_1.jsx)(PostWrite_1.default, { data: data, setData: setData, postId: postId }), (0, jsx_runtime_1.jsx)(ImageWrite_1.default, { data: data, setData: setData, showPostImage: showPostImage }), (0, jsx_runtime_1.jsx)(HashtagWrite_1.default, { data: data, setData: setData })] }));
};
exports.default = PostWritePage;
const PostWriteContainer = styled_components_1.default.div `
  height: calc(100vh + 270px);
`;
