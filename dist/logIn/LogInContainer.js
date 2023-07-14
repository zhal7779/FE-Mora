"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const LoginContainer = ({ children }) => {
    return (0, jsx_runtime_1.jsx)(StyledLoginContainer, { children: children });
};
exports.default = LoginContainer;
const StyledLoginContainer = styled_components_1.default.div `
  position: relative;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 0 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
  top: 60px;
  background: #ffffff;
  border-width: 0px 1px;
  border-style: solid;
  border-color: #cbd5e1;

  @media (max-width: 768px) {
    border: none;
  }
`;
