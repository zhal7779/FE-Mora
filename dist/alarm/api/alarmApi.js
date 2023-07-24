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
exports.patchAlert = exports.getAlert = void 0;
//알림 조회
const getAlert = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${process.env.REACT_APP_URL}/api/alerts`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
        },
    });
    const data = yield response.json();
    return data;
});
exports.getAlert = getAlert;
// 알림 읽음 여부
const patchAlert = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${process.env.REACT_APP_URL}/api/alerts/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
        },
        body: JSON.stringify({
            checked: true,
        }),
    });
    const data = yield response.json();
    return data;
});
exports.patchAlert = patchAlert;
