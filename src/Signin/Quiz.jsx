import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react';
import LoginContainer from '../login/LoginContainer';
import Headline from '../login/Headline';
import LoginInput from '../login/LoginInput';
import LoginButton from '../login/LoginButton';
import LittleText from '../login/LittleText';
import turtleImg from '../assets/turtle.png';
import rabbitImg from '../assets/rabbit.png';

const Quiz = () => {
  const [answer, setAnswer] = useState('');
  const [showImage, setShowImage] = useState(false);
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    getOtherQuiz();
  }, []);

  useEffect(() => {
    setAnswer('');
    setShowImage(false);
  }, [randomIndex]);

  const quizList = [
    'ㅇㅇㅈ 매니저님의 이름은?',
    '잊지마 기억해 봇은 어떤 동물?',
    '정답을 맞추면 나오는 동물은?'
  ];
  const quizAns = ['이어진', '거북이', '토끼'];
  const quizHint = ['힌트는 20대 꽃미남', '힌트는 세 글자', '힌트는 두 글자'];

  const handleSubmit = () => {
    setShowImage(true);
  };

  const getOtherQuiz = () => {
    let nextIndex = randomIndex + 1;
    if (nextIndex >= quizList.length) {
      nextIndex = 0; // 문제가 마지막까지 갔다면 다시 처음으로 돌아갑니다.
    }
    setRandomIndex(nextIndex);
    setShowImage(false);

    const inputElement = document.querySelector('input[name="answer"]');
    if (inputElement) {
      inputElement.value = '';
    }
  };

  return (
    <LoginContainer>
      <Headline title="자, 여기서 퀴즈!" />

      <LoginInput
        title={quizList[randomIndex]}
        type="text"
        placeholder={quizHint[randomIndex]}
        name="answer"
        value={answer}
        onChange={e => {
          e.preventDefault();
          setAnswer(e.target.value);
          setShowImage(false);
        }}
      />

      <LoginButton color="darkPurple" value="제출" onClick={handleSubmit} />

      <LittleText text="퀴즈를 통과하면 회원가입으로 넘어갑니다!" />

      {/* 임시 이미지 사용중, 1초뒤에 회원가입 페이지로 넘어가기 */}

      {showImage && answer === quizAns[randomIndex] && (
        <AnimatedImage
          src={rabbitImg}
          alt="토끼 이미지"
          style={{ width: '50rem', height: '35rem' }}
        />
      )}
      {showImage && answer !== quizAns[randomIndex] && (
        <AnimatedImage
          src={turtleImg}
          alt="거북이 이미지"
          style={{ width: '60rem', height: '35rem' }}
        />
      )}

      <LoginButton
        color="lightPurple"
        value="다른 문제 풀기"
        onClick={() => {
          getOtherQuiz();
          setAnswer('');
        }}
      />
    </LoginContainer>
  );
};

export default Quiz;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(5rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedImage = styled.img`
  width: 50rem;
  height: 35rem;
  animation: ${fadeIn} 0.3s ease-in;
`;
