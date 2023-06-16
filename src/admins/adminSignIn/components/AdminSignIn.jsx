import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

import { fetchSignInAdmin } from '../apis/signInApis';
import Header from '../../adminCommon/components/Header';
import {
  SignInTitle,
  SignInHeader,
  SignInButton,
  SignInOverlay,
  SignInSubTitle,
  SignInButtonBlock,
  SignInContentBlock,
  SignInContentInput,
} from '../styledComponents/SignInModal';

const AdminSignIn = () => {
  const [adminInfo, setAdminInfo] = useState({ email: '', name: '', password: '' });
  const firstInput = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    firstInput.current.focus();
  }, []);

  const handleChangeAdminInfo = (e) => {
    const newAdminInfo = { ...adminInfo };
    newAdminInfo[e.target.name] = e.target.value;

    setAdminInfo(newAdminInfo);
  };

  const handleLogIn = () => {
    alert('로그인 페이지로 이동합니다.');
    navigate('/admin/login');
  };

  const handleSubmit = () => {
    const result = confirm('회원가입 하시겠습니까?');
    if (result) {
      signInAdmin();
    }
  };

  const { mutate: signInAdmin, error } = useMutation(async () => fetchSignInAdmin(adminInfo), {
    onSuccess() {
      alert('회원가입이 완료되었습니다.');
      navigate('/admin/login');
    },
  });

  return (
    <>
      <SignInOverlay />
      <Header />
      <SignInContentBlock className='modal-content-block'>
        <SignInHeader className='modal-header'>
          <SignInTitle className='modal-title'>관리자 회원가입</SignInTitle>
        </SignInHeader>

        <SignInSubTitle>이메일</SignInSubTitle>
        <SignInContentInput
          value={adminInfo.email}
          onChange={handleChangeAdminInfo}
          name='email'
          ref={firstInput}
        />
        <SignInSubTitle>비밀번호</SignInSubTitle>
        <SignInContentInput
          type='password'
          value={adminInfo.password}
          onChange={handleChangeAdminInfo}
          name='password'
        />
        <SignInSubTitle>이름</SignInSubTitle>
        <SignInContentInput value={adminInfo.name} onChange={handleChangeAdminInfo} name='name' />

        <SignInButtonBlock className='modal-button-block'>
          <SignInButton className='modal-button-submit' onClick={handleLogIn}>
            로그인
          </SignInButton>
          <SignInButton className='modal-button-submit' onClick={handleSubmit} $purple>
            가입
          </SignInButton>
        </SignInButtonBlock>
      </SignInContentBlock>
    </>
  );
};

export default AdminSignIn;
