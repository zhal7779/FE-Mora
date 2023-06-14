import * as Style from '../search/styledComponents/SearchPageStyle';
import { SearchPageWrapper, NoDataWrapper } from '../search/styledComponents/pageCommonStyle';
import SearchResultBar from '../search/components/SearchResultBar';
import RankingContent from '../search/components/RankingContent';
import SearchResultProfile from '../search/components/SearchResultProfile';
import { useState } from 'react';
import RegisterQuestion from '../search/components/RegisterQuestion';
import profileData from '../search/components/searchProfile.json';
import SearchResultQnA from '../search/components/SearchResultQnA';
import SearchResultPost from '../search/components/SearchResultPost';

import { useLocation } from 'react-router-dom';
import { SearchContext } from '../search/context/SearchContext';
import {
  fetchFreeSearch,
  fetchKnowledgeSearch,
  fetchStudySearch,
  fetchQuestionSearch,
} from '../search/api/searchAPI';
import { useQueries } from 'react-query';
import NoData from '../components/NoData';
const SearchPage = () => {
  //메인 검색창에서 받아온 검색 키워드, 검색후 컴포넌트에 키워드를 넘겨 결과에 하이라이팅해줄 state
  const { state } = useLocation();

  const [searchKeyword, setSearchKeyword] = useState(state);

  const handleSubSearch = (subResult) => {
    setSearchKeyword(subResult);
  };

  //menu === 1 ?전체보기(프로필 5개, 게시물 10개, 레이서 Q&A 10개)
  //menu === 2? 프로필
  //menu === 3? 자유 게시판
  //menu === 4? 지식고유
  //menu === 5? 스터디 모집
  //menu === 6? 레이서 Q&A
  const [menu, setMenu] = useState(1);
  const handleMenuClick = (num) => {
    setMenu(num);
  };

  const freeKnowledgeData = useQueries([
    {
      queryKey: ['free', searchKeyword],
      queryFn: () => fetchFreeSearch(searchKeyword),
    },
    {
      queryKey: ['Knowledge', searchKeyword],
      queryFn: () => fetchKnowledgeSearch(searchKeyword),
    },
  ]);
  const studyQuestionData = useQueries([
    {
      queryKey: ['study', searchKeyword],
      queryFn: () => fetchStudySearch(searchKeyword),
      enabled: freeKnowledgeData[0]?.isSuccess && freeKnowledgeData[1]?.isSuccess,
    },
    {
      queryKey: ['question', searchKeyword],
      queryFn: () => fetchQuestionSearch(searchKeyword),
      enabled: freeKnowledgeData[0]?.isSuccess && freeKnowledgeData[1]?.isSuccess,
    },
  ]);
  //데이터 개수
  const freeCount = freeKnowledgeData[0].data.length;
  const knowledgeCount = freeKnowledgeData[1].data.length;
  const studyCount = studyQuestionData[0].data.length;
  const questionCount = studyQuestionData[1].data.length;
  const totalCount = freeCount + knowledgeCount + studyCount + questionCount;
  // SearchResultBar에 검색결과 ${count}건에 전달해줄 데이터
  const countArr = {
    total: totalCount,
    free: freeCount,
    knowledge: knowledgeCount,
    study: studyCount,
    question: questionCount,
  };
  //컴포넌트들에 전달할 데이터들
  const resultData = {
    free: freeCount > 0 ? freeKnowledgeData[0].data : [],
    knowledge: knowledgeCount > 0 ? freeKnowledgeData[1].data : [],
    study: studyCount > 0 ? studyQuestionData[0].data : [],
    question: questionCount > 0 ? studyQuestionData[1].data : [],
  };

  //전달할 데이터 슬라이스
  const slicePfofileData = profileData.slice(0, 3);
  //전달할 데이터 잘라주는 함수, 전체페이지 보여주는 데이터
  const sliceArray = (array, start, end) => {
    return array && array.length > 0 ? array.slice(start, end) : [];
  };
  const sliceFreeData = sliceArray(resultData.free, 0, 4);
  const sliceKnowledgeData = sliceArray(resultData.knowledge, 0, 4);
  const sliceStudyData = sliceArray(resultData.study, 0, 4);
  const sliceQuestionData = sliceArray(resultData.question, 0, 4);

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
              <p>자유 게시판</p>
            </Style.SearchNavItem>
            <Style.SearchNavItem onClick={() => handleMenuClick(4)} active={menu === 4}>
              <p>지식 공유</p>
            </Style.SearchNavItem>
            <Style.SearchNavItem onClick={() => handleMenuClick(5)} active={menu === 5}>
              <p>스터디 모집</p>
            </Style.SearchNavItem>
            <Style.SearchNavItem onClick={() => handleMenuClick(6)} active={menu === 6}>
              <p>레이서 Q&A</p>
            </Style.SearchNavItem>
          </Style.SearchNav>
        </Style.Content>
      </Style.NavContainer>
      <SearchContext.Provider value={searchKeyword}>
        <SearchResultBar handleSubSearch={handleSubSearch} menu={menu} count={countArr} />
        <Style.Container>
          {menu === 1 ? (
            <SearchPageWrapper>
              {resultData.free.length === 0 &&
              resultData.knowledge.length === 0 &&
              resultData.study.length === 0 &&
              resultData.question.length === 0 ? (
                <NoDataWrapper>
                  <NoData />
                </NoDataWrapper>
              ) : (
                <div>
                  <SearchResultProfile data={slicePfofileData} receiveMenu={setMenu} />
                  {resultData.free.length > 0 ? (
                    <SearchResultPost
                      data={sliceFreeData}
                      count={freeCount}
                      receiveMenu={setMenu}
                      type={'free'}
                    />
                  ) : (
                    ''
                  )}
                  {resultData.knowledge.length > 0 ? (
                    <SearchResultPost
                      data={sliceKnowledgeData}
                      count={knowledgeCount}
                      receiveMenu={setMenu}
                      type={'Knowledge'}
                    />
                  ) : (
                    ''
                  )}
                  {resultData.study.length > 0 ? (
                    <SearchResultPost
                      data={sliceStudyData}
                      count={studyCount}
                      receiveMenu={setMenu}
                      type={'study'}
                    />
                  ) : (
                    ''
                  )}
                  {resultData.question.length ? (
                    <SearchResultQnA
                      data={sliceQuestionData}
                      count={questionCount}
                      receiveMenu={setMenu}
                    />
                  ) : (
                    ''
                  )}
                </div>
              )}
              <RankingContent />
            </SearchPageWrapper>
          ) : menu === 2 ? (
            <Style.ProfileWrapper>
              <SearchResultProfile data={profileData} />
            </Style.ProfileWrapper>
          ) : menu === 3 ? (
            <SearchPageWrapper>
              <SearchResultPost data={resultData.free} type={'free'} />
              <RankingContent />
            </SearchPageWrapper>
          ) : menu === 4 ? (
            <SearchPageWrapper>
              <SearchResultPost data={resultData.knowledge} type={'Knowledge'} />
              <RankingContent />
            </SearchPageWrapper>
          ) : menu === 5 ? (
            <SearchPageWrapper>
              <SearchResultPost data={resultData.study} type={'study'} />
              <RegisterQuestion type={'study'} />
            </SearchPageWrapper>
          ) : menu === 6 ? (
            <SearchPageWrapper>
              <SearchResultQnA data={resultData.question} />
              <RegisterQuestion type={'Q&A'} />
            </SearchPageWrapper>
          ) : (
            ''
          )}
        </Style.Container>
      </SearchContext.Provider>
    </>
  );
};
export default SearchPage;
