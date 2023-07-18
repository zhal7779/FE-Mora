"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalButton = exports.ModalHeaderButton = exports.ModalHeader = exports.ModalButtonBlock = exports.ModalContentP = exports.ModalContentTextarea = exports.ModalContentInput = exports.ModalSubTitle = exports.ModalTitle = exports.ModalContentBlock = exports.ModalOverlay = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.ModalOverlay = styled_components_1.default.div `
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: #000;

  z-index: 1;
  opacity: 0.4;
`;
exports.ModalContentBlock = styled_components_1.default.div `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 45rem;
  padding: 4rem 5rem;
  border-radius: 1rem;

  background-color: #ffffff;

  z-index: 3;

  @media (max-width: 376px) {
    width: 300px;
    padding: 30px 40px;
  }
`;
exports.ModalTitle = styled_components_1.default.h3 `
  display: block;
  font-size: 2rem;
  font-weight: bold;

  color: #424242;
`;
exports.ModalSubTitle = styled_components_1.default.p `
  margin-bottom: 0.8rem;

  color: #616161;

  font-size: 1.3rem;
  font-weight: bold;
`;
exports.ModalContentInput = styled_components_1.default.input `
  width: 100%;
  padding: 1rem 1.5rem;
  border: 1px solid #d9d9d9;
  border-radius: 0.4rem;
  margin-bottom: 2.2rem;

  background-color: #fefefe;
  color: #424242;

  font-size: 1.4rem;

  &:focus {
    outline: none;
  }
`;
exports.ModalContentTextarea = styled_components_1.default.textarea `
  width: 100%;
  height: 10rem;
  padding: 1rem 1.5rem;
  border: 1px solid #d9d9d9;
  border-radius: 0.4rem;
  margin-bottom: 2.2rem;

  background-color: #fefefe;
  color: #424242;

  font-size: 1.4rem;

  &:focus {
    outline: none;
  }

  @media (max-width: 376px) {
    margin-bottom: 16px;
  }
`;
exports.ModalContentP = styled_components_1.default.p `
  width: 100%;
  padding: 1rem 1.5rem;
  border: 1px solid #d9d9d9;
  border-radius: 0.4rem;
  margin-bottom: 3rem;

  background-color: #fefefe;
  color: #424242;

  font-size: 1.4rem;
`;
exports.ModalButtonBlock = styled_components_1.default.div `
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1.5rem;
  padding-top: 2rem;
`;
exports.ModalHeader = styled_components_1.default.div `
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;
`;
exports.ModalHeaderButton = styled_components_1.default.button `
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 4px;

  background-color: #5c469c;
  color: #fff;

  font-size: 1.2rem;
  font-weight: bold;
`;
exports.ModalButton = styled_components_1.default.button `
  padding: 1rem 2rem;
  border: ${(props) => (props.$purple ? 'none' : '1px solid #d9d9d9')};
  border-radius: 4px;

  background-color: ${(props) => (props.$purple ? '#7353ea' : 'white')};
  color: ${(props) => (props.$purple ? '#fff' : '#616161')};

  font-size: 1.5rem;
  font-weight: bold;
`;
