import * as Style from './styledComponents/CommunityCategoryStyle';
import { useState } from 'react';
import Button from '../components/Button';

const categories = [
  {
    name: '자유 게시판',
    icon: require('../assets/icons/icon-category01.svg').default
  },
  {
    name: '지식 공유',
    icon: require('../assets/icons/icon-category02.svg').default
  },
  {
    name: '스터디 모집',
    icon: require('../assets/icons/icon-category03.svg').default
  },
  {
    name: '레이서 Q&A',
    icon: require('../assets/icons/icon-category04.svg').default
  }
];

const CommunityCategory = () => {
  // 현재 카테고리 상태
  const [selectedCategory, setSelectedCategory] = useState('자유 게시판');

  const handleCategorySelect = category => {
    setSelectedCategory(category); // 카테고리 상태 설정

    // 선택된 카테고리에 해당하는 게시글 목록을 가져오는 로직 작성
  };

  return (
    <Style.CategoryContainer>
      <h2>토끼굴</h2>
      <Button value="글 작성하기" color="darkPurple" />
      <div className="category-list">
        <p className="category-list-title">토픽</p>
        <ul>
          {categories.map(category => (
            <li
              key={category.name}
              onClick={() => handleCategorySelect(category.name)}
              className={selectedCategory === category.name ? 'active' : ''}
            >
              <img src={category.icon} alt={category.name} />
              <p>{category.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </Style.CategoryContainer>
  );
};

export default CommunityCategory;
