"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_query_1 = require("react-query");
const planApis_1 = require("../apis/planApis");
const PlanModal_1 = __importDefault(require("./PlanModal"));
const DeleteButton_1 = __importDefault(require("../../adminCommon/components/DeleteButton"));
const TableComponent_1 = require("../styledComponents/TableComponent");
const AdminTableBody = ({ plans }) => {
    const [isModalOpen, setIsModalOpen] = (0, react_1.useState)(false);
    const [modalPlanId, setModalPlanId] = (0, react_1.useState)('');
    const handleDelete = (id) => {
        const response = confirm('삭제하시겠습니까?');
        if (response) {
            deletePlan(id);
            setIsModalOpen(false);
        }
    };
    const handleDetailClick = (id) => {
        setModalPlanId(id);
        setIsModalOpen(true);
    };
    const handleModalCancelClick = () => {
        setIsModalOpen(false);
    };
    const { mutate: deletePlan, error } = (0, react_query_1.useMutation)((id) => (0, planApis_1.fetchDeletePlan)(id), {
        onError(error) {
            console.error(error);
        },
    });
    return ((0, jsx_runtime_1.jsxs)(TableComponent_1.PlanListBlock, Object.assign({ className: 'user-info-list' }, { children: [plans.map((data, idx) => {
                return ((0, jsx_runtime_1.jsxs)(TableComponent_1.PlanInfo, Object.assign({ className: 'user-info' }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'name' }, { children: data.Admin.name })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'title' }, { children: data.title })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'content' }, { children: data.content })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'start-date' }, { children: data.startDate.slice(0, 10) })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'end-date' }, { children: data.endDate.slice(0, 10) })), (0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(TableComponent_1.DetailBtn, Object.assign({ className: 'detail-btn', onClick: () => handleDetailClick(data.id) }, { children: "\uBCF4\uAE30" })) }), (0, jsx_runtime_1.jsx)(DeleteButton_1.default, { onClick: () => handleDelete(data.id) })] }), idx));
            }), isModalOpen && ((0, jsx_runtime_1.jsx)(PlanModal_1.default, { id: modalPlanId, handleModalCancelClick: handleModalCancelClick }))] })));
};
exports.default = AdminTableBody;
