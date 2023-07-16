"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const StyledHeadline = styled_components_1.default.h1 `
  font-size: 3rem;
  font-weight: 600;
  line-height: 3rem;
  margin-bottom: 3rem;
`;
const Headline = ({ title }) => {
    return (0, jsx_runtime_1.jsx)(StyledHeadline, { children: title });
};
exports.default = Headline;
