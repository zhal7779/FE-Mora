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
const styled_components_1 = __importStar(require("styled-components"));
const u_angle_up_svg_1 = __importDefault(require("../assets/icons/u_angle-up.svg"));
const u_angle_down_svg_1 = __importDefault(require("../assets/icons/u_angle-down.svg"));
const SigninAccordion = ({ children }) => {
    const [expanded, setExpanded] = (0, react_1.useState)(false);
    const firstChildRef = (0, react_1.useRef)(null);
    const toggleAccordion = () => {
        setExpanded(!expanded);
    };
    (0, react_1.useEffect)(() => {
        if (expanded && firstChildRef.current) {
            firstChildRef.current.focus();
        }
    }, [expanded]);
    return ((0, jsx_runtime_1.jsxs)(AccordionWrapper, { children: [(0, jsx_runtime_1.jsxs)(AccordionButton, Object.assign({ onClick: toggleAccordion, expanded: expanded }, { children: ["\uC774\uBA54\uC77C\uB85C \uC2DC\uC791\uD558\uAE30", expanded ? ((0, jsx_runtime_1.jsx)(AccordionIcon, { src: u_angle_up_svg_1.default, alt: 'Up Icon' })) : ((0, jsx_runtime_1.jsx)(AccordionIcon, { src: u_angle_down_svg_1.default, alt: 'Down Icon' }))] })), (0, jsx_runtime_1.jsx)(AccordionContent, Object.assign({ expanded: expanded }, { children: react_1.default.Children.map(children, (child, index) => {
                    if (index === 0) {
                        return react_1.default.cloneElement(child, { ref: firstChildRef });
                    }
                    return child;
                }) }))] }));
};
const slideDown = (0, styled_components_1.keyframes) `
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 500px;
    opacity: 1;
  }
`;
const slideUp = (0, styled_components_1.keyframes) `
  from {
    max-height: 500px;
    opacity: 1;
  }
  to {
    max-height: 0;
    opacity: 0;
  }
`;
const AccordionWrapper = styled_components_1.default.div `
  margin-top: 20px;
`;
const AccordionButton = styled_components_1.default.button `
  display: inline-block;
  width: 35.2rem;
  height: 48px;
  margin-top: 0.3rem;
  border-radius: 1.2rem;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  background-color: #7353ea;
  color: #ffffff;
  padding: 11px 21px 9px 21px;
  cursor: pointer;

  &:hover {
    background: #5e3de4;
    transition: all 0.2s ease-in-out;
  }
  &:not(:hover) {
    background: #7353ea;
    transition: all 0.2s ease-in-out;
  }
  &:active {
    background: #532eda;
    transition: all 0.2s ease-in-out;
  }
`;
const AccordionIcon = styled_components_1.default.img `
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin: 0 0 0.4rem 0.7rem;
`;
const AccordionContent = styled_components_1.default.div `
  background-color: #ffffff;
  padding: 10px;
  margin-top: 10px;
  animation: ${({ expanded }) => (expanded ? slideDown : slideUp)} 0.3s ease-in-out;
  max-height: ${({ expanded }) => (expanded ? '500px' : '0')};
  opacity: ${({ expanded }) => (expanded ? '1' : '0')};
  overflow: hidden;
`;
exports.default = SigninAccordion;
