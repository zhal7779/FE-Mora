import React, { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { putProfile } from '../api/openProfileApi';

const Toggle = () => {
  const { data, refetch } = useQuery('open', () => putProfile(onToggle));
  //내일, 정환이가 고쳐줘야 함
  // 커피챗 신청여부 오픈프로필 조회할때 같이 넣어줘야함
  // 공개 === 1
  // 비공개 === 0
  const [onToggle, setOnToggle] = useState(data ? data[0] : 0);
  // console.log(data[0]);
  const handleToggleClick = () => {
    if (data && data[0] === 0) {
      setOnToggle(1);
      refetch();
    } else if (data && data[0] === 1) {
      setOnToggle(0);
      refetch();
    }
  };
  return (
    <Container>
      {onToggle === 1 ? <p className='toggle_text'>올림</p> : <p className='toggle_text'>내림</p>}
      <ToggleContainer onClick={handleToggleClick}>
        {/* onToggle === true일 경우 toggle--checked 활성화 */}
        <div className={`toggle_container ${onToggle === 1 ? 'toggle__checked' : null}`} />
        <div className={`toggle_circle ${onToggle === 1 ? 'toggle__checked' : null}`} />
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
