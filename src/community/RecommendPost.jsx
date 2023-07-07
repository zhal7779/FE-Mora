import * as Style from './styledComponents/RecommendPostStyle';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { fetchRecommendPosts } from './api/apis';
import Button from '../components/Button';

const RecommendPost = ({ searchTerm, selectedCategoryId }) => {
  const { data, isLoading, isError, error, isSuccess } = useQuery(
    ['posts', selectedCategoryId],
    fetchRecommendPosts
  );

  if (isError) {
    return (
      <div>
        {error.message}⚠️
        <div>
          모여라레이서는 회원 전용 서비스입니다! <br />
          혹시 로그인을 깜빡하셨나요?
          <Link to="/login">
            <Button value="로그인하기" color="darkPurple" />
          </Link>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return <div>Loading...⏳</div>;
  }

  const sortedData = data.objArr
    .filter(post => post.category === selectedCategoryId)
    .sort((a, b) => b.like_cnt + b.view_cnt - (a.like_cnt + a.view_cnt));

  const recommendPostData = sortedData.slice(0, 2);

  return (
    <Style.RecommendContainer>
      {searchTerm === '' && isSuccess ? (
        <>
          <h3>추천 게시글</h3>
          <ul>
            {recommendPostData.map(post => (
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
      ) : (
        <div></div>
      )}
    </Style.RecommendContainer>
  );
};

export default RecommendPost;
