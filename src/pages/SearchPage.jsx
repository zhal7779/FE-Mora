import * as Style from '../search/styledComponents/SearchPageStyle';
import { SearchPageWrapper, NoDataWrapper } from '../search/styledComponents/pageCommonStyle';
import SearchResultBar from '../search/components/SearchResultBar';
import RankingContent from '../search/components/RankingContent';
import SearchResultProfile from '../search/components/SearchResultProfile';
import { useState, useEffect, useRef } from 'react';
import RegisterQuestion from '../search/components/RegisterQuestion';
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
import { useQueries, useInfiniteQuery } from 'react-query';
import NoData from '../components/NoData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useWindowSize } from '../hooks/useWindowSize';
import { useObserver } from '../hooks/useObserver';

const SearchPage = () => {
  //메인 검색창에서 받아온 검색 키워드, 검색후 컴포넌트에 키워드를 넘겨 결과에 하이라이팅해줄 state
  const { state } = useLocation();

  const [searchKeyword, setSearchKeyword] = useState(state);

  const handleSubSearch = (subResult) => {
    setSearchKeyword(subResult);
  };

  const menuItems = [
    { id: 'all', text: '전체' },
    { id: 'openProfile', text: '오픈 프로필' },
    { id: 'free', text: '자유 게시판' },
    { id: 'Knowledge', text: '지식 공유' },
    { id: 'study', text: '스터디 모집' },
    { id: 'question', text: 'Q&A' },
  ];

  const [searchMenu, setSearchMenu] = useState(() => {
    const storedMenu = localStorage.getItem('searchMenu');
    return storedMenu ? parseInt(storedMenu) : 'all';
  });
  const handleMenuClick = (menuId) => {
    setSearchMenu(menuId);
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
  const getCount = (data, defaultCount) =>
    data?.isSuccess ? data?.data?.totalItems || 0 : defaultCount;

  const openProfileCount = popularProfileData[1]?.data?.length || 0;
  const freeCount = getCount(freeKnowledgeData[0], 0);
  const knowledgeCount = getCount(freeKnowledgeData[1], 0);
  const studyCount = getCount(studyQuestionData[0], 0);
  const questionCount = getCount(studyQuestionData[1], 0);
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

  const { data, fetchNextPage, hasNextPage, isSuccess } = useInfiniteQuery(
    ['infinite', searchKeyword, searchMenu],
    ({ pageParam = 0 }) =>
      fetchFreeSearch({ menu: searchMenu, page: pageParam, keyword: searchKeyword }),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.currentPage + 1 < lastPage.totalPages
          ? lastPage.currentPage + 1
          : undefined;
      },
    }
  );
  const SliceData = sliceArray(data.pages.objArr, 0, 4);
  console.log(SliceData);

  const observerRef = useRef(null);
  useObserver(observerRef, fetchNextPage, hasNextPage);

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
          <SearchPageWrapper>
            {searchMenu === 'all' ? (
              <>
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
                      <SearchResultPost
                        data={sliceQuestionData}
                        count={questionCount}
                        receiveMenu={setSearchMenu}
                        type={'Q&A'}
                        simple={'simple'}
                      />
                    ) : (
                      ''
                    )}
                  </div>
                )}
                <RankingContent data={popularProfileData[0].data} />
              </>
            ) : searchMenu === 'openProfile' ? (
              <>
                <SearchResultProfile data={resultData.openProfile} />
                <RankingContent data={popularProfileData[0].data} />
              </>
            ) : searchMenu === 'free' ? (
              <>
                {isSuccess && (
                  <>
                    <SearchResultPost
                      data={data}
                      type={'free'}
                      hasNextPage={hasNextPage}
                      observerRef={observerRef}
                    />
                  </>
                )}
                <RankingContent data={popularProfileData[0].data} />
              </>
            ) : searchMenu === 'Knowledge' ? (
              <>
                {isSuccess && (
                  <>
                    <SearchResultPost
                      data={data}
                      type={'knowledge'}
                      hasNextPage={hasNextPage}
                      observerRef={observerRef}
                    />
                  </>
                )}

                <RankingContent data={popularProfileData[0].data} />
              </>
            ) : searchMenu === 'study' ? (
              <>
                {isSuccess && (
                  <>
                    <SearchResultPost
                      data={data}
                      type={'study'}
                      hasNextPage={hasNextPage}
                      observerRef={observerRef}
                    />
                  </>
                )}

                <RegisterQuestion type={'study'} />
              </>
            ) : searchMenu === 'question' ? (
              <>
                {isSuccess && (
                  <>
                    <SearchResultPost
                      data={data}
                      type={'Q&A'}
                      hasNextPage={hasNextPage}
                      observerRef={observerRef}
                    />
                  </>
                )}
                <RegisterQuestion type={'Q&A'} />
              </>
            ) : (
              ''
            )}
          </SearchPageWrapper>
        </Style.Container>
      </SearchContext.Provider>
    </>
  );
};
export default SearchPage;
