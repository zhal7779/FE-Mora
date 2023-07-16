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
const Style = __importStar(require("./styledComponents/MyPageCategoryStyle"));
const react_router_dom_1 = require("react-router-dom");
const react_query_1 = require("react-query");
const Button_1 = __importDefault(require("../components/Button"));
const MyPageCategory = ({ handleCategorySelect, selectedCategory, categories }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const queryClient = (0, react_query_1.useQueryClient)();
    const handleLogout = () => {
        sessionStorage.removeItem('userToken');
        sessionStorage.removeItem('userRefreshToken');
        queryClient.invalidateQueries('mainProfileData');
        navigate('/');
    };
    return ((0, jsx_runtime_1.jsxs)(Style.CategoryContainer, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "\uB9C8\uC774\uD398\uC774\uC9C0" }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'category-list' }, { children: [(0, jsx_runtime_1.jsx)("p", Object.assign({ className: 'category-list-title' }, { children: "\uC124\uC815" })), (0, jsx_runtime_1.jsx)("ul", { children: categories.map((category) => ((0, jsx_runtime_1.jsxs)("li", Object.assign({ onClick: () => handleCategorySelect(category.name), className: selectedCategory === category.name ? 'active' : '' }, { children: [(0, jsx_runtime_1.jsx)("img", { src: category.icon, alt: category.name }), (0, jsx_runtime_1.jsx)("p", { children: category.name })] }), category.name))) })] })), (0, jsx_runtime_1.jsx)(Button_1.default, { color: 'white', value: '\uB85C\uADF8\uC544\uC6C3', onClick: handleLogout })] }));
};
exports.default = MyPageCategory;
