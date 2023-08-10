import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginContainer from '../logIn/LogInContainer';
import Headline from '../logIn/Headline';
import LoginInput from '../logIn/LogInInput';
import LoginButton from '../logIn/LogInButton';
import LittleText from '../logIn/LittleText';
import upIcon from '../assets/icons/u_angle-up.svg';
import downIcon from '../assets/icons/u_angle-down.svg';

import { useMutation } from 'react-query';
import styled, { keyframes } from 'styled-components';
const URL = process.env.REACT_APP_URL;

interface AccordionButtonProps {
  expanded: boolean;
  onClick: () => void;
}

const Signin = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLittleText, setShowLittleText] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const [expanded, setExpanded] = useState<boolean>(false);
  const firstChildRef = useRef<HTMLInputElement>(null);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (expanded && firstChildRef.current) {
      firstChildRef.current.focus();
    }
  }, [expanded]);

  // 유효성 검사용 ref 선언
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  // 회원가입 POST 요청 Mutation 선언
  const signinMutation = useMutation(async () => {
    const url = `${URL}/api/users/register`;
    const data = {
      name: userName,
      email: email,
      password: password,
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    console.log(responseData);

    if (response.ok) {
      return responseData;
    } else {
      throw new Error(responseData.message);
    }
  });

  // 이메일 형식 및 비밀번호 유효성 검사
  const handleSignin = async () => {
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!emailRegex.test(email)) {
      setErrorMessage('지메일 형식을 확인해 주세요!');
      emailInputRef.current!.focus();
      return;
    }
    if (!passwordRegex.test(password)) {
      setErrorMessage('비밀번호 형식을 확인해 주세요!');
      passwordInputRef.current!.focus();
      return;
    }
    // 회원가입 POST 요청 Mutation 실행
    await signinMutation.mutateAsync();
  };

  // 유효성 에러 메시지 띄우기
  useEffect(() => {
    if (errorMessage) {
      setShowLittleText(true);
      const timer = setTimeout(() => {
        setErrorMessage('');
        setShowLittleText(false);
      }, 1500);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [errorMessage]);

  // 회원가입 성공 시 로그인 페이지로 이동
  if (signinMutation.isSuccess) {
    navigate('/login');
  }

  return (
    <LoginContainer>
      <Headline title='엘리스 갱스터 회원 가입 🕶️' />
      <AccordionButton onClick={toggleAccordion} expanded={expanded}>
        이메일로 시작하기
        {expanded ? (
          <AccordionIcon src={upIcon} alt='Up Icon' />
        ) : (
          <AccordionIcon src={downIcon} alt='Down Icon' />
        )}
      </AccordionButton>
      <AccordionContent expanded={expanded}>
        <LoginInput
          title='성함'
          type='text'
          placeholder='성함을 입력해주세요.'
          name='userName'
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          ref={firstChildRef}
        />
        <LoginInput
          title='지메일'
          type='text'
          placeholder='사용중인 지메일을 입력해주세요.'
          name='userEmail'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          ref={emailInputRef}
        />
        <LoginInput
          title='비밀번호'
          type='password'
          placeholder='영문, 숫자 포함 8자 이상입니다.'
          name='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          ref={passwordInputRef}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSignin();
            }
          }}
        />
        <LoginButton color='darkPurple' value='회원가입' onClick={handleSignin} />
      </AccordionContent>

      {showLittleText ? (
        <LittleText wiggle text={errorMessage} />
      ) : (
        <Link to='/login'>
          <LittleText wiggle text='이미 회원이신가요? 로그인하기' />
        </Link>
      )}
    </LoginContainer>
  );
};

export default Signin;

const AccordionIcon = styled.img`
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin: 0 0 0.4rem 0.7rem;
`;

const AccordionButton = styled.button<AccordionButtonProps>`
  display: inline-block;
  width: 35.2rem;
  height: 48px;
  margin-top: 0.3rem;
  border-radius: 1.2rem;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  background-color: #7353ea;
  color: #ffffff;
  padding: 11px 21px 9px 21px;
  cursor: pointer;

  &:hover {
    background: #5e3de4;
    transition: all 0.2s ease-in-out;
  }
  &:not(:hover) {
    background: #7353ea;
    transition: all 0.2s ease-in-out;
  }
  &:active {
    background: #532eda;
    transition: all 0.2s ease-in-out;
  }
`;

const AccordionContent = styled.div<{ expanded: boolean }>`
  background-color: #ffffff;
  padding: 10px;
  margin-top: 10px;
  animation: ${({ expanded }) => (expanded ? slideDown : slideUp)} 0.3s ease-in-out;
  max-height: ${({ expanded }) => (expanded ? '500px' : '0')};
  opacity: ${({ expanded }) => (expanded ? '1' : '0')};
  overflow: hidden;
`;

const slideDown = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 420px;
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    max-height: 420px;
    opacity: 1;
  }
  to {
    max-height: 0;
    opacity: 0;
  }
`;
