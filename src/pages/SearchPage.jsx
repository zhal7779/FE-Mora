import Footer from '../components/Footer';
import Header from '../components/Header';
import styled from 'styled-components';
import SearchResultBar from '../search/components/SearchResultBar';
import { Wrapper } from '../search/styledComponents/pageCommonStyle';
import RankingContent from '../search/components/RankingContent';
import SearchResultProfile from '../search/components/SearchResultProfile';
import PostList from '../community/CommunityPost';
import { useState } from 'react';
import RegisterQuestion from '../search/components/RegisterQuestion';

const SearchPage = () => {
  const [menu, setMenu] = useState(1);
  const handleMenu = (menu) => {
    setMenu(menu);
  };
  //menu === 1 ?전체보기(프로필 5개, 게시물 10개, 레이서 Q&A 10개)
  //menu === 2? 프로필
  //menu === 3? 게시물
  //menu === 4? 레이서 Q&A

  return (
    <Container>
      <div style={{ position: 'fixed', top: '0' }}>
        <Header />
        <SearchResultBar receiveMenu={handleMenu} />
      </div>

      <Wrapper style={{ marginTop: '22rem' }}>
        {menu === 1 ? (
          <>
            <SearchResultProfile />
            <RankingContent />
          </>
        ) : menu === 2 ? (
          <SearchResultProfile />
        ) : menu === 3 ? (
          <>
            <PostList style={{ background: '#ffffff' }} />
            <RankingContent />
          </>
        ) : (
          <RegisterQuestion />
        )}
      </Wrapper>
      <Footer />
    </Container>
  );
};
export default SearchPage;
const Container = styled.div`
  width: 100%;

  background: #f0f1f3;
`;
