"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_query_1 = require("react-query");
const trackApis_1 = require("../apis/trackApis");
const TrackModal_1 = __importDefault(require("./TrackModal"));
const DeleteButton_1 = __importDefault(require("../../adminCommon/components/DeleteButton"));
const TableComponent_1 = require("../styledComponents/TableComponent");
const AdminTableBody = ({ tracks }) => {
    const [isModalOpen, setIsModalOpen] = (0, react_1.useState)(false);
    const [modalTrackData, setModalTrackData] = (0, react_1.useState)({ id: '', name: '', phase: '' });
    const handleDelete = (id) => {
        const response = confirm('삭제하시겠습니까?');
        if (response) {
            deleteTrack(id);
            setIsModalOpen(false);
        }
    };
    const handleDetailClick = (id, name, phase) => {
        const newTrackData = Object.assign(Object.assign({}, modalTrackData), { id,
            name,
            phase });
        setModalTrackData(newTrackData);
        setIsModalOpen(true);
    };
    const handleModalCancelClick = () => {
        setIsModalOpen(false);
    };
    const { mutate: deleteTrack, error } = (0, react_query_1.useMutation)((id) => (0, trackApis_1.fetchDeleteTrack)(id), {
        onError(error) {
            console.error(error);
        },
    });
    return ((0, jsx_runtime_1.jsxs)(TableComponent_1.TrackListBlock, Object.assign({ className: 'user-info-list' }, { children: [tracks.map((data, idx) => {
                return ((0, jsx_runtime_1.jsxs)(TableComponent_1.TrackInfo, Object.assign({ className: 'user-info' }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'name' }, { children: data.name })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'phase' }, { children: `1~${data.phase}` })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'created-date' }, { children: data.createdAt.slice(0, 10) })), (0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(TableComponent_1.DetailBtn, Object.assign({ className: 'detail-btn', onClick: () => handleDetailClick(data.id, data.name, data.phase) }, { children: "\uBCF4\uAE30" })) }), (0, jsx_runtime_1.jsx)(DeleteButton_1.default, { onClick: () => handleDelete(data.id) })] }), idx));
            }), isModalOpen && ((0, jsx_runtime_1.jsx)(TrackModal_1.default, { trackData: modalTrackData, handleModalCancelClick: handleModalCancelClick }))] })));
};
exports.default = AdminTableBody;
