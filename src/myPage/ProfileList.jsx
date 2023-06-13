import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import * as Style from './styledComponents/MyPageProfileStyle';
import profileListData from './data/profileListData';

const ProfileList = () => {
  const [mySkillList, setMySkillList] = useState([]);
  const [myCareerList, setMyCareerList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMySkillList();
    fetchMyCareerList();
  }, []);

  // 현재 나의 스킬 불러오기
  const fetchMySkillList = async () => {
    try {
      const response = await fetch('http://15.164.221.244:5000/api/skills/myskill', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
        },
      });
      if (response) {
        const data = await response.json();
        console.log(data);
        setMySkillList(data);
      } else {
        throw new Error('Failed to fetch mySkillList');
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 현재 나의 커리어 불러오기
  const fetchMyCareerList = async () => {
    try {
      const response = await fetch('http://15.164.221.244:5000/api/careers', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
        },
      });

      if (response) {
        const data = await response.json();
        setMyCareerList(data);
      } else {
        throw new Error('Failed to fetch myCareerList');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [myEduList, setMyEduList] = useState([
    {
      eduName: '🐰멋쟁이토끼처럼',
      program: '챗GPT 스쿨',
      totalStudyingDate: '6개월',
      content: 'AI 여친 만들기 트랙 이수',
      isCurrentlyStudying: false,
    },
  ]);

  const [urlList, setUrlList] = useState([
    {
      name: '지우쓰의 Github',
      url: 'https://github.com/ziuss76',
    },
  ]);

  return (
    <Style.ListContainer>
      <ul>
        {profileListData.map((item, index) => (
          <li key={index}>
            <h4>{item.title}</h4>
            {index === 0 && mySkillList.length > 0 ? (
              <SkillButtonContainer>
                {mySkillList.map((mySkill, index) => (
                  <div className='badge' key={index}>
                    {mySkill}
                  </div>
                ))}
              </SkillButtonContainer>
            ) : index === 1 && myCareerList.length > 0 ? (
              <SkillButtonContainer>
                {myCareerList.map((myCareer, index) => (
                  <div className='careerinfo' key={index}>
                    <H5>{`${myCareer.company_name} ${myCareer.position} ㅣ ${myCareer.content} ㅣ ${myCareer.totalWorkingDate}`}</H5>
                  </div>
                ))}
              </SkillButtonContainer>
            ) : index === 2 && myEduList.length > 0 ? (
              <SkillButtonContainer>
                {myEduList.map((myEdu, index) => (
                  <div className='eduinfo' key={index}>
                    <H5>{`${myEdu.eduName} ${myEdu.program} ㅣ ${myEdu.content} ㅣ ${myEdu.totalStudyingDate}`}</H5>
                  </div>
                ))}
              </SkillButtonContainer>
            ) : index === 3 && urlList.length > 0 ? (
              <SkillButtonContainer>
                {urlList.map((url, index) => (
                  <div className='badge' key={index}>
                    <a href={url.url} target='_blank' key={index}>
                      {url.name}
                    </a>
                  </div>
                ))}
              </SkillButtonContainer>
            ) : (
              <p className='list-content'>{item.content}</p>
            )}
            <button
              className='list-button'
              onClick={() => {
                navigate(item.url);
              }}
            >{`+ ${item.title} 추가`}</button>
          </li>
        ))}
      </ul>
    </Style.ListContainer>
  );
};

export default ProfileList;

const SkillButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0;

  .badge {
    position: relative;
    background-color: #ffffff;
    border: 1px solid #b9b9b9;
    padding: 8px 20px 9px 20px;
    border-radius: 2rem;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const H5 = styled.h5`
  font-weight: 400;
  font-size: 1.7rem;
  color: #424242;
  line-height: 3rem;
`;
