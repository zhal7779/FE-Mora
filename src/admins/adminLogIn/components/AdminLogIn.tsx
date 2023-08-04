import { useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';

import { useNavigate } from 'react-router-dom';
import { fetchLogInAdmin } from '../apis/logInApis';
import Header from '../../adminCommon/components/Header';
import {
  LogInTitle,
  LogInHeader,
  LogInButton,
  LogInOverlay,
  LogInSubTitle,
  LogInButtonBlock,
  LogInContentBlock,
  LogInContentInput,
} from '../styledComponents/LogInModal';

interface AdminInfo {
  email: string;
  password: string;
  [key: string]: string;
}

const AdminSignIn = () => {
  const [adminInfo, setAdminInfo] = useState<AdminInfo>({ email: '', password: '' });
  const firstInput = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (firstInput.current) {
      firstInput.current.focus();
    }
  }, []);

  const handleChangeAdminInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAdminInfo = { ...adminInfo };
    newAdminInfo[e.target.name] = e.target.value;

    setAdminInfo(newAdminInfo);
  };

  const handleSignIn = () => {
    alert('회원가입 페이지로 이동합니다.');
    navigate('/admin/signin');
  };

  const handleSubmit = () => {
    const result = confirm('로그인 하시겠습니까?');
    if (result) {
      logInAdmin();
    }
  };

  const { mutate: logInAdmin } = useMutation(async () => fetchLogInAdmin(adminInfo), {
    onSuccess(data) {
      if (Math.floor(data.statusCode / 100) !== 4) {
        alert('로그인 되었습니다.');
        sessionStorage.setItem('adminToken', data);
        navigate('/admin/posts');
      } else {
        alert('로그인에 실패했습니다!');
        sessionStorage.removeItem('adminToken');
      }
    },
  });

  return (
    <>
      <LogInOverlay />
      <Header />
      <LogInContentBlock className='modal-content-block'>
        <LogInHeader className='modal-header'>
          <LogInTitle className='modal-title'>관리자 로그인</LogInTitle>
        </LogInHeader>

        <LogInSubTitle>이메일</LogInSubTitle>
        <LogInContentInput
          value={adminInfo.email}
          onChange={handleChangeAdminInfo}
          name='email'
          ref={firstInput}
        />
        <LogInSubTitle>비밀번호</LogInSubTitle>
        <LogInContentInput
          type='password'
          value={adminInfo.password}
          onChange={handleChangeAdminInfo}
          name='password'
        />

        <LogInButtonBlock className='modal-button-block'>
          <LogInButton className='modal-button-submit' onClick={handleSignIn}>
            회원가입
          </LogInButton>
          <LogInButton className='modal-button-submit' onClick={handleSubmit} $purple>
            로그인
          </LogInButton>
        </LogInButtonBlock>
      </LogInContentBlock>
    </>
  );
};

export default AdminSignIn;
