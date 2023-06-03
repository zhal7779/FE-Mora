import * as Style from './styledComponents/PostListStyle';
import { Link } from 'react-router-dom';

const PostList = () => {
  // 선택된 카테고리에 해당하는 게시글 목록을 가져오는 로직 작성

  return (
    <Style.PostContainer>
      {/* 게시글 목록을 렌더링하는 로직 작성 */}
      <ul>
        <li>
          <Link to="#">
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
          </Link>
        </li>
        <li>
          <Link to="#">
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
          </Link>
        </li>
        <li>
          <Link to="#">
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
          </Link>
        </li>
        <li>
          <Link to="#">
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
          </Link>
        </li>
        <li>
          <Link to="#">
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
          </Link>
        </li>
      </ul>
    </Style.PostContainer>
  );
};

export default PostList;
