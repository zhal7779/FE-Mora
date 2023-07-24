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
const CategoryStyle_1 = require("../../community/styledComponents/CategoryStyle");
const u_megaphone_svg_1 = require("../../assets/icons/u_megaphone.svg");
const u_calendar_alt_svg_1 = require("../../assets/icons/u_calendar-alt.svg");
const useWindowSize_1 = require("../../hooks/useWindowSize");
const ScheduleCategory = ({ setMenu }) => {
    const [selectedCategory, setSelectedCategory] = (0, react_1.useState)('notice');
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setMenu(category);
    };
    const { isSize } = (0, useWindowSize_1.useWindowSize)();
    return ((0, jsx_runtime_1.jsxs)(CategoryStyle_1.CategoryContainer, Object.assign({ style: { marginTop: '6rem' } }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'category-title' }, { children: (0, jsx_runtime_1.jsx)("h2", { children: "\uC815\uBE44\uC18C \uD83D\uDCC6" }) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'category-list' }, { children: [(0, jsx_runtime_1.jsx)("p", Object.assign({ className: 'category-list-title' }, { children: "\uD1A0\uD53D" })), (0, jsx_runtime_1.jsxs)("ul", Object.assign({ style: { justifyContent: 'center' } }, { children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)("a", Object.assign({ onClick: () => handleCategorySelect('notice'), className: selectedCategory === 'notice' ? 'active' : '' }, { children: [isSize ? (selectedCategory === 'notice' ? ((0, jsx_runtime_1.jsx)(u_megaphone_svg_1.ReactComponent, { fill: '#7353EA' })) : ((0, jsx_runtime_1.jsx)(u_megaphone_svg_1.ReactComponent, { fill: 'var(--light-gray)' }))) : (''), (0, jsx_runtime_1.jsx)("p", { children: "\uACF5\uC9C0\uC0AC\uD56D" })] })) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)("a", Object.assign({ onClick: () => handleCategorySelect('calendar'), className: selectedCategory === 'calendar' ? 'active' : '' }, { children: [isSize ? (selectedCategory === 'calendar' ? ((0, jsx_runtime_1.jsx)(u_calendar_alt_svg_1.ReactComponent, { fill: '#7353EA' })) : ((0, jsx_runtime_1.jsx)(u_calendar_alt_svg_1.ReactComponent, { fill: 'var(--light-gray)' }))) : (''), (0, jsx_runtime_1.jsx)("p", { children: "\uC77C\uC815\uD45C" })] })) })] }))] }))] })));
};
exports.default = ScheduleCategory;
