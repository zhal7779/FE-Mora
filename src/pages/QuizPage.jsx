import styled, { keyframes } from 'styled-components';
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

const Quiz = () => {
  const [answer, setAnswer] = useState('');
  const [showImage, setShowImage] = useState(false);
  const [randomIndex, setRandomIndex] = useState(0);
  const [countdown, setCountdown] = useState(null);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    getOtherQuiz();
  }, []);

  useEffect(() => {
    setAnswer('');
    setShowImage(false);
    setCountdown(null);
  }, [randomIndex]);

  const quizList = [
    'ㅇㅇㅈ 매니저님의 이름은?',
    '잊지마 기억해 봇은 어떤 동물?',
    '정답을 맞추면 나오는 동물은?',
  ];
  const quizAns = ['이어진', '거북이', '토끼'];
  const quizHint = ['힌트는 20대 꽃미남', '힌트는 세 글자', '힌트는 두 글자'];

  const handleSubmit = () => {
    setShowImage(true);
  };

  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };

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

  useEffect(() => {
    if (showImage) {
      if (answer === quizAns[randomIndex]) {
        playSound(answerSound);
        setCountdown(5);
      } else {
        playSound(errorSound);
      }
    }
  }, [showImage]);

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
      />

      <LoginButton color='darkPurple' value='제출' onClick={handleSubmit} />
      <LittleText
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

      <LoginButton
        color='lightPurple'
        value='다른 문제 풀기'
        onClick={() => {
          getOtherQuiz();
          setAnswer('');
        }}
      />
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
