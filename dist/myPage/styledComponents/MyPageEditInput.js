"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const MyPageEditInput = ({ title, type, placeholder, name, onChange, value, }) => {
    return ((0, jsx_runtime_1.jsxs)(MyPageEditInputContainer, { children: [(0, jsx_runtime_1.jsx)(MyPageEditInputText, { children: title }), (0, jsx_runtime_1.jsx)(InputContainer, { children: (0, jsx_runtime_1.jsx)(Input, { type: type, placeholder: placeholder, name: name, onChange: onChange, value: value }) })] }));
};
exports.default = MyPageEditInput;
const MyPageEditInputContainer = styled_components_1.default.div `
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const MyPageEditInputText = styled_components_1.default.h3 `
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 2rem;
  margin: 0;
  margin-right: 1.5rem;
  margin-bottom: 0.5rem;
`;
const InputContainer = styled_components_1.default.div `
  height: 40px;
  width: 100%;
`;
const Input = styled_components_1.default.input `
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border: 1px solid #d8e0e9;
  border-radius: 8px;
  padding-left: 1rem;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;

  &::placeholder {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    margin-left: 2rem;
    color: #d9d9d9;
  }
`;
