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
const signInApis_1 = require("../apis/signInApis");
const Header_1 = __importDefault(require("../../adminCommon/components/Header"));
const SignInModal_1 = require("../styledComponents/SignInModal");
const AdminSignIn = () => {
    const [adminInfo, setAdminInfo] = (0, react_1.useState)({ email: '', name: '', password: '' });
    const firstInput = (0, react_1.useRef)(null);
    const navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(() => {
        firstInput.current.focus();
    }, []);
    const handleChangeAdminInfo = (e) => {
        const newAdminInfo = Object.assign({}, adminInfo);
        newAdminInfo[e.target.name] = e.target.value;
        setAdminInfo(newAdminInfo);
    };
    const handleLogIn = () => {
        alert('로그인 페이지로 이동합니다.');
        navigate('/admin/login');
    };
    const handleSubmit = () => {
        const result = confirm('회원가입 하시겠습니까?');
        if (result) {
            signInAdmin();
        }
    };
    const { mutate: signInAdmin, error } = (0, react_query_1.useMutation)(() => __awaiter(void 0, void 0, void 0, function* () { return (0, signInApis_1.fetchSignInAdmin)(adminInfo); }), {
        onSuccess() {
            alert('회원가입이 완료되었습니다.');
            navigate('/admin/login');
        },
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(SignInModal_1.SignInOverlay, {}), (0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsxs)(SignInModal_1.SignInContentBlock, Object.assign({ className: 'modal-content-block' }, { children: [(0, jsx_runtime_1.jsx)(SignInModal_1.SignInHeader, Object.assign({ className: 'modal-header' }, { children: (0, jsx_runtime_1.jsx)(SignInModal_1.SignInTitle, Object.assign({ className: 'modal-title' }, { children: "\uAD00\uB9AC\uC790 \uD68C\uC6D0\uAC00\uC785" })) })), (0, jsx_runtime_1.jsx)(SignInModal_1.SignInSubTitle, { children: "\uC774\uBA54\uC77C" }), (0, jsx_runtime_1.jsx)(SignInModal_1.SignInContentInput, { value: adminInfo.email, onChange: handleChangeAdminInfo, name: 'email', ref: firstInput }), (0, jsx_runtime_1.jsx)(SignInModal_1.SignInSubTitle, { children: "\uBE44\uBC00\uBC88\uD638" }), (0, jsx_runtime_1.jsx)(SignInModal_1.SignInContentInput, { type: 'password', value: adminInfo.password, onChange: handleChangeAdminInfo, name: 'password' }), (0, jsx_runtime_1.jsx)(SignInModal_1.SignInSubTitle, { children: "\uC774\uB984" }), (0, jsx_runtime_1.jsx)(SignInModal_1.SignInContentInput, { value: adminInfo.name, onChange: handleChangeAdminInfo, name: 'name' }), (0, jsx_runtime_1.jsxs)(SignInModal_1.SignInButtonBlock, Object.assign({ className: 'modal-button-block' }, { children: [(0, jsx_runtime_1.jsx)(SignInModal_1.SignInButton, Object.assign({ className: 'modal-button-submit', onClick: handleLogIn }, { children: "\uB85C\uADF8\uC778" })), (0, jsx_runtime_1.jsx)(SignInModal_1.SignInButton, Object.assign({ className: 'modal-button-submit', onClick: handleSubmit, "$purple": true }, { children: "\uAC00\uC785" }))] }))] }))] }));
};
exports.default = AdminSignIn;
