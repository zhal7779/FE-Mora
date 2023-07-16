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
const styled_components_1 = __importStar(require("styled-components"));
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const LogInContainer_1 = __importDefault(require("../logIn/LogInContainer"));
const Headline_1 = __importDefault(require("../logIn/Headline"));
const LogInInput_1 = __importDefault(require("../logIn/LogInInput"));
const LogInButton_1 = __importDefault(require("../logIn/LogInButton"));
const LittleText_1 = __importDefault(require("../logIn/LittleText"));
const turtle_png_1 = __importDefault(require("../assets/images/turtle.png"));
const rabbit_png_1 = __importDefault(require("../assets/images/rabbit.png"));
const answerSound_mp3_1 = __importDefault(require("../assets/sounds/answerSound.mp3"));
const errorSound_mp3_1 = __importDefault(require("../assets/sounds/errorSound.mp3"));
const react_query_1 = require("react-query");
const URL = process.env.REACT_APP_URL;
const Quiz = () => {
    const [answer, setAnswer] = (0, react_1.useState)('');
    const [showImage, setShowImage] = (0, react_1.useState)(false);
    const [quizIndex, setQuizIndex] = (0, react_1.useState)(0);
    const [countdown, setCountdown] = (0, react_1.useState)(null);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const inputRef = (0, react_1.useRef)(null);
    // 퀴즈 불러오고 정리하기
    const quizQuery = (0, react_query_1.useQuery)('quiz', () => fetch(`${URL}/api/quizs`).then((response) => response.json()));
    const quizData = quizQuery.data;
    const quizList = [];
    const quizAns = [];
    const quizHint = [];
    if (quizData) {
        quizData.forEach(({ question, answer, hint }) => {
            quizList.push(question);
            quizAns.push(answer);
            quizHint.push(hint);
        });
    }
    // 새로고침시 다른 퀴즈 보여주기
    // useEffect(() => {
    //   getOtherQuiz();
    // }, []);
    // 인풋에 자동 포커스
    (0, react_1.useEffect)(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [quizList]);
    // 다른 퀴즈로 넘어가면 state 초기화
    (0, react_1.useEffect)(() => {
        setAnswer('');
        setShowImage(false);
        setCountdown(null);
    }, [quizIndex]);
    // submit 하면 이미지 보여줄 준비
    const handleSubmit = () => {
        setShowImage(true);
    };
    // 성공과 실패 소리 준비
    const playSound = (sound) => {
        const audio = new Audio(sound);
        audio.play();
    };
    // 다른 퀴즈 불러오기 1 2 3 1 2 3 순서
    const getOtherQuiz = () => {
        let nextIndex = quizIndex + 1;
        if (nextIndex >= quizList.length) {
            nextIndex = 0; // 문제가 마지막까지 갔다면 다시 처음으로
        }
        setQuizIndex(nextIndex);
        setShowImage(false);
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };
    // 성공과 실패 판정하고 알맞은 소리 들려주기
    (0, react_1.useEffect)(() => {
        let initialCountdown = 5;
        if (showImage) {
            if (answer === quizData[quizIndex].answer) {
                playSound(answerSound_mp3_1.default);
                setCountdown(initialCountdown);
            }
            else {
                playSound(errorSound_mp3_1.default);
            }
        }
    }, [showImage]);
    // 5 4 3 2 1 후 회원가입으로 이동
    (0, react_1.useEffect)(() => {
        if (countdown !== null) {
            if (countdown === 0) {
                navigate('/signin');
            }
            else {
                const countdownTimeout = setTimeout(() => {
                    setCountdown((prevCountdown) => prevCountdown - 1);
                }, 1000);
                return () => clearTimeout(countdownTimeout);
            }
        }
    }, [countdown]);
    return ((0, jsx_runtime_1.jsxs)(LogInContainer_1.default, { children: [(0, jsx_runtime_1.jsx)(Headline_1.default, { title: '\uC790, \uC5EC\uAE30\uC11C \uD034\uC988!' }), (0, jsx_runtime_1.jsx)(LogInInput_1.default, { title: quizList[quizIndex], type: 'text', placeholder: quizHint[quizIndex], name: 'answer', value: answer, onChange: (e) => {
                    e.preventDefault();
                    setAnswer(e.target.value);
                    setShowImage(false);
                }, ref: inputRef, onKeyDown: (e) => {
                    if (e.key === 'Enter') {
                        handleSubmit();
                    }
                } }), (0, jsx_runtime_1.jsx)(LogInButton_1.default, { color: 'darkPurple', value: '\uC81C\uCD9C', onClick: handleSubmit }), (0, jsx_runtime_1.jsx)(LittleText_1.default, { wiggle: true, text: countdown !== null
                    ? `${countdown}초 뒤 회원가입으로 넘어갑니다!`
                    : '퀴즈를 통과하면 회원가입으로 넘어갑니다!' }), showImage && answer === quizAns[quizIndex] && ((0, jsx_runtime_1.jsx)(AnimatedRabbit, { src: rabbit_png_1.default, style: { width: '25rem', height: '27rem' } })), showImage && answer !== quizAns[quizIndex] && ((0, jsx_runtime_1.jsx)(AnimatedTurtle, { src: turtle_png_1.default, style: { width: '25rem', height: '25rem' } })), countdown === null && ((0, jsx_runtime_1.jsx)(LogInButton_1.default, { color: 'lightPurple', value: '\uB2E4\uB978 \uBB38\uC81C \uD480\uAE30', onClick: () => {
                    getOtherQuiz();
                    setAnswer('');
                } }))] }));
};
exports.default = Quiz;
const popUp = (0, styled_components_1.keyframes) `
  from {
    transform: translateY(8rem);
  }
  to {
    transform: translateY(0);
  }
`;
const AnimatedRabbit = styled_components_1.default.img `
  width: 50rem;
  height: 35rem;
  animation: ${popUp} 1.5s;
`;
const AnimatedTurtle = styled_components_1.default.img `
  width: 50rem;
  height: 35rem;
  animation: ${popUp} 0.5s;
`;
