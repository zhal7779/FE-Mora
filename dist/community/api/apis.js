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
exports.fetchRecommendPosts = exports.fetchPosts = void 0;
const BASE_URL = process.env.REACT_APP_URL;
// 게시글 리스트 조회 api
const fetchPosts = ({ selectedCategoryId, page, view, keyword, sort }) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${BASE_URL}/api/boards/${selectedCategoryId}?page=${page}&size=${view}&keyword=${keyword}&sort=${sort}`, {
        headers: {
            authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
        },
    });
    if (!response.ok) {
        throw new Error('게시글을 불러오는데 실패했습니다.');
    }
    const result = yield response.json();
    return result;
});
exports.fetchPosts = fetchPosts;
// 추천 게시글 조회 api
const fetchRecommendPosts = (selectedCategoryId) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${BASE_URL}/api/boards/${selectedCategoryId}/recommend`);
    if (!response.ok) {
        throw new Error('추천 게시글을 불러오는데 실패했습니다.');
    }
    const result = yield response.json();
    return result;
});
exports.fetchRecommendPosts = fetchRecommendPosts;
