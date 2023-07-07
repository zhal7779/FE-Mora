import { useState } from 'react';
import styled from 'styled-components';
import { categories } from '../community/categoryData';
import Category from '../community/Category';
import SearchBar from '../community/SearchBar';
import PostList from '../community/PostList';
import RecommendPost from '../community/RecommendPost';

const CommunityPage = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    categories[0].id
  );
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <CommunityContainer>
      <Category
        selectedCategoryId={selectedCategoryId}
        setSelectedCategoryId={setSelectedCategoryId}
      />
      <PostContainer>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {/* <RecommendPost
          searchTerm={searchTerm}
          selectedCategoryId={selectedCategoryId}
        /> */}
        <PostList
          selectedCategoryId={selectedCategoryId}
          searchTerm={searchTerm}
        />
      </PostContainer>
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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 38px 20px 0;
  max-width: 738px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: none;
  }
`;

export const Status = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  font-size: 1.6rem;
  color: #424242;
  background-color: #f2f0fa;

  div {
    text-align: center;
    font-size: 2.2rem;
    font-weight: 600;
    line-height: 3.4rem;
    padding-top: 12px;
    color: #47424b;
  }
`;
