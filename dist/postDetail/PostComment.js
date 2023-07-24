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
const Style = __importStar(require("./styledComponents/PostCommentStyle"));
const Button_1 = __importDefault(require("../components/Button"));
const icon_more_svg_1 = __importDefault(require("../assets/icons/icon-more.svg"));
const formatTime_1 = __importDefault(require("../community/utils/formatTime"));
const react_1 = require("react");
const react_query_1 = require("react-query");
const apis_1 = require("./api/apis");
const jwt_decode_1 = __importDefault(require("jwt-decode"));
const sweetalert2_1 = __importDefault(require("sweetalert2"));
const react_2 = require("react");
const PostComment = ({ postId }) => {
    const [commentOption, setCommentOption] = (0, react_1.useState)(null);
    const [commentData, setCommentData] = (0, react_1.useState)('');
    const [editCommentId, setEditCommentId] = (0, react_1.useState)(null);
    const [editCommentData, setEditCommentData] = (0, react_1.useState)('');
    const textareaRef = (0, react_1.useRef)(null);
    const queryClient = (0, react_query_1.useQueryClient)();
    const decodedToken = (0, jwt_decode_1.default)(sessionStorage.getItem('userToken'));
    // textarea 높이 유동적 변경
    (0, react_2.useEffect)(() => {
        const textareaEl = textareaRef.current;
        if (textareaEl) {
            textareaEl.style.height = 'auto';
            textareaEl.style.height = `${textareaEl.scrollHeight}px`;
        }
    });
    // 댓글 조회
    const { data: comments } = (0, react_query_1.useQuery)(['comments'], () => (0, apis_1.fetchComments)(postId));
    // 댓글 등록/수정
    const { mutate: postCommentMutate } = (0, react_query_1.useMutation)(registerData => (0, apis_1.postComment)(registerData, editCommentId), {
        onSuccess: () => {
            console.log('댓글이 성공적으로 등록되었습니다.');
            queryClient.invalidateQueries(['comments']);
        },
        onError: error => {
            console.error('댓글 등록에 실패하였습니다.', error);
        }
    });
    // 댓글 삭제
    const { mutate: deleteCommentMutate } = (0, react_query_1.useMutation)(apis_1.deleteComment, {
        onSuccess: () => {
            console.log('댓글 삭제에 성공했습니다.');
            queryClient.invalidateQueries(['comments']);
            setCommentOption(null);
        },
        onError: error => {
            console.error(error);
        }
    });
    const handleContentChange = e => {
        e.target.style.height = 'auto';
        e.target.style.height = `${e.target.scrollHeight}px`;
        if (editCommentId) {
            setEditCommentData(e.target.value);
        }
        else {
            setCommentData(e.target.value);
        }
    };
    // 댓글 등록 핸들러
    const handleRegisterComment = () => {
        if (!editCommentId && commentData === '') {
            sweetalert2_1.default.fire({
                icon: 'warning',
                title: '댓글을 작성해주세요!',
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        if (editCommentId && editCommentData === '') {
            sweetalert2_1.default.fire({
                icon: 'warning',
                title: '댓글을 작성해주세요!',
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        if (editCommentId) {
            try {
                const registerData = {
                    comment_id: editCommentId,
                    content: editCommentData
                };
                postCommentMutate(registerData);
                setEditCommentId(null);
                setEditCommentData('');
            }
            catch (error) {
                console.error(error);
            }
        }
        else {
            try {
                const registerData = {
                    content: commentData,
                    board_id: postId
                };
                postCommentMutate(registerData);
                setCommentData('');
            }
            catch (error) {
                console.log(error);
            }
        }
    };
    // 댓글 삭제 핸들러
    const handleDeleteComment = commentId => {
        sweetalert2_1.default.fire({
            icon: 'question',
            title: '댓글을 삭제하시겠습니까?',
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
                    deleteCommentMutate(commentId);
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
    // 댓글 수정
    const handleEditComment = (commentId, commentContent) => {
        setEditCommentId(commentId);
        setEditCommentData(commentContent);
        setCommentOption(null);
    };
    return ((0, jsx_runtime_1.jsxs)(Style.CommentContainer, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "comment-write" }, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "\uB313\uAE00\uB2EC\uAE30" }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "comment-write-area" }, { children: [(0, jsx_runtime_1.jsx)("textarea", { name: "comment", id: "comment", placeholder: "\uB313\uAE00\uC744 \uB0A8\uACA8\uC8FC\uC138\uC694.", onChange: handleContentChange, value: commentData }), (0, jsx_runtime_1.jsx)(Button_1.default, { value: "\uB4F1\uB85D", color: "darkPurple", onClick: handleRegisterComment })] }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "comment-content" }, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "\uB313\uAE00\uD83D\uDC40" }), comments !== undefined && comments.length > 0 ? ((0, jsx_runtime_1.jsx)("ul", Object.assign({ className: "comment-content-list" }, { children: comments.map((comment, index) => ((0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "writer" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "writer-img" }, { children: (0, jsx_runtime_1.jsx)("img", { src: comment.User.img_path, alt: "\uC0AC\uC6A9\uC790 \uD504\uB85C\uD544 \uC774\uBBF8\uC9C0" }) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "writer-info" }, { children: [(0, jsx_runtime_1.jsx)("p", Object.assign({ className: "writer-info-name" }, { children: comment.User.name })), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", Object.assign({ className: "writer-info-position" }, { children: comment.User.position })), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "writer-info-time" }, { children: (0, formatTime_1.default)(comment.createdAt) }))] })] }))] })), editCommentId === comment.id ? ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "comment-textarea" }, { children: [(0, jsx_runtime_1.jsx)("textarea", { name: "comment-edit", id: "comment-edit", value: editCommentData, onChange: handleContentChange, ref: textareaRef }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "edit-btns" }, { children: [(0, jsx_runtime_1.jsx)("button", Object.assign({ className: "edit-btn", onClick: handleRegisterComment }, { children: "\uC218\uC815" })), (0, jsx_runtime_1.jsx)("button", Object.assign({ className: "edit-cancel", onClick: () => setEditCommentId(null) }, { children: "\uCDE8\uC18C" }))] }))] }))) : ((0, jsx_runtime_1.jsx)("p", Object.assign({ className: "comment-content" }, { children: comment.content.split('\n').map((line, index) => {
                                        return ((0, jsx_runtime_1.jsxs)("span", { children: [line, (0, jsx_runtime_1.jsx)("br", {})] }, index));
                                    }) }))), decodedToken.id === comment.commenter && ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "comment-option" }, { children: [(0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => setCommentOption(index === commentOption ? 'null' : index) }, { children: (0, jsx_runtime_1.jsx)("img", { src: icon_more_svg_1.default, alt: "\uC5F4\uAE30" }) })), (0, jsx_runtime_1.jsxs)("ul", Object.assign({ className: `comment-option-list ${index === commentOption ? 'show' : ''}` }, { children: [(0, jsx_runtime_1.jsx)("li", Object.assign({ onClick: () => handleEditComment(comment.id, comment.content) }, { children: "\u270D\uFE0F \uC218\uC815\uD558\uAE30" })), (0, jsx_runtime_1.jsx)("li", Object.assign({ className: "delete", onClick: () => handleDeleteComment(comment.id) }, { children: "\u274C \uC0AD\uC81C\uD558\uAE30" }))] }))] })))] }, comment.id))) }))) : ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "no-comment" }, { children: "\uB313\uAE00\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." })))] }))] }));
};
exports.default = PostComment;
