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
const Style = __importStar(require("./styledComponents/HeaderWriteStyle"));
const react_router_dom_1 = require("react-router-dom");
const icon_go_back_svg_1 = __importDefault(require("../assets/icons/icon-go-back.svg"));
const icon_post_img_svg_1 = __importDefault(require("../assets/icons/icon-post-img.svg"));
const Button_1 = __importDefault(require("../components/Button"));
const react_query_1 = require("react-query");
const react_1 = require("react");
const apis_1 = require("./api/apis");
const sweetalert2_1 = __importDefault(require("sweetalert2"));
const WriteHeader = ({ showPostImage, setShowPostImage, data, postId }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(() => {
        if (postId) {
            setShowPostImage(true);
        }
    }, [postId]);
    const { mutate } = (0, react_query_1.useMutation)(postData => (0, apis_1.registerPost)(postId, postData), {
        onSuccess: boardId => {
            if (!postId) {
                navigate(`/community/${boardId}`);
            }
            else {
                navigate(`/community/post/free`);
            }
        },
        onError: error => {
            console.error(error);
        }
    });
    // 게시글 등록/수정
    const handleRegisterPost = () => {
        const { category, title, content, hashtags, images } = data;
        const imgArr = images.map(img => img.img_path);
        const postData = {
            category: category,
            title: title,
            content: content,
            hashtags: hashtags,
            images: imgArr
        };
        if (postId) {
            postData.board_id = postId;
        }
        if (category === '') {
            sweetalert2_1.default.fire({
                icon: 'warning',
                title: '카테고리를 선택해주세요.',
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        else if (title === '') {
            sweetalert2_1.default.fire({
                icon: 'warning',
                title: '제목을 작성해주세요.',
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        else if (content === '') {
            sweetalert2_1.default.fire({
                icon: 'warning',
                title: '본문을 작성해주세요.',
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        else {
            sweetalert2_1.default.fire({
                icon: 'question',
                title: '게시글을 등록하시겠습니까?',
                showCancelButton: true,
                confirmButtonText: '등록',
                cancelButtonText: '취소'
            }).then(result => {
                if (result.isConfirmed) {
                    try {
                        mutate(postData);
                    }
                    catch (error) {
                        console.error(error);
                    }
                }
                else {
                    return;
                }
            });
        }
    };
    const handleGoBack = () => {
        sweetalert2_1.default.fire({
            icon: 'question',
            title: '작성을 취소하고 게시글 페이지로 이동하시겠습니까?',
            showCancelButton: true,
            confirmButtonText: '확인',
            cancelButtonText: '취소'
        }).then(result => {
            if (result.isConfirmed) {
                navigate(-1);
                return;
            }
            else {
                return;
            }
        });
    };
    const handlePostImage = () => {
        showPostImage ? setShowPostImage(false) : setShowPostImage(true);
    };
    return ((0, jsx_runtime_1.jsx)(Style.HeaderContainer, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "header-wrap" }, { children: [(0, jsx_runtime_1.jsx)("button", Object.assign({ type: "button", className: "btn-back", onClick: handleGoBack }, { children: (0, jsx_runtime_1.jsx)("img", { src: icon_go_back_svg_1.default, alt: "\uB4A4\uB85C\uAC00\uAE30" }) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "header-right-btns" }, { children: [(0, jsx_runtime_1.jsx)("button", Object.assign({ className: "post-image", onClick: handlePostImage }, { children: (0, jsx_runtime_1.jsx)("img", { src: icon_post_img_svg_1.default, alt: "\uC774\uBBF8\uC9C0 \uC0BD\uC785\uD558\uAE30" }) })), (0, jsx_runtime_1.jsx)(Button_1.default, { value: postId ? '수정' : '등록', color: "darkPurple", onClick: handleRegisterPost })] }))] })) }));
};
exports.default = WriteHeader;
