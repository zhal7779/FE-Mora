"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const AdminPost_1 = require("./AdminPost");
const SearchBar_1 = __importDefault(require("../../adminCommon/components/SearchBar"));
const TableComponent_1 = require("../styledComponents/TableComponent");
const AdminTable = () => {
    const [keyword, setKeyword] = (0, react_1.useState)('');
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(SearchBar_1.default, { placeholder: '게시물 제목 검색', setKeyword: setKeyword }), (0, jsx_runtime_1.jsx)(TableComponent_1.MainContentHeaderBlock, { children: (0, jsx_runtime_1.jsxs)(TableComponent_1.TableTitleBlock, { children: [(0, jsx_runtime_1.jsx)(TableComponent_1.TableTitle, Object.assign({ className: 'table-title' }, { children: "\uAC8C\uC2DC\uBB3C \uAD00\uB9AC" })), keyword && (0, jsx_runtime_1.jsxs)(TableComponent_1.TableSearchResult, { children: ["'", keyword, "' \uAC80\uC0C9\uACB0\uACFC"] })] }) }), (0, jsx_runtime_1.jsx)(AdminPost_1.AdminPost, { keyword: keyword })] }));
};
exports.default = AdminTable;
