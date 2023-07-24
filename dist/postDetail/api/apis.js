"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComment = exports.postComment = exports.fetchComments = exports.toggleLike = exports.deletePost = exports.fetchLike = exports.fetchPostDetail = void 0;
const BASE_URL = process.env.REACT_APP_URL;
// 게시글 상세 조회 api
const fetchPostDetail = (postId) => __awaiter(void 0, void 0, void 0, function* () {
    if (postId) {
        const storedToken = sessionStorage.getItem('userToken');
        const response = yield fetch(`${BASE_URL}/api/boards/detail/${postId}`, {
            headers: {
                authorization: `Bearer ${storedToken}`,
            },
        });
        if (!response.ok) {
            throw new Error('게시글 상세를 불러오는데 실패했습니다.');
        }
        const data = yield response.json();
        return data;
    }
});
exports.fetchPostDetail = fetchPostDetail;
// 게시글 좋아요 수 조회 api
const fetchLike = (postId) => __awaiter(void 0, void 0, void 0, function* () {
    const storedToken = sessionStorage.getItem('userToken');
    const response = yield fetch(`${BASE_URL}/api/likes/${postId}`, {
        headers: {
            authorization: `Bearer ${storedToken}`,
        },
    });
    if (!response.ok) {
        throw new Error('게시글 좋아요 수를 불러오는데 실패했습니다.');
    }
    const data = yield response.json();
    return data;
});
exports.fetchLike = fetchLike;
// 게시글 삭제 api
const deletePost = (postId) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${BASE_URL}/api/boards`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
        },
        body: JSON.stringify({ board_id: postId }),
    });
    if (!response.ok) {
        throw new Error('게시글 삭제에 실패했습니다.');
    }
    return yield response.json();
});
exports.deletePost = deletePost;
// 좋아요 등록/취소 api
const toggleLike = (userLike, postId) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${BASE_URL}/api/likes`, {
        method: userLike ? 'DELETE' : 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
        },
        body: JSON.stringify({ board_id: postId }),
    });
    if (!response.ok) {
        throw new Error('좋아요 처리에 실패했습니다.');
    }
    return yield response.json();
});
exports.toggleLike = toggleLike;
//댓글 조회 api
const fetchComments = (postId) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${BASE_URL}/api/boards/detail/${postId}/comments`, {
        headers: {
            authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
        },
    });
    if (!response.ok) {
        throw new Error('댓글을 불러오는데 실패했습니다.');
    }
    const result = yield response.json();
    return result;
});
exports.fetchComments = fetchComments;
// 댓글 등록/수정 api
const postComment = (registerData, editCommentId) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${BASE_URL}/api/comments`, {
        method: editCommentId ? 'PATCH' : 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
        },
        body: JSON.stringify(registerData),
    });
    if (!response.ok) {
        throw new Error('댓글 등록에 실패하였습니다.');
    }
    const result = yield response.json();
    return result;
});
exports.postComment = postComment;
// 댓글 삭제 api
const deleteComment = (commentId) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${BASE_URL}/api/comments`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
        },
        body: JSON.stringify({ comment_id: commentId }),
    });
    if (!response.ok) {
        throw new Error('댓글 삭제에 실패했습니다.');
    }
    return yield response.json();
});
exports.deleteComment = deleteComment;
