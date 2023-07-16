"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.HeaderContainer = styled_components_1.default.header `
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;

  width: 100%;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #cbd5e1;

  .header-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1280px;
    padding: 0 20px;
    margin: 0 auto;
  }

  .btn-back {
    width: 40px;
    height: 40px;
  }

  .header-right-btns {
    display: flex;
  }

  .post-image {
    width: 36px;
    height: 36px;
    padding: 6px;
    margin-right: 20px;
    border-radius: 4px;
    transition: 0.2s;

    &:hover {
      background: rgba(203, 213, 225, 0.4);
    }
  }

  .btn-back,
  .post-image {
    background: none;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
