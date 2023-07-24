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
const Style = __importStar(require("./styledComponents/PostWriteStyle"));
const icon_down_svg_1 = __importDefault(require("../assets/icons/icon-down.svg"));
const icon_up_svg_1 = __importDefault(require("../assets/icons/icon-up.svg"));
const react_1 = require("react");
const react_query_1 = require("react-query");
const categoryData_1 = require("../community/categoryData");
const apis_1 = require("../postDetail/api/apis");
const sweetalert2_1 = __importDefault(require("sweetalert2"));
const PostWrite = ({ data, setData, postId }) => {
    const [showCategory, setShowCategory] = (0, react_1.useState)(false);
    const titleTextareaRef = (0, react_1.useRef)(null);
    const contentTextareaRef = (0, react_1.useRef)(null);
    const { data: detail } = (0, react_query_1.useQuery)(['detail', postId], () => (0, apis_1.fetchPostDetail)(postId));
    // textarea 높이 유동적 변경
    const textareaHeight = el => {
        el.style.height = 'auto';
        el.style.height = `${el.scrollHeight}px`;
    };
    (0, react_1.useEffect)(() => {
        if (titleTextareaRef.current) {
            textareaHeight(titleTextareaRef.current);
        }
        if (contentTextareaRef.current) {
            textareaHeight(contentTextareaRef.current);
        }
    }, [data]);
    // 게시글 수정일 경우 해당 게시글의 콘텐츠 내용 보여주기
    (0, react_1.useEffect)(() => {
        if (detail) {
            setData(prevData => (Object.assign(Object.assign({}, prevData), { category: detail.category, title: detail.title, content: detail.content, hashtags: detail.Hashtags, images: detail.Photos })));
        }
    }, [detail, setData]);
    // 카테고리 선택
    const handleSelectCategory = e => {
        setData(Object.assign(Object.assign({}, data), { category: e.target.getAttribute('name') }));
        setShowCategory(false);
    };
    // 제목 작성
    const handleWriteTitle = e => {
        const inputValue = e.target.value;
        if (inputValue.length <= 100) {
            setData(Object.assign(Object.assign({}, data), { title: inputValue }));
        }
        else {
            sweetalert2_1.default.fire({
                icon: 'warning',
                title: '제목을 100자 이하로 작성해주세요!',
                showConfirmButton: false,
                timer: 1500
            });
        }
    };
    // 본문 작성
    const handleWriteContent = e => {
        const inputValue = e.target.value;
        if (inputValue.length <= 500) {
            setData(Object.assign(Object.assign({}, data), { content: inputValue }));
        }
        else {
            sweetalert2_1.default.fire({
                icon: 'warning',
                title: '본문을 500자 이하로 작성해주세요!',
                showConfirmButton: false,
                timer: 1500
            });
        }
    };
    return ((0, jsx_runtime_1.jsxs)(Style.WriteContainer, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "write-top" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "select-category" }, { children: [(0, jsx_runtime_1.jsxs)("button", Object.assign({ className: "select-category-btn", onClick: () => setShowCategory(!showCategory) }, { children: [data.category
                                        ? categoryData_1.categories.find(category => category.id === data.category).name
                                        : '카테고리 선택', showCategory ? ((0, jsx_runtime_1.jsx)("img", { src: icon_up_svg_1.default, alt: "\uCE74\uD14C\uACE0\uB9AC \uBAA9\uB85D\uBCF4\uAE30" })) : ((0, jsx_runtime_1.jsx)("img", { src: icon_down_svg_1.default, alt: "\uCE74\uD14C\uACE0\uB9AC \uBAA9\uB85D\uB2EB\uAE30" }))] })), (0, jsx_runtime_1.jsx)("ul", Object.assign({ className: `select-category-list ${showCategory ? 'show' : ''}` }, { children: categoryData_1.categories.map(category => ((0, jsx_runtime_1.jsxs)("li", Object.assign({ onClick: handleSelectCategory, name: category.id, className: data.category === category.name ? 'active' : '' }, { children: [(0, jsx_runtime_1.jsx)("img", { src: category.icon, alt: "\uCE74\uD14C\uACE0\uB9AC \uC544\uC774\uCF58" }), category.name] }), category.name))) }))] })), (0, jsx_runtime_1.jsx)("textarea", { name: "title", id: "title", placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694", value: data.title, onChange: handleWriteTitle, ref: titleTextareaRef })] })), (0, jsx_runtime_1.jsx)("textarea", { name: "content", id: "content", placeholder: "\uAE00\uC744 \uC791\uC131\uD574\uC11C \uB808\uC774\uC11C \uB3D9\uB8CC\uB4E4\uACFC \uC0DD\uAC01\uC744 \uACF5\uC720\uD574\uBCF4\uC138\uC694! ", value: data.content, onChange: handleWriteContent, ref: contentTextareaRef })] }));
};
exports.default = PostWrite;
