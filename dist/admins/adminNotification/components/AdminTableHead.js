"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const tableColumnData_1 = __importDefault(require("../data/tableColumnData"));
const TableComponent_1 = require("../styledComponents/TableComponent");
const AdminTableHead = () => {
    return ((0, jsx_runtime_1.jsx)(TableComponent_1.TableRowInfo, Object.assign({ className: 'table-row-info' }, { children: tableColumnData_1.default.map((columnName, idx) => {
            return ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: columnName }, { children: columnName }), columnName + idx));
        }) })));
};
exports.default = AdminTableHead;
