import * as Style from './styledComponents/RecommendPostStyle';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { fetchRecommendPosts } from './api/apis';

const RecommendPost = ({ searchTerm, selectedCategoryId }) => {
  const { data, isSuccess } = useQuery(['posts', selectedCategoryId], () =>
    fetchRecommendPosts(selectedCategoryId)
  );

  return (
    <Style.RecommendContainer>
      {searchTerm === '' && isSuccess && (
        <>
          <h3>추천 게시글</h3>
          <ul>
            {data.map(post => (
              <li key={post.id}>
                <Link to={`/community/${post.id}`}>
                  <p className="recommend-tag">추천</p>
                  <p className="recommend-title">{post.title}</p>
                  <div className="recommend-info">
                    <p>댓글 {post.comment_cnt}</p>
                    <div>
                      <p>좋아요 {post.like_cnt}</p>
                      <p>조회 {post.view_cnt}</p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </Style.RecommendContainer>
  );
};

export default RecommendPost;
