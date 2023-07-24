"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_query_1 = require("react-query");
const notificationApis_1 = require("../apis/notificationApis");
const NotificationModal_1 = __importDefault(require("./NotificationModal"));
const DeleteButton_1 = __importDefault(require("../../adminCommon/components/DeleteButton"));
const TableComponent_1 = require("../styledComponents/TableComponent");
const AdminTableBody = ({ notifications }) => {
    const [isModalOpen, setIsModalOpen] = (0, react_1.useState)(false);
    const [modalNotificationId, setModalNotificationId] = (0, react_1.useState)('');
    const handleDelete = (id) => {
        const response = confirm('삭제하시겠습니까?');
        if (response) {
            deleteNotification(id);
            setIsModalOpen(false);
        }
    };
    const handleDetailClick = (id) => {
        setModalNotificationId(id);
        setIsModalOpen(true);
    };
    const handleModalCancelClick = () => {
        setIsModalOpen(false);
    };
    const { mutate: deleteNotification, error } = (0, react_query_1.useMutation)((id) => (0, notificationApis_1.fetchDeleteNotification)(id), {
        onError(error) {
            console.error(error);
        },
    });
    return ((0, jsx_runtime_1.jsxs)(TableComponent_1.NotificationListBlock, Object.assign({ className: 'user-info-list' }, { children: [notifications.map((data, idx) => {
                var _a;
                return ((0, jsx_runtime_1.jsxs)(TableComponent_1.NotificationInfo, Object.assign({ className: 'user-info' }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'name' }, { children: ((_a = data.Admin) === null || _a === void 0 ? void 0 : _a.name) || '관리자' })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'title' }, { children: data.title })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'content' }, { children: data.content })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'created-date' }, { children: data.createdAt.slice(0, 10) })), (0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(TableComponent_1.DetailBtn, Object.assign({ className: 'detail-btn', onClick: () => handleDetailClick(data.id) }, { children: "\uBCF4\uAE30" })) }), (0, jsx_runtime_1.jsx)(DeleteButton_1.default, { onClick: () => handleDelete(data.id) })] }), idx));
            }), isModalOpen && ((0, jsx_runtime_1.jsx)(NotificationModal_1.default, { id: modalNotificationId, handleModalCancelClick: handleModalCancelClick }))] })));
};
exports.default = AdminTableBody;
