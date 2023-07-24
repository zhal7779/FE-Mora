"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_query_1 = require("react-query");
const userApis_1 = require("../apis/userApis");
const UserModal_1 = __importDefault(require("./UserModal"));
const DeleteButton_1 = __importDefault(require("../../adminCommon/components/DeleteButton"));
const TableComponent_1 = require("../styledComponents/TableComponent");
const AdminTableBody = ({ users }) => {
    const [isModalOpen, setIsModalOpen] = (0, react_1.useState)(false);
    const [modalUserId, setModalUserId] = (0, react_1.useState)('');
    const handleDelete = (email) => {
        const response = confirm('삭제하시겠습니까?');
        if (response) {
            deleteUser(email);
            setIsModalOpen(false);
        }
    };
    const handleDetailClick = (id) => {
        setModalUserId(id);
        setIsModalOpen(true);
    };
    const handleModalCancelClick = () => {
        setIsModalOpen(false);
    };
    const { mutate: deleteUser, error } = (0, react_query_1.useMutation)((email) => (0, userApis_1.fetchDeleteUser)(email), {
        onError(error) {
            console.error(error);
        },
    });
    return ((0, jsx_runtime_1.jsxs)("ul", Object.assign({ className: 'user-info-list' }, { children: [users.map((data, idx) => {
                return ((0, jsx_runtime_1.jsxs)(TableComponent_1.UserInfo, Object.assign({ className: 'user-info' }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'name' }, { children: data.name })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'email' }, { children: data.email })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'password' }, { children: "**********" })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'created-date' }, { children: data.createdAt.slice(0, 10) })), (0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(TableComponent_1.DetailBtn, Object.assign({ className: 'detail-btn', onClick: () => handleDetailClick(data.id) }, { children: "\uBCF4\uAE30" })) }), (0, jsx_runtime_1.jsx)(DeleteButton_1.default, { onClick: () => handleDelete(data.email) })] }), idx));
            }), isModalOpen && ((0, jsx_runtime_1.jsx)(UserModal_1.default, { id: modalUserId, handleModalCancelClick: handleModalCancelClick }))] })));
};
exports.default = AdminTableBody;
