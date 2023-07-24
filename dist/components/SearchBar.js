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
const fi_search_svg_1 = require("../assets/icons/fi_search.svg");
const react_router_dom_1 = require("react-router-dom");
const SearchBar = ({ handleClose }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    //input 처리
    const [input, setInput] = (0, react_1.useState)('');
    const handleInputChange = (e) => {
        setInput(e.target.value);
    };
    const handleClickOutside = () => {
        handleClose(false);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Container, { children: (0, jsx_runtime_1.jsxs)(Content, { children: [(0, jsx_runtime_1.jsx)(fi_search_svg_1.ReactComponent, { style: { width: '3rem', height: '3rem', stroke: '#94a3b8' } }), (0, jsx_runtime_1.jsx)(Input, { type: 'text', value: input, onChange: handleInputChange, onKeyDown: (e) => {
                                if ('Enter' === e.key) {
                                    handleClickOutside();
                                    navigate('/search', { state: input });
                                }
                            }, placeholder: '\uD68C\uC0AC, \uC0AC\uB78C, \uD0A4\uC6CC\uB4DC\uB85C \uAC80\uC0C9' })] }) }), (0, jsx_runtime_1.jsx)(Background, { onClick: handleClickOutside })] }));
};
exports.default = SearchBar;
const Background = styled_components_1.default.div `
  position: fixed;
  z-index: 100;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
`;
const Container = styled_components_1.default.div `
  position: fixed;
  z-index: 200;
  width: 100%;
  background: var(--main-white);
`;
const Content = styled_components_1.default.div `
  max-width: 1280px;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 3.2rem;
`;
const Input = styled_components_1.default.input `
  padding: 1.4rem;
  font-weight: 500;
  font-size: 3rem;
  width: 100%;
  border: none;
  outline: none;
  ::placeholder {
    color: #94a3b8;
  }

  @media (max-width: 768px) {
    font-size: 2.6rem;
    padding: 1.2rem;
  }
  @media (max-width: 480px) {
    font-size: 2rem;
    padding: 0.6rem;
  }
`;
