import * as Style from './styledComponents/RecommendPostStyle';
import { Link } from 'react-router-dom';

const RecommendPost = ({ category }) => {
  // 선택된 카테고리에 해당하는 게시글 중 조회수가 많은 게시글을 랜덤으로 가져오는 로직 작성

  return (
    <Style.RecommendContainer>
      <h3>추천 게시글</h3>
      <ul>
        <li>
          <Link to="#">
            <p className="recommend-tag">추천</p>
            <p className="recommend-title">
              주니어 백엔드 개발자가 스타트업에 살아남으려면 어떻게 해야하나요?
            </p>
            <div className="recommend-info">
              <p>댓글 5</p>
              <div>
                <p>좋아요 67</p>
                <p>조회 219 </p>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link to="#">
            <p className="recommend-tag">추천</p>
            <p className="recommend-title">
              이제 곧 엘리스 끝나가는데 저 취업할 수 있을까요..?? ㅠ.ㅠㅠ
            </p>
            <div className="recommend-info">
              <p>댓글 5</p>
              <div>
                <p>좋아요 67</p>
                <p>조회 219 </p>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </Style.RecommendContainer>
  );
};

export default RecommendPost;
