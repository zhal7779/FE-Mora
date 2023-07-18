"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const react_1 = require("react");
const LoginInput = ({ title, type, placeholder, name, onChange, value, onKeyDown }, ref) => {
    return ((0, jsx_runtime_1.jsxs)(LoginInputContainer, { children: [(0, jsx_runtime_1.jsx)(LoginText, { children: title }), (0, jsx_runtime_1.jsx)(InputContainer, { children: (0, jsx_runtime_1.jsx)(Input, { type: type, placeholder: placeholder, name: name, onChange: onChange, value: value, onKeyDown: onKeyDown, ref: ref }) })] }));
};
exports.default = (0, react_1.forwardRef)(LoginInput);
const LoginInputContainer = styled_components_1.default.div `
  width: 35.2rem;
  margin: 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const LoginText = styled_components_1.default.h3 `
  font-weight: 700;
  font-size: 2rem;
  line-height: 2rem;
  margin: 0;
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
`;
const InputContainer = styled_components_1.default.div `
  height: 48px;
  width: 100%;
`;
const Input = styled_components_1.default.input `
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border: 2px solid #d8e0e9;
  border-radius: 12px;
  padding-left: 1rem;
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;

  &::placeholder {
    font-style: normal;
    font-weight: 600;
    font-size: 2rem;
    line-height: 24px;
    color: #d9d9d9;
  }
`;
