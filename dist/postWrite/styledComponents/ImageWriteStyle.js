"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.ImageContainer = styled_components_1.default.div `
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 20px;

  .file-upload {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;

    width: 100%;
    padding-top: 20px;

    &-preview {
      position: relative;
      border: 1px solid #d7dce4;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .delete-btn {
        position: absolute;
        top: -10px;
        right: -10px;
        background-color: transparent;
      }
    }

    &-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      font-size: 1.3rem;
      line-height: 1.8rem;
      color: #acb2b9;
      border: 1px dashed #d7dce4;
      cursor: pointer;

      input[type='file'] {
        position: absolute;
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        z-index: -1;
      }
    }

    &-preview,
    &-btn {
      width: 100px;
      height: 100px;
    }
  }
`;
