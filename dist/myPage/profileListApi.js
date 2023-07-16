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
exports.handleRemoveLink = exports.handleRemoveEdu = exports.handleRemoveCareer = exports.fetchMyLinkList = exports.fetchMyEduList = exports.fetchMyCareerList = exports.fetchMySkillList = void 0;
const URL = process.env.REACT_APP_URL;
const userToken = sessionStorage.getItem('userToken');
const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${userToken}`,
};
// 현재 나의 스킬 불러오기 함수
function fetchMySkillList() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${URL}/api/skills/myskill`, {
            headers: headers,
        });
        return response.json();
    });
}
exports.fetchMySkillList = fetchMySkillList;
// 현재 나의 커리어 불러오기 함수
function fetchMyCareerList() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${URL}/api/careers`, {
            headers: headers,
        });
        return response.json();
    });
}
exports.fetchMyCareerList = fetchMyCareerList;
// 현재 나의 교육 불러오기 함수
function fetchMyEduList() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${URL}/api/educations`, {
            headers: headers,
        });
        return response.json();
    });
}
exports.fetchMyEduList = fetchMyEduList;
// 현재 나의 링크 불러오기 함수
function fetchMyLinkList() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${URL}/api/links`, {
            headers: headers,
        });
        return response.json();
    });
}
exports.fetchMyLinkList = fetchMyLinkList;
// 경력 삭제 요청 핸들러
function handleRemoveCareer(careerId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${URL}/api/careers/delete`, {
            method: 'DELETE',
            headers: headers,
            body: JSON.stringify({ id: careerId }),
        });
        if (!response.ok) {
            throw new Error('Failed to delete career');
        }
    });
}
exports.handleRemoveCareer = handleRemoveCareer;
// 교육 삭제 요청 핸들러
function handleRemoveEdu(eduId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${URL}/api/educations`, {
            method: 'DELETE',
            headers: headers,
            body: JSON.stringify({ id: eduId }),
        });
        if (!response.ok) {
            throw new Error('Failed to delete edu');
        }
    });
}
exports.handleRemoveEdu = handleRemoveEdu;
// 링크 삭제 요청 핸들러
function handleRemoveLink(linkId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${URL}/api/links/delete`, {
            method: 'DELETE',
            headers: headers,
            body: JSON.stringify({ linkId: linkId }),
        });
        if (!response.ok) {
            throw new Error('Failed to delete link');
        }
    });
}
exports.handleRemoveLink = handleRemoveLink;
