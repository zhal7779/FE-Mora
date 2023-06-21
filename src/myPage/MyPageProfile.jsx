import * as Style from './styledComponents/MyPageProfileStyle';
import MainProfile from './MainProfile';
import ProfileList from './ProfileList';

const MyPageProfile = () => {
  return (
    <Style.PostContainer>
      <MainProfile />
      <ProfileList />
    </Style.PostContainer>
  );
};

export default MyPageProfile;
