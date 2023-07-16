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
const react_1 = __importDefault(require("react"));
const react_query_1 = require("react-query");
const styled_components_1 = __importDefault(require("styled-components"));
const openProfileApi_1 = require("../api/openProfileApi");
const Toggle = ({ handleRegisterStatus }) => {
    //오픈프로필 초기 상태값, 오픈프로필을 올렸다면 true, 내렸다면 false
    const { data: registerStatus, refetch: statusRefetch } = (0, react_query_1.useQuery)('status', openProfileApi_1.ProfilRegistrStatus);
    const updateProfileMutation = (0, react_query_1.useMutation)(() => (0, openProfileApi_1.putProfile)(!registerStatus.UserDetail.profile_public), {
        onSuccess: () => {
            statusRefetch();
        },
    });
    const handleToggleClick = () => __awaiter(void 0, void 0, void 0, function* () {
        yield updateProfileMutation.mutateAsync();
        yield handleRegisterStatus(registerStatus);
    });
    return ((0, jsx_runtime_1.jsx)(Container, { children: registerStatus && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [registerStatus.UserDetail.profile_public ? ((0, jsx_runtime_1.jsx)("p", Object.assign({ className: 'toggle_text' }, { children: "\uC62C\uB9BC" }))) : ((0, jsx_runtime_1.jsx)("p", Object.assign({ className: 'toggle_text' }, { children: "\uB0B4\uB9BC" }))), (0, jsx_runtime_1.jsxs)(ToggleContainer, Object.assign({ onClick: handleToggleClick }, { children: [(0, jsx_runtime_1.jsx)("div", { className: `toggle_container ${registerStatus.UserDetail.profile_public ? 'toggle__checked' : null}` }), (0, jsx_runtime_1.jsx)("div", { className: `toggle_circle ${registerStatus.UserDetail.profile_public ? 'toggle__checked' : null}` })] }))] })) }));
};
exports.default = Toggle;
const Container = styled_components_1.default.div `
  display: flex;
  align-items: center;
  > .toggle_text {
    font-size: 1.3rem;
    color: var(--dark-gray);
    padding-right: 1rem;
  }
`;
const ToggleContainer = styled_components_1.default.span `
  position: relative;
  cursor: pointer;
  > .toggle_container {
    width: 4.6rem;
    height: 2.4rem;
    border-radius: 2rem;
    background: #e9e9ee;
  }

  > .toggle__checked {
    background: var(--light-purple);
    transition: 0.5s;
  }

  > .toggle_circle {
    position: absolute;
    top: 0.3rem;
    left: 0.4rem;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    background-color: var(--main-white);
    transition: 0.5s;
  }
  > .toggle__checked {
    left: 2.4rem;
    transition: 0.5s;
  }
`;
