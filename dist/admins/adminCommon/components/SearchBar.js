"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const SearchBarStyle_1 = require("../styledComponents/SearchBarStyle");
const SearchBar = ({ placeholder, setKeyword }) => {
    const [searchTerm, setSearchTerm] = (0, react_1.useState)('');
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        setKeyword(searchTerm);
    });
    return ((0, jsx_runtime_1.jsxs)(SearchBarStyle_1.SearchBarBlock, Object.assign({ onSubmit: handleSubmit }, { children: [(0, jsx_runtime_1.jsx)("svg", Object.assign({ xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', fill: 'none' }, { children: (0, jsx_runtime_1.jsx)("path", { fill: '#94A3B8', d: 'M10 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 12.606 4.192l5.101 5.1a1 1 0 0 1-1.414 1.415l-5.1-5.1A7 7 0 0 1 3 10Z', clipRule: 'evenodd' }) })), (0, jsx_runtime_1.jsx)(SearchBarStyle_1.SearchBarInput, { type: 'text', placeholder: placeholder, value: searchTerm, onChange: handleChange })] })));
};
exports.default = SearchBar;
