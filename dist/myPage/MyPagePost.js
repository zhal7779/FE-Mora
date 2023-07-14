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
const Style = __importStar(require("./styledComponents/MyPagePostStyle"));
const react_query_1 = require("react-query");
const react_router_dom_1 = require("react-router-dom");
const no_data_image_svg_1 = __importDefault(require("../assets/images/no-data-image.svg"));
const URL = process.env.REACT_APP_URL;
const MyPostList = () => {
    const userToken = sessionStorage.getItem('userToken');
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
    };
    const queries = (0, react_query_1.useQueries)([
        {
            queryKey: 'myPostListData',
            queryFn: () => fetch(`${URL}/api/users/mypage/board`, {
                headers: headers,
            }).then((response) => response.json()),
        },
        {
            queryKey: 'mainProfileData',
            queryFn: () => fetch(`${URL}/api/users/mypage`, {
                headers: headers,
            }).then((response) => response.json()),
        },
    ]);
    const myPostListDataQuery = queries[0];
    const mainProfileDataQuery = queries[1];
    const myPostListData = myPostListDataQuery.data;
    const mainProfileData = mainProfileDataQuery.data;
    return ((0, jsx_runtime_1.jsx)(Style.ListContainer, { children: myPostListData ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("h2", { children: ["\uB0B4 \uAC8C\uC2DC\uBB3C ", myPostListData.length] }), (0, jsx_runtime_1.jsx)("ul", { children: myPostListData.map((item, index) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, Object.assign({ to: `/community/${item.id}` }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'profile-container' }, { children: [(0, jsx_runtime_1.jsx)("img", { src: mainProfileData.UserDetail.img_path, alt: '\uD504\uB85C\uD544' }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'profile-info' }, { children: [(0, jsx_runtime_1.jsx)("h3", { children: mainProfileData.name }), (0, jsx_runtime_1.jsx)("p", { children: mainProfileData.UserDetail.position })] }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'content-container' }, { children: [(0, jsx_runtime_1.jsx)("h4", { children: item.title }), (0, jsx_runtime_1.jsx)("p", { children: item.content })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'comment-like-view-container' }, { children: [(0, jsx_runtime_1.jsxs)("p", { children: ["\uB313\uAE00 ", item.comment_cnt] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("p", { children: ["\uC88B\uC544\uC694 ", item.like_cnt] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uC870\uD68C ", item.view_cnt, " "] })] })] }))] }), index) }, index))) })] })) : ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'no-data-container' }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "\uB85C\uB529\uC911 \uC774\uC5D0\uC694.." }), (0, jsx_runtime_1.jsx)("img", { src: no_data_image_svg_1.default, alt: 'noDataImage' })] }))) }));
};
const MyPagePost = () => {
    return ((0, jsx_runtime_1.jsx)(Style.PostContainer, { children: (0, jsx_runtime_1.jsx)(MyPostList, {}) }));
};
exports.default = MyPagePost;
