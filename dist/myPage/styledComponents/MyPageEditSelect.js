"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const MyPageEditSelect = ({ title, options, name, onChange, value, disabled, }) => {
    return ((0, jsx_runtime_1.jsxs)(MyPageEditSelectContainer, { children: [(0, jsx_runtime_1.jsx)(MyPageEditSelectText, { children: title }), (0, jsx_runtime_1.jsx)(SelectContainer, { children: (0, jsx_runtime_1.jsx)(Select, Object.assign({ name: name, onChange: onChange, value: value, disabled: disabled }, { children: options.map((option) => {
                        if (typeof option === 'string') {
                            return ((0, jsx_runtime_1.jsx)("option", Object.assign({ value: option }, { children: option }), option));
                        }
                        return ((0, jsx_runtime_1.jsx)("option", Object.assign({ value: option.value }, { children: option.label }), option.value));
                    }) })) })] }));
};
exports.default = MyPageEditSelect;
const MyPageEditSelectContainer = styled_components_1.default.div `
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const MyPageEditSelectText = styled_components_1.default.h3 `
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 2rem;
  margin: 0;
  margin-right: 1.5rem;
  margin-bottom: 0.5rem;
`;
const SelectContainer = styled_components_1.default.div `
  width: 100%;
`;
const Select = styled_components_1.default.select `
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  background: #ffffff;
  border: 1px solid #d8e0e9;
  border-radius: 8px;
  padding-left: 1rem;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
`;
