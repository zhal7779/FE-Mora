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
exports.fetchDeleteComment = exports.fetchDeletePost = exports.fetchReadPostInfoDetail = exports.fetchReadPostInfo = void 0;
const domainPort = process.env.REACT_APP_URL;
// READ
const fetchReadPostInfo = ({ page, view, content }) => __awaiter(void 0, void 0, void 0, function* () {
    const adminToken = sessionStorage.getItem('adminToken');
    const response = yield fetch(`${domainPort}/api/adminBoards?page=${page}&size=${view}&keyword=${content}`, {
        headers: { Authorization: `Bearer ${adminToken}` },
    });
    const data = yield response.json();
    return data;
});
exports.fetchReadPostInfo = fetchReadPostInfo;
const fetchReadPostInfoDetail = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const adminToken = sessionStorage.getItem('adminToken');
    const response = yield fetch(`${domainPort}/api/adminBoards/${id}`, {
        headers: { Authorization: `Bearer ${adminToken}` },
    });
    const data = yield response.json();
    return data;
});
exports.fetchReadPostInfoDetail = fetchReadPostInfoDetail;
// DELETE
const fetchDeletePost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const adminToken = sessionStorage.getItem('adminToken');
    const response = fetch(`${domainPort}/api/adminBoards/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${adminToken}`,
        },
    });
    return response.status;
});
exports.fetchDeletePost = fetchDeletePost;
const fetchDeleteComment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const adminToken = sessionStorage.getItem('adminToken');
    const response = fetch(`${domainPort}/api/adminBoards/comment/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${adminToken}`,
        },
    });
    return response.status;
});
exports.fetchDeleteComment = fetchDeleteComment;
