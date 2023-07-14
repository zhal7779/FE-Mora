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
const Style = __importStar(require("./styledComponents/MainPostStyle"));
const react_query_1 = require("react-query");
const react_router_dom_1 = require("react-router-dom");
const apis_1 = require("./api/apis");
const sweetalert2_1 = __importDefault(require("sweetalert2"));
const MainPost = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { data, isLoading, isError, error } = (0, react_query_1.useQuery)(['popular'], apis_1.fetchMainPosts);
    if (isError) {
        return (0, jsx_runtime_1.jsxs)(Style.Status, { children: [error.message, "\u26A0\uFE0F"] });
    }
    if (isLoading) {
        return (0, jsx_runtime_1.jsx)(Style.Status, { children: "Loading...\u23F3" });
    }
    const handleClick = (postId) => {
        if (sessionStorage.getItem('userToken')) {
            navigate(`/community/${postId}`);
        }
        else {
            sweetalert2_1.default.fire({
                icon: 'warning',
                title: '로그인 후에 조회할 수 있어요👀',
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
    };
    return ((0, jsx_runtime_1.jsxs)(Style.PostContainer, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "post-title" }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "\uBAA8\uC5EC\uB77C\uB808\uC774\uC11C Top 10\uD83D\uDD25" }), (0, jsx_runtime_1.jsx)("p", { children: "\uBAA8\uC5EC\uB77C\uB808\uC774\uC11C\uC5D0\uC11C \uAC00\uC7A5 \uC778\uAE30\uAC00 \uB9CE\uC740 \uAC8C\uC2DC\uBB3C\uC744 \uB9CC\uB098\uBCF4\uC138\uC694." })] })), (0, jsx_runtime_1.jsx)("ul", Object.assign({ className: "post-list" }, { children: data === null || data === void 0 ? void 0 : data.map((post, index) => ((0, jsx_runtime_1.jsxs)("li", Object.assign({ onClick: () => handleClick(post.id) }, { children: [(0, jsx_runtime_1.jsx)("p", Object.assign({ className: "rank" }, { children: index + 1 })), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "writer" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "writer-img" }, { children: (0, jsx_runtime_1.jsx)("img", { src: post.User.img_path, alt: "\uC0AC\uC6A9\uC790 \uD504\uB85C\uD544 \uC0AC\uC9C4" }) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "writer-info" }, { children: [(0, jsx_runtime_1.jsx)("p", Object.assign({ className: "writer-info-name" }, { children: post.User.name })), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "writer-info-position" }, { children: post.User.position }))] }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "content" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "content-text" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: post.title }), " | ", post.content] })), post.Photos.length > 0 && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "content-img" }, { children: (0, jsx_runtime_1.jsx)("img", { src: post.Photos, alt: "\uC774\uBBF8\uC9C0 \uBBF8\uB9AC\uBCF4\uAE30" }) }))), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "count" }, { children: [(0, jsx_runtime_1.jsxs)("p", { children: ["\uC870\uD68C ", post.view_cnt] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uC88B\uC544\uC694 ", post.like_cnt] })] }))] }))] })] }), post.id))) }))] }));
};
exports.default = MainPost;
