"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const MainBanner_1 = __importDefault(require("../main/MainBanner"));
const MainPost_1 = __importDefault(require("../main/MainPost"));
const MainPage = () => {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(MainContainer, { children: [(0, jsx_runtime_1.jsx)(MainBanner_1.default, {}), (0, jsx_runtime_1.jsx)(MainPost_1.default, {})] }) }));
};
exports.default = MainPage;
const MainContainer = styled_components_1.default.div `
  padding-top: 60px;
`;
