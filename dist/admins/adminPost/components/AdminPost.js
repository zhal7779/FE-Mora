"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminPost = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_query_1 = require("react-query");
const react_router_dom_1 = require("react-router-dom");
const images_1 = require("../../../assets/images/images");
const postApis_1 = require("../apis/postApis");
const eliceRabbit_removebg_preview_png_1 = __importDefault(require("../../../assets/images/eliceRabbit-removebg-preview.png"));
const AdminPost_1 = require("../styledComponents/AdminPost");
const AdminPost = ({ keyword }) => {
    const observerElement = (0, react_1.useRef)(null);
    const { data, fetchNextPage, hasNextPage, error, isSuccess } = (0, react_query_1.useInfiniteQuery)(['admin', 'posts', 'get', 'infinity', keyword], ({ pageParam = 0 }) => (0, postApis_1.fetchReadPostInfo)({ page: pageParam, view: 18, content: keyword }), {
        getNextPageParam: (lastPage) => {
            return lastPage.currentPage + 1 < lastPage.totalPages
                ? lastPage.currentPage + 1
                : undefined;
        },
        staleTime: 300,
        keepPreviousData: true,
    });
    const handleObserver = (0, react_1.useCallback)((entries) => {
        const [target] = entries;
        if (target.isIntersecting) {
            fetchNextPage();
        }
    }, [fetchNextPage, hasNextPage]);
    (0, react_1.useEffect)(() => {
        const element = observerElement.current;
        const option = { threshold: 0 };
        if (!element)
            return;
        const observer = new IntersectionObserver(handleObserver, option);
        observer.observe(element);
        return () => observer.unobserve(element);
    }, [fetchNextPage, hasNextPage, handleObserver]);
    const handleDelete = (id) => {
        const response = confirm('삭제하시겠습니까?');
        if (response) {
            deletePost(id);
        }
    };
    const { mutate: deletePost } = (0, react_query_1.useMutation)((id) => (0, postApis_1.fetchDeletePost)(id), {
        onError(error) {
            console.error(error);
        },
    });
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(AdminPost_1.PostGrid, Object.assign({ className: 'grid-setting' }, { children: [isSuccess &&
                    data.pages.map((page) => page.objArr.map((post, idx) => ((0, jsx_runtime_1.jsxs)(AdminPost_1.PostLayout, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: `/admin/posts/detail/${post.id}` }, { children: (0, jsx_runtime_1.jsx)(AdminPost_1.PostImage, Object.assign({ className: 'image' }, { children: post.Photos.length > 0 ? ((0, jsx_runtime_1.jsx)("img", { src: post.Photos[0].img_path, alt: 'img', className: 'img-tag', onError: (e) => (e.target.src = images_1.images[Math.floor((idx % 15) / 3)]) })) : ((0, jsx_runtime_1.jsx)("img", { src: images_1.images[Math.floor((idx % 15) / 3)], alt: '\uC5D8\uB9AC\uC2A4 \uBD88\uD1A0\uB07C' })) })) })), (0, jsx_runtime_1.jsxs)(AdminPost_1.PostInfoBlock, Object.assign({ className: 'title category' }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'title info' }, { children: post.title })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'category info ' }, { children: post.category === 'free' ? '자유게시판' : '학습게시판' }))] })), (0, jsx_runtime_1.jsxs)(AdminPost_1.PostInfoBlock, Object.assign({ className: 'writer view-cnt created-at' }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'writer info six-one' }, { children: post.User.name })), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: 'view-cnt info six-one' }, { children: ["\uC870\uD68C\uC218: ", post.view_cnt] })), (0, jsx_runtime_1.jsxs)("span", Object.assign({ className: 'created-at info six-one' }, { children: ["\uC791\uC131\uC77C: ", post.createdAt.slice(0, 10)] })), (0, jsx_runtime_1.jsx)("button", Object.assign({ className: 'delete', onClick: () => handleDelete(post.id) }, { children: "\uC0AD\uC81C" }))] }))] }, post.id)))), (0, jsx_runtime_1.jsx)("div", { ref: observerElement, style: {
                        height: '30rem',
                    } }), (0, jsx_runtime_1.jsx)(AdminPost_1.ScrollTopButton, { src: eliceRabbit_removebg_preview_png_1.default, alt: '\uC5D8\uB9AC\uC2A4 \uD1A0\uB07C', onClick: scrollToTop })] })) }));
};
exports.AdminPost = AdminPost;
exports.default = exports.AdminPost;
