import * as Style from './styledComponents/MainPostStyle';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
const BASE_URL = process.env.REACT_APP_URL;

const MainPost = () => {
  const fetchMainPosts = async () => {
    const response = await fetch(`${BASE_URL}/api/boards/popular`);

    if (!response.ok) {
      throw new Error('게시글을 불러오는데 실패했습니다.');
    }

    const result = await response.json();
    return result;
  };

  const { data, isLoading, isError, error } = useQuery(
    ['popular'],
    fetchMainPosts
  );

  if (isError) {
    return <Style.Status>{error.message}⚠️</Style.Status>;
  }

  if (isLoading) {
    return <Style.Status>Loading...⏳</Style.Status>;
  }
  return (
    <Style.PostContainer>
      {console.log(data)}
      <div className="post-title">
        <h2>모여라레이서 Top 10🔥</h2>
        <p>모여라레이서에서 가장 인기가 많은 게시물을 만나보세요.</p>
      </div>
      <ul className="post-list">
        {data.map((post, index) => (
          <li key={post.id}>
            <Link to={`/community/${post.id}`}>
              <p className="rank">{index + 1}</p>
              <div>
                {/* <div className="writer">
                <div className="writer-img">
                  <img
                    src={post.user_detail.img_path}
                    alt="사용자 프로필 사진"
                  />
                </div>
                <div className="writer-info">
                  <p className="writer-info-name">{post.User.name}</p>
                  <p className="writer-info-position">
                    {post.user_detail.position}
                  </p>
                </div>
              </div> */}
                <div className="content">
                  <div className="content-text">
                    <span>{post.title}</span> | {post.content}
                  </div>
                  {post.Photos.length > 0 && (
                    <div className="content-img">
                      <img
                        src={post.Photos[0].img_path}
                        alt={post.Photos.origin_name}
                      />
                    </div>
                  )}
                  <div className="count">
                    <p>조회 {post.view_cnt}</p>
                    <p>좋아요 {post.like_cnt}</p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Style.PostContainer>
  );
};

export default MainPost;
