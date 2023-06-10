import * as Style from '../community/styledComponents/PostListStyle';
import { useState } from 'react';
import styled from 'styled-components';
import { categories } from '../community/categoryData';
import Category from '../community/Category';
import SearchBar from '../community/SearchBar';
import PostList from '../community/PostList';
import RecommendPost from '../community/RecommendPost';
import { getPosts } from '../community/service/postListService';
import { useQuery } from 'react-query';

const CommunityPage = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    categories[0].id
  );
  const [searchTerm, setSearchTerm] = useState('');

  const { status, data, error } = useQuery(['posts', selectedCategoryId], () =>
    getPosts(selectedCategoryId)
  );

  if (status === 'loading') {
    return <Style.Status>Loading...⏳</Style.Status>;
  }

  if (status === 'error') {
    return <Style.Status>{error.message}⚠️</Style.Status>;
  }

  return (
    <CommunityContainer>
      <Category
        selectedCategoryId={selectedCategoryId}
        setSelectedCategoryId={setSelectedCategoryId}
      />
      <PostContainer>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <RecommendPost selectedCategoryId={selectedCategoryId} data={data} />
        <PostList
          selectedCategoryId={selectedCategoryId}
          data={data}
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
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 38px 20px 0;
  max-width: 738px;
  width: 100%;
`;
