import { useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';

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
import { useNavigate } from 'react-router-dom';
import { fetchLogInAdmin } from '../apis/logInApis';
import Header from '../../adminCommon/components/Header';

const AdminSignIn = () => {
  const [adminInfo, setAdminInfo] = useState({ email: '', password: '' });
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

  const handleSubmit = () => {
    const result = confirm('로그인 하시겠습니까?');
    if (result) {
      logInAdmin();
    }
  };

  const {
    data: adminToken,
    mutate: logInAdmin,
    error,
  } = useMutation(async () => fetchLogInAdmin(adminInfo), {
    onSuccess(adminToken) {
      sessionStorage.setItem('adminToken', adminToken);
      navigate('/admin/users');
    },
  });

  if (error) return <span>An error has occurred: {error.message}</span>;

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
          <LogInButton className='modal-button-submit' onClick={handleSubmit} $purple>
            로그인
          </LogInButton>
        </LogInButtonBlock>
      </LogInContentBlock>
    </>
  );
};

export default AdminSignIn;

// {
// 	"name": "관리자1",
// 	"email": "admin1",
// 	"password": "1234"
// }
