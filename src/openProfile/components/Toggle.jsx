import React, { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { putProfile, ProfilRegistrStatus } from '../api/openProfileApi';

const Toggle = () => {
  //오픈프로필 초기 상태값, 오픈프로필을 올렸다면 true, 내렸다면 false

  const { data: registerStatus } = useQuery('status', ProfilRegistrStatus);

  const [onToggle, setOnToggle] = useState(
    registerStatus && registerStatus.UserDetail.profile_public
  );
  const [openStatus, setOpenStatus] = useState(onToggle ? 1 : 0);
  console.log(onToggle);
  const { data, refetch } = useQuery('open', () => putProfile(1));
  console.log(data);
  // 커피챗 신청여부 오픈프로필 조회할때 같이 넣어줘야함
  // 공개 === 1
  // 비공개 === 0

  const handleToggleClick = () => {
    setOnToggle(!onToggle);
    if (onToggle === true) {
      setOpenStatus(0);
    } else if (onToggle === false) {
      setOpenStatus(1);
    }
  };

  return (
    <Container>
      {onToggle ? <p className='toggle_text'>올림</p> : <p className='toggle_text'>내림</p>}
      <ToggleContainer onClick={handleToggleClick}>
        {/* onToggle === true일 경우 toggle--checked 활성화 */}
        <div className={`toggle_container ${onToggle ? 'toggle__checked' : null}`} />
        <div className={`toggle_circle ${onToggle ? 'toggle__checked' : null}`} />
      </ToggleContainer>
    </Container>
  );
};

export default Toggle;
const Container = styled.div`
  display: flex;
  align-items: center;
  > .toggle_text {
    font-size: 1.3rem;
    color: #616161;
    padding-right: 1rem;
  }
`;

const ToggleContainer = styled.span`
  position: relative;
  cursor: pointer;
  > .toggle_container {
    width: 4.6rem;
    height: 2.4rem;
    border-radius: 20px;
    background: #e9e9ee;
  }

  > .toggle__checked {
    background: #d6c9ff;
    transition: 0.5s;
  }

  > .toggle_circle {
    position: absolute;
    top: 3px;
    left: 4px;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    background-color: #ffffff;
    transition: 0.5s;
  }
  > .toggle__checked {
    left: 24px;
    transition: 0.5s;
  }
`;
