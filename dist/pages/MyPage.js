"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const MyPageCategory_1 = __importDefault(require("../myPage/MyPageCategory"));
const MyPageProfile_1 = __importDefault(require("../myPage/MyPageProfile"));
const MyPagePost_1 = __importDefault(require("../myPage/MyPagePost"));
const MyPage = () => {
    const [selectedCategory, setSelectedCategory] = (0, react_1.useState)('프로필');
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };
    return ((0, jsx_runtime_1.jsxs)(MyPageContainer, { children: [(0, jsx_runtime_1.jsx)(MyPageCategory_1.default, { handleCategorySelect: handleCategorySelect, selectedCategory: selectedCategory, categories: categories }), (0, jsx_runtime_1.jsx)(MyPageContent, { children: selectedCategory === '게시물' ? (0, jsx_runtime_1.jsx)(MyPagePost_1.default, {}) : (0, jsx_runtime_1.jsx)(MyPageProfile_1.default, {}) })] }));
};
exports.default = MyPage;
const MyPageContainer = styled_components_1.default.div `
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-top: 60px;
  max-width: 1024px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const MyPageContent = styled_components_1.default.div `
  flex: 1;
  width: 100%;

  @media (max-width: 768px) {
    width: auto;
  }
`;
const categories = [
    {
        name: '프로필',
        icon: require('../assets/icons/icon-user.svg').default,
    },
    {
        name: '게시물',
        icon: require('../assets/icons/icon-post.svg').default,
    },
];
