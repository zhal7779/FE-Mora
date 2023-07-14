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
exports.fetchQuestionSearch = exports.fetchStudySearch = exports.fetchKnowledgeSearch = exports.fetchFreeSearch = exports.fetchProfileSearch = exports.fetchPopular = void 0;
const token = sessionStorage.getItem('userToken');
// 게시글 top10 조회
const fetchPopular = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${process.env.REACT_APP_URL}/api/boards/popular`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = yield response.json();
    return data;
});
exports.fetchPopular = fetchPopular;
//오픈 프로필 조회
const fetchProfileSearch = (keyword) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${process.env.REACT_APP_URL}/api/users/open-profile/search?keyword=${keyword}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = yield response.json();
    return data;
});
exports.fetchProfileSearch = fetchProfileSearch;
//자유게시판 검색
const fetchFreeSearch = (keyword) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${process.env.REACT_APP_URL}/api/boards/free?page=0&size=5&keyword=${keyword}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    const data = yield response.json();
    return data;
});
exports.fetchFreeSearch = fetchFreeSearch;
// 지식공유 검색
const fetchKnowledgeSearch = (keyword) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${process.env.REACT_APP_URL}/api/boards/knowledge?page=0&size=5&keyword=${keyword}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    const data = yield response.json();
    return data;
});
exports.fetchKnowledgeSearch = fetchKnowledgeSearch;
// 스터디 모집 검색
const fetchStudySearch = (keyword) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${process.env.REACT_APP_URL}/api/boards/study?page=0&size=5&keyword=${keyword}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    const data = yield response.json();
    return data;
});
exports.fetchStudySearch = fetchStudySearch;
// 레이서Q&A 검색
const fetchQuestionSearch = (keyword) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${process.env.REACT_APP_URL}/api/boards/question?page=0&size=5&keyword=${keyword}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    const data = yield response.json();
    return data;
});
exports.fetchQuestionSearch = fetchQuestionSearch;
