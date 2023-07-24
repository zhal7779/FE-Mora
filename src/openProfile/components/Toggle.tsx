import React from 'react';
import { useQuery, useMutation } from 'react-query';
import styled from 'styled-components';
import { putProfile, ProfilRegistrStatus } from '../api/apis';
import { RegisterProps } from '../types/openProfileType';
const Toggle = ({ handleProfileRegisterStatus }: RegisterProps) => {
  //오픈프로필 초기 상태값, 오픈프로필을 올렸다면 true, 내렸다면 false
  const { data: registerStatus, refetch: statusRefetch } = useQuery('status', ProfilRegistrStatus);

  const updateProfileMutation = useMutation(
    () => putProfile(!registerStatus.UserDetail.profile_public),
    {
      onSuccess: () => {
        statusRefetch();
      },
    }
  );

  const handleToggleClick = async () => {
    await updateProfileMutation.mutateAsync();
    await handleProfileRegisterStatus(registerStatus);
  };
  return (
    <Container>
      {registerStatus && (
        <>
          {registerStatus.UserDetail.profile_public ? (
            <p className='toggle_text'>올림</p>
          ) : (
            <p className='toggle_text'>내림</p>
          )}
          <ToggleContainer onClick={handleToggleClick}>
            {/* onToggle === true일 경우 toggle--checked 활성화 */}
            <div
              className={`toggle_container ${
                registerStatus.UserDetail.profile_public ? 'toggle__checked' : null
              }`}
            />
            <div
              className={`toggle_circle ${
                registerStatus.UserDetail.profile_public ? 'toggle__checked' : null
              }`}
            />
          </ToggleContainer>
        </>
      )}
    </Container>
  );
};

export default Toggle;
const Container = styled.div`
  display: flex;
  align-items: center;
  > .toggle_text {
    font-size: 1.3rem;
    color: var(--dark-gray);
    padding-right: 1rem;
  }
`;

const ToggleContainer = styled.span`
  position: relative;
  cursor: pointer;
  > .toggle_container {
    width: 4.6rem;
    height: 2.4rem;
    border-radius: 2rem;
    background: #e9e9ee;
  }

  > .toggle__checked {
    background: var(--light-purple);
    transition: 0.5s;
  }

  > .toggle_circle {
    position: absolute;
    top: 0.3rem;
    left: 0.4rem;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    background-color: var(--main-white);
    transition: 0.5s;
  }
  > .toggle__checked {
    left: 2.4rem;
    transition: 0.5s;
  }
`;
