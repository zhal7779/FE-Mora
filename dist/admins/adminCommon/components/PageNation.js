"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const TableComponent_1 = require("../styledComponents/TableComponent");
const PageNation = ({ totalPages, currentPage, setCurrentPage }) => {
    const totalPagesArray = Array(totalPages).fill(true);
    return ((0, jsx_runtime_1.jsx)(TableComponent_1.PageNationBlock, Object.assign({ className: 'page-nation-block' }, { children: totalPagesArray.map((falseValue, index) => ((0, jsx_runtime_1.jsx)(TableComponent_1.PageNationBlockBtn, Object.assign({ className: index === currentPage ? 'now-page page' : 'page', onClick: () => setCurrentPage(index) }, { children: (0, jsx_runtime_1.jsx)("p", { children: index + 1 }) }), index))) })));
};
exports.default = PageNation;
