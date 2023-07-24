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
const optionsData_1 = __importDefault(require("../myPage/data/optionsData"));
const URL = process.env.REACT_APP_URL;
const MyPageEdit = () => {
    const [eduName, setEduName] = (0, react_1.useState)('');
    const [program, setProgram] = (0, react_1.useState)('');
    const [startYear, setStartYear] = (0, react_1.useState)('');
    const [startMonth, setStartMonth] = (0, react_1.useState)('');
    const [endYear, setEndYear] = (0, react_1.useState)('');
    const [endMonth, setEndMonth] = (0, react_1.useState)('');
    const [content, setContent] = (0, react_1.useState)('');
    const [isCurrentlyStudying, setIsCurrentlyStudying] = (0, react_1.useState)(false);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const queryClient = (0, react_query_1.useQueryClient)();
    // useMutation POST 요청 선언
    const createEduMutation = (0, react_query_1.useMutation)((eduData) => fetch(`${URL}/api/educations/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
        },
        body: JSON.stringify(eduData),
    }));
    // input 이벤트로 state 변경하는 핸들러
    const handleStartYearChange = (e) => {
        e.preventDefault();
        const selectedYear = e.target.value;
        setStartYear(selectedYear);
    };
    const handleStartMonthChange = (e) => {
        e.preventDefault();
        const selectedMonth = e.target.value;
        setStartMonth(selectedMonth);
    };
    const handleEndYearChange = (e) => {
        e.preventDefault();
        const selectedYear = e.target.value;
        setEndYear(selectedYear);
    };
    const handleEndMonthChange = (e) => {
        e.preventDefault();
        const selectedMonth = e.target.value;
        setEndMonth(selectedMonth);
    };
    const handleCurrentlyStudyingChange = (e) => {
        setIsCurrentlyStudying(e.target.checked);
        if (e.target.checked) {
            setEndYear('');
            setEndMonth('');
        }
    };
    // 년 월 빼고 사이에 대쉬 넣기, 6월 => 06 으로 바꾸기
    const handleSubmit = () => __awaiter(void 0, void 0, void 0, function* () {
        const startDate = `${startYear.replace('년', '')}-${startMonth
            .replace('월', '')
            .padStart(2, '0')}`;
        let endDate = '';
        if (!isCurrentlyStudying) {
            endDate = `${endYear.replace('년', '')}-${endMonth.replace('월', '').padStart(2, '0')}`;
        }
        // eduData에 최종 값을 넣어주기
        const eduData = {
            edu_name: eduName,
            program,
            start_date: startDate,
            end_date: endDate,
            content,
        };
        // console.log(eduData)
        // Mutation POST 요청
        try {
            yield createEduMutation.mutateAsync(eduData);
            queryClient.invalidateQueries('myEduList');
            navigate('/mypage');
        }
        catch (error) {
            console.error('프로필 수정 오류:', error);
        }
    });
    return ((0, jsx_runtime_1.jsxs)(LogInContainer_1.default, { children: [(0, jsx_runtime_1.jsx)(MyPageEditInput_1.default, { title: '\uAD50\uC721\uAE30\uAD00', type: 'text', placeholder: '\uAD50\uC721\uAE30\uAD00\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694', name: 'eduName', onChange: (e) => {
                    e.preventDefault();
                    setEduName(e.target.value);
                }, value: eduName }), (0, jsx_runtime_1.jsx)(MyPageEditInput_1.default, { title: '\uC804\uACF5 / \uACFC\uC815', type: 'text', placeholder: '\uC804\uACF5 / \uACFC\uC815\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694', name: 'program', onChange: (e) => {
                    e.preventDefault();
                    setProgram(e.target.value);
                }, value: program }), (0, jsx_runtime_1.jsxs)(StartEndDateContainer, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'startDateContainer' }, { children: [(0, jsx_runtime_1.jsx)(MyPageEditSelect_1.default, { title: '\uC2DC\uC791\uB144\uB3C4', options: optionsData_1.default.StartYearOptions, name: '\uC2DC\uC791\uB144\uB3C4', onChange: handleStartYearChange, value: startYear }), (0, jsx_runtime_1.jsx)(MyPageEditSelect_1.default, { title: '\uC2DC\uC791\uC6D4', options: optionsData_1.default.StartMonthOptions, name: '\uC2DC\uC791\uC6D4', onChange: handleStartMonthChange, value: startMonth })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'endDateContainer' }, { children: [(0, jsx_runtime_1.jsx)(MyPageEditSelect_1.default, { title: '\uC885\uB8CC\uB144\uB3C4', options: optionsData_1.default.EndYearOptions, name: '\uC885\uB8CC\uB144\uB3C4', onChange: handleEndYearChange, value: endYear, disabled: isCurrentlyStudying }), (0, jsx_runtime_1.jsx)(MyPageEditSelect_1.default, { title: '\uC885\uB8CC\uC6D4', options: optionsData_1.default.EndMonthOptions, name: '\uC885\uB8CC\uC6D4', onChange: handleEndMonthChange, value: endMonth, disabled: isCurrentlyStudying })] }))] }), (0, jsx_runtime_1.jsxs)(CheckboxContainer, { children: [(0, jsx_runtime_1.jsx)("input", { type: 'checkbox', id: 'currentlyStudying', checked: isCurrentlyStudying, onChange: handleCurrentlyStudyingChange }), (0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: 'currentlyStudying' }, { children: "\uAD50\uC721\uC911" }))] }), (0, jsx_runtime_1.jsxs)(IntroTextContainter, Object.assign({ value: content }, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "\uC5B4\uB5A4 \uD65C\uB3D9\uC744 \uD588\uB098\uC694?" }), (0, jsx_runtime_1.jsx)("textarea", { onChange: (e) => {
                            setContent(e.target.value);
                        }, placeholder: '\uAD50\uC721 \uB0B4\uC6A9 \uBC0F \uD65C\uB3D9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694' })] })), (0, jsx_runtime_1.jsxs)(ButtonContainer, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { color: 'darkPurple', value: '\uC218\uC815\uC644\uB8CC', onClick: () => {
                            handleSubmit();
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
const StartEndDateContainer = styled_components_1.default.div `
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .startDateContainer {
    width: 45%;
  }
  .endDateContainer {
    width: 45%;
  }
`;
const IntroTextContainter = styled_components_1.default.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  h3 {
    font-weight: 400;
    font-size: 1.7rem;
    line-height: 2rem;
    margin: 0;
    margin-right: 1.5rem;
    margin-bottom: 0.5rem;
  }
  textarea {
    border: 1px solid #d8e0e9;
    border-radius: 8px;
    width: 100%;
    height: 7rem;
    padding: 0.5rem 1rem;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;

    ::placeholder {
      padding-top: 0.3rem;
      font-size: 1.6rem;
      font-weight: 600;
      opacity: 0.35;
    }
  }
`;
const CheckboxContainer = styled_components_1.default.div `
  display: flex;
  align-items: center;
  margin-top: 1rem;

  input[type='checkbox'] {
    appearance: none;
    width: 2rem;
    height: 2rem;
    border: 2px solid #d8e0e9;
    border-radius: 4px;
    margin-right: 0.5rem;
    outline: none;
    cursor: pointer;
    transition: border-color 0.2s ease-in-out;

    &:checked {
      background-color: #5f3dc4;
      border-color: #5f3dc4;
    }
  }

  label {
    font-weight: 400;
    font-size: 1.5rem;
  }
`;
