"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashtagContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.HashtagContainer = styled_components_1.default.div `
  max-width: 1024px;
  margin: 0 auto;
  padding: 20px 20px 0;

  .hashtags-preview {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    padding-bottom: 12px;

    li {
      display: flex;
      align-items: center;
      padding: 5px 10px;
      font-size: 1.4rem;
      color: rgb(66, 66, 66);
      background: rgb(255, 255, 255);
      border: 1px solid rgb(216, 224, 233);
      border-radius: 20px;

      span {
        margin-right: 4px;
      }

      .hashtag-delete {
        width: 18px;
        height: 18px;
        margin-left: 6px;
        background-color: transparent;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }

  .hashtags-input {
    position: relative;
    display: flex;
    align-items: center;
    padding: 12px;
    font-size: 1.6rem;
    border-radius: 4px;
    color: rgb(66, 66, 66);
    background: rgb(255, 255, 255);
    border: 1px solid rgb(200, 210, 223);

    input {
      font-size: 1.6rem;
      flex-grow: 1;

      &::placeholder {
        color: #becbdd;
      }
    }
  }

  .hashtags-popular {
    position: absolute;
    left: 0;
    top: 52px;

    width: 100%;
    border: 1px solid rgb(200, 210, 223);
    background-color: #fff;
    border-radius: 4px;

    z-index: 10;

    li {
      padding: 18px 20px;
      cursor: pointer;

      &:first-child::after {
        position: absolute;
        right: 20px;
        content: '가장 많이 사용된 해쉬태그입니다';
        display: inline-block;
        color: #becbdd;
        font-size: 1.4rem;
      }

      &.selected,
      &:hover {
        background-color: #c8d2df22;
      }
    }
  }
`;
