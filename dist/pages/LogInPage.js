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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_query_1 = require("react-query");
const LogInContainer_1 = __importDefault(require("../logIn/LogInContainer"));
const Headline_1 = __importDefault(require("../logIn/Headline"));
const LogInInput_1 = __importDefault(require("../logIn/LogInInput"));
const LogInButton_1 = __importDefault(require("../logIn/LogInButton"));
const LittleText_1 = __importDefault(require("../logIn/LittleText"));
const URL = process.env.REACT_APP_URL;
const Login = () => {
    const [email, setEmail] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const [message, setMessage] = (0, react_1.useState)('');
    const [showLittleText, setShowLittleText] = (0, react_1.useState)(false);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const emailInputRef = (0, react_1.useRef)(null);
    // 로그인 POST 요청 Mutation 실행
    const handleLogin = () => __awaiter(void 0, void 0, void 0, function* () {
        yield loginMutation.mutateAsync();
    });
    // 유저토큰이 있으면 커뮤니티 페이지로 이동
    (0, react_1.useEffect)(() => {
        if (sessionStorage.getItem('userToken')) {
            navigate('/community/post/free');
        }
    }, [navigate]);
    // 컴포넌트 로드 시 이메일 입력란에 포커스 주기
    (0, react_1.useEffect)(() => {
        if (emailInputRef.current) {
            emailInputRef.current.focus();
        }
    }, []);
    // 로그인 실패시 에러 텍스트 띄우기
    (0, react_1.useEffect)(() => {
        if (message) {
            setShowLittleText(true);
            const timer = setTimeout(() => {
                setMessage('');
                setShowLittleText(false);
            }, 1500);
            return () => {
                clearTimeout(timer);
            };
        }
        else {
            setShowLittleText(false);
        }
    }, [message]);
    // 로그인 POST 요청 Mutation 선언
    const loginMutation = (0, react_query_1.useMutation)(() => __awaiter(void 0, void 0, void 0, function* () {
        const url = `${URL}/api/users/login`;
        const data = {
            email: email,
            password: password,
        };
        const response = yield fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const responseData = yield response.json();
        return responseData; // 토큰 반환
    }), 
    // 로그인 성공 시 커뮤니티 페이지로 이동
    {
        onSuccess: (data) => {
            const { token, refreshToken, message: responseMessage } = data;
            if (responseMessage === '로그인에 성공하셨습니다!') {
                sessionStorage.setItem('userToken', token);
                sessionStorage.setItem('userRefreshToken', refreshToken);
                navigate('/community/post/free');
            }
            else {
                setMessage(responseMessage);
            }
        },
    });
    return ((0, jsx_runtime_1.jsxs)(LogInContainer_1.default, { children: [(0, jsx_runtime_1.jsx)(Headline_1.default, { title: '\uB85C\uADF8\uC778' }), (0, jsx_runtime_1.jsx)(LogInInput_1.default, { title: '\uC774\uBA54\uC77C', type: 'text', placeholder: '\uC774\uBA54\uC77C \uC785\uB825', name: 'userEmail', onChange: (e) => {
                    e.preventDefault();
                    setEmail(e.target.value);
                }, value: email, ref: emailInputRef }), (0, jsx_runtime_1.jsx)(LogInInput_1.default, { title: '\uBE44\uBC00\uBC88\uD638', type: 'password', placeholder: '\uBE44\uBC00\uBC88\uD638 \uC785\uB825', name: 'password', onChange: (e) => {
                    e.preventDefault();
                    setPassword(e.target.value);
                }, value: password, onKeyDown: (e) => {
                    if (e.key === 'Enter') {
                        handleLogin();
                    }
                } }), (0, jsx_runtime_1.jsx)(LogInButton_1.default, { color: 'darkPurple', value: '\uC774\uBA54\uC77C\uB85C \uACC4\uC18D\uD558\uAE30', onClick: handleLogin }), showLittleText ? ((0, jsx_runtime_1.jsx)(LittleText_1.default, { wiggle: true, text: message })) : ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: '/quiz' }, { children: (0, jsx_runtime_1.jsx)(LittleText_1.default, { wiggle: true, text: '\uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2E0\uAC00\uC694? 3\uCD08 \uB9CC\uC5D0 \uAC00\uC785\uD558\uAE30' }) })))] }));
};
exports.default = Login;
