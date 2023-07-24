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
const LogInContainer_1 = __importDefault(require("../logIn/LogInContainer"));
const Headline_1 = __importDefault(require("../logIn/Headline"));
const LogInInput_1 = __importDefault(require("../logIn/LogInInput"));
const LogInButton_1 = __importDefault(require("../logIn/LogInButton"));
const LittleText_1 = __importDefault(require("../logIn/LittleText"));
const SignInAccordion_1 = __importDefault(require("../signIn/SignInAccordion"));
const react_query_1 = require("react-query");
const URL = process.env.REACT_APP_URL;
const Signin = () => {
    const [userName, setUserName] = (0, react_1.useState)('');
    const [email, setEmail] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const [showLittleText, setShowLittleText] = (0, react_1.useState)(false);
    const [errorMessage, setErrorMessage] = (0, react_1.useState)('');
    const navigate = (0, react_router_dom_1.useNavigate)();
    // 유효성 검사용 ref 선언
    const emailInputRef = (0, react_1.useRef)(null);
    const passwordInputRef = (0, react_1.useRef)(null);
    // 회원가입 POST 요청 Mutation 선언
    const signinMutation = (0, react_query_1.useMutation)(() => __awaiter(void 0, void 0, void 0, function* () {
        const url = `${URL}/api/users/register`;
        const data = {
            name: userName,
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
        console.log(responseData);
        if (response.ok) {
            return responseData;
        }
        else {
            throw new Error(responseData.message);
        }
    }));
    // 이메일 형식 및 비밀번호 유효성 검사
    const handleSignin = () => __awaiter(void 0, void 0, void 0, function* () {
        const emailRegex = /^[^\s@]+@gmail\.com$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!emailRegex.test(email)) {
            setErrorMessage('지메일 형식을 확인해 주세요!');
            emailInputRef.current.focus();
            return;
        }
        if (!passwordRegex.test(password)) {
            setErrorMessage('비밀번호 형식을 확인해 주세요!');
            passwordInputRef.current.focus();
            return;
        }
        // 회원가입 POST 요청 Mutation 실행
        yield signinMutation.mutateAsync();
    });
    // 유효성 에러 메시지 띄우기
    (0, react_1.useEffect)(() => {
        if (errorMessage) {
            setShowLittleText(true);
            const timer = setTimeout(() => {
                setErrorMessage('');
                setShowLittleText(false);
            }, 1500);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [errorMessage]);
    // 회원가입 성공 시 로그인 페이지로 이동
    if (signinMutation.isSuccess) {
        navigate('/login');
    }
    return ((0, jsx_runtime_1.jsxs)(LogInContainer_1.default, { children: [(0, jsx_runtime_1.jsx)(Headline_1.default, { title: '\uC5D8\uB9AC\uC2A4 \uAC31\uC2A4\uD130 \uD68C\uC6D0 \uAC00\uC785 \uD83D\uDD76\uFE0F' }), (0, jsx_runtime_1.jsxs)(SignInAccordion_1.default, { children: [(0, jsx_runtime_1.jsx)(LogInInput_1.default, { title: '\uC131\uD568', type: 'text', placeholder: '\uC131\uD568\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.', name: 'userName', onChange: (e) => setUserName(e.target.value), value: userName }), (0, jsx_runtime_1.jsx)(LogInInput_1.default, { title: '\uC9C0\uBA54\uC77C', type: 'text', placeholder: '\uC0AC\uC6A9\uC911\uC778 \uC9C0\uBA54\uC77C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.', name: 'userEmail', onChange: (e) => setEmail(e.target.value), value: email, ref: emailInputRef }), (0, jsx_runtime_1.jsx)(LogInInput_1.default, { title: '\uBE44\uBC00\uBC88\uD638', type: 'password', placeholder: '\uC601\uBB38, \uC22B\uC790 \uD3EC\uD568 8\uC790 \uC774\uC0C1\uC785\uB2C8\uB2E4.', name: 'password', onChange: (e) => setPassword(e.target.value), value: password, ref: passwordInputRef, onKeyDown: (e) => {
                            if (e.key === 'Enter') {
                                handleSignin();
                            }
                        } }), (0, jsx_runtime_1.jsx)(LogInButton_1.default, { color: 'darkPurple', value: '\uD68C\uC6D0\uAC00\uC785', onClick: handleSignin })] }), showLittleText ? ((0, jsx_runtime_1.jsx)(LittleText_1.default, { wiggle: true, text: errorMessage })) : ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: '/login' }, { children: (0, jsx_runtime_1.jsx)(LittleText_1.default, { wiggle: true, text: '\uC774\uBBF8 \uD68C\uC6D0\uC774\uC2E0\uAC00\uC694? \uB85C\uADF8\uC778\uD558\uAE30' }) })))] }));
};
exports.default = Signin;
