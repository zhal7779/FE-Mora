import * as Style from './styledComponents/MyPageCategoryStyle';
import { useState } from 'react';

const MyPageCategory = ({ handleCategorySelect, selectedCategory, categories }) => {
  return (
    <Style.CategoryContainer>
      <h2>마이페이지</h2>
      <div className='category-list'>
        <p className='category-list-title'>설정</p>
        <ul>
          {categories.map((category) => (
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

export default MyPageCategory;
