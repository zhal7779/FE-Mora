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
const planApis_1 = require("../apis/planApis");
const EnrollModal_1 = __importDefault(require("./EnrollModal"));
const AdminTableHead_1 = __importDefault(require("./AdminTableHead"));
const AdminTableBody_1 = __importDefault(require("./AdminTableBody"));
const SearchBar_1 = __importDefault(require("../../adminCommon/components/SearchBar"));
const LoadingComponent_1 = __importDefault(require("../../adminCommon/components/LoadingComponent"));
const TableComponent_1 = require("../styledComponents/TableComponent");
const date = new Date();
const year = date.getFullYear();
const temporalMonth = date.getMonth() + 1;
const month = temporalMonth < 10 ? `0${temporalMonth}` : temporalMonth;
const AdminTable = () => {
    const [enrollModal, setEnrollModal] = (0, react_1.useState)(false);
    const [yearMonth, setYearMonth] = (0, react_1.useState)(`${year}-${month}`);
    const toggleEnrollModal = () => {
        setEnrollModal(!enrollModal);
    };
    const { data, isLoading, error } = (0, react_query_1.useQuery)(['admin', 'plan', 'get', yearMonth], () => __awaiter(void 0, void 0, void 0, function* () { return yield (0, planApis_1.fetchReadPlanInfo)(yearMonth); }), {
        select: (data) => {
            const newPlans = data.map((plan) => {
                const newPlan = Object.assign({}, plan);
                newPlan.startDate = plan.start_date;
                newPlan.endDate = plan.end_date;
                delete newPlan.start_date;
                delete newPlan.end_date;
                return newPlan;
            });
            return newPlans;
        },
    });
    if (isLoading)
        return (0, jsx_runtime_1.jsx)(LoadingComponent_1.default, { search: '2023-06', title: '일정' });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(SearchBar_1.default, { placeholder: yearMonth, setKeyword: setYearMonth }), (0, jsx_runtime_1.jsxs)(TableComponent_1.MainContentHeaderBlock, { children: [(0, jsx_runtime_1.jsxs)(TableComponent_1.TableTitleBlock, { children: [(0, jsx_runtime_1.jsx)(TableComponent_1.TableTitle, Object.assign({ className: 'table-title' }, { children: "\uC77C\uC815 \uAD00\uB9AC" })), yearMonth && (0, jsx_runtime_1.jsx)(TableComponent_1.TableSearchResult, { children: yearMonth })] }), (0, jsx_runtime_1.jsx)(TableComponent_1.EnrollButton, Object.assign({ className: 'modal-button-submit', onClick: toggleEnrollModal, "$purple": true }, { children: "\uB4F1\uB85D" })), enrollModal && ((0, jsx_runtime_1.jsx)(EnrollModal_1.default, { title: '일정 등록', enrollModal: enrollModal, toggleEnrollModal: toggleEnrollModal }))] }), (0, jsx_runtime_1.jsx)(AdminTableHead_1.default, {}), (0, jsx_runtime_1.jsx)(AdminTableBody_1.default, { plans: data })] }));
};
exports.default = AdminTable;
