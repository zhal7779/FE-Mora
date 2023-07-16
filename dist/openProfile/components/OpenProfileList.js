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
const jwt_decode_1 = __importDefault(require("jwt-decode"));
const u_briefcase_alt_svg_1 = require("../../assets/icons/u_briefcase-alt.svg");
const fi_chevron_down_svg_1 = require("../../assets/icons/fi_chevron-down.svg");
const Style = __importStar(require("../styledComponents/OpenProfileStyle"));
const CoffeeChatConfrim_1 = require("./CoffeeChatConfrim");
const useWindowSize_1 = require("../../hooks/useWindowSize");
const OpenProfileList = ({ data, setCoffeChatStatus, coffeChatStatus, setUserId, coffeeCahtRefetch, }) => {
    const token = sessionStorage.getItem('userToken');
    const myId = (0, jwt_decode_1.default)(token).id;
    const [moreView, setMoreView] = (0, react_1.useState)([]);
    const handleMoreViewClick = (id) => {
        setMoreView((prevMoreView) => {
            if (!prevMoreView.includes(id)) {
                return [...prevMoreView, id];
            }
        });
    };
    const { mobileSize } = (0, useWindowSize_1.useWindowSize)();
    return data.map((item) => ((0, jsx_runtime_1.jsxs)(Style.Container, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'content' }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'profile-content' }, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("img", { className: 'image_icon', src: item.img_path, alt: '\uD504\uB85C\uD544' }), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: 'text_content' }, { children: [(0, jsx_runtime_1.jsx)("h5", { children: item.User.name }), mobileSize ? ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { children: item.position }), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: 'total-year' }, { children: item.user_careers.total_year }))] })) : ((0, jsx_runtime_1.jsxs)("p", { children: [item.position, " \u30FB ", item.user_careers.total_year] }))] }))] }), (0, jsx_runtime_1.jsx)("div", { children: coffeChatStatus.includes(item.user_id) || item.chat_status === true ? ((0, jsx_runtime_1.jsx)("button", Object.assign({ className: 'complete-button' }, { children: "\uC2E0\uCCAD \uC644\uB8CC" }))) : myId === item.user_id ? ((0, jsx_runtime_1.jsx)("button", Object.assign({ className: 'complete-button' }, { children: "\uB0B4 \uD504\uB85C\uD544" }))) : ((0, jsx_runtime_1.jsx)(Style.ChatButton, Object.assign({ onClick: () => (0, CoffeeChatConfrim_1.coffeeChatConfirm)(item.user_id, item.User.name, setCoffeChatStatus, setUserId, coffeeCahtRefetch) }, { children: "\uCEE4\uD53C\uCC57 \uC2E0\uCCAD" }))) })] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'skill-content' }, { children: item.User.Skills.map((skill, index) => ((0, jsx_runtime_1.jsx)("div", { children: skill.name }, index))) })), moreView.includes(item.user_id)
                        ? item.user_careers.career_list.map((careear, index) => ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'carrer-content' }, { children: mobileSize ? ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'carrer-text' }, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(u_briefcase_alt_svg_1.ReactComponent, {}), (0, jsx_runtime_1.jsx)("h5", { children: careear.company_name }), (0, jsx_runtime_1.jsx)("p", { children: careear.position })] }), (0, jsx_runtime_1.jsxs)("p", Object.assign({ className: 'sub_text' }, { children: [careear.hire_date, " ~ ", careear.resign_date, " \u30FB ", careear.work_year] }))] }))) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(u_briefcase_alt_svg_1.ReactComponent, {}), (0, jsx_runtime_1.jsx)("h5", { children: careear.company_name }), (0, jsx_runtime_1.jsx)("p", { children: careear.position })] }), (0, jsx_runtime_1.jsxs)("p", Object.assign({ className: 'sub_text' }, { children: [careear.hire_date, " ~ ", careear.resign_date, " \u30FB ", careear.work_year] }))] })) }), index)))
                        : item.user_careers.career_list.slice(0, 2).map((careear, index) => ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'carrer-content' }, { children: mobileSize ? ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'carrer-text' }, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(u_briefcase_alt_svg_1.ReactComponent, {}), (0, jsx_runtime_1.jsx)("h5", { children: careear.company_name }), (0, jsx_runtime_1.jsx)("p", { children: careear.position })] }), (0, jsx_runtime_1.jsxs)("p", Object.assign({ className: 'sub_text' }, { children: [careear.hire_date, " ~ ", careear.resign_date, " \u30FB ", careear.work_year] }))] }))) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(u_briefcase_alt_svg_1.ReactComponent, {}), (0, jsx_runtime_1.jsx)("h5", { children: careear.company_name }), (0, jsx_runtime_1.jsx)("p", { children: careear.position })] }), (0, jsx_runtime_1.jsxs)("p", Object.assign({ className: 'sub_text' }, { children: [careear.hire_date, " ~ ", careear.resign_date, " \u30FB ", careear.work_year] }))] })) }), index)))] })), !moreView.includes(item.user_id) && item.user_careers.career_list.length > 2 && ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'more-view-button', onClick: () => handleMoreViewClick(item.user_id) }, { children: ["\uB354 \uBCF4\uAE30", (0, jsx_runtime_1.jsx)(fi_chevron_down_svg_1.ReactComponent, { stroke: '#acacb0', strokeWidth: '1', width: '19', height: '19' })] })))] }, item.user_id)));
};
exports.default = OpenProfileList;
