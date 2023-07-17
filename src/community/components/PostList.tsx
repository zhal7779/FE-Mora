import * as Style from '../styledComponents/PostListStyle';
import noDataImg from '../../assets/images/no-data-image.svg';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import formatTime from '../../utils/formatTime';
import useDebounce from '../hooks/useDebounce';
import { fetchPosts } from '../api/apis';
import { communityProps } from '../types/types';
import { paginationData } from '../types/types';

const FILTER_BY_LATEST = 'new';
const FILTER_BY_VIEW = 'view';

const PostList = ({
  selectedCategoryId,
  searchTerm
}: Pick<communityProps, 'selectedCategoryId' | 'searchTerm'>) => {
  const [currentFilter, setCurrentFilter] = useState(FILTER_BY_LATEST);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const loadMoreRef = useRef(null);

  const {
    data,
    isError,
    isSuccess,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useInfiniteQuery<paginationData, Error>(
    ['posts', selectedCategoryId, debouncedSearchTerm, currentFilter],
    ({ pageParam = 0 }) =>
      fetchPosts({
        page: pageParam,
        view: 10,
        keyword: debouncedSearchTerm,
        sort: currentFilter,
        selectedCategoryId
      }),
    {
      getNextPageParam: lastPage => {
        return lastPage.currentPage < lastPage.totalPages
          ? lastPage.currentPage + 1
          : undefined;
        // 가장 최근에 불러온 현재 페이지가 전체 페이지보다 작다면 그 다음 페이지 반환
      }
    }
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 콜백 함수 정의
        if (entry.isIntersecting && !isFetchingNextPage && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0 } // 옵션 (관찰 대상 요소가 뷰포트를 교차하는 순간 콜백 함수를 호출)
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current); // 관찰 대상 등록
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current); // 관찰 중단
      }
    };
  }, [isFetchingNextPage, fetchNextPage, hasNextPage]);

  // 게시글 순서 필터
  const handleFilterChange = (filter: string) => {
    setCurrentFilter(filter);
  };

  return (
    <Style.PostContainer>
      {isSuccess && (
        <>
          {!isFetchingNextPage &&
          data.pages.every(page => page.objArr.length === 0) ? (
            <div className="no-data">
              <img src={noDataImg}></img>
              해당하는 게시글이 없습니다.
            </div>
          ) : (
            <>
              <div className="filter">
                <button
                  className={`filter-by-latest ${
                    currentFilter === FILTER_BY_LATEST ? 'active' : ''
                  }`}
                  onClick={() => handleFilterChange(FILTER_BY_LATEST)}
                >
                  최신순
                </button>
                <button
                  className={`filter-by-view ${
                    currentFilter === FILTER_BY_VIEW ? 'active' : ''
                  }`}
                  onClick={() => handleFilterChange(FILTER_BY_VIEW)}
                >
                  조회순
                </button>
              </div>
              <ul>
                {data.pages.map(page =>
                  page.objArr.map(post => (
                    <li key={post.id} className="list">
                      <Link to={`/community/${post.id}`}>
                        <p className="list-time">
                          {formatTime(post.createdAt)}
                        </p>
                        <h2>{post.title}</h2>
                        <p className="list-content">{post.content}</p>
                        {post.Hashtags.length > 0 && (
                          <ul className="list-hashtags">
                            {post.Hashtags.map((hashtag, index) => (
                              <li key={index}>
                                <span>#</span>
                                {hashtag}
                              </li>
                            ))}
                          </ul>
                        )}
                        <div className="list-info">
                          <p>댓글 {post.comment_cnt}</p>
                          <div>
                            <p>좋아요 {post.like_cnt} </p>
                            <p>조회 {post.view_cnt} </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))
                )}

                {hasNextPage && (
                  <div className="load-more" ref={loadMoreRef}></div>
                )}
              </ul>
            </>
          )}
        </>
      )}
      {isLoading && <div className="no-data">로딩 중</div>}
      {isError && <div className="no-data">에러: {error.message}</div>}
    </Style.PostContainer>
  );
};

export default PostList;
