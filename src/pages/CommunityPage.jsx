import { useState } from 'react';
import styled from 'styled-components';
import CommunityCategory from '../community/CommunityCategory';
import CommunityPost from '../community/CommunityPost';

const CommunityPage = () => {
  //   const [selectedCategory, setSelectedCategory] = useState(null);

  //   const handleCategorySelect = category => {
  //     setSelectedCategory(category);
  //   };

  return (
    <CommunityContainer>
      <CommunityCategory />
      <CommunityPost />
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
