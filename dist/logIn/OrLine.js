"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const OrLine = styled_components_1.default.div `
  border-bottom: 1px solid #bdbdbd;
  width: 35rem;
  margin-top: 3rem;
`;
const OrText = styled_components_1.default.span `
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #bdbdbd;
  background-color: white;
  margin-top: -0.7rem;
  padding: 0 1rem 0 1rem;
`;
const OrLineText = ({ text }) => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(OrLine, {}), (0, jsx_runtime_1.jsx)(OrText, { children: text })] }));
};
exports.default = OrLineText;
