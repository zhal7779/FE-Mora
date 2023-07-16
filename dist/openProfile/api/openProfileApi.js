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
exports.postCoffeeChat = exports.ProfilRegistrStatus = exports.putProfile = exports.getProfile = void 0;
//오픈프로필 조회
const getProfile = (page) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${process.env.REACT_APP_URL}/api/users/open-profile?page=${page}&size=5
  `, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
        },
    });
    const data = yield response.json();
    return data;
});
exports.getProfile = getProfile;
//오픈프로필 등록
const putProfile = (bool) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${process.env.REACT_APP_URL}/api/users/open-profile`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
        },
        body: JSON.stringify({
            open: bool,
        }),
    });
    const data = yield response.json();
    return data;
});
exports.putProfile = putProfile;
//오픈 프로필 등록 여부
const ProfilRegistrStatus = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${process.env.REACT_APP_URL}/api/users/mypage`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
        },
    });
    const data = yield response.json();
    return data;
});
exports.ProfilRegistrStatus = ProfilRegistrStatus;
// 커피챗 신청
const postCoffeeChat = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${process.env.REACT_APP_URL}/api/coffeechats`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
        },
        body: JSON.stringify({
            profile_id: id,
        }),
    });
    const data = yield response.json();
    return data;
});
exports.postCoffeeChat = postCoffeeChat;
