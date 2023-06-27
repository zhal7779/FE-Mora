import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginContainer from '../logIn/LogInContainer';
import Headline from '../logIn/Headline';
import LoginInput from '../logIn/LogInInput';
import LoginButton from '../logIn/LogInButton';
import LittleText from '../logIn/LittleText';
import SigninAccordion from '../signIn/SignInAccordion';
import { useMutation } from 'react-query';
const URL = process.env.REACT_APP_URL;

const Signin = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLittleText, setShowLittleText] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // 유효성 검사용 ref 선언
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

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
      emailInputRef.current.focus();
      return;
    }
    if (!passwordRegex.test(password)) {
      setErrorMessage('비밀번호 형식을 확인해 주세요!');
      passwordInputRef.current.focus();
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
      <SigninAccordion>
        <LoginInput
          title='성함'
          type='text'
          placeholder='성함을 입력해주세요.'
          name='userName'
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
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
      </SigninAccordion>

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
