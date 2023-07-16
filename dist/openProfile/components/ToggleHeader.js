"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const Toggle_1 = __importDefault(require("./Toggle"));
const ToggleHeader = ({ handleProfileRegisterStatus }) => {
    // const [Registerstatus, setRegisterStatus] = useState();
    const handleRegisterStatus = (status) => {
        handleProfileRegisterStatus(status);
    };
    return ((0, jsx_runtime_1.jsxs)(Container, { children: [(0, jsx_runtime_1.jsx)("p", { children: "\uC624\uD508 \uD504\uB85C\uD544 \uC62C\uB9AC\uAE30" }), (0, jsx_runtime_1.jsx)(Toggle_1.default, { handleRegisterStatus: handleRegisterStatus })] }));
};
exports.default = ToggleHeader;
const Container = styled_components_1.default.div `
  display: flex;
  width: 634px;
  height: 24px;
  justify-content: space-between;
  align-items: center;
  margin: 8.8rem 0 2.8rem 0;
  p {
    font-size: 1.4rem;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 4rem 0 2rem 0;
  }

  @media (max-width: 480px) {
    margin: 0 0 2rem 0;
  }
`;
