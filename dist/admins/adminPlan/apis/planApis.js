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
exports.fetchDeletePlan = exports.fetchUpdatePlan = exports.fetchCreatePlan = exports.fetchReadPlanInfoDetail = exports.fetchReadPlanInfo = void 0;
const clientToServer_1 = require("../utils/clientToServer");
const domainPort = process.env.REACT_APP_URL;
// READ
const fetchReadPlanInfo = (yearMonth) => __awaiter(void 0, void 0, void 0, function* () {
    const adminToken = sessionStorage.getItem('adminToken');
    const response = yield fetch(`${domainPort}/api/plans/ym/${yearMonth}`, {
        headers: { Authorization: `Bearer ${adminToken}` },
    });
    const data = yield response.json();
    return data;
});
exports.fetchReadPlanInfo = fetchReadPlanInfo;
const fetchReadPlanInfoDetail = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const adminToken = sessionStorage.getItem('adminToken');
    const response = yield fetch(`${domainPort}/api/plans/detail/${id}`, {
        headers: { Authorization: `Bearer ${adminToken}` },
    });
    const data = yield response.json();
    return data;
});
exports.fetchReadPlanInfoDetail = fetchReadPlanInfoDetail;
// CREATE
const fetchCreatePlan = (newPlan) => __awaiter(void 0, void 0, void 0, function* () {
    const adminToken = sessionStorage.getItem('adminToken');
    const plan = (0, clientToServer_1.changePlanForm)(newPlan);
    console.log(plan);
    const response = yield fetch(`${domainPort}/api/plans`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${adminToken}`,
            'Content-type': 'application/json',
        },
        body: JSON.stringify(plan),
    });
    const data = yield response.json();
    return data;
});
exports.fetchCreatePlan = fetchCreatePlan;
// UPDATE
const fetchUpdatePlan = (id, newPlan) => __awaiter(void 0, void 0, void 0, function* () {
    const adminToken = sessionStorage.getItem('adminToken');
    const plan = (0, clientToServer_1.changePlanForm)(newPlan);
    const response = yield fetch(`${domainPort}/api/plans/${id}`, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${adminToken}`,
            'Content-type': 'application/json',
        },
        body: JSON.stringify(plan),
    });
    const data = yield response.json();
    return data;
});
exports.fetchUpdatePlan = fetchUpdatePlan;
// DELETE
const fetchDeletePlan = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const adminToken = sessionStorage.getItem('adminToken');
    const response = fetch(`${domainPort}/api/plans/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${adminToken}`,
        },
    });
    return response.status;
});
exports.fetchDeletePlan = fetchDeletePlan;
