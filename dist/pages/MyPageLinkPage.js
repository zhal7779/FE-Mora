"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_query_1 = require("react-query");
const styled_components_1 = __importDefault(require("styled-components"));
const LogInContainer_1 = __importDefault(require("../logIn/LogInContainer"));
const MyPageEditInput_1 = __importDefault(require("../myPage/styledComponents/MyPageEditInput"));
const Button_1 = __importDefault(require("../components/Button"));
const URL = process.env.REACT_APP_URL;
const MyPageEdit = () => {
    const [url, setUrl] = (0, react_1.useState)('');
    const [urlName, setUrlName] = (0, react_1.useState)('');
    const navigate = (0, react_router_dom_1.useNavigate)();
    const queryClient = (0, react_query_1.useQueryClient)();
    // useMutation POST 요청 선언
    const createLinkMutation = (0, react_query_1.useMutation)((linkData) => fetch(`${URL}/api/links`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
        },
        body: JSON.stringify(linkData),
    }));
    const handleLinkUpdate = () => {
        const linkData = {
            url: url,
            name: urlName,
        };
        createLinkMutation.mutate(linkData, {
            onSuccess: () => {
                queryClient.invalidateQueries('myLinkList');
                navigate('/mypage');
            },
            onError: (error) => {
                console.error('링크 수정 오류:', error);
            },
        });
    };
    return ((0, jsx_runtime_1.jsxs)(LogInContainer_1.default, { children: [(0, jsx_runtime_1.jsx)(MyPageEditInput_1.default, { title: '\uB9C1\uD06C \uC5F0\uACB0', type: 'text', placeholder: 'URL\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694', name: 'url', onChange: (e) => {
                    e.preventDefault();
                    setUrl(e.target.value);
                }, value: url }), (0, jsx_runtime_1.jsx)(MyPageEditInput_1.default, { title: '\uB9C1\uD06C \uC774\uB984', type: 'text', placeholder: '\uB9C1\uD06C\uC5D0 \uD45C\uC2DC\uD560 \uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694', name: 'urlName', onChange: (e) => {
                    e.preventDefault();
                    setUrlName(e.target.value);
                }, value: urlName }), (0, jsx_runtime_1.jsxs)(ButtonContainer, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { color: 'darkPurple', value: '\uC218\uC815\uC644\uB8CC', onClick: () => {
                            handleLinkUpdate();
                        } }), (0, jsx_runtime_1.jsx)(Button_1.default, { color: 'white', value: '\uC218\uC815\uCDE8\uC18C', onClick: () => {
                            navigate('/mypage');
                        } })] })] }));
};
exports.default = MyPageEdit;
const ButtonContainer = styled_components_1.default.div `
  width: 20rem;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;
