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
