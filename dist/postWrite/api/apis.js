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
exports.postImage = exports.registerPost = void 0;
const BASE_URL = process.env.REACT_APP_URL;
// 게시글 등록/수정 api
const registerPost = (postId, postData) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${BASE_URL}/api/boards`, {
        method: postId ? 'PUT' : 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
        },
    });
    if (!response.ok) {
        throw new Error('게시글 등록에 실패하였습니다.');
    }
    const result = response.json();
    return result;
});
exports.registerPost = registerPost;
// 이미지 등록 api
const postImage = (imgFormData) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${BASE_URL}/api/boards/img`, {
        method: 'POST',
        body: imgFormData,
        headers: {
            authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
        },
    });
    if (!response.ok) {
        throw new Error('이미지 등록에 실패하였습니다.');
    }
    const result = yield response.json();
    return result;
});
exports.postImage = postImage;
