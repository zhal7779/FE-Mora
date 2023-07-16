"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const Header_1 = __importDefault(require("../admins/adminCommon/components/Header"));
const AdminPostDetail_1 = __importDefault(require("../admins/adminPost/components/AdminPostDetail"));
const AdminPostDetailPage = () => {
    const { boardId } = (0, react_router_dom_1.useParams)();
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsx)(AdminPostDetail_1.default, { postId: boardId }), ";"] }));
};
exports.default = AdminPostDetailPage;
