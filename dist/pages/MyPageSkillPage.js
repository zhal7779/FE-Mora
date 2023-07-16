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
const styled_components_1 = __importDefault(require("styled-components"));
const react_query_1 = require("react-query");
const LogInContainer_1 = __importDefault(require("../logIn/LogInContainer"));
const MyPageEditInput_1 = __importDefault(require("../myPage/styledComponents/MyPageEditInput"));
const MyPageEditSelect_1 = __importDefault(require("../myPage/styledComponents/MyPageEditSelect"));
const Button_1 = __importDefault(require("../components/Button"));
const URL = process.env.REACT_APP_URL;
const MyPageEdit = () => {
    const [skill, setSkill] = (0, react_1.useState)('');
    const [selectedSkill, setSelectedSkill] = (0, react_1.useState)('');
    const [mySkillList, setMySkillList] = (0, react_1.useState)([]);
    const [skillList, setSkillList] = (0, react_1.useState)([]); // 검색된 스킬 목록
    const navigate = (0, react_router_dom_1.useNavigate)();
    const queryClient = (0, react_query_1.useQueryClient)();
    // 디바운싱으로 요청 수 줄이기
    // 디바운싱 = 여러 이벤트를 한번에 묶어서 처리, 쓰로틀링 = setInterval
    (0, react_1.useEffect)(() => {
        const delayDebounceFn = setTimeout(() => {
            if (skill !== '') {
                fetchSkillList();
            }
        }, 500);
        return () => clearTimeout(delayDebounceFn);
    }, [skill]);
    // 기존 서버에 등록된 내 스킬 불러오기
    const fetchMySkillList = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch(`${URL}/api/skills/myskill`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
            },
        });
        if (!response) {
            throw new Error('Failed to fetch mySkillList');
        }
        const data = yield response.json();
        setMySkillList(data); // Update mySkillList with the fetched data
        return data;
    });
    const { data: fetchedMySkillList } = (0, react_query_1.useQuery)('mySkillList', fetchMySkillList);
    // 검색되는 스킬 리스트 불러오기
    const fetchSkillList = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${URL}/api/skills?keyword=${skill}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
                },
            });
            if (response) {
                const data = yield response.json();
                if (data && data.length > 0) {
                    const updatedList = data.map((item) => ({
                        value: item.name,
                        label: item.name,
                    }));
                    setSkillList(updatedList);
                    setSelectedSkill(updatedList[0].value);
                }
                else {
                    setSkillList([]);
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    });
    // 검색결과 중 선택된 스킬로 바꾸는 핸들러
    const handleSkillChange = (e) => {
        console.log(e.target);
        const selectedOption = e.target.value;
        console.log(selectedOption);
        setSelectedSkill(selectedOption);
    };
    const handleAddSkill = () => {
        if (selectedSkill !== '') {
            setMySkillList([...mySkillList, selectedSkill]);
            setSelectedSkill('');
        }
    };
    const handleRemoveSkill = (removedSkill) => {
        const updatedSkillList = mySkillList.filter((skill) => skill !== removedSkill);
        setMySkillList(updatedSkillList);
    };
    // 스킬 업데이트 뮤테이션 선언
    const updateSkillMutation = (0, react_query_1.useMutation)((updatedSkills) => fetch(`${URL}/api/skills/update`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
        },
        body: JSON.stringify(updatedSkills),
    }).then((response) => response.json()));
    // 스킬 업데이트 핸들러
    const handleUpdateSkill = () => {
        const requestBody = {
            skillNames: mySkillList,
        };
        updateSkillMutation.mutate(requestBody, {
            onSuccess: () => {
                queryClient.invalidateQueries('mySkillList');
                navigate('/mypage');
            },
            onError: (error) => {
                console.error('프로필 수정 오류:', error);
            },
        });
    };
    return ((0, jsx_runtime_1.jsxs)(LogInContainer_1.default, { children: [(0, jsx_runtime_1.jsx)(MyPageEditInput_1.default, { title: '\uC2A4\uD0AC \uAC80\uC0C9', type: 'text', placeholder: '\uC2A4\uD0AC\uC744 \uAC80\uC0C9\uD574\uBCF4\uC138\uC694', name: 'skill', onChange: (e) => {
                    e.preventDefault();
                    setSkill(e.target.value);
                }, value: skill }), (0, jsx_runtime_1.jsx)(MyPageEditSelect_1.default, { title: '\uAC80\uC0C9\uB41C \uC2A4\uD0AC \uBAA9\uB85D', options: skillList, name: 'track', onChange: handleSkillChange, value: selectedSkill }), (0, jsx_runtime_1.jsx)(Button_1.default, { color: 'darkPurple', value: '\uCD94\uAC00\uD558\uAE30', onClick: handleAddSkill }), mySkillList ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(SubTitle, { children: mySkillList.length === 0 ? '내 스킬이 비어있어요' : '내 스킬 목록' }), (0, jsx_runtime_1.jsx)(SkillButtonContainer, { children: mySkillList.map((mySkill, index) => ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'badge', onClick: () => handleRemoveSkill(mySkill) }, { children: [mySkill, (0, jsx_runtime_1.jsx)(RemoveText, Object.assign({ className: 'remove-text' }, { children: "\u274C" }))] }), index))) })] })) : ('로딩중'), (0, jsx_runtime_1.jsxs)(ButtonContainer, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { color: 'darkPurple', value: '\uC218\uC815\uC644\uB8CC', onClick: () => {
                            handleUpdateSkill();
                        } }), (0, jsx_runtime_1.jsx)(Button_1.default, { color: 'white', value: '\uC218\uC815\uCDE8\uC18C', onClick: () => {
                            navigate('/mypage');
                        } })] })] }));
};
exports.default = MyPageEdit;
const SubTitle = styled_components_1.default.h3 `
  font-weight: 600;
  font-size: 2rem;
  margin-top: 7rem;
`;
const ButtonContainer = styled_components_1.default.div `
  width: 20rem;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;
const SkillButtonContainer = styled_components_1.default.div `
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;

  .badge {
    position: relative;
    background-color: #ffffff;
    border: 1px solid #b9b9b9;
    padding: 8px 20px 9px 20px;
    border-radius: 2rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover .remove-text {
      display: block;
    }
  }
`;
const RemoveText = styled_components_1.default.span `
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
  font-size: 1.2rem;
  font-weight: 600;
  color: #ee1e1e;
  display: none;
`;
