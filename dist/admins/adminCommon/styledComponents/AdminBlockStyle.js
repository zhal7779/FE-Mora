"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InnerContainer = exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const Container = styled_components_1.default.div `
  display: flex;
  justify-content: center;
  max-width: 100%;
`;
exports.Container = Container;
const InnerContainer = styled_components_1.default.div `
  display: flex;
  justify-content: space-between;
  gap: 4.8rem;
  max-width: 124rem;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0;
  }
`;
exports.InnerContainer = InnerContainer;
