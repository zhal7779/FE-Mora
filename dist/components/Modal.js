"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const Modal = ({ width, children }) => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(ModalContainer, Object.assign({ style: { width: width } }, { children: (0, jsx_runtime_1.jsx)("div", { children: children }) })), (0, jsx_runtime_1.jsx)(ModalBg, {})] }));
};
exports.default = Modal;
const ModalContainer = styled_components_1.default.div `
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 42px 48px;
  background: #ffffff;
  border: 1px solid #616161;
  border-radius: 10px;

  z-index: 300;
`;
const ModalBg = styled_components_1.default.div `
  position: fixed; /* 수정된 부분 */
  top: 0;
  left: 0;
  width: 100vw; /* 수정된 부분 */
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);

  z-index: 299;
`;
