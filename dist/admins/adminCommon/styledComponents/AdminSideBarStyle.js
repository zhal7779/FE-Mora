"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagementListTitle = exports.SideBarListSvg = exports.SideBarBtn = exports.SideBarButtonBlock = exports.SideBar = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.SideBar = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 208px;
  padding-top: 4rem;
  padding-bottom: 3.6rem;

  & h1 {
    margin-bottom: 2.5rem;

    font-size: 2.4rem;
    font-weight: bold;
  }
  & .management-list > p {
    display: inline-block;
    margin-bottom: 1.4rem;

    color: #64748b;

    font-size: 1.2rem;
    font-weight: 900;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
exports.SideBarButtonBlock = styled_components_1.default.button `
  width: 8rem;
  height: 3.7rem;
  padding: 0.7rem 1.5rem;
  border-radius: 0.4rem;

  font-size: 1.4rem;
  font-weight: bold;

  background-color: #bba8fd;
  color: #fff;

  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #7356b8;
  }
`;
exports.SideBarBtn = styled_components_1.default.button `
  display: flex;
  align-items: center;
  padding: 0;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border: none;
  margin: 0;

  background-color: #fff;

  &:hover {
    & path.stroke {
      stroke: ${(props) => props.hoverColor};
      transition: stroke 0.2s ease-in-out;
    }
    & path.fill {
      fill: ${(props) => props.hoverColor};
      transition: fill 0.2s ease-in-out;
    }
    & span {
      color: #000;
    }
  }
`;
exports.SideBarListSvg = styled_components_1.default.svg `
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 0.8rem;

  line-height: 2.4rem;
  vertical-align: middle;
`;
exports.ManagementListTitle = styled_components_1.default.span `
  color: #adadad;

  font-size: 1.8rem;
  font-weight: bold;

  transition: all 0.2s ease-in-out;
`;
