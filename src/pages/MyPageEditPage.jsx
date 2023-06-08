import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LoginContainer from '../logIn/LogInContainer';
import MyPageEditInput from '../myPage/styledComponents/MyPageEditInput';
import MyPageEditSelect from '../myPage/styledComponents/MyPageEditSelect';
import Button from '../components/Button';
import profile from '../assets/images/profile.png';
import userPlusIcon from '../assets/icons/u_user-plus.svg';

const MyPageEdit = () => {
  const [userName, setUserName] = useState('');
  const [track, setTrack] = useState('');
  const [phase, setPhase] = useState('');
  const [position, setPosition] = useState('');
  const [intro, setIntro] = useState('');
  const navigate = useNavigate();

  const mainProfileData = {
    img: profile,
    name: '지우쓰',
    position: '당근마켓 프론트엔드 개발자',
    intro:
      'JavaScript를 이용한 개발 업무를 능숙히 처리할 수 있으며, 웹 표준 및 웹 접근성, 최적화에 대한 이해와 경험을 가지고 있는 프론트엔드 개발자입니다. 현재는 React, Next.js, Typescript를 활용한 개발 업무에 집중하고 있습니다. ',
  };

  const trackOptions = [
    { value: '트랙을 선택해 주세요', label: '트랙을 선택해 주세요' },
    { value: 'SW 엔지니어 트랙', label: 'SW 엔지니어 트랙' },
    { value: 'AI 트랙', label: 'AI 트랙' },
  ];
  const phaseOptions = [
    { value: '기수', label: '기수' },
    { value: '1기', label: '1기' },
    { value: '2기', label: '2기' },
    { value: '3기', label: '3기' },
    { value: '4기', label: '4기' },
    { value: '5기', label: '5기' },
    { value: '6기', label: '6기' },
    { value: '7기', label: '7기' },
    { value: '8기', label: '8기' },
  ];

  const handleTrackChange = (e) => {
    e.preventDefault();
    const selectedTrack = e.target.value;
    setTrack(selectedTrack);
    console.log(selectedTrack);
  };

  const handlePhaseChange = (e) => {
    e.preventDefault();
    const selectedPhase = e.target.value;
    setPhase(selectedPhase);
    console.log(selectedPhase);
  };

  return (
    <LoginContainer>
      <ImageContainer>
        <ProfileImg src={mainProfileData.img} alt='프로필'></ProfileImg>
        <img src={userPlusIcon}></img>
      </ImageContainer>
      <MyPageEditInput
        title='이름'
        type='text'
        placeholder={`${mainProfileData.name}`}
        name='userName'
        onChange={(e) => {
          e.preventDefault();
          setUserName(e.target.value);
        }}
        value={userName}
      />
      <TrackPhaseContainer>
        <div className='track-container'>
          <MyPageEditSelect
            title='트랙'
            options={trackOptions}
            name='track'
            onChange={handleTrackChange}
            value={track}
          />
        </div>
        <div className='phase-container'>
          <MyPageEditSelect
            title='기수'
            options={phaseOptions}
            name='phase'
            onChange={handlePhaseChange}
            value={phase}
          />
        </div>
      </TrackPhaseContainer>
      <MyPageEditInput
        title='직함'
        type='text'
        placeholder={`${mainProfileData.position}`}
        name='position'
        onChange={(e) => {
          e.preventDefault();
          setPosition(e.target.value);
        }}
        value={position}
      />
      <IntroTextContainter
        onChange={(e) => {
          e.preventDefault();
          setIntro(e.target.value);
        }}
        value={intro}
      >
        <h3>자기소개</h3>
        <textarea placeholder='간단히 자신을 소개해주세요'></textarea>
      </IntroTextContainter>
      <ButtonContainer>
        <Button
          color='darkPurple'
          value='수정완료'
          onClick={() => {
            navigate('/mypage');
          }}
        />
        <Button
          color='white'
          value='수정취소'
          onClick={() => {
            navigate('/mypage');
          }}
        />
      </ButtonContainer>
    </LoginContainer>
  );
};

export default MyPageEdit;

const ImageContainer = styled.div`
  position: relative;
  img:nth-child(2) {
    top: 46%;
    left: 52%;
    transform: translate(-50%, -50%);
    position: absolute;
    opacity: 0;
    filter: grayscale(0.3) brightness(300%);
  }
  &:hover {
    cursor: pointer;
    filter: grayscale(0.2) brightness(90%);
    transition: all 0.2s ease-in-out;
    img:nth-child(2) {
      opacity: 1;
      transition: all 0.2s ease-in-out;
    }
  }
`;
const ButtonContainer = styled.div`
  width: 20rem;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const ProfileImg = styled.img`
  width: 10rem;
  margin-bottom: 2rem;
  border-radius: 50%;
`;

const TrackPhaseContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .track-container {
    width: 68%;
  }
  .phase-container {
    width: 30%;
  }
`;

const IntroTextContainter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  h3 {
    font-family: 'Noto Sans KR';
    font-weight: 400;
    font-size: 1.7rem;
    line-height: 2rem;
    margin: 0;
    margin-right: 1.5rem;
    margin-bottom: 0.5rem;
  }
  textarea {
    border: 1px solid #d8e0e9;
    border-radius: 8px;
    width: 100%;
    height: 17rem;
    padding: 0.5rem 1rem;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;

    ::placeholder {
      padding-top: 0.3rem;
      font-size: 1.6rem;
      font-weight: 600;
      opacity: 0.35;
    }
  }
`;
