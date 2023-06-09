import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Style from './styledComponents/MyPageProfileStyle';
import profile from '../assets/images/profile.png';
import Button from '../components/Button';
import Modal from '../components/Modal';
import LoginInput from '../logIn/LogInInput';

const MainProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');

  const mainProfileData = {
    img: profile,
    name: '지우쓰',
    track: 'SW 엔지니어 트랙',
    phase: '4기',
    position: '당근마켓 프론트엔드 개발자',
    intro:
      'JavaScript를 이용한 개발 업무를 능숙히 처리할 수 있으며, 웹 표준 및 웹 접근성, 최적화에 대한 이해와 경험을 가지고 있는 프론트엔드 개발자입니다. 현재는 React, Next.js, Typescript를 활용한 개발 업무에 집중하고 있습니다. ',
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Style.introContainer>
      <div className='imgAndButtons'>
        <img src={mainProfileData.img} alt='프로필'></img>
        <div className='buttons-container'>
          <Style.ButtonLink to='/mypage/edit'>
            <Button color='darkPurple' value='수정하기' />
          </Style.ButtonLink>
          <Button color='white' value='탈퇴하기' onClick={openModal} />
        </div>
      </div>
      <h3>{mainProfileData.name}</h3>
      <h4>{`${mainProfileData.track} ${mainProfileData.phase}`}</h4>
      <h5>{mainProfileData.position}</h5>
      <div className='intro-container'>
        <p className='intro'>{mainProfileData.intro || ''}</p>
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
              <Button color='darkPurple' value='탈퇴' onClick={closeModal} />
            </div>
          </div>
        </Modal>
      )}
    </Style.introContainer>
  );
};

const ProfileList = () => {
  const navigate = useNavigate();
  const profileListData = [
    {
      title: '스킬',
      content: '내 전문성을 보여줄 수 있는 스킬을 등록해 보세요.',
      url: '/mypage/skill',
    },
    {
      title: '경력',
      content: '지금 하고 있는 일, 혹은 이전에 한 일을 알려주세요.',
      url: '/mypage/career',
    },
    {
      title: '교육',
      content: '현재 혹은 이전에 다녔던 학교, 부트캠프 등 교육 기관을 입력해주세요.',
      url: '/mypage/education',
    },
    {
      title: '링크',
      content: '깃헙, 블로그, SNS등 다양한 링크로 나를 표현해보세요.',
      url: '/mypage/link',
    },
  ];

  return (
    <Style.ListContainer>
      <ul>
        {profileListData.map((item, index) => (
          <li key={index}>
            <h4>{item.title}</h4>
            <p className='list-content'>{item.content}</p>
            <button
              className='list-button'
              onClick={() => {
                navigate(`${item.url}`);
              }}
            >{`+ ${item.title} 추가`}</button>
          </li>
        ))}
      </ul>
    </Style.ListContainer>
  );
};

const MyPageProfile = () => {
  return (
    <Style.PostContainer>
      <MainProfile />
      <ProfileList />
    </Style.PostContainer>
  );
};

export default MyPageProfile;
