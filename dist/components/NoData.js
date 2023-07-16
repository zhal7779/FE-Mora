"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const NoData = () => {
    return ((0, jsx_runtime_1.jsxs)(Content, { children: [(0, jsx_runtime_1.jsx)("img", { src: 'http://www.moyeora-racer.com/static/media/no-data-image.7c445de03420d586e6ca540e13c4cd7c.svg' }), (0, jsx_runtime_1.jsx)("strong", { children: "\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC5B4\uC694." }), (0, jsx_runtime_1.jsx)("p", { children: "\uB2E4\uB978 \uD0A4\uC6CC\uB4DC\uB85C \uAC80\uC0C9\uD574\uBCF4\uC138\uC694!" })] }));
};
exports.default = NoData;
const Content = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  margin: 8rem 0;
  align-items: center;
  strong {
    color: var(--dark-gray);
    font-size: 1.6rem;
    margin-bottom: 1.6rem;
    font-weight: 600;
  }
  p {
    color: var(--dark-gray);
    font-size: 1.4rem;
  }
  @media (max-width: 768px) {
    img {
      width: 28rem;
    }
  }

  @media (max-width: 480px) {
    margin: 6rem 0;
    strong {
      font-size: 1.5rem;
    }
    img {
      width: 20rem;
    }
  }
`;
