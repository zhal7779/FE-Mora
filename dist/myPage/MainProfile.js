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
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const react_router_dom_1 = require("react-router-dom");
const react_query_1 = require("react-query");
const Style = __importStar(require("./styledComponents/MyPageProfileStyle"));
const Button_1 = __importDefault(require("../components/Button"));
const Modal_1 = __importDefault(require("../components/Modal"));
const LogInInput_1 = __importDefault(require("../logIn/LogInInput"));
const react_query_2 = require("react-query");
const no_data_image_svg_1 = __importDefault(require("../assets/images/no-data-image.svg"));
const URL = process.env.REACT_APP_URL;
const MainProfile = () => {
    const [showModal, setShowModal] = (0, react_1.useState)(false);
    const [password, setPassword] = (0, react_1.useState)('');
    const userToken = sessionStorage.getItem('userToken');
    const navigate = (0, react_router_dom_1.useNavigate)();
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
    };
    // 유저 토큰이 없으면 로그인 페이지로
    (0, react_1.useEffect)(() => {
        if (!userToken) {
            navigate('/login');
        }
    }, []);
    // mainProfileData (유저 프로필 정보) 가져오기
    const mainProfileDataQuery = (0, react_query_2.useQuery)('mainProfileData', () => fetch(`${URL}/api/users/mypage`, {
        headers: headers,
    }).then((response) => response.json()));
    const mainProfileData = mainProfileDataQuery.data;
    const openModal = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };
    // 유저 탈퇴 DELETE 뮤테이션 선언
    const deleteAccountMutation = (0, react_query_1.useMutation)(() => __awaiter(void 0, void 0, void 0, function* () {
        const url = `${URL}/api/users/delete`;
        const response = yield fetch(url, {
            method: 'DELETE',
            headers: headers,
            body: JSON.stringify({ password }),
        });
        const responseData = yield response.json();
        return responseData;
    }));
    // 위에 선언한 DELETE 뮤테이션 실행
    const handleDeleteAccount = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield deleteAccountMutation.mutateAsync();
            sessionStorage.removeItem('userToken');
            closeModal();
            navigate('/');
        }
        catch (error) {
            console.log(error);
        }
    });
    return ((0, jsx_runtime_1.jsxs)(Style.introContainer, { children: [mainProfileData ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'imgAndButtons' }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'img-container' }, { children: (0, jsx_runtime_1.jsx)("img", { src: mainProfileData.UserDetail.img_path, alt: '\uD504\uB85C\uD544' }) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'buttons-container' }, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { color: 'darkPurple', value: '\uC218\uC815\uD558\uAE30', onClick: () => navigate('/mypage/edit') }), (0, jsx_runtime_1.jsx)(Button_1.default, { color: 'white', value: '\uD0C8\uD1F4\uD558\uAE30', onClick: openModal })] }))] })), (0, jsx_runtime_1.jsx)("h3", { children: mainProfileData.name }), (0, jsx_runtime_1.jsx)("h4", { children: mainProfileData.UserDetail.generation }), (0, jsx_runtime_1.jsx)("h5", { children: mainProfileData.UserDetail.position || '직책을 입력해 주세요.' }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'intro-container' }, { children: (0, jsx_runtime_1.jsx)("p", Object.assign({ className: 'intro' }, { children: mainProfileData.UserDetail.comment ||
                                '수정하기 버튼을 눌러 간단한 자기소개를 입력해주세요!' })) }))] })) : ((0, jsx_runtime_1.jsxs)(NoDataContainer, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "\uB85C\uB529\uC911 \uC774\uC5D0\uC694.." }), (0, jsx_runtime_1.jsx)("img", { src: no_data_image_svg_1.default, alt: 'noDataImage' })] })), showModal && ((0, jsx_runtime_1.jsx)(Modal_1.default, Object.assign({ width: '50rem' }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'modal-container' }, { children: [(0, jsx_runtime_1.jsx)(LogInInput_1.default, { title: '\uD0C8\uD1F4\uD558\uC2DC\uB824\uBA74 \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694', type: 'password', placeholder: '\uBE44\uBC00\uBC88\uD638 \uC785\uB825', name: 'password', onChange: (e) => {
                                e.preventDefault();
                                setPassword(e.target.value);
                            }, value: password }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'modal-buttons-container' }, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { color: 'white', value: '\uCDE8\uC18C', onClick: closeModal }), (0, jsx_runtime_1.jsx)(Button_1.default, { color: 'darkPurple', value: '\uD0C8\uD1F4', onClick: () => {
                                        handleDeleteAccount();
                                        navigate('/');
                                    } })] }))] })) })))] }));
};
exports.default = MainProfile;
const NoDataContainer = styled_components_1.default.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  img {
    width: 50%;
    height: 100vh;
  }
  h2 {
    font-weight: 600;
    font-size: 1.7rem;
    color: #424242;
  }
`;
