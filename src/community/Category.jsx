import * as Style from './styledComponents/CategoryStyle';
import Button from '../components/Button';
import { Link, useParams } from 'react-router-dom';
import { categories } from './categoryData';

const Category = ({ selectedCategory, setSelectedCategory }) => {
  const { category_id } = useParams();

  const handleCategorySelect = category => {
    setSelectedCategory(category);
  };

  return (
    <Style.CategoryContainer>
      <h2>토끼굴</h2>
      <Link to="/write">
        <Button value="글 작성하기" color="darkPurple" />
      </Link>
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
