import styled, { keyframes, css } from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginContainer from '../logIn/LogInContainer';
import Headline from '../logIn/Headline';
import LoginInput from '../logIn/LogInInput';
import LoginButton from '../logIn/LogInButton';
import LittleText from '../logIn/LittleText';
import turtleImg from '../assets/images/turtle.png';
import rabbitImg from '../assets/images/rabbit.png';
import answerSound from '../assets/sounds/answerSound.mp3';
import errorSound from '../assets/sounds/errorSound.mp3';
import { useQuery } from 'react-query';
const URL = process.env.REACT_APP_URL;

interface QuizDataItem {
  question: string;
  answer: string;
  hint: string;
}

const Quiz = () => {
  const [answer, setAnswer] = useState('');
  const [showImage, setShowImage] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [countdown, setCountdown] = useState<null | number>(null);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  // 퀴즈 불러오고 정리하기
  const quizQuery = useQuery('quiz', () =>
    fetch(`${URL}/api/quizs`).then((response) => response.json())
  );

  const quizData = quizQuery.data;

  const quizList: string[] = [];
  const quizAns: string[] = [];
  const quizHint: string[] = [];

  if (quizData) {
    quizData.forEach(({ question, answer, hint }: QuizDataItem) => {
      quizList.push(question);
      quizAns.push(answer);
      quizHint.push(hint);
    });
  }

  // 인풋에 자동 포커스
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [quizList]);

  // 다른 퀴즈로 넘어가면 state 초기화
  useEffect(() => {
    setAnswer('');
    setShowImage(false);
    setCountdown(null);
  }, [quizIndex]);

  // submit 하면 이미지 보여줄 준비
  const handleSubmit = () => {
    setShowImage(true);
  };

  // 성공과 실패 소리 준비
  const playSound = (sound: string) => {
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
  useEffect(() => {
    let initialCountdown: number | null = 5;
    if (showImage) {
      if (answer === quizData[quizIndex].answer) {
        playSound(answerSound);
        setCountdown(initialCountdown);
      } else {
        playSound(errorSound);
      }
    }
  }, [showImage]);

  // 5 4 3 2 1 후 회원가입으로 이동
  useEffect(() => {
    if (countdown !== null) {
      if (countdown === 0) {
        navigate('/signin');
      } else {
        const countdownTimeout = setTimeout(() => {
          setCountdown((prevCountdown) => prevCountdown! - 1);
        }, 1000);

        return () => clearTimeout(countdownTimeout);
      }
    }
  }, [countdown]);

  return (
    <LoginContainer>
      <Headline title='자, 여기서 퀴즈!' />
      <LoginInput
        title={quizList[quizIndex]}
        type='text'
        placeholder={quizHint[quizIndex]}
        name='answer'
        value={answer}
        onChange={(e) => {
          e.preventDefault();
          setAnswer(e.target.value);
          setShowImage(false);
        }}
        ref={inputRef}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSubmit();
          }
        }}
      />
      <LoginButton color='darkPurple' value='제출' onClick={handleSubmit} />
      <LittleText
        wiggle
        text={
          countdown !== null
            ? `${countdown}초 뒤 회원가입으로 넘어갑니다!`
            : '퀴즈를 통과하면 회원가입으로 넘어갑니다!'
        }
      />

      {showImage && answer === quizAns[quizIndex] && (
        <AnimatedRabbit src={rabbitImg} style={{ width: '25rem', height: '27rem' }} />
      )}
      {showImage && answer !== quizAns[quizIndex] && (
        <AnimatedTurtle src={turtleImg} style={{ width: '25rem', height: '25rem' }} />
      )}

      {countdown === null && (
        <LoginButton
          color='lightPurple'
          value='다른 문제 풀기'
          onClick={() => {
            getOtherQuiz();
            setAnswer('');
          }}
        />
      )}
    </LoginContainer>
  );
};

export default Quiz;

const popUp = keyframes`
  from {
    transform: translateY(8rem);
  }
  to {
    transform: translateY(0);
  }
`;

const AnimatedRabbit = styled.img`
  width: 50rem;
  height: 35rem;
  animation: ${popUp} 1.5s;
`;

const AnimatedTurtle = styled.img`
  width: 50rem;
  height: 35rem;
  animation: ${popUp} 0.5s;
`;
