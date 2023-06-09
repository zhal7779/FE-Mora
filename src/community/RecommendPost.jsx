import * as Style from './styledComponents/RecommendPostStyle';
import { Link } from 'react-router-dom';
import data from './data/getResData';

const RecommendPost = ({ selectedCategoryId }) => {
  // 선택된 카테고리에 해당하는 게시글 중 조회수와 좋아요가 많은 게시글을 랜덤으로 가져오는 로직 작성
  const sortedData = data
    .filter(post => post.category === selectedCategoryId)
    .sort((a, b) => b.like_cnt + b.view_cnt - (a.like_cnt + a.view_cnt));

  const recommendPostData = sortedData.slice(0, 2);

  return (
    <Style.RecommendContainer>
      <h3>추천 게시글</h3>
      <ul>
        {recommendPostData.map(post => (
          <li key={post.id}>
            <Link to={`/community/${post.id}`}>
              <p className="recommend-tag">추천</p>
              <p className="recommend-title">{post.title}</p>
              <div className="recommend-info">
                <p>댓글 5</p>
                <div>
                  <p>좋아요 {post.like_cnt}</p>
                  <p>조회 {post.view_cnt}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Style.RecommendContainer>
  );
};

export default RecommendPost;
