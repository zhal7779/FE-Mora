import styled from 'styled-components';
import SearchResultBar from '../search/components/SearchResultBar';
import { Wrapper } from '../search/styledComponents/pageCommonStyle';
import RankingContent from '../search/components/RankingContent';
import SearchResultProfile from '../search/components/SearchResultProfile';
import PostList from '../community/CommunityPost';
import { useState } from 'react';
import RegisterQuestion from '../search/components/RegisterQuestion';
import profileData from '../search/components/searchProfile.json';
const SearchPage = () => {
  const [menu, setMenu] = useState(1);
  const handleMenu = (menu) => {
    setMenu(menu);
  };
  //menu === 1 ?전체보기(프로필 5개, 게시물 10개, 레이서 Q&A 10개)
  //menu === 2? 프로필
  //menu === 3? 게시물
  //menu === 4? 레이서 Q&A
  const slicePfofileData = profileData.slice(0, 3);

  return (
    <>
      <SearchResultBar receiveMenu={handleMenu} />
      <Container>
        {menu === 1 ? (
          <Wrapper style={{ marginTop: '22rem' }}>
            <SearchResultProfile data={slicePfofileData} receiveMenu={handleMenu} />
            <RankingContent />
          </Wrapper>
        ) : menu === 2 ? (
          <ProfileWrapper style={{ marginTop: '22rem' }}>
            <SearchResultProfile data={profileData} />
          </ProfileWrapper>
        ) : menu === 3 ? (
          <Wrapper style={{ marginTop: '22rem' }}>
            <PostList style={{ background: '#ffffff' }} />
            <RankingContent />
          </Wrapper>
        ) : (
          <Wrapper style={{ marginTop: '22rem' }}>
            <RegisterQuestion />
          </Wrapper>
        )}
      </Container>
    </>
  );
};
export default SearchPage;
const Container = styled.div`
  width: 100%;
  background: #f0f1f3;
`;
const ProfileWrapper = styled.div`
  width: 1024px;
  height: 100%;
  display: flex;
  margin-top: 6rem;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`;
