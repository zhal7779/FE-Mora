import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import * as Style from './styledComponents/MyPageProfileStyle';
import MainProfile from './MainProfile';
import ProfileList from './ProfileList';

const MyPageProfile = ({ mainProfileData }) => {
  return (
    <Style.PostContainer>
      <MainProfile mainProfileData={mainProfileData} />
      <ProfileList />
    </Style.PostContainer>
  );
};

export default MyPageProfile;

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
