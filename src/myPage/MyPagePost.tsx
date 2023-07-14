import * as Style from './styledComponents/MyPagePostStyle';
import { useQueries } from 'react-query';
import { Link } from 'react-router-dom';
import noDataImage from '../assets/images/no-data-image.svg';
const URL = process.env.REACT_APP_URL;

interface MyPostListData {
  id: number;
  title: string;
  content: string;
  comment_cnt: number;
  like_cnt: number;
  view_cnt: number;
  created_at: string;
}

const MyPostList = () => {
  const userToken = sessionStorage.getItem('userToken');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${userToken}`,
  };
  const queries = useQueries([
    {
      queryKey: 'myPostListData',
      queryFn: () =>
        fetch(`${URL}/api/users/mypage/board`, {
          headers: headers,
        }).then((response) => response.json()),
    },
    {
      queryKey: 'mainProfileData',
      queryFn: () =>
        fetch(`${URL}/api/users/mypage`, {
          headers: headers,
        }).then((response) => response.json()),
    },
  ]);

  const myPostListDataQuery = queries[0];
  const mainProfileDataQuery = queries[1];

  const myPostListData = myPostListDataQuery.data;
  const mainProfileData = mainProfileDataQuery.data;

  return (
    <Style.ListContainer>
      {myPostListData ? (
        <>
          <h2>내 게시물 {myPostListData.length}</h2>
          <ul>
            {myPostListData.map((item: MyPostListData, index: number) => (
              <li key={index}>
                <Link to={`/community/${item.id}`} key={index}>
                  <div className='profile-container'>
                    <img src={mainProfileData.UserDetail.img_path} alt='프로필'></img>
                    <div className='profile-info'>
                      <h3>{mainProfileData.name}</h3>
                      <p>{mainProfileData.UserDetail.position}</p>
                    </div>
                  </div>
                  <div className='content-container'>
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                  </div>

                  <div className='comment-like-view-container'>
                    <p>댓글 {item.comment_cnt}</p>
                    <div>
                      <p>좋아요 {item.like_cnt}</p>
                      <p>조회 {item.view_cnt} </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className='no-data-container'>
          <h2>로딩중 이에요..</h2>
          <img src={noDataImage} alt='noDataImage'></img>
        </div>
      )}
    </Style.ListContainer>
  );
};

const MyPagePost = () => {
  return (
    <Style.PostContainer>
      <MyPostList />
    </Style.PostContainer>
  );
};

export default MyPagePost;
