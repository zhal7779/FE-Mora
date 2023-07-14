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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const Style = __importStar(require("../styleComponents/CalendarStyle"));
const CalendarModal_1 = __importDefault(require("./CalendarModal"));
const react_2 = __importDefault(require("@fullcalendar/react"));
const daygrid_1 = __importDefault(require("@fullcalendar/daygrid"));
const interaction_1 = __importDefault(require("@fullcalendar/interaction"));
const moment_1 = __importDefault(require("moment"));
require("moment/locale/ko");
const react_query_1 = require("react-query");
const scheduleApi_1 = require("../api/scheduleApi");
const date_fns_1 = require("date-fns");
const MyCalendar = () => {
    //모달 open,close
    const [onModal, setOnModal] = (0, react_1.useState)(false);
    const handleClickOpen = () => {
        setOnModal(true);
    };
    //처음 렌더링시 현재 날짜 추출
    const [selectedYearMonth, setSelectedYearMonth] = (0, react_1.useState)((0, date_fns_1.format)(new Date(), 'yyyy-MM'));
    //prev,next 클릭시 추출한 날짜 변환 함수
    // return  => 2023-06
    const dateConversion = (currentDate) => {
        const resultDate = (0, date_fns_1.format)(currentDate, 'yyyy-MM');
        return resultDate;
    };
    //prev 버튼 날짜 추출
    const calendarRef = (0, react_1.useRef)();
    // buttonType === prev => 이전달, 이전달 date 추출
    // buttonType === next 버튼 => 다음달, 다음달 date 추출
    // buttonType === today 버튼 => 현재달, 오늘 date 추출
    const handleButtonClick = (buttonType) => {
        if (calendarRef.current) {
            const calendarApi = calendarRef.current.getApi();
            switch (buttonType) {
                case 'prev':
                    calendarApi.prev();
                    break;
                case 'next':
                    calendarApi.next();
                    break;
                case 'today':
                    calendarApi.today();
                    break;
                default:
                    break;
            }
            // 추출한 날짜를 dateConversion 함수에 담아 date 변환
            const currentDate = calendarApi.getDate();
            const resultDate = dateConversion(currentDate);
            setSelectedYearMonth(resultDate);
        }
    };
    // 날짜 클릭 이벤트 핸들러, date cell에서 클릭한 날짜를 가져온다.
    // ex) 2023-06-12
    const [selectedDate, setSelectedDate] = (0, react_1.useState)(null);
    const handleDateClick = (info) => {
        setSelectedDate(info.dateStr);
        handleClickOpen();
    };
    const { data, isLoading, isError } = (0, react_query_1.useQuery)('schedule', () => (0, scheduleApi_1.fetchSchedule)(selectedYearMonth));
    if (isLoading) {
        return (0, jsx_runtime_1.jsx)("span", { children: "Loading..." });
    }
    if (isError) {
        return (0, jsx_runtime_1.jsxs)("span", { children: ["Error: ", isError.message] });
    }
    // 받아온 데이터 풀캘린더 event 형식으로 변환
    const eventData = data.map((item) => ({
        title: item.title,
        start: item.start_date,
        end: item.end_date,
        sortIdx: item._id,
    }));
    //한국어 설정
    moment_1.default.locale('ko');
    const views = {};
    //이벤트 컬러 변경 함수
    const renderEventContent = (eventInfo) => {
        return ((0, jsx_runtime_1.jsx)(Style.EventColor, { children: (0, jsx_runtime_1.jsx)("i", Object.assign({ className: 'event_text' }, { children: eventInfo.event.title })) }));
    };
    return ((0, jsx_runtime_1.jsxs)(Style.Container, { children: [onModal ? (0, jsx_runtime_1.jsx)(CalendarModal_1.default, { onModal: setOnModal, date: selectedDate }) : '', (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(react_2.default, { plugins: [daygrid_1.default, interaction_1.default], ref: calendarRef, initialView: 'dayGridMonth', 
                    //한글 변환시 1일, 2일,3일 => 1,2,3으로 바꿈
                    dayCellContent: ({ date }) => (0, jsx_runtime_1.jsx)("a", Object.assign({ className: 'fc-daygrid-day-number' }, { children: date.getDate() })), dateClick: handleDateClick, locale: 'ko', views: views, eventContent: renderEventContent, events: eventData, eventOverlap: false, customButtons: {
                        prev: {
                            click: () => handleButtonClick('prev'),
                        },
                        next: {
                            click: () => handleButtonClick('next'),
                        },
                        today: {
                            text: 'Today',
                            click: () => handleButtonClick('today'),
                        },
                    } }) })] }));
};
exports.default = MyCalendar;
