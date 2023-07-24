"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const Button = ({ value, color, onClick }) => {
    let ButtonComponent;
    switch (color) {
        case 'darkPurple':
            ButtonComponent = DarkPurpleButton;
            break;
        case 'lightPurple':
            ButtonComponent = LightPurpleButton;
            break;
        case 'white':
            ButtonComponent = WhiteButton;
            break;
        default:
            ButtonComponent = DarkPurpleButton;
            break;
    }
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(ButtonComponent, Object.assign({ onClick: onClick, color: color }, { children: value })) }));
};
exports.default = Button;
const BaseButton = styled_components_1.default.button `
  display: inline-block;
  /* width: 9.8rem; */
  width: auto;
  height: 3.8rem;
  padding: 0.7rem 2rem 0.9rem 2rem;
  border-radius: 0.7rem;
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2.2rem;
  text-align: center;
  color: ${({ color }) => (color === 'white' ? '#242424' : '#ffffff')};
  box-shadow: rgba(0, 0, 0, 0.2) 1.9px 1.9px 2.6px;
  background: ${({ color }) => color === 'darkPurple' ? '#7353ea' : color === 'lightPurple' ? '#d6c9ff' : '#ffffff'};

  &:hover {
    background: ${({ color }) => color === 'darkPurple' ? '#5e3de4' : color === 'lightPurple' ? '#c5b4fc' : '#f1f1f1'};
    transition: all 0.2s ease-in-out;
  }

  &:not(:hover) {
    background: ${({ color }) => color === 'darkPurple' ? '#7353ea' : color === 'lightPurple' ? '#d6c9ff' : '#ffffff'};
    transition: all 0.2s ease-in-out;
  }

  &:active {
    background: ${({ color }) => color === 'darkPurple' ? '#532eda' : color === 'lightPurple' ? '#b39cfc' : '#eaeaea'};
  }
`;
const DarkPurpleButton = (0, styled_components_1.default)(BaseButton) ``;
const LightPurpleButton = (0, styled_components_1.default)(BaseButton) ``;
const WhiteButton = (0, styled_components_1.default)(BaseButton) `
  border: 1px solid #b9b9b9;
  padding: 0.6rem 2rem 0.9rem 2rem;
`;
