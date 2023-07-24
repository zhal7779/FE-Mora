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
exports.fetchDeleteTrack = exports.fetchUpdateTrack = exports.fetchCreateTrack = exports.fetchReadTrackInfoDetail = exports.fetchReadTrackInfo = void 0;
const domainPort = process.env.REACT_APP_URL;
// READ
const fetchReadTrackInfo = (page, size, keyword) => __awaiter(void 0, void 0, void 0, function* () {
    const adminToken = sessionStorage.getItem('adminToken');
    const response = yield fetch(`${domainPort}/api/generations?page=${page}&size=${size}&keyword=${keyword}`, {
        headers: { Authorization: `Bearer ${adminToken}` },
    });
    const data = yield response.json();
    return data;
});
exports.fetchReadTrackInfo = fetchReadTrackInfo;
const fetchReadTrackInfoDetail = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const adminToken = sessionStorage.getItem('adminToken');
    const response = yield fetch(`${domainPort}/api/generations/${id}`, {
        headers: { Authorization: `Bearer ${adminToken}` },
    });
    const data = yield response.json();
    return data;
});
exports.fetchReadTrackInfoDetail = fetchReadTrackInfoDetail;
// CREATE
const fetchCreateTrack = (newTrack) => __awaiter(void 0, void 0, void 0, function* () {
    const adminToken = sessionStorage.getItem('adminToken');
    const response = yield fetch(`${domainPort}/api/generations`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${adminToken}`,
            'Content-type': 'application/json',
        },
        body: JSON.stringify(newTrack),
    });
    const data = yield response.json();
    return data;
});
exports.fetchCreateTrack = fetchCreateTrack;
// UPDATE
const fetchUpdateTrack = (id, newTrack) => __awaiter(void 0, void 0, void 0, function* () {
    const adminToken = sessionStorage.getItem('adminToken');
    const response = yield fetch(`${domainPort}/api/generations/${id}`, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${adminToken}`,
            'Content-type': 'application/json',
        },
        body: JSON.stringify(newTrack),
    });
    const data = yield response.json();
    return data;
});
exports.fetchUpdateTrack = fetchUpdateTrack;
// DELETE
const fetchDeleteTrack = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const adminToken = sessionStorage.getItem('adminToken');
    const response = fetch(`${domainPort}/api/generations/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${adminToken}`,
        },
    });
    return response.status;
});
exports.fetchDeleteTrack = fetchDeleteTrack;
