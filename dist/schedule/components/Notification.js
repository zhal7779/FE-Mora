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
const Style = __importStar(require("../styleComponents/NotificationStyle"));
const fi_chevron_down_svg_1 = require("../../assets/icons/fi_chevron-down.svg");
const fi_chevron_up_svg_1 = require("../../assets/icons/fi_chevron-up.svg");
const eliceRabbit_removebg_preview_png_1 = __importDefault(require("../../assets/images/eliceRabbit-removebg-preview.png"));
const react_query_1 = require("react-query");
const scheduleApi_1 = require("../api/scheduleApi");
const Pagination_1 = __importDefault(require("./Pagination"));
const Input_1 = __importDefault(require("../../components/Input"));
const SearchDebounce_1 = require("./SearchDebounce");
const useWindowSize_1 = require("../../hooks/useWindowSize");
const Notification = () => {
    //검색창 인풋
    const [inputValue, setInputValue] = (0, react_1.useState)('');
    const [searchValue, setSearchValue] = (0, react_1.useState)('');
    const [page, setPage] = (0, react_1.useState)(0);
    const [view, setView] = (0, react_1.useState)([]);
    const handleOnChange = (e) => {
        searchDebouncing(e.target.value);
        setInputValue(e.target.value);
    };
    const handleClickPage = (number) => {
        setPage(number);
    };
    // 디바운스하여 0.3초뒤에 검색 실행
    const searchDebouncing = (0, react_1.useCallback)((0, SearchDebounce_1.SearchDebounce)((inputValue) => setSearchValue(inputValue)), []);
    const { data, isSuccess } = (0, react_query_1.useQuery)(['notice', searchValue, page], () => (0, scheduleApi_1.fetchNotice)(page, searchValue));
    //더보기 Open, close
    const handleClickView = (id) => {
        setView((prevContent) => {
            if (!prevContent.includes(id)) {
                return [...prevContent, id];
            }
            else {
                return prevContent.filter((idx) => idx !== id);
            }
        });
    };
    return ((0, jsx_runtime_1.jsxs)(Style.Container, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'header_title' }, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { children: "\uC5D8\uB9AC\uC2A4\uC5D0 \uC62C\uB77C\uC628" }), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: 'sub-p' }, { children: " \uC911\uC694\uD55C \uACF5\uC9C0\uC0AC\uD56D\uC774\uC5D0\uC694!" }))] }), (0, jsx_runtime_1.jsx)("img", { src: eliceRabbit_removebg_preview_png_1.default })] })), (0, jsx_runtime_1.jsx)(Input_1.default, { width: '100%', value: inputValue, onChange: handleOnChange }), isSuccess && data && data.objArr.length === 0 ? ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'no_data' }, { children: [(0, jsx_runtime_1.jsx)("img", { src: 'http://www.moyeora-racer.com/static/media/no-data-image.7c445de03420d586e6ca540e13c4cd7c.svg' }), (0, jsx_runtime_1.jsx)("p", { children: "\uD574\uB2F9\uD558\uB294 \uACF5\uC9C0\uC0AC\uD56D\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." })] }))) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [data &&
                        data.objArr.map((item) => ((0, jsx_runtime_1.jsxs)(Style.Content, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'title', onClick: () => handleClickView(item.id) }, { children: [(0, jsx_runtime_1.jsxs)("h5", { children: ["\uD83D\uDCE2 [", item.title, "]"] }), (0, jsx_runtime_1.jsx)("span", { children: view.includes(item.id) ? ((0, jsx_runtime_1.jsx)(fi_chevron_up_svg_1.ReactComponent, { stroke: 'var(--main-white)', strokeWidth: '2.6', width: '18', height: '20' })) : ((0, jsx_runtime_1.jsx)(fi_chevron_down_svg_1.ReactComponent, { stroke: 'var(--main-white)', strokeWidth: '2.6', width: '18', height: '20' })) })] })), view.includes(item.id) && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'main_text' }, { children: (0, jsx_runtime_1.jsx)("p", { children: item.content }) })))] }, item.id))), data && ((0, jsx_runtime_1.jsx)(Pagination_1.default, { pages: data.totalPages, currentPage: data.currentPage, clickPage: handleClickPage }))] }))] }));
};
exports.default = Notification;
