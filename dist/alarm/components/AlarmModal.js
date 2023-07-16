"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const Style = __importStar(require("../styledComponents/AlarmModalStyle"));
const fi_chevron_down_svg_1 = require("../../assets/icons/fi_chevron-down.svg");
const fi_chevron_up_svg_1 = require("../../assets/icons/fi_chevron-up.svg");
const post_svg_1 = require("../../assets/icons/post.svg");
const react_query_1 = require("react-query");
const alarmApi_1 = require("../api/alarmApi");
const react_router_dom_1 = require("react-router-dom");
const AlarmModal = ({ handleClose }) => {
    //더보기 상태
    const [hiddenContent, setHiddenContent] = (0, react_1.useState)([]);
    // 알림 읽음 여부 상태
    const [alarmStatus, setAlarmStauts] = (0, react_1.useState)([]);
    const [alarmId, setAlarmId] = (0, react_1.useState)('');
    const { data } = (0, react_query_1.useQuery)('alert', alarmApi_1.getAlert);
    console.log(data);
    const { refetch } = (0, react_query_1.useQuery)('alertStatus', () => (0, alarmApi_1.patchAlert)(alarmId));
    //모달 리스트 open, close
    const handleContentClick = (id) => {
        setAlarmId(id);
        refetch();
        setAlarmStauts((prevStatus) => {
            return [...prevStatus, id];
        });
        setHiddenContent((prevContent) => {
            // 열려있지 않다면 = 배열에 들어온 인덱스가 없다면 =>  배열에 인덱스 추가
            if (!prevContent.includes(id)) {
                return [...prevContent, id];
                // 열려 있다면 = 배열에 인덱스가 있다면 =>  배열에 들어있는 인덱스 삭제
            }
            else {
                return prevContent.filter((idx) => idx !== id);
            }
        });
    };
    const handleClickOutside = () => {
        handleClose(false);
    };
    console.log(data);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Style.Container, { children: [(0, jsx_runtime_1.jsx)(Style.HeaderContent, { children: (0, jsx_runtime_1.jsx)("p", { children: "\uC54C\uB9BC" }) }), (0, jsx_runtime_1.jsx)(Style.Scroll, { children: data && data.length > 1 ? ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: data.map((item) => item.id && ((0, jsx_runtime_1.jsxs)(Style.Content, { children: [(0, jsx_runtime_1.jsxs)(Style.ShowContent, Object.assign({ onClick: () => handleContentClick(item.id) }, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [item.checked === 1 || alarmStatus.includes(item.id) ? ((0, jsx_runtime_1.jsx)("span", { style: { background: '#EEEAFE' } })) : item.type === 'COMMENT' ? ((0, jsx_runtime_1.jsx)("span", { style: { background: '#aa8dff' } })) : item.type === 'PLAN' ? ((0, jsx_runtime_1.jsx)("span", {})) : (''), item.type === 'COMMENT' ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Style.ImageIcon, { src: item['AlertFromUser.UserDetail.img_path'] }), (0, jsx_runtime_1.jsx)("strong", { children: item['AlertFromUser.name'] }), (0, jsx_runtime_1.jsx)("p", { children: "\uB2D8\uC774 \uD68C\uC6D0\uB2D8\uC758 \uAC8C\uC2DC\uAE00\uC5D0 \uB313\uAE00\uC744 \uB2EC\uC558\uC2B5\uB2C8\uB2E4." })] })) : item.type === 'PLAN' ? ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'planAlarm' }, { children: [(0, jsx_runtime_1.jsxs)("strong", { children: ["[", item.planTitle, "] "] }), (0, jsx_runtime_1.jsx)("p", { children: " \uC77C\uC815 \uC2DC\uC791 1\uC2DC\uAC04 \uC804\uC785\uB2C8\uB2E4. " })] }))) : ('')] }), (0, jsx_runtime_1.jsx)("div", { children: hiddenContent.includes(item.id) ? ((0, jsx_runtime_1.jsx)(fi_chevron_up_svg_1.ReactComponent, { stroke: 'var(--dark-gray)', strokeWidth: '2', width: '22', height: '22' })) : ((0, jsx_runtime_1.jsx)(fi_chevron_down_svg_1.ReactComponent, { stroke: 'var(--dark-gray)', strokeWidth: '2', width: '22', height: '22' })) })] })), hiddenContent.includes(item.id) ? ((0, jsx_runtime_1.jsxs)(Style.HiddenContent, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ style: { border: '1px solid #e0e0e0' } }, { children: item.type === 'COMMENT' ? ((0, jsx_runtime_1.jsx)("p", { children: item.commentContent })) : item.type === 'PLAN' ? ((0, jsx_runtime_1.jsx)("p", { children: item.planContent })) : ('') })), (0, jsx_runtime_1.jsx)("div", Object.assign({ style: { background: 'transparent' } }, { children: item.type === 'COMMENT' ? ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'title_div' }, { children: [(0, jsx_runtime_1.jsx)(post_svg_1.ReactComponent, {}), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: '/community/' + item.boardId }, { children: (0, jsx_runtime_1.jsx)("h5", { children: item.boardTitle }) }))] }))) : item.type === 'PLAN' ? ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'title_div' }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "\uC77C\uC815" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: '/schedule' }, { children: (0, jsx_runtime_1.jsx)("h5", { children: item.planTitle }) }))] }))) : ('') }))] })) : ('')] }, item.id))) })) : ((0, jsx_runtime_1.jsxs)(Style.Nodata, { children: [(0, jsx_runtime_1.jsx)("img", { src: 'http://www.moyeora-racer.com/static/media/no-data-image.7c445de03420d586e6ca540e13c4cd7c.svg' }), (0, jsx_runtime_1.jsx)("p", { children: "\uC0C8\uB85C\uC6B4 \uC54C\uB9BC\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." })] })) })] }), (0, jsx_runtime_1.jsx)(Style.Background, { onClick: handleClickOutside })] }));
};
exports.default = AlarmModal;
