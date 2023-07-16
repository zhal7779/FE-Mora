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
const Style = __importStar(require("./styledComponents/HashtagWriteStyle"));
const react_1 = require("react");
const icon_delete_hashtag_svg_1 = __importDefault(require("../assets/icons/icon-delete-hashtag.svg"));
const sweetalert2_1 = __importDefault(require("sweetalert2"));
const BASE_URL = process.env.REACT_APP_URL;
const HashtagWrite = ({ data, setData }) => {
    const [popularHashtags, setPopularHashtags] = (0, react_1.useState)([]);
    const [inputValue, setInputValue] = (0, react_1.useState)('');
    const [index, setIndex] = (0, react_1.useState)(-1);
    const popularHashtagRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (index !== -1) {
            setInputValue(popularHashtags[index]);
        }
    }, [index]);
    // 인기 해쉬태그 조회 api
    const fetchHashtags = (keyword) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch(`${BASE_URL}/api/hashtags?keyword=${keyword}`);
        if (!response.ok) {
            throw new Error('인기 해쉬태그 조회에 실패했습니다.');
        }
        const result = yield response.json();
        setPopularHashtags(result);
    });
    // 해쉬태그 change핸들러
    const handleChangeHashtag = (e) => __awaiter(void 0, void 0, void 0, function* () {
        const inputValue = e.target.value;
        setInputValue(inputValue);
        if (inputValue.length > 0) {
            try {
                yield fetchHashtags(inputValue);
            }
            catch (_a) {
                console.error(error);
            }
        }
        if (inputValue.length > 30) {
            sweetalert2_1.default.fire({
                icon: 'warning',
                title: '해쉬태그는 30자 이하로 작성해주세요!',
                showConfirmButton: false,
                timer: 1500
            });
        }
    });
    // 해쉬태그 추가
    const handleAddHashtag = hashtag => {
        if (data.hashtags.includes(hashtag)) {
            sweetalert2_1.default.fire({
                icon: 'warning',
                title: '이미 추가된 해쉬태그입니다.',
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        if (hashtag.length !== 0) {
            setData(prevData => (Object.assign(Object.assign({}, prevData), { hashtags: [...prevData.hashtags, hashtag] })));
        }
    };
    const handleHashtagKeyPress = e => {
        if (e.key === 'Enter') {
            handleAddHashtag(e.target.value);
            setInputValue('');
            setIndex(-1);
        }
    };
    const handleHashtagOnClick = selectedHashtag => {
        handleAddHashtag(selectedHashtag);
        setInputValue('');
        setIndex(-1);
    };
    // 키보드로 해쉬태그 선택
    const handleHashtagKeyDown = e => {
        var _a;
        if (popularHashtags.length > 0) {
            switch (e.key) {
                case 'ArrowDown': //키보드 아래 키
                    setIndex(index + 1);
                    if (((_a = popularHashtagRef.current) === null || _a === void 0 ? void 0 : _a.childElementCount) === index + 1)
                        setIndex(0);
                    break;
                case 'ArrowUp': //키보드 위에 키
                    setIndex(index - 1);
                    if (index <= 0) {
                        setIndex(popularHashtags.length - 1);
                    }
                    break;
                case 'Escape': // esc key를 눌렀을때,
                    setPopularHashtags([]);
                    setIndex(-1);
                    break;
            }
        }
    };
    // 해쉬태그 삭제
    const handleHashtagDelete = index => {
        setData(prevData => {
            const updatedHashtags = [...prevData.hashtags];
            updatedHashtags.splice(index, 1);
            return Object.assign(Object.assign({}, prevData), { hashtags: updatedHashtags });
        });
    };
    return ((0, jsx_runtime_1.jsxs)(Style.HashtagContainer, { children: [data.hashtags.length > 0 && ((0, jsx_runtime_1.jsx)("ul", Object.assign({ className: "hashtags-preview" }, { children: data.hashtags.map((hashtag, index) => ((0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("span", { children: "#" }), hashtag, (0, jsx_runtime_1.jsx)("button", Object.assign({ className: "hashtag-delete", onClick: () => handleHashtagDelete(index) }, { children: (0, jsx_runtime_1.jsx)("img", { src: icon_delete_hashtag_svg_1.default, alt: "\uD574\uC26C\uD0DC\uADF8 \uC0AD\uC81C" }) }))] }, index))) }))), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "hashtags-input" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "#" }), (0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "\uD0DC\uADF8\uB97C \uC785\uB825\uD558\uC138\uC694. (\uC608: #react, #javascript)", id: "hashtagInput", value: inputValue, onChange: handleChangeHashtag, onKeyUp: handleHashtagKeyPress, onKeyDown: handleHashtagKeyDown }), popularHashtags.length > 0 && inputValue !== '' && ((0, jsx_runtime_1.jsx)("ul", Object.assign({ className: "hashtags-popular", ref: popularHashtagRef }, { children: popularHashtags.map((hashtag, idx) => ((0, jsx_runtime_1.jsx)("li", Object.assign({ className: index === idx ? 'selected' : '', onClick: () => handleHashtagOnClick(hashtag) }, { children: hashtag }), idx))) })))] }))] }));
};
exports.default = HashtagWrite;
