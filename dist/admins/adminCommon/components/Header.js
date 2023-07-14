"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const jwt_decode_1 = __importDefault(require("jwt-decode"));
const rabbitProfile_png_1 = __importDefault(require("../../../assets/images/rabbitProfile.png"));
const logo1_svg_1 = require("../../../assets/icons/logo1.svg");
const HeaderStyle_1 = require("../styledComponents/HeaderStyle");
const Header = () => {
    const [token, setToken] = (0, react_1.useState)('');
    const [name, setName] = (0, react_1.useState)('');
    const [menu, setMenu] = (0, react_1.useState)(false);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleMenuClick = () => {
        setMenu(!menu);
    };
    const { pathname } = window.location;
    (0, react_1.useEffect)(() => {
        const sessionToken = sessionStorage.getItem('adminToken');
        if (sessionToken && token !== sessionToken) {
            const decodedToken = (0, jwt_decode_1.default)(sessionToken);
            setName(decodedToken.name);
            setToken(sessionToken);
        }
        else if (pathname !== '/admin/signin') {
            // navigate('/admin/login');
        }
    }, []);
    return ((0, jsx_runtime_1.jsx)(HeaderStyle_1.Container, { children: (0, jsx_runtime_1.jsxs)(HeaderStyle_1.Content, { children: [(0, jsx_runtime_1.jsx)(HeaderStyle_1.MenuContainer, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: '/admin/posts' }, { children: (0, jsx_runtime_1.jsx)(logo1_svg_1.ReactComponent, { className: 'morae-logo' }) })) }), (0, jsx_runtime_1.jsxs)(HeaderStyle_1.AdminInfoBlock, Object.assign({ className: 'user-logo' }, { children: [(0, jsx_runtime_1.jsx)("img", { src: rabbitProfile_png_1.default, alt: '\uAE30\uBCF8 \uC774\uBBF8\uC9C0', width: 40 }), (0, jsx_runtime_1.jsx)(HeaderStyle_1.AdminName, { children: name ? `${name}님` : '' })] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'hamburger-menu-block', onClick: handleMenuClick }, { children: (0, jsx_runtime_1.jsx)(HeaderStyle_1.HamburgerMenu, { className: 'hamburger-menu' }) })), menu && ((0, jsx_runtime_1.jsxs)(HeaderStyle_1.MenuBarUl, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: '/admin/posts' }, { children: (0, jsx_runtime_1.jsx)(HeaderStyle_1.MenuBarLi, { children: "\uAC8C\uC2DC\uBB3C \uAD00\uB9AC" }) })), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: '/admin/users' }, { children: (0, jsx_runtime_1.jsx)(HeaderStyle_1.MenuBarLi, { children: "\uC0AC\uC6A9\uC790 \uAD00\uB9AC" }) })), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: '/admin/notifications' }, { children: (0, jsx_runtime_1.jsx)(HeaderStyle_1.MenuBarLi, { children: "\uACF5\uC9C0\uC0AC\uD56D \uAD00\uB9AC" }) })), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: '/admin/plans' }, { children: (0, jsx_runtime_1.jsx)(HeaderStyle_1.MenuBarLi, { children: "\uC77C\uC815 \uAD00\uB9AC" }) })), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: '/admin/tracks' }, { children: (0, jsx_runtime_1.jsx)(HeaderStyle_1.MenuBarLi, { children: "\uD2B8\uB799 \uAD00\uB9AC" }) }))] }))] }) }));
};
exports.default = Header;
