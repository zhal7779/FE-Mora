"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBarInput = exports.SearchBarBlock = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.SearchBarBlock = styled_components_1.default.form `
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
  padding: 1.1rem 1.3rem;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  margin-bottom: 6rem;
`;
exports.SearchBarInput = styled_components_1.default.input `
  width: 100%;
  height: 2rem;
  padding-top: 0.2rem;

  border: none;

  font-size: 1.6rem;

  &::placeholder {
    color: #d4d4d4;
  }
  &:focus {
    outline: none;
  }
`;
