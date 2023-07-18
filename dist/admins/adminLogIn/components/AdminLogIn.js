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
const react_query_1 = require("react-query");
const react_router_dom_1 = require("react-router-dom");
const logInApis_1 = require("../apis/logInApis");
const Header_1 = __importDefault(require("../../adminCommon/components/Header"));
const LogInModal_1 = require("../styledComponents/LogInModal");
const AdminSignIn = () => {
    const [adminInfo, setAdminInfo] = (0, react_1.useState)({ email: '', password: '' });
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
    const handleSignIn = () => {
        alert('회원가입 페이지로 이동합니다.');
        navigate('/admin/signin');
    };
    const handleSubmit = () => {
        const result = confirm('로그인 하시겠습니까?');
        if (result) {
            logInAdmin();
        }
    };
    const { mutate: logInAdmin, error } = (0, react_query_1.useMutation)(() => __awaiter(void 0, void 0, void 0, function* () { return (0, logInApis_1.fetchLogInAdmin)(adminInfo); }), {
        onSuccess(data) {
            if (Math.floor(data.statusCode / 100) !== 4) {
                alert('로그인 되었습니다.');
                sessionStorage.setItem('adminToken', data);
                navigate('/admin/posts');
            }
            else {
                alert('로그인에 실패했습니다!');
                sessionStorage.removeItem('adminToken');
            }
        },
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(LogInModal_1.LogInOverlay, {}), (0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsxs)(LogInModal_1.LogInContentBlock, Object.assign({ className: 'modal-content-block' }, { children: [(0, jsx_runtime_1.jsx)(LogInModal_1.LogInHeader, Object.assign({ className: 'modal-header' }, { children: (0, jsx_runtime_1.jsx)(LogInModal_1.LogInTitle, Object.assign({ className: 'modal-title' }, { children: "\uAD00\uB9AC\uC790 \uB85C\uADF8\uC778" })) })), (0, jsx_runtime_1.jsx)(LogInModal_1.LogInSubTitle, { children: "\uC774\uBA54\uC77C" }), (0, jsx_runtime_1.jsx)(LogInModal_1.LogInContentInput, { value: adminInfo.email, onChange: handleChangeAdminInfo, name: 'email', ref: firstInput }), (0, jsx_runtime_1.jsx)(LogInModal_1.LogInSubTitle, { children: "\uBE44\uBC00\uBC88\uD638" }), (0, jsx_runtime_1.jsx)(LogInModal_1.LogInContentInput, { type: 'password', value: adminInfo.password, onChange: handleChangeAdminInfo, name: 'password' }), (0, jsx_runtime_1.jsxs)(LogInModal_1.LogInButtonBlock, Object.assign({ className: 'modal-button-block' }, { children: [(0, jsx_runtime_1.jsx)(LogInModal_1.LogInButton, Object.assign({ className: 'modal-button-submit', onClick: handleSignIn }, { children: "\uD68C\uC6D0\uAC00\uC785" })), (0, jsx_runtime_1.jsx)(LogInModal_1.LogInButton, Object.assign({ className: 'modal-button-submit', onClick: handleSubmit, "$purple": true }, { children: "\uB85C\uADF8\uC778" }))] }))] }))] }));
};
exports.default = AdminSignIn;
