import { useState, useEffect } from 'react';
import LoginContainer from '../Login/LoginContainer';
import Headline from '../Login/Headline';
import LoginInput from '../Login/LoginInput';
import LoginButton from '../Login/LoginButton';
import LittleText from '../Login/LittleText';
import turtleImg from '../assets/turtle.png';
import rabbitImg from '../assets/rabbit.png';

const Quiz = () => {
  const [answer, setAnswer] = useState('');
  const [showImage, setShowImage] = useState(false);
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    getRandomQuiz();
  }, []);

  useEffect(() => {
    setAnswer('');
    setShowImage(false);
  }, [randomIndex]);

  const quizList = [
    'ㅇㅇㅈ 매니저님의 이름은?',
    '잊지마 기억해 봇은 어떤 동물?',
    '문제 정답을 맞추면 나오는 동물은?',
  ];
  const quizAns = ['이어진', '거북이', '이고잉'];
  const quizHint = ['힌트는 20대 꽃미남', '힌트는 세 글자', '힌트는 두 글자'];

  const handleSubmit = () => {
    e.preventDefault();
    if (answer === quizAns[randomIndex]) {
      setShowImage(true);
    }
  };

  const getRandomQuiz = () => {
    console.log(answer);
    const index = Math.floor(Math.random() * quizList.length);
    setRandomIndex(index);
    setAnswer('');
    setShowImage(false);
  };

  return (
    <LoginContainer>
      <Headline title='자, 여기서 퀴즈!' onClick={handleSubmit} />

      <LoginInput
        title={quizList[randomIndex]}
        type='text'
        placeholder={quizHint[randomIndex]}
        name='userName'
        value={answer}
        onChange={(e) => {
          e.preventDefault();
          setAnswer(e.target.value);
          console.log(answer);
        }}
      />

      <LoginButton color='darkPurple' value='제출' onClick={handleSubmit} />

      <LittleText text='퀴즈를 통과해야 회원가입으로 넘어갑니다!' />

      {showImage && answer === quizAns[randomIndex] && <img src={rabbitImg} alt='토끼 이미지' />}
      {showImage && answer !== quizAns[randomIndex] && <img src={turtleImg} alt='거북이 이미지' />}

      <LoginButton color='lightPurple' value='다른 문제 풀기' onClick={getRandomQuiz} />
    </LoginContainer>
  );
};

export default Quiz;
