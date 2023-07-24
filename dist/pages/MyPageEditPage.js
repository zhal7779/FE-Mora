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
const styled_components_1 = __importDefault(require("styled-components"));
const LogInContainer_1 = __importDefault(require("../logIn/LogInContainer"));
const MyPageEditInput_1 = __importDefault(require("../myPage/styledComponents/MyPageEditInput"));
const MyPageEditSelect_1 = __importDefault(require("../myPage/styledComponents/MyPageEditSelect"));
const Button_1 = __importDefault(require("../components/Button"));
const no_data_image_svg_1 = __importDefault(require("../assets/images/no-data-image.svg"));
const URL = process.env.REACT_APP_URL;
const MyPageEdit = () => {
    var _a;
    const [userName, setUserName] = (0, react_1.useState)('');
    const [userImg, setUserImg] = (0, react_1.useState)('');
    const [position, setPosition] = (0, react_1.useState)('');
    const [intro, setIntro] = (0, react_1.useState)('');
    const [phase, setPhase] = (0, react_1.useState)('');
    const [track, setTrack] = (0, react_1.useState)('');
    const navigate = (0, react_router_dom_1.useNavigate)();
    const queryClient = (0, react_query_1.useQueryClient)();
    // 수정하지 않고 넘길 때는 이전 값 넣어주기
    (0, react_1.useEffect)(() => {
        setUserName(mainProfileData.name);
        setUserImg(mainProfileData.UserDetail.img_path);
        setPosition(mainProfileData.UserDetail.position === '직책을 입력해주세요.'
            ? ''
            : mainProfileData.UserDetail.position);
        setTrack('트랙 및');
        setPhase('기수를 입력해주세요');
        setIntro(mainProfileData.UserDetail.comment);
    }, []);
    // 트랙과 기수 이벤트 핸들러
    const handleTrackChange = (e) => {
        const selectedTrack = e.target.value;
        setTrack(selectedTrack);
    };
    const handlePhaseChange = (e) => {
        const selectedPhase = e.target.value;
        setPhase(selectedPhase);
    };
    // 기존 내 정보 가져오기
    const mainProfileDataQuery = (0, react_query_1.useQuery)('mainProfileData', () => fetch(`${URL}/api/users/mypage`, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
        },
    }).then((response) => response.json()));
    const { data: mainProfileData } = mainProfileDataQuery;
    // 프로필 이미지 POST 뮤테이션 선언
    const uploadImageMutation = (0, react_query_1.useMutation)((formData) => fetch(`${URL}/api/users/mypage/img/upload`, {
        method: 'POST',
        body: formData,
    }).then((response) => response.json()));
    // 내 정보 updatedData 로 수정하기  // useMutation<ResultData, ErrorType, MutationVariables>
    const updateProfileMutation = (0, react_query_1.useMutation)((updatedData) => fetch(`${URL}/api/users/mypage/edit`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
        },
        body: JSON.stringify(updatedData),
    }).then((response) => response.json()));
    // formData 로 이미지 업로드하고 이미지 링크 받기
    const handleImageChange = (e) => __awaiter(void 0, void 0, void 0, function* () {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('img', file);
        try {
            const data = yield uploadImageMutation.mutateAsync(formData);
            if (data) {
                const imageUrl = `${URL}/` + data.file_name;
                setUserImg(imageUrl);
                queryClient.invalidateQueries('mainProfileData');
            }
            else {
                console.log('이미지 업로드 실패');
            }
        }
        catch (error) {
            console.error('이미지 업로드 오류:', error);
        }
    });
    // 수정한 값이 담긴 state 를 모두 updatedData 객체에 담아 post 요청 보내기
    const handleSubmit = () => {
        const updatedData = {
            userName,
            userImg,
            position,
            intro,
            phase,
            track,
        };
        updateProfileMutation.mutate(updatedData, {
            onSuccess: () => {
                queryClient.invalidateQueries('mainProfileData');
                navigate('/mypage');
            },
            onError: (error) => {
                console.error('프로필 수정 오류:', error);
            },
        });
    };
    return ((0, jsx_runtime_1.jsxs)(LogInContainer_1.default, { children: [(0, jsx_runtime_1.jsxs)(ImageContainer, { children: [((_a = mainProfileData === null || mainProfileData === void 0 ? void 0 : mainProfileData.UserDetail) === null || _a === void 0 ? void 0 : _a.img_path) ? ((0, jsx_runtime_1.jsx)(ProfileImg, { children: (0, jsx_runtime_1.jsx)("img", { src: userImg || mainProfileData.UserDetail.img_path, alt: '\uD504\uB85C\uD544' }) })) : ((0, jsx_runtime_1.jsx)("img", { src: no_data_image_svg_1.default, alt: 'noDataImage' })), (0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: 'imageUpload' }, { children: (0, jsx_runtime_1.jsx)("input", { onChange: handleImageChange, id: 'imageUpload', type: 'file', style: { display: 'none' } }) }))] }), (0, jsx_runtime_1.jsx)(MyPageEditInput_1.default, { title: '\uC774\uB984', type: 'text', name: 'userName', onChange: (e) => setUserName(e.target.value), value: userName }), (0, jsx_runtime_1.jsxs)(TrackPhaseContainer, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'track-container' }, { children: (0, jsx_runtime_1.jsx)(MyPageEditSelect_1.default, { title: '\uD2B8\uB799', options: trackOptions, name: 'track', onChange: handleTrackChange, value: track }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'phase-container' }, { children: (0, jsx_runtime_1.jsx)(MyPageEditSelect_1.default, { title: '\uAE30\uC218', options: phaseOptions, name: 'phase', onChange: handlePhaseChange, value: phase }) }))] }), (0, jsx_runtime_1.jsx)(MyPageEditInput_1.default, { title: '\uC9C1\uD568', type: 'text', placeholder: mainProfileData.UserDetail.position, name: 'position', onChange: (e) => setPosition(e.target.value), value: position }), (0, jsx_runtime_1.jsxs)(IntroTextContainter, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "\uC790\uAE30\uC18C\uAC1C" }), (0, jsx_runtime_1.jsx)("textarea", { placeholder: mainProfileData.UserDetail.comment || '자기소개를 입력해주세요.', onChange: (e) => setIntro(e.target.value), value: intro })] }), (0, jsx_runtime_1.jsxs)(ButtonContainer, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { color: 'darkPurple', value: '\uC218\uC815\uC644\uB8CC', onClick: () => {
                            handleSubmit();
                        } }), (0, jsx_runtime_1.jsx)(Button_1.default, { color: 'white', value: '\uC218\uC815\uCDE8\uC18C', onClick: () => navigate('/mypage') })] })] }));
};
exports.default = MyPageEdit;
const ImageContainer = styled_components_1.default.div `
  position: relative;
  margin-bottom: 2rem;

  img {
    width: 10rem;
    border-radius: 50%;
    top: 50%;
    left: 50%;
  }

  label {
    position: absolute;
    top: 41%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 10rem;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    opacity: 0;

    &:hover {
      filter: grayscale(0.3) brightness(110%);
      transition: all 0.2s ease-in-out;
      opacity: 0.5;
    }

    input[type='file'] {
      display: none;
    }
  }
`;
const ButtonContainer = styled_components_1.default.div `
  width: 20rem;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;
const ProfileImg = styled_components_1.default.div `
  width: 10rem;
  height: 10rem;
  margin-bottom: 2rem;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const TrackPhaseContainer = styled_components_1.default.div `
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .track-container {
    width: 68%;
  }
  .phase-container {
    width: 30%;
  }
`;
const IntroTextContainter = styled_components_1.default.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  h3 {
    font-family: 'Noto Sans KR';
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
    height: 17rem;
    padding: 0.5rem 1rem;
    font-family: 'Inter';
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
const trackOptions = [
    { value: '트랙을 선택해 주세요', label: '트랙을 선택해 주세요' },
    { value: 'SW 트랙', label: 'SW 트랙' },
    { value: 'AI 트랙', label: 'AI 트랙' },
];
const phaseOptions = [
    { value: '기수', label: '기수' },
    { value: '1기', label: '1기' },
    { value: '2기', label: '2기' },
    { value: '3기', label: '3기' },
    { value: '4기', label: '4기' },
    { value: '5기', label: '5기' },
    { value: '6기', label: '6기' },
    { value: '7기', label: '7기' },
    { value: '8기', label: '8기' },
];
