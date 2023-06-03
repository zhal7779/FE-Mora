import { useState } from 'react';
import styled from 'styled-components';
import Category from '../community/Category';
import SearchBar from '../community/SearchBar';
import RecommendPost from '../community/RecommendPost';
import PostList from '../community/PostList';

const CommunityPage = () => {
  //   const [selectedCategory, setSelectedCategory] = useState(null);

  //   const handleCategorySelect = category => {
  //     setSelectedCategory(category);
  //   };

  return (
    <CommunityContainer>
      <Category />
      <div>
        <SearchBar />
        <RecommendPost />
        <PostList />
      </div>
    </CommunityContainer>
  );
};

export default CommunityPage;

const CommunityContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  max-width: 1024px;
  padding-top: 60px;
  margin: 0 auto;

  div {
    display: flex;
    flex-direction: column;

    max-width: 738px;
  }
`;
