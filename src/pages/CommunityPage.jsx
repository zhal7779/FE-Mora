import { useState } from 'react';
import styled from 'styled-components';
import Category from '../community/Category';
import CommunityPost from '../community/CommunityPost';
import { categories } from '../community/categoryData';

const CommunityPage = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    categories[0].id
  );

  return (
    <CommunityContainer>
      <Category
        selectedCategoryId={selectedCategoryId}
        setSelectedCategoryId={setSelectedCategoryId}
      />
      <CommunityPost selectedCategoryId={selectedCategoryId} />
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
