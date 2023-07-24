"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveText = exports.H5 = exports.LinkButtonContainer = exports.CareerButtonContainer = exports.SkillButtonContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.SkillButtonContainer = styled_components_1.default.div `
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  .badge {
    position: relative;
    background-color: #ffffff;
    border: 1px solid #b9b9b9;
    padding: 8px 20px 9px 20px;
    border-radius: 2rem;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;
exports.CareerButtonContainer = styled_components_1.default.div `
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  .badge {
    position: relative;
    background-color: #ffffff;
    border: 1px solid #b9b9b9;
    padding: 5px 22px 6px 22px;
    margin-right: 1rem;
    margin-bottom: 1.2rem;
    border-radius: 2rem;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover .remove-text {
      display: block;
    }
  }
`;
exports.LinkButtonContainer = styled_components_1.default.div `
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  .badge {
    position: relative;
    background-color: #ffffff;
    border: 1px solid #b9b9b9;
    padding: 8px 20px 9px 20px;
    margin-right: 1rem;
    margin-bottom: 1.2rem;
    border-radius: 2rem;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover .remove-text {
      display: block;
    }
  }
`;
exports.H5 = styled_components_1.default.h5 `
  font-weight: 400;
  font-size: 1.7rem;
  color: #424242;
  line-height: 3rem;
`;
exports.RemoveText = styled_components_1.default.span `
  position: absolute;
  top: 50%;
  right: 0.6rem;
  transform: translateY(-50%);
  font-size: 1.2rem;
  font-weight: 600;
  color: #ee1e1e;
  display: none;
`;
