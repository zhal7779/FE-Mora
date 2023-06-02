import * as Style from './styledComponents/CommunityPostStyle';
import Input from '../components/Input';

const SearchBar = ({ category }) => {
  // 사용자가 게시글을 검색하는 로직 작성

  return <Input width="100%" />;
};

const RecommendPost = ({ category }) => {
  // 선택된 카테고리에 해당하는 게시글 중 조회수가 많은 게시글을 랜덤으로 가져오는 로직 작성

  return (
    <Style.RecommendContainer>
      <h3>추천 게시글</h3>
      <ul>
        <li>
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
        </li>
        <li>
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
        </li>
      </ul>
    </Style.RecommendContainer>
  );
};

const PostList = () => {
  // 선택된 카테고리에 해당하는 게시글 목록을 가져오는 로직 작성

  return (
    <Style.ListContainer>
      {/* 게시글 목록을 렌더링하는 로직 작성 */}
      <ul>
        <li>
          <h2>코딩할 때 듣는 노동요</h2>
          <p className="list-content">
            저는 혼자 코딩할 때 주로 드라마 OST를 듣습니다. 선율이 편안해서
            코딩에 방해가 되지 않고, 가사가 있어서 혼자 있는 느낌이 들지
            않거든요.다른 개발분들은 코딩할 때 어떤 음악을 들으시나요?
          </p>
          <div className="list-info">
            <p>댓글 5</p>
            <div>
              <p>좋아요 67</p>
              <p>조회 219 </p>
            </div>
          </div>
        </li>
        <li>
          <h2>코딩할 때 듣는 노동요</h2>
          <p className="list-content">
            저는 혼자 코딩할 때 주로 드라마 OST를 듣습니다. 선율이 편안해서
            코딩에 방해가 되지 않고, 가사가 있어서 혼자 있는 느낌이 들지
            않거든요.다른 개발분들은 코딩할 때 어떤 음악을 들으시나요?
          </p>
          <div className="list-info">
            <p>댓글 5</p>
            <div>
              <p>좋아요 67</p>
              <p>조회 219 </p>
            </div>
          </div>
        </li>
        <li>
          <h2>코딩할 때 듣는 노동요</h2>
          <p className="list-content">
            저는 혼자 코딩할 때 주로 드라마 OST를 듣습니다. 선율이 편안해서
            코딩에 방해가 되지 않고, 가사가 있어서 혼자 있는 느낌이 들지
            않거든요.다른 개발분들은 코딩할 때 어떤 음악을 들으시나요?
          </p>
          <div className="list-info">
            <p>댓글 5</p>
            <div>
              <p>좋아요 67</p>
              <p>조회 219 </p>
            </div>
          </div>
        </li>
        <li>
          <h2>코딩할 때 듣는 노동요</h2>
          <p className="list-content">
            저는 혼자 코딩할 때 주로 드라마 OST를 듣습니다. 선율이 편안해서
            코딩에 방해가 되지 않고, 가사가 있어서 혼자 있는 느낌이 들지
            않거든요.다른 개발분들은 코딩할 때 어떤 음악을 들으시나요?
          </p>
          <div className="list-info">
            <p>댓글 5</p>
            <div>
              <p>좋아요 67</p>
              <p>조회 219 </p>
            </div>
          </div>
        </li>
        <li>
          <h2>코딩할 때 듣는 노동요</h2>
          <p className="list-content">
            저는 혼자 코딩할 때 주로 드라마 OST를 듣습니다. 선율이 편안해서
            코딩에 방해가 되지 않고, 가사가 있어서 혼자 있는 느낌이 들지
            않거든요.다른 개발분들은 코딩할 때 어떤 음악을 들으시나요?
          </p>
          <div className="list-info">
            <p>댓글 5</p>
            <div>
              <p>좋아요 67</p>
              <p>조회 219 </p>
            </div>
          </div>
        </li>
      </ul>
    </Style.ListContainer>
  );
};

const CommunityPost = () => {
  return (
    <Style.PostContainer>
      <SearchBar />
      <RecommendPost />
      <PostList />
    </Style.PostContainer>
  );
};

export default CommunityPost;
