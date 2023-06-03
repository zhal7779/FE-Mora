import * as Style from './styledComponents/CategoryStyle';
import { useState } from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { categories } from './categoryData';

const Category = () => {
  // 현재 카테고리 상태
  const [selectedCategory, setSelectedCategory] = useState('자유 게시판');

  const handleCategorySelect = category => {
    setSelectedCategory(category); // 카테고리 상태 설정

    // 선택된 카테고리에 해당하는 게시글 목록을 가져오는 로직 작성
  };

  return (
    <Style.CategoryContainer>
      <h2>토끼굴</h2>
      <Button value="글 작성하기" color="darkPurple">
        <Link to="/write"></Link>
      </Button>
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

export default Category;
