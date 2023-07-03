import { useState } from 'react';
import styled from 'styled-components';
import MyPageCategory from '../myPage/MyPageCategory';
import MyPageProfile from '../myPage/MyPageProfile';
import MyPagePost from '../myPage/MyPagePost';

const MyPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('프로필');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <MyPageContainer>
      <MyPageCategory
        handleCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
        categories={categories}
      />
      <MyPageContent>
        {selectedCategory === '게시물' ? <MyPagePost /> : <MyPageProfile />}
      </MyPageContent>
    </MyPageContainer>
  );
};

export default MyPage;

const MyPageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: 1024px;
  padding-top: 60px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MyPageContent = styled.div`
  flex: 1;
  width: 100%;

  @media (max-width: 768px) {
    width: auto;
  }
`;

const categories = [
  {
    name: '프로필',
    icon: require('../assets/icons/icon-user.svg').default,
  },
  {
    name: '게시물',
    icon: require('../assets/icons/icon-post.svg').default,
  },
];
