"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const fi_chevron_left_svg_1 = require("../../assets/icons/fi_chevron-left.svg");
const fi_chevron_right_svg_1 = require("../../assets/icons/fi_chevron-right.svg");
const Pagination = ({ pages, currentPage, clickPage }) => {
    const [pageNumber, setPageNumber] = (0, react_1.useState)(currentPage + 1);
    const handlePageChange = (newPageNumber) => {
        setPageNumber(newPageNumber + 1);
        clickPage(newPageNumber);
    };
    //이전페이지
    const handlePrevButton = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
            clickPage(pageNumber - 2);
        }
    };
    //다음페이지
    const handleNextButton = () => {
        if (pageNumber < pages) {
            setPageNumber(pageNumber + 1);
            clickPage(pageNumber);
        }
    };
    return ((0, jsx_runtime_1.jsxs)(Container, { children: [(0, jsx_runtime_1.jsx)("button", Object.assign({ className: 'prev_button', onClick: handlePrevButton }, { children: (0, jsx_runtime_1.jsx)(fi_chevron_left_svg_1.ReactComponent, { stroke: 'var(--main-white)' }) })), Array.from({ length: pages }, (_, index) => ((0, jsx_runtime_1.jsx)(PageNumber, Object.assign({ onClick: () => handlePageChange(index), isActive: pageNumber === index + 1 }, { children: index + 1 }), index))), (0, jsx_runtime_1.jsx)("button", Object.assign({ className: 'next_button', onClick: handleNextButton }, { children: (0, jsx_runtime_1.jsx)(fi_chevron_right_svg_1.ReactComponent, { stroke: 'var(--main-white)' }) }))] }));
};
exports.default = Pagination;
const Container = styled_components_1.default.div `
  margin-top: 5rem;
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.2rem;
    margin: 0 1rem;
    background: #aa8dff;
    border-radius: 50%;
    &:hover {
      background: rgb(170, 141, 255, 0.5);
    }
  }
`;
const PageNumber = styled_components_1.default.p `
  cursor: pointer;
  color: var(--dark-gray);

  padding: 0 0.5rem;
  ${({ isActive }) => isActive &&
    `
    font-weight: 600;
    
  `}
`;
