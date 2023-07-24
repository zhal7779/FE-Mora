"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminMainContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const AdminMainContainer = styled_components_1.default.div `
  max-width: 984px;
  min-height: 100vh;
  padding-top: 3.6rem;

  @media (max-width: 768px) {
    max-width: 535px;
  }
`;
exports.AdminMainContainer = AdminMainContainer;
