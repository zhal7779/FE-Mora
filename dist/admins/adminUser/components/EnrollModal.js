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
const userApis_1 = require("../apis/userApis");
const jwt_decode_1 = __importDefault(require("jwt-decode"));
const ModalComponents_1 = require("../styledComponents/ModalComponents");
const EnrollModal = ({ title, enrollModal, toggleEnrollModal }) => {
    const [adminName, setAdminName] = (0, react_1.useState)('');
    const [contents, setContents] = (0, react_1.useState)({ email: '', password: '', name: '' });
    const titleInput = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const sessionToken = sessionStorage.getItem('adminToken');
        const decodedToken = (0, jwt_decode_1.default)(sessionToken);
        setAdminName(decodedToken.name);
    }, []);
    (0, react_1.useEffect)(() => {
        titleInput.current.focus();
    }, [enrollModal]);
    const handleFormChange = (e) => {
        const changedValue = e.target.name;
        const newContents = Object.assign({}, contents);
        newContents[changedValue] = e.target.value;
        setContents(newContents);
    };
    const handleSubmit = () => {
        const result = confirm('사용자를 생성하시겠습니까?');
        if (result) {
            createUser(contents);
            toggleEnrollModal();
        }
    };
    const { mutate: createUser, error } = (0, react_query_1.useMutation)(() => __awaiter(void 0, void 0, void 0, function* () { return yield (0, userApis_1.fetchCreateUser)(contents); }), {
        onError(error) {
            console.error(error);
        },
    });
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: enrollModal && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(ModalComponents_1.ModalOverlay, { onClick: toggleEnrollModal }), (0, jsx_runtime_1.jsxs)(ModalComponents_1.ModalContentBlock, Object.assign({ className: 'modal-content-block' }, { children: [(0, jsx_runtime_1.jsx)(ModalComponents_1.ModalHeader, Object.assign({ className: 'modal-header' }, { children: (0, jsx_runtime_1.jsx)(ModalComponents_1.ModalTitle, Object.assign({ className: 'modal-title' }, { children: title })) })), (0, jsx_runtime_1.jsx)(ModalComponents_1.ModalSubTitle, Object.assign({ className: 'modal-sub-title' }, { children: "\uAD00\uB9AC\uC790" })), (0, jsx_runtime_1.jsx)(ModalComponents_1.ModalContentP, Object.assign({ className: 'modal-content' }, { children: adminName })), (0, jsx_runtime_1.jsx)(ModalComponents_1.ModalSubTitle, Object.assign({ className: 'modal-sub-title' }, { children: "\uC774\uBA54\uC77C" })), (0, jsx_runtime_1.jsx)(ModalComponents_1.ModalContentInput, { type: 'text', name: 'email', value: contents.email, ref: titleInput, className: 'modal-content', onChange: handleFormChange }), (0, jsx_runtime_1.jsx)(ModalComponents_1.ModalSubTitle, Object.assign({ className: 'modal-sub-title' }, { children: "\uBE44\uBC00\uBC88\uD638" })), (0, jsx_runtime_1.jsx)(ModalComponents_1.ModalContentInput, { type: 'text', name: 'password', value: contents.password, className: 'modal-content', onChange: handleFormChange }), (0, jsx_runtime_1.jsx)(ModalComponents_1.ModalSubTitle, Object.assign({ className: 'modal-sub-title' }, { children: "\uC774\uB984" })), (0, jsx_runtime_1.jsx)(ModalComponents_1.ModalContentInput, { type: 'text', name: 'name', value: contents.name, className: 'modal-content', onChange: handleFormChange }), (0, jsx_runtime_1.jsxs)(ModalComponents_1.ModalButtonBlock, Object.assign({ className: 'modal-button-block' }, { children: [(0, jsx_runtime_1.jsx)(ModalComponents_1.ModalButton, Object.assign({ className: 'modal-button-submit', onClick: toggleEnrollModal }, { children: "\uCDE8\uC18C" })), (0, jsx_runtime_1.jsx)(ModalComponents_1.ModalButton, Object.assign({ type: 'submit', className: 'modal-button-ok', onClick: handleSubmit, "$purple": true }, { children: "\uB4F1\uB85D" }))] }))] }))] })) }));
};
exports.default = EnrollModal;
