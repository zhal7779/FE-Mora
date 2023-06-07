import * as Style from './styledComponents/PostListStyle';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import data from './data/getResData';
import formatTime from './utils/formatTime';

const REACT_APP_URL = process.env.REACT_APP_URL;

const filterByLatest = '최신순';
const filterByViews = '조회순';
const filterByLikes = '좋아요순';

const PostList = ({ selectedCategoryId }) => {
  const [currentFilter, setCurrentFilter] = useState(filterByLatest);

  const filteredData = data
    .filter(post => post.category === selectedCategoryId)
    .sort((a, b) => {
      if (currentFilter === filterByLatest) {
        return new Date(b.created_at) - new Date(a.created_at);
      } else if (currentFilter === filterByViews) {
        return b.view_cnt - a.view_cnt;
      } else {
        return b.like_cnt - a.like_cnt;
      }
    });

  const handleFilterChange = filter => {
    setCurrentFilter(filter);
  };

  return (
    <Style.PostContainer>
      <div className="filter">
        <button
          className={`filter-by-latest ${
            currentFilter === filterByLatest ? 'active' : ''
          }`}
          onClick={() => handleFilterChange(filterByLatest)}
        >
          {filterByLatest}
        </button>
        <button
          className={`filter-by-view ${
            currentFilter === filterByViews ? 'active' : ''
          }`}
          onClick={() => handleFilterChange(filterByViews)}
        >
          {filterByViews}
        </button>
        <button
          className={`filter-by-like ${
            currentFilter === filterByLikes ? 'active' : ''
          }`}
          onClick={() => handleFilterChange(filterByLikes)}
        >
          {filterByLikes}
        </button>
      </div>
      <ul>
        {filteredData.map(post => (
          <li key={post.id}>
            <Link to={`/community/${post.id}`}>
              <p className="list-time">{formatTime(post.created_at)}</p>
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
    </Style.PostContainer>
  );
};

export default PostList;
