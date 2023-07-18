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
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_query_1 = require("react-query");
const userApis_1 = require("../apis/userApis");
const ModalComponents_1 = require("../styledComponents/ModalComponents");
const UserModal = ({ id, handleModalCancelClick }) => {
    const [updatable, setUpdatable] = (0, react_1.useState)(false);
    const [contents, setContents] = (0, react_1.useState)({ name: '', email: '', password: '' });
    const firstInput = (0, react_1.useRef)(null);
    const handleUpdatable = () => {
        setUpdatable(true);
        if (!updatable)
            firstInput.current.focus();
    };
    const handleChangeContents = (e) => {
        const newContent = Object.assign({}, contents);
        newContent[e.target.name] = e.target.value;
        setContents(() => newContent);
    };
    const handleUpdate = (email) => {
        const result = confirm('수정하시겠습니까?');
        if (result) {
            updateNotification(email);
            handleUpdatable();
            handleModalCancelClick();
        }
    };
    const handleCloseModal = () => {
        handleModalCancelClick();
        setUpdatable(false);
    };
    const { data, isLoading, error } = (0, react_query_1.useQuery)(['admin', 'user', 'detail', 'get'], () => (0, userApis_1.fetchReadUserInfoDetail)(id), {
        onSuccess(data) {
            setContents({ name: data.name, email: data.email, password: '' });
        },
    });
    const { mutate: updateNotification, error: updateError } = (0, react_query_1.useMutation)((email) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, userApis_1.fetchUpdateUser)(email, contents); }), {
        onError(updateError) {
            console.error(updateError);
        },
    });
    if (isLoading)
        return (0, jsx_runtime_1.jsx)("span", { children: "\uB85C\uB529\uC911..." });
    if (updateError)
        return (0, jsx_runtime_1.jsxs)("span", { children: ["An updateError has occurred: ", updateError.message] });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(ModalComponents_1.ModalOverlay, { onClick: handleModalCancelClick }), (0, jsx_runtime_1.jsxs)(ModalComponents_1.ModalContentBlock, Object.assign({ className: 'modal-content-block' }, { children: [(0, jsx_runtime_1.jsxs)(ModalComponents_1.ModalHeader, Object.assign({ className: 'modal-header' }, { children: [(0, jsx_runtime_1.jsx)(ModalComponents_1.ModalTitle, Object.assign({ className: 'modal-title' }, { children: "\uC0AC\uC6A9\uC790 \uC815\uBCF4" })), (0, jsx_runtime_1.jsx)(ModalComponents_1.ModalHeaderButton, Object.assign({ className: 'modal-button-update', onClick: handleUpdatable, "$purple": true, "$header": true }, { children: "\uC218\uC815\uD558\uAE30" }))] })), (0, jsx_runtime_1.jsx)(ModalComponents_1.ModalSubTitle, { children: "\uC774\uBA54\uC77C" }), (0, jsx_runtime_1.jsx)(ModalComponents_1.ModalContentInput, { value: contents.email, onChange: handleChangeContents, name: 'email', readOnly: !updatable, ref: firstInput }), (0, jsx_runtime_1.jsx)(ModalComponents_1.ModalSubTitle, { children: "\uC774\uB984" }), (0, jsx_runtime_1.jsx)(ModalComponents_1.ModalContentInput, { value: contents.name, onChange: handleChangeContents, name: 'name', readOnly: !updatable }), (0, jsx_runtime_1.jsx)(ModalComponents_1.ModalSubTitle, { children: "\uBE44\uBC00\uBC88\uD638" }), (0, jsx_runtime_1.jsx)(ModalComponents_1.ModalContentInput, { value: contents.password, onChange: handleChangeContents, name: 'password', readOnly: !updatable }), (0, jsx_runtime_1.jsxs)(ModalComponents_1.ModalButtonBlock, Object.assign({ className: 'modal-button-block' }, { children: [(0, jsx_runtime_1.jsx)(ModalComponents_1.ModalButton, Object.assign({ className: 'modal-button-submit', onClick: () => handleUpdate(data.email), "$purple": true }, { children: "\uC218\uC815" })), (0, jsx_runtime_1.jsx)(ModalComponents_1.ModalButton, Object.assign({ className: 'modal-button-ok', onClick: handleCloseModal }, { children: "\uD655\uC778" }))] }))] }))] }));
};
exports.default = UserModal;
