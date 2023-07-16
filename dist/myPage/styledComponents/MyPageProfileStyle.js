"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonLink = exports.PostContainer = exports.ListContainer = exports.introContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const react_router_dom_1 = require("react-router-dom");
exports.introContainer = styled_components_1.default.section `
  width: 100%;
  padding: 3.5rem 2rem;

  .imgAndButtons {
    display: flex;
    justify-content: space-between;

    .img-container {
      width: 120px;
      height: 120px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .buttons-container {
    width: 20rem;
    display: flex;
    justify-content: space-between;
  }
  .modal-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .modal-buttons-container {
    width: 14.5rem;
    display: flex;
    justify-content: space-between;

    button {
      margin-top: 1rem;
    }
  }

  img {
    width: 12rem;
    margin-bottom: 2rem;
    border-radius: 50%;
  }
  h3 {
    margin: 1.5rem 0;
    font-weight: 600;
    font-size: 2.3rem;
  }

  h4 {
    margin: 1.5rem 0;
    font-weight: 400;
    font-size: 2rem;
    color: #909090;
  }

  h5 {
    margin-bottom: 4rem;
    font-weight: 400;
    font-size: 2rem;
    color: #909090;
  }

  .intro-container {
    width: 100%;
    padding: 16px;
    background: #ffffff;
    border: 1px solid #d8e0e9;
    border-radius: 8px;
    min-width: 728px;
    min-height: 124px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    .intro {
      font-weight: 400;
      font-size: 1.9rem;
      line-height: 3rem;
    }
    @media (max-width: 768px) {
      min-width: unset;
      font-size: 1.5rem;
      line-height: 2.5rem;
    }
  }
`;
exports.ListContainer = styled_components_1.default.section `
  width: 100%;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 3.5rem 2rem;
  }

  ul {
    padding-bottom: 100px;
  }
  li {
    border-top: 1px solid #e0e0e0;

    &:last-child {
      border-bottom: 1px solid #e0e0e0;
    }

    h4 {
      padding: 24px 0 20px;
      font-weight: 600;
      font-size: 2rem;
      line-height: 2.3rem;
    }

    .list-content {
      padding-bottom: 30px;
      font-weight: 300;
      font-size: 1.7rem;
      line-height: 1.7rem;
      color: #424242;
    }

    .list-button {
      width: 12rem;
      height: 4rem;
      margin-bottom: 3rem;
      border: 1px solid #b9b9b9;
      border-radius: 2rem;
      background-color: #ffffff;
      font-size: 1.5rem;
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

      &:hover {
        transition: all 0.2s ease-in-out;
        background-color: #f1f1f1;
      }
      &:not(:hover) {
        transition: all 0.2s ease-in-out;
        background-color: #ffffff;
      }
      &:active {
        background-color: #eaeaea;
      }
    }
  }
`;
exports.PostContainer = styled_components_1.default.section `
  width: 100%;
  display: flex;
  flex-direction: column;
`;
exports.ButtonLink = (0, styled_components_1.default)(react_router_dom_1.Link) `
  width: 9.4rem;
  height: 4rem;
`;
