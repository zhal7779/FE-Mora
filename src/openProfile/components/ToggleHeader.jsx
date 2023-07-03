import React from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';

const ToggleHeader = ({ handleProfileRegisterStatus }) => {
  // const [Registerstatus, setRegisterStatus] = useState();
  const handleRegisterStatus = (status) => {
    handleProfileRegisterStatus(status);
  };
  return (
    <Container>
      <p>오픈 프로필 올리기</p>
      <Toggle handleRegisterStatus={handleRegisterStatus} />
    </Container>
  );
};

export default ToggleHeader;

const Container = styled.div`
  display: flex;
  width: 634px;
  height: 24px;
  justify-content: space-between;
  align-items: center;
  margin: 8rem 0 2rem 0;

  p {
    font-size: 1.4rem;
    font-weight: 600;
  }
`;
