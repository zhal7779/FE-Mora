"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const Header_1 = __importDefault(require("./header/components/Header"));
const Footer_1 = __importDefault(require("./footer/components/Footer"));
const react_router_dom_1 = require("react-router-dom");
const MainLayout = () => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {}), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
};
exports.default = MainLayout;
