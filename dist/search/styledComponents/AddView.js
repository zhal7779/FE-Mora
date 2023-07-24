"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddView = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.AddView = styled_components_1.default.div `
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;
  font-weight: 700;
  padding: 2rem;
  div {
    display: flex;
    align-items: center;
  }
  .title {
    padding-right: 0.5rem;
  }
  .total_count {
    color: #94a3b8;
  }
  .all_view {
    font-size: 1.4rem;
    font-weight: 600;
  }
`;
