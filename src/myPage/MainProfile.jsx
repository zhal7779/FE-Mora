import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import * as Style from './styledComponents/MyPageProfileStyle';
import Button from '../components/Button';
import Modal from '../components/Modal';
import LoginInput from '../logIn/LogInInput';

const MainProfile = ({ mainProfileData }) => {
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // 유저 탈퇴 DELETE 뮤테이션 선언
  const deleteAccountMutation = useMutation(async () => {
    const url = 'http://15.164.221.244:5000/api/users/delete';

    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
      },
      body: JSON.stringify({ password }),
    });

    const responseData = await response.json();
    return responseData;
  });

  // 위에 선언한 DELETE 뮤테이션 실행
  const handleDeleteAccount = async () => {
    try {
      await deleteAccountMutation.mutateAsync();
      sessionStorage.removeItem('userToken');
      closeModal();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  // 유저 토큰이 없으면 로그인 페이지로
  useEffect(() => {
    if (!sessionStorage.getItem('userToken')) {
      navigate('/login');
    }
  }, []);

  console.log(mainProfileData);

  // mainProfileData(유저 상세 정보)를 늦게 가져오면 생기는 이미지 없음 에러 방지
  // if (!mainProfileData || !mainProfileData.UserDetail || !mainProfileData.UserDetail.img_path) {
  //   return null;
  // }

  if (!mainProfileData) {
    return null;
  }

  return (
    <Style.introContainer>
      <div className='imgAndButtons'>
        <img src={mainProfileData.UserDetail.img_path} alt='프로필'></img>
        <div className='buttons-container'>
          <Style.ButtonLink to='/mypage/edit'>
            <Button color='darkPurple' value='수정하기' />
          </Style.ButtonLink>
          <Button color='white' value='탈퇴하기' onClick={openModal} />
        </div>
      </div>
      <h3>{mainProfileData.name}</h3>
      <h4>{mainProfileData.UserDetail.generation}</h4>
      <h5>{mainProfileData.UserDetail.position}</h5>
      <div className='intro-container'>
        <p className='intro'>
          {mainProfileData.UserDetail.comment ||
            '수정하기 버튼을 눌러 간단한 자기소개를 입력해주세요!'}
        </p>
      </div>

      {showModal && (
        <Modal width='50rem'>
          <div className='modal-container'>
            <LoginInput
              title='탈퇴하시려면 비밀번호를 입력해주세요'
              type='password'
              placeholder='비밀번호 입력'
              name='password'
              onChange={(e) => {
                e.preventDefault();
                setPassword(e.target.value);
              }}
              value={password}
            />
            <div className='modal-buttons-container'>
              <Button color='white' value='취소' onClick={closeModal} />
              <Button
                color='darkPurple'
                value='탈퇴'
                onClick={() => {
                  handleDeleteAccount();
                  navigate('/');
                }}
              />
            </div>
          </div>
        </Modal>
      )}
    </Style.introContainer>
  );
};

export default MainProfile;
