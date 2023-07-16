"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const u_search_svg_1 = __importDefault(require("../assets/icons/u_search.svg"));
const Input = ({ width, onChange, value }) => {
    return ((0, jsx_runtime_1.jsxs)(InputContainer, Object.assign({ width: width }, { children: [(0, jsx_runtime_1.jsx)(SearchIcon, { src: u_search_svg_1.default, alt: 'Search' }), (0, jsx_runtime_1.jsx)(InputElement, { type: 'text', placeholder: '\uD0A4\uC6CC\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694', value: value, onChange: onChange })] })));
};
exports.default = Input;
const InputContainer = styled_components_1.default.div `
  position: relative;
  width: ${({ width }) => width};
`;
const InputElement = styled_components_1.default.input `
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  padding-left: 40px;
  border: 1px solid #d8e0e9;
  border-radius: 4px;
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.3rem;
  color: #242424;
`;
const SearchIcon = styled_components_1.default.img `
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`;
