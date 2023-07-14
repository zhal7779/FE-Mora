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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const Style = __importStar(require("../styledComponents/OpenProfileStyle"));
const react_query_1 = require("react-query");
const openProfileApi_1 = require("../api/openProfileApi");
const useObserver_1 = require("../../hooks/useObserver");
const OpenProfileList_1 = __importDefault(require("./OpenProfileList"));
const OpenProfile = ({ registerstatus }) => {
    const [userId, setUserId] = (0, react_1.useState)('');
    const [coffeChatStatus, setCoffeChatStatus] = (0, react_1.useState)([]);
    //커피챗 쿼리
    const { data: coffeeChatData, refetch: coffeeCahtRefetch } = (0, react_query_1.useQuery)('coffeeChat', () => (0, openProfileApi_1.postCoffeeChat)(userId));
    const queryClient = (0, react_query_1.useQueryClient)();
    //오픈프로필 전체 데이터 쿼리, 무한스크롤 적용
    const { data, fetchNextPage, hasNextPage, isSuccess } = (0, react_query_1.useInfiniteQuery)('openProfile', ({ pageParam = 0 }) => (0, openProfileApi_1.getProfile)(pageParam), {
        getNextPageParam: (lastPage) => {
            return lastPage.currentPage + 1 < lastPage.totalPages
                ? lastPage.currentPage + 1
                : undefined;
        },
        staleTime: 500,
        // keepPreviousData: true,
    });
    const observerRef = (0, react_1.useRef)(null);
    //무한스크롤 DOM요소 가시성 감지 함수
    (0, useObserver_1.useObserver)(observerRef, fetchNextPage, hasNextPage);
    // 오픈프로필 등록하거나 커피챗 신청시 refetch
    (0, react_1.useEffect)(() => {
        const profileRefetch = () => __awaiter(void 0, void 0, void 0, function* () {
            yield queryClient.invalidateQueries('openProfile');
        });
        profileRefetch();
    }, [registerstatus, coffeeChatData]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: isSuccess &&
            data.pages.map((page) => page.totalPages === 0 ? ((0, jsx_runtime_1.jsxs)(Style.Nodata, { children: [(0, jsx_runtime_1.jsx)("img", { src: 'http://www.moyeora-racer.com/static/media/no-data-image.7c445de03420d586e6ca540e13c4cd7c.svg' }), (0, jsx_runtime_1.jsx)("p", { children: "\uB4F1\uB85D\uB41C \uC624\uD508 \uD504\uB85C\uD544\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(OpenProfileList_1.default, { data: page.objArr, coffeChatStatus: coffeChatStatus, setCoffeChatStatus: setCoffeChatStatus, setUserId: setUserId, coffeeCahtRefetch: coffeeCahtRefetch }), (0, jsx_runtime_1.jsx)("div", { ref: observerRef })] }))) }));
};
exports.default = OpenProfile;
