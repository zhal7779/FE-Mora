import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import LoginContainer from '../logIn/LogInContainer';
import MyPageEditInput from '../myPage/styledComponents/MyPageEditInput';
import MyPageEditSelect from '../myPage/styledComponents/MyPageEditSelect';
import Button from '../components/Button';
const URL = process.env.REACT_APP_URL;

const MyPageEdit = () => {
  const [skill, setSkill] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');
  const [mySkillList, setMySkillList] = useState<string[]>([]);
  const [skillList, setSkillList] = useState<string[]>([]); // 검색된 스킬 목록
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // 디바운싱으로 요청 수 줄이기
  // 디바운싱 = 여러 이벤트를 한번에 묶어서 처리, 쓰로틀링 = setInterval
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (skill !== '') {
        fetchSkillList();
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [skill]);

  // 기존 서버에 등록된 내 스킬 불러오기
  const fetchMySkillList = async () => {
    const response = await fetch(`${URL}/api/skills/myskill`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
      },
    });
    if (!response) {
      throw new Error('Failed to fetch mySkillList');
    }
    const data = await response.json();
    setMySkillList(data); // Update mySkillList with the fetched data
    return data;
  };

  const { data: fetchedMySkillList } = useQuery('mySkillList', fetchMySkillList);

  // 검색되는 스킬 리스트 불러오기
  const fetchSkillList = async () => {
    try {
      const response = await fetch(`${URL}/api/skills?keyword=${skill}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
        },
      });
      if (response) {
        const data = await response.json();
        if (data && data.length > 0) {
          const updatedList = data.map((item: { name: string }) => ({
            value: item.name,
            label: item.name,
          }));
          setSkillList(updatedList);
          setSelectedSkill(updatedList[0].value);
        } else {
          setSkillList([]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 검색결과 중 선택된 스킬로 바꾸는 핸들러
  const handleSkillChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target);
    const selectedOption = e.target.value;
    console.log(selectedOption);

    setSelectedSkill(selectedOption);
  };

  const handleAddSkill = () => {
    if (selectedSkill !== '') {
      setMySkillList([...mySkillList, selectedSkill]);
      setSelectedSkill('');
    }
  };

  const handleRemoveSkill = (removedSkill: string) => {
    const updatedSkillList = mySkillList.filter((skill) => skill !== removedSkill);
    setMySkillList(updatedSkillList);
  };

  interface SkillNames {
    skillNames: string[];
  }

  // 스킬 업데이트 뮤테이션 선언
  const updateSkillMutation = useMutation((updatedSkills: SkillNames) =>
    fetch(`${URL}/api/skills/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
      },
      body: JSON.stringify(updatedSkills),
    }).then((response) => response.json())
  );

  // 스킬 업데이트 핸들러
  const handleUpdateSkill = () => {
    const requestBody = {
      skillNames: mySkillList,
    };

    updateSkillMutation.mutate(requestBody, {
      onSuccess: () => {
        queryClient.invalidateQueries('mySkillList');
        navigate('/mypage');
      },
      onError: (error) => {
        console.error('프로필 수정 오류:', error);
      },
    });
  };

  return (
    <LoginContainer>
      <MyPageEditInput
        title='스킬 검색'
        type='text'
        placeholder='스킬을 검색해보세요'
        name='skill'
        onChange={(e) => {
          e.preventDefault();
          setSkill(e.target.value);
        }}
        value={skill}
      />

      <MyPageEditSelect
        title='검색된 스킬 목록'
        options={skillList}
        name='track'
        onChange={handleSkillChange}
        value={selectedSkill}
      />
      <Button color='darkPurple' value='추가하기' onClick={handleAddSkill} />

      {mySkillList ? (
        <>
          <SubTitle>{mySkillList.length === 0 ? '내 스킬이 비어있어요' : '내 스킬 목록'}</SubTitle>
          <SkillButtonContainer>
            {mySkillList.map((mySkill, index) => (
              <div className='badge' key={index} onClick={() => handleRemoveSkill(mySkill)}>
                {mySkill}
                <RemoveText className='remove-text'>❌</RemoveText>
              </div>
            ))}
          </SkillButtonContainer>
        </>
      ) : (
        '로딩중'
      )}

      <ButtonContainer>
        <Button
          color='darkPurple'
          value='수정완료'
          onClick={() => {
            handleUpdateSkill();
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

const SubTitle = styled.h3`
  font-weight: 600;
  font-size: 2rem;
  margin-top: 7rem;
`;

const ButtonContainer = styled.div`
  width: 20rem;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const SkillButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;

  .badge {
    position: relative;
    background-color: #ffffff;
    border: 1px solid #b9b9b9;
    padding: 8px 20px 9px 20px;
    border-radius: 2rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover .remove-text {
      display: block;
    }
  }
`;

const RemoveText = styled.span`
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
  font-size: 1.2rem;
  font-weight: 600;
  color: #ee1e1e;
  display: none;
`;
