"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Input_1 = __importDefault(require("../components/Input"));
const SearchBar = ({ searchTerm, setSearchTerm }) => {
    const handleChange = e => {
        setSearchTerm(e.target.value);
    };
    return (0, jsx_runtime_1.jsx)(Input_1.default, { width: "100%", onChange: handleChange, value: searchTerm });
};
exports.default = SearchBar;
