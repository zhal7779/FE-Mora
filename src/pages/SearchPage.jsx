import * as Style from '../search/styledComponents/SearchPageStyle';
import { SearchPageWrapper, NoDataWrapper } from '../search/styledComponents/pageCommonStyle';
import SearchResultBar from '../search/components/SearchResultBar';
import RankingContent from '../search/components/RankingContent';
import SearchResultProfile from '../search/components/SearchResultProfile';
import { useState, useEffect } from 'react';
import RegisterQuestion from '../search/components/RegisterQuestion';
import SearchResultQnA from '../search/components/SearchResultQnA';
import SearchResultPost from '../search/components/SearchResultPost';

import { useLocation } from 'react-router-dom';
import { SearchContext } from '../search/context/SearchContext';
import {
  fetchPopular,
  fetchProfileSearch,
  fetchFreeSearch,
  fetchKnowledgeSearch,
  fetchStudySearch,
  fetchQuestionSearch,
} from '../search/api/searchAPI';
import { useQueries } from 'react-query';
import NoData from '../components/NoData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useWindowSize } from '../hooks/useWindowSize';

const SearchPage = () => {
  //메인 검색창에서 받아온 검색 키워드, 검색후 컴포넌트에 키워드를 넘겨 결과에 하이라이팅해줄 state
  const { state } = useLocation();

  const [searchKeyword, setSearchKeyword] = useState(state);

  const handleSubSearch = (subResult) => {
    setSearchKeyword(subResult);
  };

  const menuItems = [
    { id: 1, text: '전체' },
    { id: 2, text: '오픈 프로필' },
    { id: 3, text: '자유 게시판' },
    { id: 4, text: '지식 공유' },
    { id: 5, text: '스터디 모집' },
    { id: 6, text: 'Q&A' },
  ];

  const [searchMenu, setSearchMenu] = useState(() => {
    const storedMenu = localStorage.getItem('searchMenu');
    return storedMenu ? parseInt(storedMenu) : 1;
  });
  const handleMenuClick = (num) => {
    setSearchMenu(num);
  };

  // 새로고침시 menu 상태값 유지 위해 로컬스토리지 사용,
  // token 값이 있으면  초기 상태값 1

  useEffect(() => {
    localStorage.setItem('searchMenu', searchMenu.toString());

    return () => {
      localStorage.removeItem('searchMenu');
    };
  }, [searchMenu]);

  const popularProfileData = useQueries([
    {
      queryKey: ['popular'],
      queryFn: fetchPopular,
    },
    {
      queryKey: ['openProfile', searchKeyword],
      queryFn: () => fetchProfileSearch(searchKeyword),
    },
  ]);

  const freeKnowledgeData = useQueries([
    {
      queryKey: ['free', searchKeyword],
      queryFn: () => fetchFreeSearch(searchKeyword),
      enabled: popularProfileData[0]?.isSuccess && popularProfileData[1]?.isSuccess,
    },
    {
      queryKey: ['Knowledge', searchKeyword],
      queryFn: () => fetchKnowledgeSearch(searchKeyword),
      enabled: popularProfileData[0]?.isSuccess && popularProfileData[1]?.isSuccess,
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
  const openProfileCount = popularProfileData[1]?.data?.length || 0;
  const freeCount = freeKnowledgeData[0]?.data?.totalItems || 0;
  const knowledgeCount = freeKnowledgeData[1]?.data?.totalItems || 0;
  const studyCount = studyQuestionData[0]?.data?.totalItems || 0;
  const questionCount = studyQuestionData[1]?.data?.totalItems || 0;
  const totalCount = openProfileCount + freeCount + knowledgeCount + studyCount + questionCount;

  // SearchResultBar에 검색결과 ${count}건에 전달해줄 데이터
  const countArr = {
    total: totalCount,
    openProfile: openProfileCount,
    free: freeCount,
    knowledge: knowledgeCount,
    study: studyCount,
    question: questionCount,
  };
  //컴포넌트들에 전달할 데이터들
  const resultData = {
    openProfile: openProfileCount > 0 ? popularProfileData[1].data : [],
    free: freeCount > 0 ? freeKnowledgeData[0].data.objArr : [],
    knowledge: knowledgeCount > 0 ? freeKnowledgeData[1].data.objArr : [],
    study: studyCount > 0 ? studyQuestionData[0].data.objArr : [],
    question: questionCount > 0 ? studyQuestionData[1].data.objArr : [],
  };

  //전달할 데이터 잘라주는 함수, 전체페이지 보여주는 데이터
  const sliceArray = (array, start, end) => {
    return array && array.length > 0 ? array.slice(start, end) : [];
  };
  const sliceOpenProfileData = sliceArray(resultData.openProfile, 0, 3);
  const sliceFreeData = sliceArray(resultData.free, 0, 4);
  const sliceKnowledgeData = sliceArray(resultData.knowledge, 0, 4);
  const sliceStudyData = sliceArray(resultData.study, 0, 4);
  const sliceQuestionData = sliceArray(resultData.question, 0, 4);

  const { mobileSize } = useWindowSize();
  return (
    <>
      <Style.NavContainer>
        {mobileSize ? (
          <Swiper
            className='content'
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={4}
            navigation
          >
            <div className='search-nav'>
              {menuItems.map((menu) => (
                <SwiperSlide
                  key={menu.id}
                  className={`mobile-nav-item ${searchMenu === menu.id ? 'active' : ''}`}
                  onClick={() => handleMenuClick(menu.id)}
                >
                  <p>{menu.text}</p>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        ) : (
          <div className='content'>
            <div className='search-nav'>
              {menuItems.map((menu) => (
                <Style.NavItem
                  key={menu.id}
                  className={searchMenu === menu.id ? 'active' : ''}
                  active={searchMenu === menu.id}
                  onClick={() => handleMenuClick(menu.id)}
                >
                  <p>{menu.text}</p>
                </Style.NavItem>
              ))}
            </div>
          </div>
        )}
      </Style.NavContainer>
      <SearchContext.Provider value={searchKeyword}>
        <SearchResultBar handleSubSearch={handleSubSearch} menu={searchMenu} count={countArr} />
        <Style.Container>
          {searchMenu === 1 ? (
            <SearchPageWrapper>
              {resultData.openProfile.length === 0 &&
              resultData.free.length === 0 &&
              resultData.knowledge.length === 0 &&
              resultData.study.length === 0 &&
              resultData.question.length === 0 ? (
                <NoDataWrapper>
                  <NoData />
                </NoDataWrapper>
              ) : (
                <div>
                  {resultData.openProfile.length > 0 ? (
                    <SearchResultProfile
                      data={sliceOpenProfileData}
                      count={openProfileCount}
                      receiveMenu={setSearchMenu}
                      simple={'simple'}
                    />
                  ) : (
                    ''
                  )}

                  {resultData.free.length > 0 ? (
                    <SearchResultPost
                      data={sliceFreeData}
                      count={freeCount}
                      receiveMenu={setSearchMenu}
                      type={'free'}
                      simple={'simple'}
                    />
                  ) : (
                    ''
                  )}
                  {resultData.knowledge.length > 0 ? (
                    <SearchResultPost
                      data={sliceKnowledgeData}
                      count={knowledgeCount}
                      receiveMenu={setSearchMenu}
                      type={'Knowledge'}
                      simple={'simple'}
                    />
                  ) : (
                    ''
                  )}
                  {resultData.study.length > 0 ? (
                    <SearchResultPost
                      data={sliceStudyData}
                      count={studyCount}
                      receiveMenu={setSearchMenu}
                      type={'study'}
                      simple={'simple'}
                    />
                  ) : (
                    ''
                  )}
                  {resultData.question.length ? (
                    <SearchResultQnA
                      data={sliceQuestionData}
                      count={questionCount}
                      receiveMenu={setSearchMenu}
                      simple={'simple'}
                    />
                  ) : (
                    ''
                  )}
                </div>
              )}
              <RankingContent data={popularProfileData[0].data} />
            </SearchPageWrapper>
          ) : searchMenu === 2 ? (
            <Style.ProfileWrapper>
              <SearchResultProfile data={resultData.openProfile} />
            </Style.ProfileWrapper>
          ) : searchMenu === 3 ? (
            <SearchPageWrapper>
              <SearchResultPost data={resultData.free} type={'free'} />
              <RankingContent data={popularProfileData[0].data} />
            </SearchPageWrapper>
          ) : searchMenu === 4 ? (
            <SearchPageWrapper>
              <SearchResultPost data={resultData.knowledge} type={'Knowledge'} />
              <RankingContent data={popularProfileData[0].data} />
            </SearchPageWrapper>
          ) : searchMenu === 5 ? (
            <SearchPageWrapper>
              <SearchResultPost data={resultData.study} type={'study'} />
              <RegisterQuestion type={'study'} />
            </SearchPageWrapper>
          ) : searchMenu === 6 ? (
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
