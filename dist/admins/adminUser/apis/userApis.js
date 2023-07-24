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
exports.fetchDeleteUser = exports.fetchUpdateUser = exports.fetchCreateUser = exports.fetchReadUserInfoDetail = exports.fetchReadUserInfo = void 0;
const domainPort = process.env.REACT_APP_URL;
// READ
const fetchReadUserInfo = (page, size, keyword) => __awaiter(void 0, void 0, void 0, function* () {
    const adminToken = sessionStorage.getItem('adminToken');
    const response = yield fetch(`${domainPort}/api/adminUsers?page=${page}&size=${size}&keyword=${keyword}`, {
        headers: { Authorization: `Bearer ${adminToken}` },
    });
    const data = yield response.json();
    return data;
});
exports.fetchReadUserInfo = fetchReadUserInfo;
const fetchReadUserInfoDetail = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const adminToken = sessionStorage.getItem('adminToken');
    const response = yield fetch(`${domainPort}/api/adminUsers/${id}`, {
        headers: { Authorization: `Bearer ${adminToken}` },
    });
    const data = yield response.json();
    return data;
});
exports.fetchReadUserInfoDetail = fetchReadUserInfoDetail;
// CREATE
const fetchCreateUser = (newNotification) => __awaiter(void 0, void 0, void 0, function* () {
    const adminToken = sessionStorage.getItem('adminToken');
    const response = yield fetch(`${domainPort}/api/adminUsers`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${adminToken}`,
            'Content-type': 'application/json',
        },
        body: JSON.stringify(newNotification),
    });
    const data = yield response.json();
    return data;
});
exports.fetchCreateUser = fetchCreateUser;
// UPDATE
const fetchUpdateUser = (email, newNotification) => __awaiter(void 0, void 0, void 0, function* () {
    const adminToken = sessionStorage.getItem('adminToken');
    const response = yield fetch(`${domainPort}/api/adminUsers/${email}`, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${adminToken}`,
            'Content-type': 'application/json',
        },
        body: JSON.stringify(newNotification),
    });
    const data = yield response.json();
    return data;
});
exports.fetchUpdateUser = fetchUpdateUser;
// DELETE
const fetchDeleteUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const adminToken = sessionStorage.getItem('adminToken');
    const response = fetch(`${domainPort}/api/adminUsers/${email}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${adminToken}`,
        },
    });
    return response.status;
});
exports.fetchDeleteUser = fetchDeleteUser;
