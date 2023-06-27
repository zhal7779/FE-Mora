import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import LoginContainer from '../logIn/LogInContainer';
import Headline from '../logIn/Headline';
import LoginInput from '../logIn/LogInInput';
import LoginButton from '../logIn/LogInButton';
import LittleText from '../logIn/LittleText';
const URL = process.env.REACT_APP_URL;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showLittleText, setShowLittleText] = useState(false);
  const navigate = useNavigate();
  const emailInputRef = useRef(null);

  // 로그인 POST 요청 Mutation 실행
  const handleLogin = async () => {
    await loginMutation.mutateAsync();
  };

  // 유저토큰이 있으면 커뮤니티 페이지로 이동
  useEffect(() => {
    if (sessionStorage.getItem('userToken')) {
      navigate('/community/post/free');
    }
  }, [navigate]);

  // 컴포넌트 로드 시 이메일 입력란에 포커스 주기
  useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, []);

  // 로그인 실패시 에러 텍스트 띄우기
  useEffect(() => {
    if (message) {
      setShowLittleText(true);
      const timer = setTimeout(() => {
        setMessage('');
        setShowLittleText(false);
      }, 1500);
      return () => {
        clearTimeout(timer);
      };
    } else {
      setShowLittleText(false);
    }
  }, [message]);

  // 로그인 POST 요청 Mutation 선언
  const loginMutation = useMutation(
    async () => {
      const url = `${URL}/api/users/login`;
      const data = {
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
      return responseData; // 토큰 반환
    },
    // 로그인 성공 시 커뮤니티 페이지로 이동
    {
      onSuccess: (data) => {
        const { token, message: responseMessage } = data;
        if (responseMessage === '로그인에 성공하셨습니다!') {
          sessionStorage.setItem('userToken', token);
          navigate('/community/post/free');
        } else {
          setMessage(responseMessage);
        }
      },
    }
  );

  return (
    <LoginContainer>
      <Headline title='로그인' />
      <LoginInput
        title='이메일'
        type='text'
        placeholder='이메일 입력'
        name='userEmail'
        onChange={(e) => {
          e.preventDefault();
          setEmail(e.target.value);
        }}
        value={email}
        ref={emailInputRef}
      />
      <LoginInput
        title='비밀번호'
        type='password'
        placeholder='비밀번호 입력'
        name='password'
        onChange={(e) => {
          e.preventDefault();
          setPassword(e.target.value);
        }}
        value={password}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleLogin();
          }
        }}
      />
      <LoginButton color='darkPurple' value='이메일로 계속하기' onClick={handleLogin} />

      {showLittleText ? (
        <LittleText wiggle text={message} />
      ) : (
        <Link to='/quiz'>
          <LittleText wiggle text='아직 회원이 아니신가요? 3초 만에 가입하기' />
        </Link>
      )}
    </LoginContainer>
  );
};

export default Login;
