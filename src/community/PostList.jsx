import * as Style from './styledComponents/PostListStyle';
import noDataImg from '../assets/images/no-data-image.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import formatTime from './utils/formatTime';
import useDebounce from './hooks/useDebounce';

const FILTER_BY_LATEST = '최신순';
const FILTER_BY_VIEW = '조회순';
const FILTER_BY_LIKE = '좋아요순';

const PostList = ({ selectedCategoryId, searchTerm, data }) => {
  const [currentFilter, setCurrentFilter] = useState(FILTER_BY_LATEST);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const handleFilterChange = filter => {
    setCurrentFilter(filter);
  };

  // 게시글 필터
  const filteredData = data
    .filter(post => post.category === selectedCategoryId)
    .filter(post => {
      if (searchTerm === '') return true;
      return (
        post.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
    })
    .sort((a, b) => {
      if (currentFilter === FILTER_BY_LATEST) {
        return new Date(b.created_at) - new Date(a.created_at);
      } else if (currentFilter === FILTER_BY_VIEW) {
        return b.view_cnt - a.view_cnt;
      } else {
        return b.like_cnt - a.like_cnt;
      }
    });

  return (
    <Style.PostContainer>
      {filteredData.length !== 0 ? (
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
            {filteredData.map(post => (
              <li key={post.id}>
                <Link to={`/community/${post.id}`}>
                  <p className="list-time">{formatTime(post.createdAt)}</p>
                  <h2>{post.title}</h2>
                  <p className="list-content">{post.content}</p>
                  <div className="list-info">
                    <p>댓글 5</p>
                    <div>
                      <p>좋아요 {post.like_cnt} </p>
                      <p>조회 {post.view_cnt} </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="no-data">
          <img src={noDataImg}></img>
          해당하는 게시글이 없습니다.
        </div>
      )}
    </Style.PostContainer>
  );
};

export default PostList;
