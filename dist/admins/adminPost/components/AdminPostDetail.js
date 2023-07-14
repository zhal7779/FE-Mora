"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_query_1 = require("react-query");
const react_router_dom_1 = require("react-router-dom");
const icon_more_svg_1 = __importDefault(require("../../../assets/icons/icon-more.svg"));
const formatTime_1 = __importDefault(require("../../../community/utils/formatTime"));
const rabbitProfile_png_1 = __importDefault(require("../../../assets/images/rabbitProfile.png"));
const postApis_1 = require("../apis/postApis");
const PostDetailStyle_1 = require("../styledComponents/PostDetailStyle");
const AdminPostDetail = ({ postId }) => {
    var _a, _b;
    const [postOption, setPostOption] = (0, react_1.useState)(false);
    const [commentCnt, setCommentCnt] = (0, react_1.useState)(0);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { isLoading, data, error } = (0, react_query_1.useQuery)(['detail', postId, commentCnt], () => (0, postApis_1.fetchReadPostInfoDetail)(postId), {
        onSuccess(data) {
            setCommentCnt(data.Comments.length);
        },
    });
    const handleDeletePost = (id) => {
        const response = confirm('삭제하시겠습니까?');
        if (response) {
            deletePost(id);
        }
    };
    const { mutate: deletePost, error: deleteError } = (0, react_query_1.useMutation)((id) => (0, postApis_1.fetchDeletePost)(id), {
        onSuccess() {
            navigate(-1);
        },
        onError(error) {
            console.error(error);
        },
    });
    const handleDeleteComment = (id) => {
        const response = confirm('삭제하시겠습니까?');
        if (response) {
            deleteComment(id);
        }
    };
    const { mutate: deleteComment, error: deleteCommentError } = (0, react_query_1.useMutation)((id) => (0, postApis_1.fetchDeleteComment)(id), {
        onSuccess() {
            setCommentCnt((commentCnt) => commentCnt - 1);
        },
        onError(error) {
            console.error(error);
        },
    });
    if (isLoading)
        return (0, jsx_runtime_1.jsx)(PostDetailStyle_1.Status, { children: "Loading...\u23F3" });
    if (error)
        return (0, jsx_runtime_1.jsx)(PostDetailStyle_1.Status, { children: error.message });
    if (deleteError)
        return (0, jsx_runtime_1.jsx)(PostDetailStyle_1.Status, { children: deleteError.message });
    if (deleteCommentError)
        return (0, jsx_runtime_1.jsx)(PostDetailStyle_1.Status, { children: deleteCommentError.message });
    return ((0, jsx_runtime_1.jsxs)(PostDetailStyle_1.DetailContainer, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'post-head' }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'title' }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: data.title }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'post-option' }, { children: [(0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => setPostOption(!postOption) }, { children: (0, jsx_runtime_1.jsx)("img", { src: icon_more_svg_1.default, alt: '\uC5F4\uAE30' }) })), (0, jsx_runtime_1.jsx)("ul", Object.assign({ className: `post-option-list ${postOption ? 'show' : ''}` }, { children: (0, jsx_runtime_1.jsx)("li", Object.assign({ onClick: () => handleDeletePost(data.id) }, { children: "\u274C \uC0AD\uC81C\uD558\uAE30" }), 'post-delete') }))] }))] })), (0, jsx_runtime_1.jsxs)("p", Object.assign({ className: 'view' }, { children: ["\uC870\uD68C ", data.view_cnt] }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'writer' }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'writer-img' }, { children: ((_a = data.Photos[0]) === null || _a === void 0 ? void 0 : _a.img_path) !== null ? ((0, jsx_runtime_1.jsx)("img", { src: (_b = data.Photos[0]) === null || _b === void 0 ? void 0 : _b.img_path, alt: '\uC791\uC131\uC790 \uD504\uB85C\uD544' })) : ((0, jsx_runtime_1.jsx)("img", { src: rabbitProfile_png_1.default, alt: '\uC791\uC131\uC790 \uD504\uB85C\uD544' })) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'writer-info' }, { children: [(0, jsx_runtime_1.jsx)("p", Object.assign({ className: 'writer-info-name' }, { children: data.User.name })), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", Object.assign({ className: 'writer-info-position' }, { children: data.User.position })), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: 'writer-info-time' }, { children: (0, formatTime_1.default)(data.createdAt) }))] })] }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'content' }, { children: [data.Photos.length > 0 && ((0, jsx_runtime_1.jsx)("ul", Object.assign({ className: 'content-img' }, { children: data.Photos.map((image, idx) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("img", { src: image.img_path, alt: image.origin_name }) }, idx + image.img_path))) }))), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'content-text' }, { children: data.content.split('\n').map((line, idx) => ((0, jsx_runtime_1.jsxs)("span", { children: [line, (0, jsx_runtime_1.jsx)("br", {})] }, idx))) }))] })), (0, jsx_runtime_1.jsx)(PostDetailStyle_1.Hr, {}), (0, jsx_runtime_1.jsxs)(PostDetailStyle_1.CommentBlock, { children: [(0, jsx_runtime_1.jsx)(PostDetailStyle_1.CommentTitle, { children: "\uB313\uAE00" }), data.Comments.map((comment) => ((0, jsx_runtime_1.jsxs)(PostDetailStyle_1.CommentContentBlock, { children: [(0, jsx_runtime_1.jsxs)(PostDetailStyle_1.UserInfo, { children: [(0, jsx_runtime_1.jsx)("p", Object.assign({ className: 'user-name' }, { children: comment.User.name })), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: 'create-at' }, { children: comment.created_at.slice(0, 10) })), (0, jsx_runtime_1.jsx)(PostDetailStyle_1.DeleteComment, Object.assign({ className: 'delete-btn', onClick: () => handleDeleteComment(comment.id) }, { children: "\uC0AD\uC81C" }))] }), (0, jsx_runtime_1.jsx)(PostDetailStyle_1.CommentContent, { children: comment.content })] }, comment.id)))] })] }));
};
exports.default = AdminPostDetail;
