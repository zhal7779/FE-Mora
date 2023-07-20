import * as Style from '../search/styledComponents/SearchPageStyle';
import { SearchPageWrapper, NoDataWrapper } from '../search/styledComponents/pageCommonStyle';
import SearchResultBar from '../search/components/SearchResultBar';
import RankingContent from '../search/components/RankingContent';
import SearchResultProfile from '../search/components/SearchResultProfile';
import { useState, useEffect, useRef } from 'react';
import RegisterQuestion from '../search/components/RegisterQuestion';
import SearchPost from '../search/components/SearchPost';
import { useLocation } from 'react-router-dom';
import { SearchContext } from '../search/context/SearchContext';
import { fetchPopular, fetchSearchProfile, fetchSearchPost } from '../search/api/searchAPI';
import { useQuery, useQueries, useInfiniteQuery } from 'react-query';
import NoData from '../components/NoData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useWindowSize } from '../hooks/useWindowSize';
import { useObserver } from '../hooks/useObserver';
import { CountArrData } from '../search/types/searchType';

interface QueryData {
  isSuccess: boolean;
  data:
    | {
        totalItems: number;
      }
    | undefined;
}

const SearchPage = () => {
  //메인 검색창에서 받아온 검색 키워드, 검색후 컴포넌트에 키워드를 넘겨 결과에 하이라이팅해줄 state
  const { state } = useLocation();

  const [searchKeyword, setSearchKeyword] = useState(state);

  const handleSubSearch = (keyword: string) => {
    setSearchKeyword(keyword);
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
    return storedMenu || 'all';
  });
  const handleMenuClick = (menuId: string) => {
    setSearchMenu(menuId);
    localStorage.setItem('searchMenu', menuId);
  };

  // 새로고침시 menu 상태값 유지 위해 로컬스토리지 사용,
  // token 값이 있으면  초기 상태값 1

  useEffect(() => {
    localStorage.setItem('searchMenu', searchMenu.toString());

    return () => {
      localStorage.removeItem('searchMenu');
    };
  }, [searchMenu]);

  const { data: popularData } = useQuery(['popular'], fetchPopular);

  const openProfileData = useQuery(
    ['openProfile', searchKeyword],
    () => fetchSearchProfile(searchKeyword),
    {
      enabled: Boolean(searchKeyword),
    }
  );

  const SearchPostData = useQueries([
    {
      queryKey: ['free', searchKeyword],
      queryFn: () => fetchSearchPost({ menu: 'free', page: 0, keyword: searchKeyword }),
      enabled: Boolean(searchKeyword),
    },
    {
      queryKey: ['Knowledge', searchKeyword],
      queryFn: () => fetchSearchPost({ menu: 'Knowledge', page: 0, keyword: searchKeyword }),
      enabled: Boolean(searchKeyword),
    },
    {
      queryKey: ['study', searchKeyword],
      queryFn: () => fetchSearchPost({ menu: 'study', page: 0, keyword: searchKeyword }),
      enabled: Boolean(searchKeyword),
    },
    {
      queryKey: ['question', searchKeyword],
      queryFn: () => fetchSearchPost({ menu: 'question', page: 0, keyword: searchKeyword }),
      enabled: Boolean(searchKeyword),
    },
  ]);

  const getCount = (data: QueryData) => (data.isSuccess ? data.data?.totalItems || 0 : 0);

  const countArr: CountArrData = {
    openProfile: openProfileData.data?.length || 0,
    free: getCount(SearchPostData[0]),
    knowledge: getCount(SearchPostData[1]),
    study: getCount(SearchPostData[2]),
    question: getCount(SearchPostData[3]),
  };

  countArr.total = Object.values(countArr).reduce((acc, count) => acc + count, 0);

  const sliceArray = (array: [], start: number, end: number) =>
    array && array.length > 0 ? array.slice(start, end) : [];

  const simpleData = {
    openProfile: countArr.openProfile > 0 ? sliceArray(openProfileData.data, 0, 3) : [],
    free: countArr.free > 0 ? sliceArray(SearchPostData[0].data.objArr, 0, 4) : [],
    knowledge: countArr.knowledge > 0 ? sliceArray(SearchPostData[1].data.objArr, 0, 4) : [],
    study: countArr.study > 0 ? sliceArray(SearchPostData[2].data.objArr, 0, 4) : [],
    question: countArr.question > 0 ? sliceArray(SearchPostData[3].data.objArr, 0, 4) : [],
  };

  const { data, fetchNextPage, hasNextPage, isSuccess } = useInfiniteQuery(
    ['infinite', searchKeyword, searchMenu],
    ({ pageParam = 0 }) =>
      fetchSearchPost({ menu: searchMenu, page: pageParam, keyword: searchKeyword }),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.currentPage + 1 < lastPage.totalPages
          ? lastPage.currentPage + 1
          : undefined;
      },
    }
  );

  const observerRef = useRef(null);
  useObserver(observerRef, fetchNextPage, hasNextPage);

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
          <SearchPageWrapper>
            {searchMenu === 'all' ? (
              <>
                {countArr.total === 0 ? (
                  <NoDataWrapper>
                    <NoData />
                  </NoDataWrapper>
                ) : (
                  <div>
                    {countArr.openProfile > 0 && (
                      <SearchResultProfile
                        data={simpleData.openProfile}
                        count={countArr.openProfile}
                        receiveMenu={setSearchMenu}
                        type={'simple'}
                      />
                    )}
                    {countArr.free > 0 && (
                      <SearchPost
                        data={simpleData.free}
                        count={countArr.free}
                        receiveMenu={setSearchMenu}
                        menu={'free'}
                        type={'simple'}
                      />
                    )}
                    {countArr.knowledge > 0 && (
                      <SearchPost
                        data={simpleData.knowledge}
                        count={countArr.knowledge}
                        receiveMenu={setSearchMenu}
                        menu={'Knowledge'}
                        type={'simple'}
                      />
                    )}
                    {countArr.study > 0 && (
                      <SearchPost
                        data={simpleData.study}
                        count={countArr.study}
                        receiveMenu={setSearchMenu}
                        menu={'study'}
                        type={'simple'}
                      />
                    )}
                    {countArr.question > 0 && (
                      <SearchPost
                        data={simpleData.question}
                        count={countArr.question}
                        receiveMenu={setSearchMenu}
                        menu={'question'}
                        type={'simple'}
                      />
                    )}
                  </div>
                )}
                <RankingContent data={popularData} />
              </>
            ) : (
              <>
                {isSuccess && (
                  <>
                    {searchMenu === 'openProfile' ? (
                      <SearchResultProfile data={openProfileData.data} />
                    ) : searchMenu === 'free' ||
                      searchMenu === 'Knowledge' ||
                      searchMenu === 'study' ||
                      searchMenu === 'question' ? (
                      <SearchPost
                        type={'detail'}
                        data={data}
                        menu={
                          searchMenu === 'free'
                            ? 'free'
                            : searchMenu === 'Knowledge'
                            ? 'knowledge'
                            : searchMenu === 'study'
                            ? 'study'
                            : 'Q&A'
                        }
                        hasNextPage={hasNextPage}
                        observerRef={observerRef}
                      />
                    ) : null}
                    {searchMenu === 'openProfile' ||
                    searchMenu === 'free' ||
                    searchMenu === 'Knowledge' ? (
                      <RankingContent data={popularData} />
                    ) : null}
                    {searchMenu === 'study' ? (
                      <RegisterQuestion type={'study'} />
                    ) : searchMenu === 'question' ? (
                      <RegisterQuestion type={'Q&A'} />
                    ) : null}
                  </>
                )}
              </>
            )}
          </SearchPageWrapper>
        </Style.Container>
      </SearchContext.Provider>
    </>
  );
};
export default SearchPage;
