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

const Quiz = () => {
  const [answer, setAnswer] = useState('');
  const [showImage, setShowImage] = useState(false);
  const [randomIndex, setRandomIndex] = useState(0);
  const [countdown, setCountdown] = useState(null);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  // 퀴즈 불러오고 정리하기
  const quizQuery = useQuery('quiz', () =>
    fetch(`${URL}/api/quizs`).then((response) => response.json())
  );

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

  // 다른 퀴즈로 넘어가면 state 초기화
  useEffect(() => {
    setAnswer('');
    setShowImage(false);
    setCountdown(null);
  }, [randomIndex]);

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
    let nextIndex = randomIndex + 1;
    if (nextIndex >= quizList.length) {
      nextIndex = 0; // 문제가 마지막까지 갔다면 다시 처음으로
    }
    setRandomIndex(nextIndex);
    setShowImage(false);

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  // 성공과 실패 판정하고 알맞은 소리 들려주기
  useEffect(() => {
    if (showImage) {
      if (answer === quizData[randomIndex].answer) {
        playSound(answerSound);
        setCountdown(5);
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
          setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        return () => clearTimeout(countdownTimeout);
      }
    }
  }, [countdown]);

  return (
    <LoginContainer>
      <Headline title='자, 여기서 퀴즈!' />

      <LoginInput
        title={quizList[randomIndex]}
        type='text'
        placeholder={quizHint[randomIndex]}
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
      <div style={{ height: '2rem' }}></div>
      <LittleText
        wiggle
        text={
          countdown !== null
            ? `${countdown}초 뒤 회원가입으로 넘어갑니다!`
            : '퀴즈를 통과하면 회원가입으로 넘어갑니다!'
        }
      />

      {showImage && answer === quizAns[randomIndex] && (
        <AnimatedRabbit src={rabbitImg} style={{ width: '25rem', height: '27rem' }} />
      )}
      {showImage && answer !== quizAns[randomIndex] && (
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
