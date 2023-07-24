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
const Style = __importStar(require("./styledComponents/MainBannerStyle"));
const main_banner_img_png_1 = __importDefault(require("../assets/images/main-banner-img.png"));
const Button_1 = __importDefault(require("../components/Button"));
const react_router_dom_1 = require("react-router-dom");
const background_effect_img_svg_1 = __importDefault(require("../assets/images/background-effect-img.svg"));
const MainBanner = () => {
    return ((0, jsx_runtime_1.jsxs)(Style.BannerContainer, { children: [(0, jsx_runtime_1.jsx)("img", { src: background_effect_img_svg_1.default, alt: "\uBC30\uACBD \uC774\uBBF8\uC9C0", className: "bg-img" }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "main-slogan" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "main-slogan-side" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "\uB808\uC774\uC11C \uCEE4\uBBA4\uB2C8\uD2F0\uBD80\uD130 \uC8FC\uC694 \uC77C\uC815\uAE4C\uC9C0 \uD55C\uBC88\uC5D0!" }), "\uC5D8\uB9AC\uC2A4\uC5D0\uC11C", (0, jsx_runtime_1.jsx)("br", {}), "\uC778\uC815\uD55C \uB808\uC774\uC11C", (0, jsx_runtime_1.jsx)("br", {}), " \uD544\uC218 \uCEE4\uBBA4\uB2C8\uD2F0, \uBAA8\uB808", (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/login" }, { children: (0, jsx_runtime_1.jsx)(Button_1.default, { value: "\uC2DC\uC791\uD558\uAE30", color: "darkPurple" }) }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "main-image" }, { children: (0, jsx_runtime_1.jsx)("img", { src: main_banner_img_png_1.default, alt: "\uBA54\uC778 \uBC30\uB108 \uC774\uBBF8\uC9C0" }) }))] }))] }));
};
exports.default = MainBanner;
