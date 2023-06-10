import styled from 'styled-components';
import SearchResultBar from '../search/components/SearchResultBar';
import { Wrapper } from '../search/styledComponents/pageCommonStyle';
import RankingContent from '../search/components/RankingContent';
import SearchResultProfile from '../search/components/SearchResultProfile';
import { useState } from 'react';
import RegisterQuestion from '../search/components/RegisterQuestion';
import profileData from '../search/components/searchProfile.json';
import SearchResultQnA from '../search/components/SearchResultQnA';
import SearchResultPost from '../search/components/SearchResultPost';
import postData from '../community/data/getResData';
import { useLocation } from 'react-router-dom';
const SearchPage = () => {
  //메인 검색창에서 받아온 검색 키워드, 검색후 컴포넌트에 키워드를 넘겨 결과에 하이라이팅해줄 state
  const { state } = useLocation();
  const [searchKeyword, setSearchKeyword] = useState(state);

  const handleSubSearch = (subResult) => {
    setSearchKeyword(subResult);
  };

  //menu === 1 ?전체보기(프로필 5개, 게시물 10개, 레이서 Q&A 10개)
  //menu === 2? 프로필
  //menu === 3? 게시물
  //menu === 4? 레이서 Q&A
  const [menu, setMenu] = useState(1);
  const handleMenu = (menu) => {
    setMenu(menu);
  };

  //전달할 데이터 슬라이스
  const slicePfofileData = profileData.slice(0, 3);
  const slicePostData = postData.slice(0, 5);

  return (
    <>
      <SearchResultBar
        receiveMenu={handleMenu}
        handleSubSearch={handleSubSearch}
        keyword={searchKeyword}
      />
      <Container>
        {menu === 1 ? (
          <Wrapper style={{ marginTop: '22rem' }}>
            <div>
              <SearchResultProfile
                data={slicePfofileData}
                receiveMenu={handleMenu}
                keyword={searchKeyword}
              />
              <SearchResultPost
                data={slicePostData}
                receiveMenu={handleMenu}
                keyword={searchKeyword}
              />
              <SearchResultQnA
                data={slicePostData}
                receiveMenu={handleMenu}
                keyword={searchKeyword}
              />
            </div>
            <RankingContent />
          </Wrapper>
        ) : menu === 2 ? (
          <ProfileWrapper style={{ marginTop: '22rem' }}>
            <SearchResultProfile data={profileData} keyword={searchKeyword} />
          </ProfileWrapper>
        ) : menu === 3 ? (
          <Wrapper style={{ marginTop: '22rem' }}>
            <SearchResultPost data={postData} keyword={searchKeyword} />
            <RankingContent />
          </Wrapper>
        ) : (
          <Wrapper style={{ marginTop: '22rem' }}>
            <SearchResultQnA data={postData} keyword={searchKeyword} />
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
