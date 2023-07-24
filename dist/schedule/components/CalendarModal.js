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
const react_1 = __importStar(require("react"));
const fi_chevron_left_svg_1 = require("../../assets/icons/fi_chevron-left.svg");
const fi_chevron_right_svg_1 = require("../../assets/icons/fi_chevron-right.svg");
const Style = __importStar(require("../styleComponents/CalendarModal"));
const rabbitStudyng_png_1 = __importDefault(require("../../assets/images/rabbitStudyng.png"));
const date_fns_1 = require("date-fns");
const react_query_1 = require("react-query");
const scheduleApi_1 = require("../api/scheduleApi");
const CalendarModal = ({ onModal, date }) => {
    //모달 종료
    const handleClickClose = () => {
        onModal(false);
    };
    const [dateChanged, setDateChaged] = (0, react_1.useState)(date);
    const { data } = (0, react_query_1.useQuery)(['scheduleYMD', dateChanged], () => (0, scheduleApi_1.fetchScheduleYMD)(dateChanged));
    const [formatDate, setFormatDate] = (0, react_1.useState)(date);
    //날짜 포맷터 함수 ex) 2023-06-13 =>  2023년 06월 13일
    const dateFormatter = (date) => {
        const year = date.slice(0, 4);
        const month = date.slice(5, 7);
        const day = date.slice(8, 10);
        const newDate = `${year}년 ${month}월 ${day}일`;
        return setFormatDate(newDate);
    };
    (0, react_1.useEffect)(() => {
        dateFormatter(date);
    }, []);
    //prev, next 버튼 클릭시 날짜 변경 함수
    const handleDateChange = (type) => __awaiter(void 0, void 0, void 0, function* () {
        const count = 1;
        //현재 날짜
        const currentDate = new Date(dateChanged);
        let newDate = '';
        //add 일 경우 1일씩 날짜 증가
        if (type === 'add') {
            newDate = (0, date_fns_1.addDays)(currentDate, count);
            //sub 일 경우 1일씩 날짜 감소
        }
        else if (type === 'sub') {
            newDate = (0, date_fns_1.subDays)(currentDate, count);
        }
        // 출력한 날짜 yyyy-mm-dd 형식으로 바꿈
        const formmaterDate = (0, date_fns_1.format)(newDate, 'yyyy-MM-dd');
        //쿼리에 넣어줄 dateChanged state, formmaterDate로 변경
        setDateChaged(formmaterDate);
        dateFormatter(formmaterDate);
    });
    console.log(data);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Style.Background, { onClick: handleClickClose }), (0, jsx_runtime_1.jsxs)(Style.Container, { children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'date' }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ onClick: () => handleDateChange('sub') }, { children: (0, jsx_runtime_1.jsx)(fi_chevron_left_svg_1.ReactComponent, { stroke: 'var(--main-white)' }) })), (0, jsx_runtime_1.jsx)("h5", { children: formatDate }), (0, jsx_runtime_1.jsx)("span", Object.assign({ onClick: () => handleDateChange('add') }, { children: (0, jsx_runtime_1.jsx)(fi_chevron_right_svg_1.ReactComponent, { stroke: 'var(--main-white)' }) }))] })) }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'main-content' }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'scroll' }, { children: data !== undefined ? (data.length > 0 ? (data.map((item) => ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'main' }, { children: [(0, jsx_runtime_1.jsx)("span", { className: 'header-span' }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'main-text' }, { children: [(0, jsx_runtime_1.jsxs)("h5", { children: ["\uD83D\uDCC6 [", item.title, "]"] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("p", { children: ["\uAE30\uAC04: ", item.start_date.slice(0, 10), " ~ ", item.end_date.slice(0, 10)] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uB0B4\uC6A9: ", item.content] }), item.PlanLinks.length > 0 ? ((0, jsx_runtime_1.jsxs)("p", { children: ["\uAD00\uB828 \uB9C1\uD06C", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'link-box' }, { children: item.PlanLinks.map((link) => ((0, jsx_runtime_1.jsxs)("a", Object.assign({ href: link.url, target: '_blank' }, { children: [link.url, (0, jsx_runtime_1.jsx)("br", {})] })))) }))] })) : ('')] })] }))] }), item.id)))) : ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'no-schedule' }, { children: [(0, jsx_runtime_1.jsx)("img", { src: rabbitStudyng_png_1.default, alt: 'No schedule' }), (0, jsx_runtime_1.jsx)("p", { children: "\uD574\uB2F9 \uB0A0\uC9DC\uB294 \uC77C\uC815\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." })] })))) : ('') })) }))] })] }));
};
exports.default = CalendarModal;
