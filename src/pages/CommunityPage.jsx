import { useState } from 'react';
import styled from 'styled-components';
import Category from '../community/Category';
import SearchBar from '../community/SearchBar';
import RecommendPost from '../community/RecommendPost';
import PostList from '../community/PostList';
import { categories } from '../community/categoryData';

const CommunityPage = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    categories[0].id
  );
  const [searchInput, setSearchInput] = useState('');

  return (
    <>
      <CommunityContainer>
        <Category
          selectedCategoryId={selectedCategoryId}
          setSelectedCategoryId={setSelectedCategoryId}
        />
        <div>
          <SearchBar
            selectedCategoryId={selectedCategoryId}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
          {searchInput === '' && (
            <RecommendPost selectedCategoryId={selectedCategoryId} />
          )}
          <PostList selectedCategoryId={selectedCategoryId} />
        </div>
      </CommunityContainer>
    </>
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

  & > div {
    display: flex;
    flex-direction: column;

    padding-top: 38px;
    max-width: 738px;
  }
`;
