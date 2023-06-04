import { useState } from 'react';
import styled from 'styled-components';
import MyPageCategory from '../myPage/MyPageCategory';
import MyPageProfile from '../myPage/MyPageProfile';
import MyPagePost from '../myPage/MyPagePost';
import MyPageCoffeeChat from '../myPage/MyPageCoffeeChat';
import profile from '../assets/images/profile.png';

const MyPage = () => {
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

  const mainProfileData = {
    img: profile,
    name: '지우쓰',
    position: '당근마켓 프론트엔드 개발자',
    intro:
      'JavaScript를 이용한 개발 업무를 능숙히 처리할 수 있으며, 웹 표준 및 웹 접근성, 최적화에 대한 이해와 경험을 가지고 있는 프론트엔드 개발자입니다. 현재는 React, Next.js, Typescript를 활용한 개발 업무에 집중하고 있습니다. ',
  };

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
        <MyPagePost mainProfileData={mainProfileData} />
      ) : selectedCategory === '커피챗' ? (
        <MyPageCoffeeChat mainProfileData={mainProfileData} />
      ) : (
        <MyPageProfile mainProfileData={mainProfileData} />
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
