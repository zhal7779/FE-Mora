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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_query_1 = require("react-query");
const react_router_dom_1 = require("react-router-dom");
const Style = __importStar(require("./styledComponents/MyPageProfileStyle"));
const Style2 = __importStar(require("./styledComponents/ProfileListStyle"));
const profileListData_json_1 = __importDefault(require("./data/profileListData.json"));
const profileListApi_1 = require("./profileListApi");
const ProfileList = () => {
    const queryClient = (0, react_query_1.useQueryClient)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { data: mySkillList, isLoading: isSkillLoading } = (0, react_query_1.useQuery)('mySkillList', profileListApi_1.fetchMySkillList);
    const { data: myCareerList, isLoading: isCareerLoading } = (0, react_query_1.useQuery)('myCareerList', profileListApi_1.fetchMyCareerList);
    const { data: myEduList, isLoading: isEduLoading } = (0, react_query_1.useQuery)('myEduList', profileListApi_1.fetchMyEduList);
    const { data: myLinkList, isLoading: isLinkLoading } = (0, react_query_1.useQuery)('myLinkList', profileListApi_1.fetchMyLinkList);
    const removeCareerMutation = (0, react_query_1.useMutation)(profileListApi_1.handleRemoveCareer, {
        onSuccess: () => {
            queryClient.invalidateQueries('myCareerList');
        },
    });
    const removeEduMutation = (0, react_query_1.useMutation)(profileListApi_1.handleRemoveEdu, {
        onSuccess: () => {
            queryClient.invalidateQueries('myEduList');
        },
    });
    const removeLinkMutation = (0, react_query_1.useMutation)(profileListApi_1.handleRemoveLink, {
        onSuccess: () => {
            queryClient.invalidateQueries('myLinkList');
        },
    });
    return ((0, jsx_runtime_1.jsx)(Style.ListContainer, { children: (0, jsx_runtime_1.jsx)("ul", { children: profileListData_json_1.default.map((item, index) => ((0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("h4", { children: item.title }), index === 0 && !isSkillLoading && mySkillList && mySkillList.length > 0 ? ((0, jsx_runtime_1.jsx)(Style2.SkillButtonContainer, { children: mySkillList.map((mySkill, index) => ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'badge' }, { children: mySkill }), index))) })) : index === 1 && !isCareerLoading && myCareerList && myCareerList.length > 0 ? ((0, jsx_runtime_1.jsx)(Style2.CareerButtonContainer, { children: myCareerList.map((myCareer, index) => ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'badge' }, { children: [(0, jsx_runtime_1.jsx)(Style2.H5, { children: `${myCareer.company_name} ${myCareer.position} ㅣ ${myCareer.content} ㅣ ${myCareer.totalWorkingDate}` }), (0, jsx_runtime_1.jsx)(Style2.RemoveText, Object.assign({ className: 'remove-text', onClick: () => removeCareerMutation.mutate(myCareer.id) }, { children: "\u274C" }))] }), index))) })) : index === 2 && !isEduLoading && myEduList && myEduList.length > 0 ? ((0, jsx_runtime_1.jsx)(Style2.CareerButtonContainer, { children: myEduList.map((myEdu, index) => ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'badge' }, { children: [myEdu.end_date === '' ? ((0, jsx_runtime_1.jsx)(Style2.H5, { children: `${myEdu.name} ${myEdu.program} ㅣ ${myEdu.description} ㅣ ${myEdu.start_date} ~ 교육중` })) : ((0, jsx_runtime_1.jsx)(Style2.H5, { children: `${myEdu.name} ${myEdu.program} ㅣ ${myEdu.description} ㅣ ${myEdu.start_date} ~ ${myEdu.end_date}` })), (0, jsx_runtime_1.jsx)(Style2.RemoveText, Object.assign({ className: 'remove-text', onClick: () => removeEduMutation.mutate(myEdu.id) }, { children: "\u274C" }))] }), index))) })) : index === 3 && !isLinkLoading && myLinkList && myLinkList.length > 0 ? ((0, jsx_runtime_1.jsx)(Style2.LinkButtonContainer, { children: myLinkList.map((myLink, index) => ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'badge' }, { children: [(0, jsx_runtime_1.jsx)("a", Object.assign({ href: myLink.url, target: '_blank', rel: 'noopener noreferrer' }, { children: myLink.name }), index), (0, jsx_runtime_1.jsx)(Style2.RemoveText, Object.assign({ className: 'remove-text', onClick: () => removeLinkMutation.mutate(myLink.id) }, { children: "\u274C" }))] }), index))) })) : ((0, jsx_runtime_1.jsx)("p", Object.assign({ className: 'list-content' }, { children: item.content }))), (0, jsx_runtime_1.jsx)("button", Object.assign({ className: 'list-button', onClick: () => {
                            navigate(item.url);
                        } }, { children: `+ ${item.title} 추가` }))] }, index))) }) }));
};
exports.default = ProfileList;
