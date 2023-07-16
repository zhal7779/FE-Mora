"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const AdminSideBarStyle_1 = require("../styledComponents/AdminSideBarStyle");
const SideBarSVGs_1 = require("./SideBarSVGs");
const sideBarCategory_1 = require("../constants/sideBarCategory");
const AdminSideBar = ({ nowCategoryName }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleLogOut = () => {
        const result = confirm('로그아웃 하시겠습니까?');
        if (result) {
            sessionStorage.removeItem('adminToken');
            alert('로그아웃 되었습니다.');
            navigate('/admin/login');
        }
    };
    return ((0, jsx_runtime_1.jsxs)(AdminSideBarStyle_1.SideBar, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "\uAD00\uB9AC\uC790" }), (0, jsx_runtime_1.jsx)(AdminSideBarStyle_1.SideBarButtonBlock, Object.assign({ onClick: handleLogOut }, { children: "\uB85C\uADF8\uC544\uC6C3" }))] }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'management-list' }, { children: [(0, jsx_runtime_1.jsx)("p", { children: "\uAD00\uB9AC \uBAA9\uB85D" }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: '/admin/posts' }, { children: (0, jsx_runtime_1.jsx)(SideBarSVGs_1.PostsButton, { nowCategory: nowCategoryName === sideBarCategory_1.POSTS_BUTTON && true, title: '게시물 관리' }) })), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: '/admin/users' }, { children: (0, jsx_runtime_1.jsx)(SideBarSVGs_1.UserButton, { nowCategory: nowCategoryName === sideBarCategory_1.USER_BUTTON && true, title: '사용자 관리' }) })), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: '/admin/notifications' }, { children: (0, jsx_runtime_1.jsx)(SideBarSVGs_1.NotificationButton, { nowCategory: nowCategoryName === sideBarCategory_1.NOTIFICATION_BUTTON && true, title: '공지사항 관리' }) })), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: '/admin/plans' }, { children: (0, jsx_runtime_1.jsx)(SideBarSVGs_1.PlanButton, { nowCategory: nowCategoryName === sideBarCategory_1.PLAN_BUTTON && true, title: '일정 관리' }) })), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: '/admin/tracks' }, { children: (0, jsx_runtime_1.jsx)(SideBarSVGs_1.TrackButton, { nowCategory: nowCategoryName === sideBarCategory_1.TRACK_BUTTON && true, title: '트랙 관리' }) }))] })] }))] }));
};
exports.default = AdminSideBar;
