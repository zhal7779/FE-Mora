import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import * as Style from './styledComponents/MyPageProfileStyle';
import Button from '../components/Button';
import Modal from '../components/Modal';
import LoginInput from '../logIn/LogInInput';
import { useQuery } from 'react-query';
import noDataImage from '../assets/images/no-data-image.svg';
const URL = process.env.REACT_APP_URL;

const MainProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');
  const userToken = sessionStorage.getItem('userToken');
  const navigate = useNavigate();
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${userToken}`,
  };

  // 유저 토큰이 없으면 로그인 페이지로
  useEffect(() => {
    if (!userToken) {
      navigate('/login');
    }
  }, []);

  // mainProfileData (유저 프로필 정보) 가져오기
  const mainProfileDataQuery = useQuery(
    'mainProfileData',
    () =>
      fetch(`${URL}/api/users/mypage`, {
        headers: headers,
      }).then((response) => response.json()),
    {
      staleTime: Infinity,
    }
  );

  const mainProfileData = mainProfileDataQuery.data;

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // 유저 탈퇴 DELETE 뮤테이션 선언
  const deleteAccountMutation = useMutation(async () => {
    const url = `${URL}/api/users/delete`;

    const response = await fetch(url, {
      method: 'DELETE',
      headers: headers,
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
      toggleModal();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Style.introContainer>
      {mainProfileData ? (
        <>
          <div className='imgAndButtons'>
            <div className='img-container'>
              <img src={mainProfileData.UserDetail.img_path} alt='프로필' />
            </div>

            <div className='buttons-container'>
              <Button
                color='darkPurple'
                value='수정하기'
                onClick={() => navigate('/mypage/edit')}
              />
              <Button color='white' value='탈퇴하기' onClick={toggleModal} />
            </div>
          </div>
          <h3>{mainProfileData.name}</h3>
          <h4>{mainProfileData.UserDetail.generation}</h4>
          <h5>{mainProfileData.UserDetail.position || '직책을 입력해 주세요.'}</h5>
          <div className='intro-container'>
            <p className='intro'>
              {mainProfileData.UserDetail.comment ||
                '수정하기 버튼을 눌러 간단한 자기소개를 입력해주세요!'}
            </p>
          </div>
        </>
      ) : (
        <NoDataContainer>
          <h2>로딩중 이에요..</h2>
          <img src={noDataImage} alt='noDataImage'></img>
        </NoDataContainer>
      )}

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
              <Button color='white' value='취소' onClick={toggleModal} />
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

const NoDataContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  img {
    width: 50%;
    height: 100vh;
  }
  h2 {
    font-weight: 600;
    font-size: 1.7rem;
    color: #424242;
  }
`;
