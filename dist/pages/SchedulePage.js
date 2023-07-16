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
const react_router_dom_1 = require("react-router-dom");
const ScheduleCategory_1 = __importDefault(require("../schedule/components/ScheduleCategory"));
const pageCommonStyle_1 = require("../search/styledComponents/pageCommonStyle");
const Notification_1 = __importDefault(require("../schedule/components/Notification"));
const Calendar_1 = __importDefault(require("../schedule/components/Calendar"));
const SchedulePage = () => {
    const [category, setCategory] = (0, react_1.useState)('notice');
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleSetCategory = (category) => {
        setCategory(category);
    };
    (0, react_1.useEffect)(() => {
        if (category === 'notice') {
            navigate('/schedule/notice');
        }
        else if (category === 'calendar') {
            navigate('/schedule/calendar');
        }
    }, [category, navigate]);
    return ((0, jsx_runtime_1.jsxs)(pageCommonStyle_1.SchedulePageWrapper, { children: [(0, jsx_runtime_1.jsx)(ScheduleCategory_1.default, { setMenu: handleSetCategory }), category === 'notice' ? (0, jsx_runtime_1.jsx)(Notification_1.default, {}) : category === 'calendar' ? (0, jsx_runtime_1.jsx)(Calendar_1.default, {}) : null] }));
};
exports.default = SchedulePage;
