"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HamburgerMenu = exports.MenuBarLi = exports.MenuBarUl = exports.AdminName = exports.AdminInfoBlock = exports.MenuContainer = exports.Content = exports.Container = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.header `
  display: block;
  left: 0;
  right: 0;
  top: 0;
  height: 6rem;
  padding: 0 5rem;

  border-bottom: #cbd5e1 1px solid;
  background: var(--main-white);

  & .hamburger-menu-block {
    display: none;

    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 0 2rem;

    & .hamburger-menu-block {
      display: block;
    }
  }
`;
exports.Content = styled_components_1.default.nav `
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    & .morae-logo {
      width: 10rem;
    }
    & .user-logo {
      display: none;
    }
  }
`;
exports.MenuContainer = styled_components_1.default.div `
  display: flex;
  align-items: center;
`;
exports.AdminInfoBlock = styled_components_1.default.div `
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 10rem;
`;
exports.AdminName = styled_components_1.default.p `
  font-size: 1.4rem;
  font-weight: 600;
`;
exports.MenuBarUl = styled_components_1.default.ul `
  position: absolute;
  top: 55px;
  left: 0;
  right: 0;

  display: none;

  @media (max-width: 376px) {
    display: block;
    top: 53px;
  }
  @media (min-width: 376px) and (max-width: 768px) {
    display: block;
  }
`;
exports.MenuBarLi = styled_components_1.default.li `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65px;
  border-bottom: 1px solid #cbd5e1;

  font-size: 1.8rem;

  transition: all 0.3s ease;
  background-color: var(--main-white);
  color: var(#000);

  cursor: pointer;

  &:hover {
    background-color: var(--light-purple);
  }

  @media (max-width: 376px) {
    font-size: 1.4rem;
    height: 40px;
  }
`;
const HamburgerMenu = () => ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: '28px', height: '28px', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, { children: [(0, jsx_runtime_1.jsx)("g", { id: 'SVGRepo_bgCarrier', strokeWidth: '0' }), (0, jsx_runtime_1.jsx)("g", { id: 'SVGRepo_tracerCarrier', strokeLinecap: 'round', strokeLinejoin: 'round' }), (0, jsx_runtime_1.jsx)("g", Object.assign({ id: 'SVGRepo_iconCarrier' }, { children: (0, jsx_runtime_1.jsx)("path", { d: 'M4 17H20M4 12H20M4 7H20', stroke: '#7353ea', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round' }) }))] })));
exports.HamburgerMenu = HamburgerMenu;
