"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Style = __importStar(require("../search/styledComponents/SearchPageStyle"));
const pageCommonStyle_1 = require("../search/styledComponents/pageCommonStyle");
const SearchResultBar_1 = __importDefault(require("../search/components/SearchResultBar"));
const RankingContent_1 = __importDefault(require("../search/components/RankingContent"));
const SearchResultProfile_1 = __importDefault(require("../search/components/SearchResultProfile"));
const react_1 = require("react");
const RegisterQuestion_1 = __importDefault(require("../search/components/RegisterQuestion"));
const SearchResultQnA_1 = __importDefault(require("../search/components/SearchResultQnA"));
const SearchResultPost_1 = __importDefault(require("../search/components/SearchResultPost"));
const react_router_dom_1 = require("react-router-dom");
const SearchContext_1 = require("../search/context/SearchContext");
const searchAPI_1 = require("../search/api/searchAPI");
const react_query_1 = require("react-query");
const NoData_1 = __importDefault(require("../components/NoData"));
const react_2 = require("swiper/react");
const modules_1 = require("swiper/modules");
require("swiper/css");
require("swiper/css/navigation");
require("swiper/css/pagination");
const useWindowSize_1 = require("../hooks/useWindowSize");
const SearchPage = () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    //메인 검색창에서 받아온 검색 키워드, 검색후 컴포넌트에 키워드를 넘겨 결과에 하이라이팅해줄 state
    const { state } = (0, react_router_dom_1.useLocation)();
    const [searchKeyword, setSearchKeyword] = (0, react_1.useState)(state);
    const handleSubSearch = (subResult) => {
        setSearchKeyword(subResult);
    };
    const menuItems = [
        { id: 1, text: '전체' },
        { id: 2, text: '프로필' },
        { id: 3, text: '자유 게시판' },
        { id: 4, text: '지식 공유' },
        { id: 5, text: '스터디 모집' },
        { id: 6, text: '레이서 Q&A' },
    ];
    const [searchMenu, setSearchMenu] = (0, react_1.useState)(() => {
        const storedMenu = localStorage.getItem('searchMenu');
        return storedMenu ? parseInt(storedMenu) : 1;
    });
    const handleMenuClick = (num) => {
        setSearchMenu(num);
    };
    // 새로고침시 menu 상태값 유지 위해 로컬스토리지 사용,
    // token 값이 있으면  초기 상태값 1
    (0, react_1.useEffect)(() => {
        localStorage.setItem('searchMenu', searchMenu.toString());
        return () => {
            localStorage.removeItem('searchMenu');
        };
    }, [searchMenu]);
    const popularProfileData = (0, react_query_1.useQueries)([
        {
            queryKey: ['popular'],
            queryFn: searchAPI_1.fetchPopular,
        },
        {
            queryKey: ['openProfile', searchKeyword],
            queryFn: () => (0, searchAPI_1.fetchProfileSearch)(searchKeyword),
        },
    ]);
    const freeKnowledgeData = (0, react_query_1.useQueries)([
        {
            queryKey: ['free', searchKeyword],
            queryFn: () => (0, searchAPI_1.fetchFreeSearch)(searchKeyword),
            enabled: ((_a = popularProfileData[0]) === null || _a === void 0 ? void 0 : _a.isSuccess) && ((_b = popularProfileData[1]) === null || _b === void 0 ? void 0 : _b.isSuccess),
        },
        {
            queryKey: ['Knowledge', searchKeyword],
            queryFn: () => (0, searchAPI_1.fetchKnowledgeSearch)(searchKeyword),
            enabled: ((_c = popularProfileData[0]) === null || _c === void 0 ? void 0 : _c.isSuccess) && ((_d = popularProfileData[1]) === null || _d === void 0 ? void 0 : _d.isSuccess),
        },
    ]);
    const studyQuestionData = (0, react_query_1.useQueries)([
        {
            queryKey: ['study', searchKeyword],
            queryFn: () => (0, searchAPI_1.fetchStudySearch)(searchKeyword),
            enabled: ((_e = freeKnowledgeData[0]) === null || _e === void 0 ? void 0 : _e.isSuccess) && ((_f = freeKnowledgeData[1]) === null || _f === void 0 ? void 0 : _f.isSuccess),
        },
        {
            queryKey: ['question', searchKeyword],
            queryFn: () => (0, searchAPI_1.fetchQuestionSearch)(searchKeyword),
            enabled: ((_g = freeKnowledgeData[0]) === null || _g === void 0 ? void 0 : _g.isSuccess) && ((_h = freeKnowledgeData[1]) === null || _h === void 0 ? void 0 : _h.isSuccess),
        },
    ]);
    //데이터 개수
    const openProfileCount = ((_k = (_j = popularProfileData[1]) === null || _j === void 0 ? void 0 : _j.data) === null || _k === void 0 ? void 0 : _k.length) || 0;
    const freeCount = ((_o = (_m = (_l = freeKnowledgeData[0]) === null || _l === void 0 ? void 0 : _l.data) === null || _m === void 0 ? void 0 : _m.objArr) === null || _o === void 0 ? void 0 : _o.length) || 0;
    const knowledgeCount = ((_r = (_q = (_p = freeKnowledgeData[1]) === null || _p === void 0 ? void 0 : _p.data) === null || _q === void 0 ? void 0 : _q.objArr) === null || _r === void 0 ? void 0 : _r.length) || 0;
    const studyCount = ((_u = (_t = (_s = studyQuestionData[0]) === null || _s === void 0 ? void 0 : _s.data) === null || _t === void 0 ? void 0 : _t.objArr) === null || _u === void 0 ? void 0 : _u.length) || 0;
    const questionCount = ((_x = (_w = (_v = studyQuestionData[1]) === null || _v === void 0 ? void 0 : _v.data) === null || _w === void 0 ? void 0 : _w.objArr) === null || _x === void 0 ? void 0 : _x.length) || 0;
    const totalCount = freeCount + knowledgeCount + studyCount + questionCount;
    // SearchResultBar에 검색결과 ${count}건에 전달해줄 데이터
    const countArr = {
        openProfile: openProfileCount,
        total: totalCount,
        free: freeCount,
        knowledge: knowledgeCount,
        study: studyCount,
        question: questionCount,
    };
    //컴포넌트들에 전달할 데이터들
    const resultData = {
        openProfile: openProfileCount > 0 ? popularProfileData[1].data : [],
        free: freeCount > 0 ? freeKnowledgeData[0].data.objArr : [],
        knowledge: knowledgeCount > 0 ? freeKnowledgeData[1].data.objArr : [],
        study: studyCount > 0 ? studyQuestionData[0].data.objArr : [],
        question: questionCount > 0 ? studyQuestionData[1].data.objArr : [],
    };
    console.log(resultData);
    //전달할 데이터 잘라주는 함수, 전체페이지 보여주는 데이터
    const sliceArray = (array, start, end) => {
        return array && array.length > 0 ? array.slice(start, end) : [];
    };
    const sliceOpenProfileData = sliceArray(resultData.openProfile, 0, 3);
    const sliceFreeData = sliceArray(resultData.free, 0, 4);
    const sliceKnowledgeData = sliceArray(resultData.knowledge, 0, 4);
    const sliceStudyData = sliceArray(resultData.study, 0, 4);
    const sliceQuestionData = sliceArray(resultData.question, 0, 4);
    const { mobileSize } = (0, useWindowSize_1.useWindowSize)();
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Style.NavContainer, { children: mobileSize ? ((0, jsx_runtime_1.jsx)(react_2.Swiper, Object.assign({ className: 'content', modules: [modules_1.Navigation, modules_1.Pagination, modules_1.Scrollbar, modules_1.A11y], slidesPerView: 4, navigation: true }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'search-nav' }, { children: menuItems.map((menu) => ((0, jsx_runtime_1.jsx)(react_2.SwiperSlide, Object.assign({ className: `mobile-nav-item ${searchMenu === menu.id ? 'active' : ''}`, onClick: () => handleMenuClick(menu.id) }, { children: (0, jsx_runtime_1.jsx)("p", { children: menu.text }) }), menu.id))) })) }))) : ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'content' }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'search-nav' }, { children: menuItems.map((menu) => ((0, jsx_runtime_1.jsx)(Style.NavItem, Object.assign({ className: searchMenu === menu.id ? 'active' : '', active: searchMenu === menu.id, onClick: () => handleMenuClick(menu.id) }, { children: (0, jsx_runtime_1.jsx)("p", { children: menu.text }) }), menu.id))) })) }))) }), (0, jsx_runtime_1.jsxs)(SearchContext_1.SearchContext.Provider, Object.assign({ value: searchKeyword }, { children: [(0, jsx_runtime_1.jsx)(SearchResultBar_1.default, { handleSubSearch: handleSubSearch, menu: searchMenu, count: countArr }), (0, jsx_runtime_1.jsx)(Style.Container, { children: searchMenu === 1 ? ((0, jsx_runtime_1.jsxs)(pageCommonStyle_1.SearchPageWrapper, { children: [resultData.openProfile.length === 0 &&
                                    resultData.free.length === 0 &&
                                    resultData.knowledge.length === 0 &&
                                    resultData.study.length === 0 &&
                                    resultData.question.length === 0 ? ((0, jsx_runtime_1.jsx)(pageCommonStyle_1.NoDataWrapper, { children: (0, jsx_runtime_1.jsx)(NoData_1.default, {}) })) : ((0, jsx_runtime_1.jsxs)("div", { children: [resultData.openProfile.length > 0 ? ((0, jsx_runtime_1.jsx)(SearchResultProfile_1.default, { data: sliceOpenProfileData, count: openProfileCount, receiveMenu: setSearchMenu, simple: 'simple' })) : (''), resultData.free.length > 0 ? ((0, jsx_runtime_1.jsx)(SearchResultPost_1.default, { data: sliceFreeData, count: freeCount, receiveMenu: setSearchMenu, type: 'free', simple: 'simple' })) : (''), resultData.knowledge.length > 0 ? ((0, jsx_runtime_1.jsx)(SearchResultPost_1.default, { data: sliceKnowledgeData, count: knowledgeCount, receiveMenu: setSearchMenu, type: 'Knowledge', simple: 'simple' })) : (''), resultData.study.length > 0 ? ((0, jsx_runtime_1.jsx)(SearchResultPost_1.default, { data: sliceStudyData, count: studyCount, receiveMenu: setSearchMenu, type: 'study', simple: 'simple' })) : (''), resultData.question.length ? ((0, jsx_runtime_1.jsx)(SearchResultQnA_1.default, { data: sliceQuestionData, count: questionCount, receiveMenu: setSearchMenu, simple: 'simple' })) : ('')] })), (0, jsx_runtime_1.jsx)(RankingContent_1.default, { data: popularProfileData[0].data })] })) : searchMenu === 2 ? ((0, jsx_runtime_1.jsx)(Style.ProfileWrapper, { children: (0, jsx_runtime_1.jsx)(SearchResultProfile_1.default, { data: resultData.openProfile }) })) : searchMenu === 3 ? ((0, jsx_runtime_1.jsxs)(pageCommonStyle_1.SearchPageWrapper, { children: [(0, jsx_runtime_1.jsx)(SearchResultPost_1.default, { data: resultData.free, type: 'free' }), (0, jsx_runtime_1.jsx)(RankingContent_1.default, { data: popularProfileData[0].data })] })) : searchMenu === 4 ? ((0, jsx_runtime_1.jsxs)(pageCommonStyle_1.SearchPageWrapper, { children: [(0, jsx_runtime_1.jsx)(SearchResultPost_1.default, { data: resultData.knowledge, type: 'Knowledge' }), (0, jsx_runtime_1.jsx)(RankingContent_1.default, { data: popularProfileData[0].data })] })) : searchMenu === 5 ? ((0, jsx_runtime_1.jsxs)(pageCommonStyle_1.SearchPageWrapper, { children: [(0, jsx_runtime_1.jsx)(SearchResultPost_1.default, { data: resultData.study, type: 'study' }), (0, jsx_runtime_1.jsx)(RegisterQuestion_1.default, { type: 'study' })] })) : searchMenu === 6 ? ((0, jsx_runtime_1.jsxs)(pageCommonStyle_1.SearchPageWrapper, { children: [(0, jsx_runtime_1.jsx)(SearchResultQnA_1.default, { data: resultData.question }), (0, jsx_runtime_1.jsx)(RegisterQuestion_1.default, { type: 'Q&A' })] })) : ('') })] }))] }));
};
exports.default = SearchPage;
