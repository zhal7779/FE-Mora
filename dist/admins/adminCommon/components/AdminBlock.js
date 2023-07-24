"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const AdminBlockStyle_1 = require("../styledComponents/AdminBlockStyle");
const AdminBlock = ({ children }) => {
    return ((0, jsx_runtime_1.jsx)(AdminBlockStyle_1.Container, { children: (0, jsx_runtime_1.jsx)(AdminBlockStyle_1.InnerContainer, { children: children }) }));
};
exports.default = AdminBlock;
