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
exports.fetchNotice = exports.fetchScheduleYMD = exports.fetchSchedule = void 0;
//캘린더 년, 월 조회
const fetchSchedule = (yearMonth) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${process.env.REACT_APP_URL}/api/plans/ym/${yearMonth}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
        },
    });
    const data = yield response.json();
    return data;
});
exports.fetchSchedule = fetchSchedule;
//캘린더 년, 월, 일 조회
const fetchScheduleYMD = (yearMonthDay) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${process.env.REACT_APP_URL}/api/plans/ymd/${yearMonthDay}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
        },
    });
    const data = yield response.json();
    return data;
});
exports.fetchScheduleYMD = fetchScheduleYMD;
//공지 조회
const fetchNotice = (page, keyword) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${process.env.REACT_APP_URL}/api/notices?page=${page}&size=8&keyword=${keyword}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
        },
    });
    const data = yield response.json();
    return data;
});
exports.fetchNotice = fetchNotice;
