import * as Style from '../search/styledComponents/SearchPageStyle';
import { Wrapper } from '../search/styledComponents/pageCommonStyle';
import SearchResultBar from '../search/components/SearchResultBar';
import RankingContent from '../search/components/RankingContent';
import SearchResultProfile from '../search/components/SearchResultProfile';
import { useState } from 'react';
import RegisterQuestion from '../search/components/RegisterQuestion';
import profileData from '../search/components/searchProfile.json';
import SearchResultQnA from '../search/components/SearchResultQnA';
import SearchResultPost from '../search/components/SearchResultPost';
import postData from '../community/data/getResData';
import { useLocation } from 'react-router-dom';
import { SearchContext } from '../search/context/SearchContext';

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
  const handleMenuClick = (num) => {
    setMenu(num);
  };

  //전달할 데이터 슬라이스
  const slicePfofileData = profileData.slice(0, 3);
  const slicePostData = postData.slice(0, 5);

  return (
    <>
      <Style.NavContainer>
        <Style.Content>
          <Style.SearchNav>
            <Style.SearchNavItem onClick={() => handleMenuClick(1)} active={menu === 1}>
              <p>전체</p>
            </Style.SearchNavItem>
            <Style.SearchNavItem onClick={() => handleMenuClick(2)} active={menu === 2}>
              <p>프로필</p>
            </Style.SearchNavItem>
            <Style.SearchNavItem onClick={() => handleMenuClick(3)} active={menu === 3}>
              <p>게시물</p>
            </Style.SearchNavItem>
            <Style.SearchNavItem onClick={() => handleMenuClick(4)} active={menu === 4}>
              <p>레이서 Q&A</p>
            </Style.SearchNavItem>
          </Style.SearchNav>
        </Style.Content>
      </Style.NavContainer>
      <SearchContext.Provider value={searchKeyword}>
        <SearchResultBar handleSubSearch={handleSubSearch} />
        <Style.Container>
          {menu === 1 ? (
            <Wrapper style={{ marginTop: '22rem', padding: '6rem 0' }}>
              <div>
                <SearchResultProfile data={slicePfofileData} receiveMenu={setMenu} />
                <SearchResultPost data={slicePostData} receiveMenu={setMenu} />
                <SearchResultQnA data={slicePostData} receiveMenu={setMenu} />
              </div>
              <RankingContent />
            </Wrapper>
          ) : menu === 2 ? (
            <Style.ProfileWrapper>
              <SearchResultProfile data={profileData} />
            </Style.ProfileWrapper>
          ) : menu === 3 ? (
            <Wrapper style={{ marginTop: '22rem', padding: '6rem 0' }}>
              <SearchResultPost data={postData} />
              <RankingContent />
            </Wrapper>
          ) : (
            <Wrapper style={{ marginTop: '22rem', padding: '6rem 0' }}>
              <SearchResultQnA data={postData} />
              <RegisterQuestion />
            </Wrapper>
          )}
        </Style.Container>
      </SearchContext.Provider>
    </>
  );
};
export default SearchPage;
