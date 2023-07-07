import * as Style from './styledComponents/PostListStyle';
import noDataImg from '../assets/images/no-data-image.svg';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import formatTime from './utils/formatTime';
import useDebounce from './hooks/useDebounce';
import { fetchPosts } from './api/apis';

const FILTER_BY_LATEST = '최신순';
const FILTER_BY_VIEW = '조회순';
const FILTER_BY_LIKE = '좋아요순';

const PostList = ({ selectedCategoryId, searchTerm }) => {
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
  } = useInfiniteQuery(
    ['posts', selectedCategoryId, debouncedSearchTerm],
    ({ pageParam = 0 }) =>
      fetchPosts({
        page: pageParam,
        view: 10,
        keyword: debouncedSearchTerm,
        selectedCategoryId
      }),
    {
      getNextPageParam: lastPage => {
        return lastPage.currentPage < lastPage.totalPages
          ? lastPage.currentPage + 1
          : undefined;
      }
    }
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isFetchingNextPage && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [isFetchingNextPage, fetchNextPage, hasNextPage]);

  const handleFilterChange = filter => {
    setCurrentFilter(filter);
  };

  // 게시글 필터
  // const filteredData = data
  //   .filter(post => {
  //     console.log(post);
  //     post.category === selectedCategoryId;
  //   })
  //   .filter(post => {
  //     if (searchTerm === '') return true;

  //     const lowerCaseTitle = post.title ? post.title.toLowerCase() : '';
  //     const lowerCaseContent = post.content ? post.content.toLowerCase() : '';
  //     const lowerCaseSearchTerm = debouncedSearchTerm.toLowerCase();

  //     return (
  //       lowerCaseTitle.includes(lowerCaseSearchTerm) ||
  //       lowerCaseContent.includes(lowerCaseSearchTerm)
  //     );
  //   })
  //   .sort((a, b) => {
  //     if (currentFilter === FILTER_BY_LATEST) {
  //       return new Date(b.created_at) - new Date(a.created_at);
  //     } else if (currentFilter === FILTER_BY_VIEW) {
  //       return b.view_cnt - a.view_cnt;
  //     } else {
  //       return b.like_cnt - a.like_cnt;
  //     }
  //   });

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
                  {FILTER_BY_LATEST}
                </button>
                <button
                  className={`filter-by-view ${
                    currentFilter === FILTER_BY_VIEW ? 'active' : ''
                  }`}
                  onClick={() => handleFilterChange(FILTER_BY_VIEW)}
                >
                  {FILTER_BY_VIEW}
                </button>
                <button
                  className={`filter-by-like ${
                    currentFilter === FILTER_BY_LIKE ? 'active' : ''
                  }`}
                  onClick={() => handleFilterChange(FILTER_BY_LIKE)}
                >
                  {FILTER_BY_LIKE}
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
                  <div ref={loadMoreRef}>
                    {isFetchingNextPage && '로딩 중...'}
                  </div>
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
