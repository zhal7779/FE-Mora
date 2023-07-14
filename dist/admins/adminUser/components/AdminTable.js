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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_query_1 = require("react-query");
const userApis_1 = require("../apis/userApis");
const EnrollModal_1 = __importDefault(require("./EnrollModal"));
const AdminTableHead_1 = __importDefault(require("./AdminTableHead"));
const AdminTableBody_1 = __importDefault(require("./AdminTableBody"));
const SearchBar_1 = __importDefault(require("../../adminCommon/components/SearchBar"));
const PageNation_1 = __importDefault(require("../../adminCommon/components/PageNation"));
const LoadingComponent_1 = __importDefault(require("../../adminCommon/components/LoadingComponent"));
const TableComponent_1 = require("../styledComponents/TableComponent");
const AdminTable = () => {
    const [enrollModal, setEnrollModal] = (0, react_1.useState)(false);
    const [currentPage, setCurrentPage] = (0, react_1.useState)(0);
    const [keyword, setKeyword] = (0, react_1.useState)('');
    const toggleEnrollModal = () => {
        setEnrollModal(!enrollModal);
    };
    const { data, isLoading, error } = (0, react_query_1.useQuery)(['admin', 'user', 'get', currentPage, keyword], () => __awaiter(void 0, void 0, void 0, function* () { return yield (0, userApis_1.fetchReadUserInfo)(currentPage, 12, keyword); }));
    if (isLoading)
        return (0, jsx_runtime_1.jsx)(LoadingComponent_1.default, { search: '사용자 이름', title: '사용자' });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(SearchBar_1.default, { placeholder: '사용자 이름 검색', setKeyword: setKeyword }), (0, jsx_runtime_1.jsxs)(TableComponent_1.MainContentHeaderBlock, { children: [(0, jsx_runtime_1.jsxs)(TableComponent_1.TableTitleBlock, { children: [(0, jsx_runtime_1.jsx)(TableComponent_1.TableTitle, Object.assign({ className: 'table-title' }, { children: "\uC0AC\uC6A9\uC790 \uAD00\uB9AC" })), keyword && (0, jsx_runtime_1.jsxs)(TableComponent_1.TableSearchResult, { children: ["'", keyword, "' \uAC80\uC0C9\uACB0\uACFC"] })] }), (0, jsx_runtime_1.jsx)(TableComponent_1.EnrollButton, Object.assign({ className: 'modal-button-submit', onClick: toggleEnrollModal, "$purple": true }, { children: "\uB4F1\uB85D" })), enrollModal && ((0, jsx_runtime_1.jsx)(EnrollModal_1.default, { title: '사용자 등록', enrollModal: enrollModal, toggleEnrollModal: toggleEnrollModal }))] }), (0, jsx_runtime_1.jsx)(AdminTableHead_1.default, {}), (0, jsx_runtime_1.jsx)(AdminTableBody_1.default, { users: data.objArr }), (0, jsx_runtime_1.jsx)(PageNation_1.default, { totalPages: data.totalPages, currentPage: currentPage, setCurrentPage: setCurrentPage })] }));
};
exports.default = AdminTable;
