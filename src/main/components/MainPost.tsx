import * as Style from '../styledComponents/MainPostStyle';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { fetchMainPosts } from '../api/apis';
import { postData } from '../../@types/post/postDataType';
import Swal from 'sweetalert2';

const MainPost = () => {
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery<postData[], Error>(
    ['popular'],
    fetchMainPosts
  );

  if (isError) {
    return <Style.Status>{error.message}⚠️</Style.Status>;
  }

  if (isLoading) {
    return <Style.Status>Loading...⏳</Style.Status>;
  }

  const handleClick = (postId: number) => {
    if (sessionStorage.getItem('userToken')) {
      navigate(`/community/${postId}`);
    } else {
      Swal.fire({
        icon: 'warning',
        title: '로그인 후에 조회할 수 있어요👀',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }
  };

  return (
    <Style.PostContainer>
      <div className="post-title">
        <h2>모여라레이서 Top 10🔥</h2>
        <p>모여라레이서에서 가장 인기가 많은 게시물을 만나보세요.</p>
      </div>
      <ul className="post-list">
        {data?.map((post, index) => (
          <li key={post.id} onClick={() => handleClick(post.id)}>
            <p className="rank">{index + 1}</p>
            <div>
              <div className="writer">
                <div className="writer-img">
                  <img src={post.User.img_path} alt="사용자 프로필 사진" />
                </div>
                <div className="writer-info">
                  <p className="writer-info-name">{post.User.name}</p>
                  <p className="writer-info-position">{post.User.position}</p>
                </div>
              </div>
              <div className="content">
                <div className="content-text">
                  <span>{post.title}</span> | {post.content}
                </div>
                {post.Photos.length > 0 && (
                  <div className="content-img">
                    <img src={post.Photos[0]} alt="이미지 미리보기" />
                  </div>
                )}
                <div className="count">
                  <p>조회 {post.view_cnt}</p>
                  <p>좋아요 {post.like_cnt}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Style.PostContainer>
  );
};

export default MainPost;
