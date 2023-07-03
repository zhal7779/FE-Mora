import { useQuery, useMutation, useQueryClient } from 'react-query';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import * as Style from './styledComponents/MyPageProfileStyle';
import * as Style2 from './styledComponents/ProfileListStyle';
import profileListData from './data/profileListData';
const URL = process.env.REACT_APP_URL;

const ProfileList = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // 현재 나의 스킬 불러오기
  const { data: mySkillList, isLoading: isSkillLoading } = useQuery(
    'mySkillList',
    fetchMySkillList
  );

  // 현재 나의 커리어 불러오기
  const { data: myCareerList, isLoading: isCareerLoading } = useQuery(
    'myCareerList',
    fetchMyCareerList
  );

  // 현재 나의 교육 불러오기
  const { data: myEduList, isLoading: isEduLoading } = useQuery('myEduList', fetchMyEduList);

  // 현재 나의 링크 불러오기
  const { data: myLinkList, isLoading: isLinkLoading } = useQuery('myLinkList', fetchMyLinkList);

  // 현재 나의 스킬 불러오기
  async function fetchMySkillList() {
    const response = await fetch(`${URL}/api/skills/myskill`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
      },
    });
    return response.json();
  }

  // 현재 나의 커리어 불러오기
  async function fetchMyCareerList() {
    const response = await fetch(`${URL}/api/careers`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
      },
    });
    return response.json();
  }

  // 현재 나의 교육 불러오기
  async function fetchMyEduList() {
    const response = await fetch(`${URL}/api/educations`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
      },
    });
    return response.json();
  }

  // 현재 나의 링크 불러오기
  async function fetchMyLinkList() {
    const response = await fetch(`${URL}/api/links`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
      },
    });
    return response.json();
  }

  // 경력 삭제 요청 핸들러
  async function handleRemoveCareer(careerId) {
    const response = await fetch(`${URL}/api/careers/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
      },
      body: JSON.stringify({ id: careerId }),
    });

    if (!response.ok) {
      throw new Error('Failed to delete career');
    }
  }

  // 교육 삭제 요청 핸들러
  async function handleRemoveEdu(eduId) {
    const response = await fetch(`${URL}/api/educations`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
      },
      body: JSON.stringify({ id: eduId }),
    });

    if (!response.ok) {
      throw new Error('Failed to delete edu');
    }
  }

  // 링크 삭제 요청 핸들러
  async function handleRemoveLink(linkId) {
    const response = await fetch(`${URL}/api/links/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
      },
      body: JSON.stringify({ linkId: linkId }),
    });

    if (!response.ok) {
      throw new Error('Failed to delete link');
    }
  }

  const removeCareerMutation = useMutation(handleRemoveCareer, {
    onSuccess: () => {
      queryClient.invalidateQueries('myCareerList');
    },
  });

  const removeEduMutation = useMutation(handleRemoveEdu, {
    onSuccess: () => {
      queryClient.invalidateQueries('myEduList');
    },
  });

  const removeLinkMutation = useMutation(handleRemoveLink, {
    onSuccess: () => {
      queryClient.invalidateQueries('myLinkList');
    },
  });

  return (
    <Style.ListContainer>
      <ul>
        {profileListData.map((item, index) => (
          <li key={index}>
            <h4>{item.title}</h4>
            {index === 0 && !isSkillLoading && mySkillList && mySkillList.length > 0 ? (
              <Style2.SkillButtonContainer>
                {mySkillList.map((mySkill, index) => (
                  <div className='badge' key={index}>
                    {mySkill}
                  </div>
                ))}
              </Style2.SkillButtonContainer>
            ) : index === 1 && !isCareerLoading && myCareerList && myCareerList.length > 0 ? (
              <Style2.CareerButtonContainer>
                {myCareerList.map((myCareer, index) => (
                  <div className='badge' key={index}>
                    <Style2.H5>{`${myCareer.company_name} ${myCareer.position} ㅣ ${myCareer.content} ㅣ ${myCareer.totalWorkingDate}`}</Style2.H5>
                    <Style2.RemoveText
                      className='remove-text'
                      onClick={() => removeCareerMutation.mutate(myCareer.id)}
                    >
                      ❌
                    </Style2.RemoveText>
                  </div>
                ))}
              </Style2.CareerButtonContainer>
            ) : index === 2 && !isEduLoading && myEduList && myEduList.length > 0 ? (
              <Style2.CareerButtonContainer>
                {myEduList.map((myEdu, index) => (
                  <div className='badge' key={index}>
                    {myEdu.end_date === '' ? (
                      <Style2.H5>{`${myEdu.name} ${myEdu.program} ㅣ ${myEdu.description} ㅣ ${myEdu.start_date} ~ 교육중`}</Style2.H5>
                    ) : (
                      <Style2.H5>{`${myEdu.name} ${myEdu.program} ㅣ ${myEdu.description} ㅣ ${myEdu.start_date} ~ ${myEdu.end_date}`}</Style2.H5>
                    )}
                    <Style2.RemoveText
                      className='remove-text'
                      onClick={() => removeEduMutation.mutate(myEdu.id)}
                    >
                      ❌
                    </Style2.RemoveText>
                  </div>
                ))}
              </Style2.CareerButtonContainer>
            ) : index === 3 && !isLinkLoading && myLinkList && myLinkList.length > 0 ? (
              <Style2.LinkButtonContainer>
                {myLinkList.map((myLink, index) => (
                  <div className='badge' key={index}>
                    <a href={myLink.url} target='_blank' rel='noopener noreferrer' key={index}>
                      {myLink.name}
                    </a>
                    <Style2.RemoveText
                      className='remove-text'
                      onClick={() => removeLinkMutation.mutate(myLink.id)}
                    >
                      ❌
                    </Style2.RemoveText>
                  </div>
                ))}
              </Style2.LinkButtonContainer>
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
