"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Header_1 = __importDefault(require("../admins/adminCommon/components/Header"));
const AdminTable_1 = __importDefault(require("../admins/adminPost/components/AdminTable"));
const AdminBlock_1 = __importDefault(require("../admins/adminCommon/components/AdminBlock"));
const AdminSideBar_1 = __importDefault(require("../admins/adminCommon/components/AdminSideBar"));
const sideBarCategory_1 = require("../admins/adminCommon/constants/sideBarCategory");
const AdminMainContainer_1 = require("../admins/adminCommon/styledComponents/AdminMainContainer");
const AdminPostPage = () => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsxs)(AdminBlock_1.default, { children: [(0, jsx_runtime_1.jsx)(AdminSideBar_1.default, { nowCategoryName: sideBarCategory_1.POSTS_BUTTON }), (0, jsx_runtime_1.jsx)(AdminMainContainer_1.AdminMainContainer, { children: (0, jsx_runtime_1.jsx)(AdminTable_1.default, {}) })] })] }));
};
exports.default = AdminPostPage;
