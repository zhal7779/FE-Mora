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
const Style = __importStar(require("./styledComponents/PostListStyle"));
const no_data_image_svg_1 = __importDefault(require("../assets/images/no-data-image.svg"));
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const react_query_1 = require("react-query");
const formatTime_1 = __importDefault(require("./utils/formatTime"));
const useDebounce_1 = __importDefault(require("./hooks/useDebounce"));
const apis_1 = require("./api/apis");
const FILTER_BY_LATEST = 'new';
const FILTER_BY_VIEW = 'view';
const PostList = ({ selectedCategoryId, searchTerm }) => {
    const [currentFilter, setCurrentFilter] = (0, react_1.useState)(FILTER_BY_LATEST);
    const debouncedSearchTerm = (0, useDebounce_1.default)(searchTerm, 300);
    const loadMoreRef = (0, react_1.useRef)(null);
    const { data, isError, isSuccess, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } = (0, react_query_1.useInfiniteQuery)(['posts', selectedCategoryId, debouncedSearchTerm, currentFilter], ({ pageParam = 0 }) => (0, apis_1.fetchPosts)({
        page: pageParam,
        view: 10,
        keyword: debouncedSearchTerm,
        sort: currentFilter,
        selectedCategoryId
    }), {
        getNextPageParam: lastPage => {
            return lastPage.currentPage < lastPage.totalPages
                ? lastPage.currentPage + 1
                : undefined;
        }
    });
    (0, react_1.useEffect)(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !isFetchingNextPage && hasNextPage) {
                fetchNextPage();
            }
        }, { threshold: 1 });
        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }
        return () => {
            if (loadMoreRef.current) {
                observer.unobserve(loadMoreRef.current);
            }
        };
    }, [isFetchingNextPage, fetchNextPage, hasNextPage]);
    // 게시글 순서 필터
    const handleFilterChange = filter => {
        setCurrentFilter(filter);
    };
    return ((0, jsx_runtime_1.jsxs)(Style.PostContainer, { children: [isSuccess && ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: !isFetchingNextPage &&
                    data.pages.every(page => page.objArr.length === 0) ? ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "no-data" }, { children: [(0, jsx_runtime_1.jsx)("img", { src: no_data_image_svg_1.default }), "\uD574\uB2F9\uD558\uB294 \uAC8C\uC2DC\uAE00\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."] }))) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "filter" }, { children: [(0, jsx_runtime_1.jsx)("button", Object.assign({ className: `filter-by-latest ${currentFilter === FILTER_BY_LATEST ? 'active' : ''}`, onClick: () => handleFilterChange(FILTER_BY_LATEST) }, { children: "\uCD5C\uC2E0\uC21C" })), (0, jsx_runtime_1.jsx)("button", Object.assign({ className: `filter-by-view ${currentFilter === FILTER_BY_VIEW ? 'active' : ''}`, onClick: () => handleFilterChange(FILTER_BY_VIEW) }, { children: "\uC870\uD68C\uC21C" }))] })), (0, jsx_runtime_1.jsxs)("ul", { children: [data.pages.map(page => page.objArr.map(post => ((0, jsx_runtime_1.jsx)("li", Object.assign({ className: "list" }, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, Object.assign({ to: `/community/${post.id}` }, { children: [(0, jsx_runtime_1.jsx)("p", Object.assign({ className: "list-time" }, { children: (0, formatTime_1.default)(post.createdAt) })), (0, jsx_runtime_1.jsx)("h2", { children: post.title }), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "list-content" }, { children: post.content })), post.Hashtags.length > 0 && ((0, jsx_runtime_1.jsx)("ul", Object.assign({ className: "list-hashtags" }, { children: post.Hashtags.map((hashtag, index) => ((0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("span", { children: "#" }), hashtag] }, index))) }))), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "list-info" }, { children: [(0, jsx_runtime_1.jsxs)("p", { children: ["\uB313\uAE00 ", post.comment_cnt] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("p", { children: ["\uC88B\uC544\uC694 ", post.like_cnt, " "] }), (0, jsx_runtime_1.jsxs)("p", { children: ["\uC870\uD68C ", post.view_cnt, " "] })] })] }))] })) }), post.id)))), hasNextPage && ((0, jsx_runtime_1.jsx)("div", Object.assign({ ref: loadMoreRef }, { children: isFetchingNextPage && '로딩 중...' })))] })] })) })), isLoading && (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "no-data" }, { children: "\uB85C\uB529 \uC911" })), isError && (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "no-data" }, { children: ["\uC5D0\uB7EC: ", error.message] }))] }));
};
exports.default = PostList;
