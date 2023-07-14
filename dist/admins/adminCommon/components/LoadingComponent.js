"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const SearchBar_1 = __importDefault(require("./SearchBar"));
const TableComponent_1 = require("../../adminNotification/styledComponents/TableComponent");
const TableComponent_2 = require("../../adminUser/styledComponents/TableComponent");
const LoadingComponent = ({ search, title }) => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(SearchBar_1.default, { placeholder: (search === null || search === void 0 ? void 0 : search.slice(0, 4)) !== '2023' ? `${search} 검색` : search }), (0, jsx_runtime_1.jsxs)(TableComponent_2.MainContentHeaderBlock, { children: [(0, jsx_runtime_1.jsx)(TableComponent_2.TableTitleBlock, { children: (0, jsx_runtime_1.jsxs)(TableComponent_1.TableTitle, Object.assign({ className: 'table-title' }, { children: [title, " \uAD00\uB9AC"] })) }), title !== '게시물' && ((0, jsx_runtime_1.jsx)(TableComponent_1.EnrollButton, Object.assign({ className: 'modal-button-submit', "$purple": true }, { children: "\uB4F1\uB85D" })))] })] }));
};
exports.default = LoadingComponent;
