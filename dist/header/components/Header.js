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
const Style = __importStar(require("../styledComponents/HeaderStyle"));
const react_router_dom_1 = require("react-router-dom");
const logo1_svg_1 = require("../../assets/icons/logo1.svg");
const logo2_svg_1 = require("../../assets/icons/logo2.svg");
const fi_search_svg_1 = require("../../assets/icons/fi_search.svg");
const fi_bell_svg_1 = require("../../assets/icons/fi_bell.svg");
const bars_solid_svg_1 = require("../../assets/icons/bars-solid.svg");
const useWindowSize_1 = require("../../hooks/useWindowSize");
const SearchBar_1 = __importDefault(require("../../components/SearchBar"));
const AlarmModal_1 = __importDefault(require("../../alarm/components/AlarmModal"));
const react_query_1 = require("react-query");
const alarmApi_1 = require("../../alarm/api/alarmApi");
const rabbitProfile_png_1 = __importDefault(require("../../assets/images/rabbitProfile.png"));
const URL = process.env.REACT_APP_URL;
const Header = () => {
    const token = sessionStorage.getItem('userToken');
    const location = (0, react_router_dom_1.useLocation)();
    const [userImg, setUserImg] = (0, react_1.useState)('');
    const { data, refetch: alarmRefetch } = (0, react_query_1.useQuery)('alert', alarmApi_1.getAlert, {
        enabled: false,
    });
    // mainProfileData (유저 프로필 정보) 가져오기
    const mainProfileDataQuery = (0, react_query_1.useQuery)('mainProfileData', () => fetch(`${URL}/api/users/mypage`, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
        },
    }).then((response) => response.json()));
    const mainProfileData = mainProfileDataQuery.data;
    (0, react_1.useEffect)(() => {
        var _a;
        if (token && mainProfileData) {
            alarmRefetch();
            setUserImg(((_a = mainProfileData === null || mainProfileData === void 0 ? void 0 : mainProfileData.UserDetail) === null || _a === void 0 ? void 0 : _a.img_path) || '');
        }
    }, [token, mainProfileData]);
    // console.log(mainProfileData);
    // 리프레쉬 토큰 요청 Mutation 선언
    const refreshMutation = (0, react_query_1.useMutation)(() => __awaiter(void 0, void 0, void 0, function* () {
        const url = `${URL}/api/users/refresh-token`;
        const userToken = sessionStorage.getItem('userToken');
        const userRefreshToken = sessionStorage.getItem('userRefreshToken');
        const response = yield fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userToken}`,
                refresh: userRefreshToken,
            },
        });
        const data = yield response.json();
        const { accessToken, refreshToken } = data;
        return { accessToken, refreshToken };
    }), {
        onSuccess: (data) => {
            const { accessToken, refreshToken } = data;
            if (accessToken && refreshToken) {
                if (sessionStorage.getItem('userToken')) {
                    sessionStorage.removeItem('userToken');
                }
                if (sessionStorage.getItem('userRefreshToken')) {
                    sessionStorage.removeItem('userRefreshToken');
                }
                sessionStorage.setItem('userToken', accessToken);
                sessionStorage.setItem('userRefreshToken', refreshToken);
                console.log('리프레쉬 토큰 발급 성공');
            }
            else {
                console.log('리프레쉬 토큰 발급 실패');
            }
        },
    });
    // useEffect로 10분에 한 번씩 refreshMutation 실행
    (0, react_1.useEffect)(() => {
        const interval = setInterval(() => {
            refreshMutation.mutate();
        }, 600000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    //알림 api 30초에 한 번씩 재호출
    (0, react_1.useEffect)(() => {
        const interval = setInterval(() => {
            alarmRefetch();
        }, 30000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    // 새로고침시 menu 상태값 유지 위해 로컬스토리지 사용,
    // token 값이 있으면  초기 상태값 1
    const [menu, setMenu] = (0, react_1.useState)(() => {
        const storedMenu = localStorage.getItem('menu');
        return storedMenu ? parseInt(storedMenu) : token ? 1 : 0;
    });
    (0, react_1.useEffect)(() => {
        localStorage.setItem('menu', menu.toString());
        return () => {
            localStorage.removeItem('menu');
        };
    }, [menu]);
    //메뉴 상태 변경
    //menu === 0 ? 로고
    //menu === 1 ? 토끼굴
    //menu === 2 ? 정비소
    //menu === 3 ?오픈프로필
    //menu === 4 ? 검색창 사용불가
    //menu === 5 ? 마이페이지
    (0, react_1.useEffect)(() => {
        if (location.pathname === '/') {
            setMenu(0);
        }
        else if (location.pathname.startsWith('/community/')) {
            setMenu(1);
        }
        else if (location.pathname.startsWith('/schedule/')) {
            setMenu(2);
        }
        else if (location.pathname === '/openprofile') {
            setMenu(3);
        }
        else if (location.pathname === '/search') {
            setMenu(4);
        }
        else if (location.pathname === '/mypage') {
            setMenu(5);
        }
    }, [location.pathname]);
    //검색창 on
    const [onSearch, setOnSearch] = (0, react_1.useState)(false);
    const handleSearchClick = (boolean) => {
        setOnSearch(boolean);
    };
    //모달 open,close
    const [onModal, setOnModal] = (0, react_1.useState)(false);
    const handleModalClick = (boolean) => {
        setOnModal(boolean);
    };
    const { logo, isSize } = (0, useWindowSize_1.useWindowSize)((0, jsx_runtime_1.jsx)(logo1_svg_1.ReactComponent, {}), (0, jsx_runtime_1.jsx)(logo2_svg_1.ReactComponent, {}));
    const [menuOpen, setMenuOpen] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        if (!isSize) {
            return setMenuOpen(false);
        }
        setMenuOpen(true);
    }, [isSize]);
    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: onSearch ? ((0, jsx_runtime_1.jsx)(SearchBar_1.default, { handleClose: handleSearchClick })) : ((0, jsx_runtime_1.jsx)(Style.HeaderStyle, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'container' }, { children: [(0, jsx_runtime_1.jsxs)("nav", Object.assign({ className: 'content' }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'main-content' }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'logo', onClick: !isSize ? () => setMenuOpen(false) : undefined }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: '/' }, { children: logo })) })), menuOpen && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'menu-container' }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'menu-content', onClick: !isSize ? () => setMenuOpen(false) : undefined }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: menu === 1 ? 'menu-item active' : 'menu-item' }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: token ? '/community/post/free' : '/nonmember' }, { children: (0, jsx_runtime_1.jsx)("p", { children: "\uD1A0\uB07C\uAD74" }) })) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: menu === 2 ? 'menu-item active' : 'menu-item' }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: token ? '/schedule/notice' : '/nonmember' }, { children: (0, jsx_runtime_1.jsx)("p", { children: "\uC815\uBE44\uC18C" }) })) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: menu === 3 ? 'menu-item active' : 'menu-item' }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: token ? '/openprofile' : '/nonmember' }, { children: (0, jsx_runtime_1.jsx)("p", { children: "\uB808\uC774\uC11C \uC624\uD508 \uD504\uB85C\uD544" }) })) }))] })) })))] })), menuOpen && ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'side-content' }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ onClick: !isSize ? () => setMenuOpen(false) : undefined }, { children: menu === 4 || !token ? ((0, jsx_runtime_1.jsx)(fi_search_svg_1.ReactComponent, { style: { stroke: 'var(--light-gray)', cursor: 'default' } })) : ((0, jsx_runtime_1.jsx)(fi_search_svg_1.ReactComponent, { onClick: () => handleSearchClick(true), style: { stroke: '#242424' } })) })), (0, jsx_runtime_1.jsx)("div", { children: token ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(fi_bell_svg_1.ReactComponent, { onClick: () => handleModalClick(true), style: { stroke: '#242424' } }), data &&
                                                    data.length > 0 &&
                                                    data.map((item) => item.unchecked === true ? (0, jsx_runtime_1.jsx)("span", { className: 'alarm' }) : '')] })) : ((0, jsx_runtime_1.jsx)(fi_bell_svg_1.ReactComponent, { style: { stroke: 'var(--light-gray)', cursor: 'default' } })) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: token ? '/mypage' : '/nonmember' }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ onClick: !isSize ? () => setMenuOpen(false) : undefined }, { children: mainProfileData &&
                                                mainProfileData.UserDetail &&
                                                mainProfileData.UserDetail.img_path ? ((0, jsx_runtime_1.jsx)("img", { className: 'img-icon', src: mainProfileData.UserDetail.img_path || rabbitProfile_png_1.default })) : ((0, jsx_runtime_1.jsx)("img", { className: 'img-icon', src: rabbitProfile_png_1.default })) })) }))] }))), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'nav-toggle' }, { children: (0, jsx_runtime_1.jsx)(bars_solid_svg_1.ReactComponent, { style: { fill: '#7353ea' }, onClick: handleMenuOpen }) }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'modal-content' }, { children: onModal ? (0, jsx_runtime_1.jsx)(AlarmModal_1.default, { handleClose: handleModalClick }) : '' }))] })) })) }));
};
exports.default = Header;
