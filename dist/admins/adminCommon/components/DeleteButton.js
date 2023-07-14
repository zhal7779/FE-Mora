"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const DeleteButton = ({ onClick }) => {
    return ((0, jsx_runtime_1.jsx)("span", Object.assign({ style: { cursor: 'pointer' } }, { children: (0, jsx_runtime_1.jsx)("svg", Object.assign({ xmlns: 'http://www.w3.org/2000/svg', width: '22', height: '22', fill: 'none', onClick: onClick }, { children: (0, jsx_runtime_1.jsx)("path", { stroke: '#FF1300', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '1.8', d: 'M2.75 5.5h16.5M7.333 5.5V3.667a1.833 1.833 0 0 1 1.834-1.834h3.666a1.833 1.833 0 0 1 1.834 1.834V5.5m2.75 0v12.833a1.833 1.833 0 0 1-1.834 1.834H6.417a1.833 1.833 0 0 1-1.834-1.834V5.5h12.834ZM12.833 10.083v5.5M9.167 10.083v5.5' }) })) })));
};
exports.default = DeleteButton;
