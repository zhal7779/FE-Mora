"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const categoryData_1 = require("../community/categoryData");
const Category_1 = __importDefault(require("../community/Category"));
const SearchBar_1 = __importDefault(require("../community/SearchBar"));
const PostList_1 = __importDefault(require("../community/PostList"));
const RecommendPost_1 = __importDefault(require("../community/RecommendPost"));
const CommunityPage = () => {
    const [selectedCategoryId, setSelectedCategoryId] = (0, react_1.useState)(categoryData_1.categories[0].id);
    const [searchTerm, setSearchTerm] = (0, react_1.useState)('');
    return ((0, jsx_runtime_1.jsxs)(CommunityContainer, { children: [(0, jsx_runtime_1.jsx)(Category_1.default, { selectedCategoryId: selectedCategoryId, setSelectedCategoryId: setSelectedCategoryId }), (0, jsx_runtime_1.jsxs)(PostContainer, { children: [(0, jsx_runtime_1.jsx)(SearchBar_1.default, { searchTerm: searchTerm, setSearchTerm: setSearchTerm }), (0, jsx_runtime_1.jsx)(RecommendPost_1.default, { searchTerm: searchTerm, selectedCategoryId: selectedCategoryId }), (0, jsx_runtime_1.jsx)(PostList_1.default, { selectedCategoryId: selectedCategoryId, searchTerm: searchTerm })] })] }));
};
exports.default = CommunityPage;
const CommunityContainer = styled_components_1.default.div `
  position: relative;
  display: flex;
  justify-content: space-between;

  max-width: 1024px;
  padding-top: 60px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const PostContainer = styled_components_1.default.div `
  display: flex;
  flex-direction: column;

  padding: 38px 20px 0;
  max-width: 738px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: none;
  }
`;
exports.Status = styled_components_1.default.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  font-size: 1.6rem;
  color: #424242;
  background-color: #f2f0fa;

  div {
    text-align: center;
    font-size: 2.2rem;
    font-weight: 600;
    line-height: 3.4rem;
    padding-top: 12px;
    color: #47424b;
  }
`;
