"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nodata = exports.ImageIcon = exports.HiddenContent = exports.ShowContent = exports.Content = exports.Scroll = exports.HeaderContent = exports.Container = exports.Background = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Background = styled_components_1.default.div `
  position: fixed;
  z-index: 100;
  left: 0;
  width: 100%;
  height: 100vh;
  background: transparent;
  @media (max-width: 768px) {
    top: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`;
exports.Container = styled_components_1.default.section `
  position: fixed;
  right: 5%;
  width: 46rem;
  height: 39.4rem;
  background: var(--main-white);
  box-shadow: 2px 3px 10px 2px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  z-index: 300;
  @media (max-width: 768px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 480px) {
    width: 80%;
    height: 56%;
  }
`;
exports.HeaderContent = styled_components_1.default.div `
  padding: 1.4rem 1.8rem;
  background: var(--main-white);
  border-bottom: 1px solid #e0e0e0;
  p {
    font-weight: 600;
    font-size: 1.6rem;
  }
  @media (max-width: 768px) {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
`;
exports.Scroll = styled_components_1.default.div `
  height: calc(100% - 4.4rem);
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.8rem;
  }
  &::-webkit-scrollbar-thumb {
    height: 10%;
    background-clip: padding-box;
    background: #d9d9d9;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;
exports.Content = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
`;
exports.ShowContent = styled_components_1.default.div `
  display: flex;
  margin: 1.4rem 1rem;
  justify-content: space-between;
  .planAlarm {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div {
    display: flex;
    align-items: center;
  }
  span {
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    background: var(--dark-purple);
    margin-right: 1rem;
  }
  strong {
    font-weight: 600;
    font-size: 1.4rem;
  }
  p {
    color: var(--dark-gray);
    font-weight: 400;
    font-size: 1.4rem;
  }
`;
exports.HiddenContent = styled_components_1.default.div `
  width: 100%;
  padding: 2rem 3rem 0 5rem;
  background: #f7f5ff;
  .title_div {
    width: 100%;
    display: flex;
    background: transparent;
    align-items: center;
    justify-content: flex-start;
  }
  span {
    background: #ed6653;
    color: var(--main-white);
    font-size: 1.4rem;
    border-radius: 2px;
    padding: 0.4rem 0.5rem;
  }
  div {
    display: flex;
    background: var(--main-white);
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 1rem;
  }
  p {
    font-weight: 400;
    font-size: 1.4rem;

    line-height: 120%;
  }
  h5 {
    margin-left: 1rem;
    font-weight: 600;
    font-size: 1.4rem;
  }
`;
exports.ImageIcon = styled_components_1.default.img `
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 1.2rem;
`;
exports.Nodata = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7rem;

  img {
    width: 16rem;
  }
  p {
    font-size: 1.6rem;
    color: var(--dark-gray);
    font-weight: 600;
  }
`;
