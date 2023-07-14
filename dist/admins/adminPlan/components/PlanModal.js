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
const planApis_1 = require("../apis/planApis");
const ModalComponents_1 = require("../styledComponents/ModalComponents");
const PlanModal = ({ id, handleModalCancelClick }) => {
    const [updatable, setUpdatable] = (0, react_1.useState)(false);
    const [contents, setContents] = (0, react_1.useState)({
        title: '',
        content: '',
        startDate: '',
        endDate: '',
        links: '',
    });
    const firstInput = (0, react_1.useRef)(null);
    const handleUpdatable = () => {
        setUpdatable(true);
        if (!updatable)
            firstInput.current.focus();
    };
    const handleChangeContents = (e) => {
        const changedValue = e.target.name;
        const newContents = Object.assign({}, contents);
        newContents[changedValue] = e.target.value;
        setContents(newContents);
    };
    const handleUpdate = () => {
        const result = confirm('수정하시겠습니까?');
        if (result) {
            updateNotification();
            handleUpdatable();
            handleModalCancelClick();
        }
    };
    const handleCloseModal = () => {
        handleModalCancelClick();
        setUpdatable(false);
    };
    const { data, isLoading, error } = (0, react_query_1.useQuery)(['admin', 'plan', 'detail', 'get'], () => (0, planApis_1.fetchReadPlanInfoDetail)(id), {
        onSuccess(data) {
            let newLinks = '';
            data.PlanLinks.map((link) => {
                newLinks += `${link.url}\n`;
            });
            setContents({
                title: data.title,
                content: data.content,
                startDate: data.start_date.slice(0, 10),
                endDate: data.end_date.slice(0, 10),
                links: newLinks,
            });
        },
    });
    const { mutate: updateNotification, error: updateError } = (0, react_query_1.useMutation)(() => __awaiter(void 0, void 0, void 0, function* () { return yield (0, planApis_1.fetchUpdatePlan)(id, contents); }), {
        onError(updateError) {
            console.error(updateError);
        },
    });
    if (isLoading)
        return (0, jsx_runtime_1.jsx)("span", { children: "\uB85C\uB529\uC911..." });
    if (updateError)
        return (0, jsx_runtime_1.jsxs)("span", { children: ["An updateError has occurred: ", updateError.message] });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(ModalComponents_1.ModalOverlay, { onClick: handleModalCancelClick }), (0, jsx_runtime_1.jsxs)(ModalComponents_1.ModalContentBlock, Object.assign({ className: 'modal-content-block' }, { children: [(0, jsx_runtime_1.jsxs)(ModalComponents_1.ModalHeader, Object.assign({ className: 'modal-header' }, { children: [(0, jsx_runtime_1.jsx)(ModalComponents_1.ModalTitle, Object.assign({ className: 'modal-title' }, { children: "\uC77C\uC815 \uC815\uBCF4" })), (0, jsx_runtime_1.jsx)(ModalComponents_1.ModalHeaderButton, Object.assign({ className: 'modal-button-update', onClick: handleUpdatable, "$purple": true, "$header": true }, { children: "\uC218\uC815\uD558\uAE30" }))] })), (0, jsx_runtime_1.jsx)(ModalComponents_1.ModalSubTitle, { children: "\uAD00\uB9AC\uC790" }), (0, jsx_runtime_1.jsx)(ModalComponents_1.ModalContentP, { children: data.Admin.name }), (0, jsx_runtime_1.jsx)(ModalComponents_1.ModalSubTitle, { children: "\uC81C\uBAA9" }), (0, jsx_runtime_1.jsx)(ModalComponents_1.ModalContentInput, { value: contents.title, onChange: handleChangeContents, name: 'title', readOnly: !updatable, ref: firstInput }), (0, jsx_runtime_1.jsx)(ModalComponents_1.ModalSubTitle, { children: "\uB0B4\uC6A9" }), (0, jsx_runtime_1.jsx)(ModalComponents_1.ModalContentTextarea, { value: contents.content, onChange: handleChangeContents, name: 'content', readOnly: !updatable }), (0, jsx_runtime_1.jsx)(ModalComponents_1.ModalSubTitle, { children: "\uC2DC\uC791\uC77C" }), (0, jsx_runtime_1.jsx)(ModalComponents_1.ModalContentInput, { type: 'date', value: contents.startDate, onChange: handleChangeContents, name: 'startDate', readOnly: !updatable }), (0, jsx_runtime_1.jsx)(ModalComponents_1.ModalSubTitle, { children: "\uC885\uB8CC\uC77C" }), (0, jsx_runtime_1.jsx)(ModalComponents_1.ModalContentInput, { type: 'date', value: contents.endDate, onChange: handleChangeContents, name: 'endDate', readOnly: !updatable }), (0, jsx_runtime_1.jsx)(ModalComponents_1.ModalSubTitle, { children: "\uB9C1\uD06C" }), (0, jsx_runtime_1.jsx)(ModalComponents_1.ModalContentTextarea, { value: contents.links, onChange: handleChangeContents, name: 'links', readOnly: !updatable }), (0, jsx_runtime_1.jsxs)(ModalComponents_1.ModalButtonBlock, Object.assign({ className: 'modal-button-block' }, { children: [(0, jsx_runtime_1.jsx)(ModalComponents_1.ModalButton, Object.assign({ className: 'modal-button-submit', onClick: handleUpdate, "$purple": true }, { children: "\uC218\uC815" })), (0, jsx_runtime_1.jsx)(ModalComponents_1.ModalButton, Object.assign({ className: 'modal-button-ok', onClick: handleCloseModal }, { children: "\uD655\uC778" }))] }))] }))] }));
};
exports.default = PlanModal;
