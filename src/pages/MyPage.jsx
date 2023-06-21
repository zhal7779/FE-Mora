import { useState } from 'react';
import styled from 'styled-components';
import MyPageCategory from '../myPage/MyPageCategory';
import MyPageProfile from '../myPage/MyPageProfile';
import MyPagePost from '../myPage/MyPagePost';
import MyPageCoffeeChat from '../myPage/MyPageCoffeeChat';

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
      {selectedCategory === '게시물' ? (
        <MyPagePost />
      ) : selectedCategory === '커피챗' ? (
        <MyPageCoffeeChat />
      ) : (
        <MyPageProfile />
      )}
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
  {
    name: '커피챗',
    icon: require('../assets/icons/icon-coffeeChat.svg').default,
  },
];
