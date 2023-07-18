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
const Style = __importStar(require("./styledComponents/CategoryStyle"));
const Button_1 = __importDefault(require("../components/Button"));
const react_router_dom_1 = require("react-router-dom");
const categoryData_1 = require("./categoryData");
const Category = ({ selectedCategoryId, setSelectedCategoryId }) => {
    const handleCategorySelect = category => {
        setSelectedCategoryId(category);
    };
    return ((0, jsx_runtime_1.jsxs)(Style.CategoryContainer, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "category-title" }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "\uD1A0\uB07C\uAD74\uD83D\uDC30" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/write" }, { children: (0, jsx_runtime_1.jsx)(Button_1.default, { value: "\uC791\uC131\uD558\uAE30", color: "darkPurple" }) }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "category-list" }, { children: [(0, jsx_runtime_1.jsx)("p", Object.assign({ className: "category-list-title" }, { children: "\uD1A0\uD53D" })), (0, jsx_runtime_1.jsx)("ul", { children: categoryData_1.categories.map(category => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, Object.assign({ to: `/community/post/${category.id}`, onClick: () => handleCategorySelect(category.id), className: selectedCategoryId === category.id ? 'active' : '' }, { children: [(0, jsx_runtime_1.jsx)("img", { src: category.icon, alt: category.name }), (0, jsx_runtime_1.jsx)("p", { children: category.name })] })) }, category.id))) })] }))] }));
};
exports.default = Category;
