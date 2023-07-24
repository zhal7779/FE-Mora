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
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const Style = __importStar(require("./styledComponents/PostDetailStyle"));
const icon_like_svg_1 = __importDefault(require("../assets/icons/icon-like.svg"));
const rabbitProfile_png_1 = __importDefault(require("../assets/images/rabbitProfile.png"));
const formatTime_1 = __importDefault(require("../community/utils/formatTime"));
const icon_more_svg_1 = __importDefault(require("../assets/icons/icon-more.svg"));
const apis_1 = require("./api/apis");
const react_query_1 = require("react-query");
const jwt_decode_1 = __importDefault(require("jwt-decode"));
const sweetalert2_1 = __importDefault(require("sweetalert2"));
const PostDetail = ({ postId }) => {
    const [postOption, setPostOption] = (0, react_1.useState)(false);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const queryClient = (0, react_query_1.useQueryClient)();
    const decodedToken = (0, jwt_decode_1.default)(sessionStorage.getItem('userToken'));
    // 게시글 상세 조회
    const { status, data: detail, error } = (0, react_query_1.useQuery)(['detail', postId], () => (0, apis_1.fetchPostDetail)(postId), {
        refetchOnWindowFocus: false
    });
    // 게시글 삭제
    const { mutate: deletePostMutate } = (0, react_query_1.useMutation)(() => (0, apis_1.deletePost)(postId), {
        onSuccess: () => {
            console.log('게시글 삭제에 성공했습니다.');
            navigate('/community/post/free');
        },
        onError: error => {
            console.error(error);
        }
    });
    // 좋아요 등록, 취소
    const { mutate: toggleLikeMutate } = (0, react_query_1.useMutation)(() => (0, apis_1.toggleLike)(detail.user_like, postId), {
        onSuccess: () => {
            console.log('좋아요 처리에 성공했습니다.');
            queryClient.invalidateQueries(['detail']);
        },
        onError: error => {
            console.error(error);
        }
    });
    const handleClickLike = () => {
        toggleLikeMutate();
    };
    // 게시글 삭제 핸들러
    const handleDeletePost = () => {
        sweetalert2_1.default.fire({
            icon: 'question',
            title: '게시글을 삭제하시겠습니까?',
            showCancelButton: true,
            confirmButtonText: '삭제',
            confirmButtonColor: 'red',
            cancelButtonText: '취소'
        }).then(result => {
            if (!sessionStorage.getItem('userToken')) {
                return;
            }
            else if (result.isConfirmed) {
                try {
                    deletePostMutate();
                }
                catch (error) {
                    console.error(error);
                }
                return;
            }
            else {
                return;
            }
        });
    };
    if (status === 'loading') {
        return (0, jsx_runtime_1.jsx)(Style.Status, { children: "Loading...\u23F3" });
    }
    if (status === 'error') {
        return (0, jsx_runtime_1.jsxs)(Style.Status, { children: [error.message, "\u26A0\uFE0F"] });
    }
    return ((0, jsx_runtime_1.jsxs)(Style.DetailContainer, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "post-head" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "title" }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: detail.title }), decodedToken.id === detail.writer && ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "post-option" }, { children: [(0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => setPostOption(!postOption) }, { children: (0, jsx_runtime_1.jsx)("img", { src: icon_more_svg_1.default, alt: "\uC5F4\uAE30" }) })), (0, jsx_runtime_1.jsxs)("ul", Object.assign({ className: `post-option-list ${postOption ? 'show' : ''}` }, { children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: `/write?postId=${detail.id}` }, { children: "\u270D\uFE0F \uC218\uC815\uD558\uAE30" })) }, "post-modify"), (0, jsx_runtime_1.jsx)("li", Object.assign({ onClick: handleDeletePost }, { children: "\u274C \uC0AD\uC81C\uD558\uAE30" }), "post-delete")] }))] })))] })), (0, jsx_runtime_1.jsxs)("p", Object.assign({ className: "view" }, { children: ["\uC870\uD68C ", detail.view_cnt] }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "writer" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "writer-img" }, { children: detail.User.img_path !== null ? ((0, jsx_runtime_1.jsx)("img", { src: detail.User.img_path, alt: "\uC791\uC131\uC790 \uD504\uB85C\uD544" })) : ((0, jsx_runtime_1.jsx)("img", { src: rabbitProfile_png_1.default, alt: "\uC791\uC131\uC790 \uD504\uB85C\uD544" })) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "writer-info" }, { children: [(0, jsx_runtime_1.jsx)("p", Object.assign({ className: "writer-info-name" }, { children: detail.User.name })), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", Object.assign({ className: "writer-info-position" }, { children: detail.User.position })), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "writer-info-time" }, { children: (0, formatTime_1.default)(detail.createdAt) }))] })] }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "content" }, { children: [detail.Photos.length > 0 && ((0, jsx_runtime_1.jsx)("ul", Object.assign({ className: "content-img" }, { children: detail.Photos.map((image, index) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("img", { src: image.img_path, alt: image.origin_name }) }, index))) }))), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "content-text" }, { children: [detail.content.split('\n').map((line, index) => {
                                return ((0, jsx_runtime_1.jsxs)("span", { children: [line, (0, jsx_runtime_1.jsx)("br", {})] }, index));
                            }), detail.Hashtags.length > 0 && ((0, jsx_runtime_1.jsx)("ul", Object.assign({ className: "hashtags" }, { children: detail.Hashtags.map((hashtag, index) => ((0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("span", { children: "#" }), hashtag] }, index))) })))] })), (0, jsx_runtime_1.jsxs)("button", Object.assign({ className: `like-btn ${detail.user_like ? '' : 'disabled'}`, onClick: handleClickLike }, { children: [(0, jsx_runtime_1.jsx)("img", { src: icon_like_svg_1.default, alt: "\uC88B\uC544\uC694" }), detail.like_cnt] }))] }))] }));
};
exports.default = PostDetail;
