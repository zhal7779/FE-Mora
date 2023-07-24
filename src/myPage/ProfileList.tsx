import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import * as Style from './styledComponents/MyPageProfileStyle';
import * as Style2 from './styledComponents/ProfileListStyle';
import profileListData from './data/profileListData.json';
import { MyCareer, MyEdu, MyLink } from './profileListTypes';
import { handleRemoveCareer, handleRemoveEdu, handleRemoveLink } from './profileListApi';

const ProfileList = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_URL;
  const userToken = sessionStorage.getItem('userToken');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${userToken}`,
  };

  // 현재 나의 스킬 불러오기 함수
  async function fetchMySkillList() {
    const response = await fetch(`${URL}/api/skills/myskill`, {
      headers: headers,
    });
    return response.json();
  }

  // 현재 나의 커리어 불러오기 함수
  async function fetchMyCareerList() {
    const response = await fetch(`${URL}/api/careers`, {
      headers: headers,
    });
    return response.json();
  }

  // 현재 나의 교육 불러오기 함수
  async function fetchMyEduList() {
    const response = await fetch(`${URL}/api/educations`, {
      headers: headers,
    });
    return response.json();
  }

  // 현재 나의 링크 불러오기 함수
  async function fetchMyLinkList() {
    const response = await fetch(`${URL}/api/links`, {
      headers: headers,
    });
    return response.json();
  }

  const { data: mySkillList, isLoading: isSkillLoading } = useQuery(
    'mySkillList',
    fetchMySkillList,
    {
      staleTime: Infinity,
    }
  );

  const { data: myCareerList, isLoading: isCareerLoading } = useQuery(
    'myCareerList',
    fetchMyCareerList,
    {
      staleTime: Infinity,
    }
  );

  const { data: myEduList, isLoading: isEduLoading } = useQuery('myEduList', fetchMyEduList, {
    staleTime: Infinity,
  });

  const { data: myLinkList, isLoading: isLinkLoading } = useQuery('myLinkList', fetchMyLinkList, {
    staleTime: Infinity,
  });

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
        {profileListData.map((item, index: number) => (
          <li key={index}>
            <h4>{item.title}</h4>
            {index === 0 && !isSkillLoading && mySkillList && mySkillList.length > 0 ? (
              <Style2.SkillButtonContainer>
                {mySkillList.map((mySkill: string, index: number) => (
                  <div className='badge' key={index}>
                    {mySkill}
                  </div>
                ))}
              </Style2.SkillButtonContainer>
            ) : index === 1 && !isCareerLoading && myCareerList && myCareerList.length > 0 ? (
              <Style2.CareerButtonContainer>
                {myCareerList.map((myCareer: MyCareer, index: number) => (
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
                {myEduList.map((myEdu: MyEdu, index: number) => (
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
                {myLinkList.map((myLink: MyLink, index: number) => (
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
