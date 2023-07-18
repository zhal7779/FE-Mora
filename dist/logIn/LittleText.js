"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importStar(require("styled-components"));
const StyledLittleText = styled_components_1.default.p `
  font-style: normal;
  font-weight: 350;
  font-size: 1.7rem;
  line-height: 1.8rem;
  margin: 1.5rem 0;
  ${({ wiggle }) => wiggle &&
    (0, styled_components_1.css) `
      animation: ${wiggleAnimation} 2s ease-in-out;
    `};
  &:hover {
    cursor: pointer;
  }
`;
const wiggleAnimation = (0, styled_components_1.keyframes) `
  0%,
  7% {
    transform: rotateZ(0);
  }
  15% {
    transform: rotateZ(-10deg);
  }
  20% {
    transform: rotateZ(5deg);
  }
  25% {
    transform: rotateZ(-6deg);
  }
  30% {
    transform: rotateZ(3deg);
  }
  35% {
    transform: rotateZ(-2deg);
  }
  40%,
  100% {
    transform: rotateZ(0);
  }
`;
const LittleText = ({ text, onClick, wiggle }) => {
    return ((0, jsx_runtime_1.jsx)(StyledLittleText, Object.assign({ onClick: onClick, wiggle: wiggle }, { children: text })));
};
exports.default = LittleText;
