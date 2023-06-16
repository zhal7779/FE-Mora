import { useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';

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
import { useNavigate } from 'react-router-dom';
import { fetchSignInAdmin } from '../apis/signInApis';

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

    console.log(newAdminInfo);
    setAdminInfo(newAdminInfo);
  };

  const handleSubmit = () => {
    const result = confirm('회원가입 하시겠습니까?');
    if (result) {
      signInAdmin();
    }
  };

  const { mutate: signInAdmin, error } = useMutation(async () => fetchSignInAdmin(adminInfo), {
    onSuccess() {
      navigate('/admin/users');
    },
  });

  if (error) return <span>An error has occurred: {error.message}</span>;

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
          <SignInButton className='modal-button-submit' onClick={handleSubmit} $purple>
            가입
          </SignInButton>
        </SignInButtonBlock>
      </SignInContentBlock>
    </>
  );
};

export default AdminSignIn;

// {
// 	"name": "관리자1",
// 	"email": "admin1",
// 	"password": "1234"
// }
