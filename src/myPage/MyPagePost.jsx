import * as Style from './styledComponents/MyPagePostStyle';
import { useState } from 'react';
import { useQueries } from 'react-query';
import { Link } from 'react-router-dom';
import noDataImage from '../assets/images/no-data-image.svg';
const URL = process.env.REACT_APP_URL;

const MyPostList = () => {
  // const [myPostListData, setMyPostListData] = useState([
  //   {
  //     title: '미쳐버린 제목',
  //     content:
  //       '유익함이 폭발한다 개발자라면 이제는 꼭 알아야 하는 내용ㅋㅋ 이걸 모르는 개발자가 타이어보다 싸다! 유익함이 폭발한다 개발자라면 이제는 꼭 알아야 하는 내용ㅋㅋ 이걸 모르는 개발자가 타이어보다 싸다! 유익함이 폭발한다 개발자라면 이제는 꼭 알아야 하는 내용ㅋㅋ 이걸 모르는 개발자가 타이어보다 싸다!',
  //     comment_cnt: 5,
  //     like_cnt: 60,
  //     view_cnt: 100,
  //   },
  //   {
  //     title: '맛깔나는 제목',
  //     content:
  //       '재미가 폭발한다 개발자라면 이제는 꼭 맛봐야 하는 내용ㅋㅋ 이걸 모르는 개발자가 신발보다 싸다! 재미가 폭발한다 개발자라면 이제는 꼭 맛봐야 하는 내용ㅋㅋ 이걸 모르는 개발자가 신발보다 싸다! 재미가 폭발한다 개발자라면 이제는 꼭 맛봐야 하는 내용ㅋㅋ 이걸 모르는 개발자가 신발보다 싸다!',
  //     comment_cnt: 5,
  //     like_cnt: 60,
  //     view_cnt: 100,
  //   },
  //   {
  //     title: '정신나간 제목',
  //     content:
  //       '멋짐이 폭발한다 개발자라면 이제는 꼭 배워야 하는 내용ㅋㅋ 이걸 모르는 개발자가 키보드보다 싸다! 멋짐이 폭발한다 개발자라면 이제는 꼭 배워야 하는 내용ㅋㅋ 이걸 모르는 개발자가 키보드보다 싸다! 멋짐이 폭발한다 개발자라면 이제는 꼭 배워야 하는 내용ㅋㅋ 이걸 모르는 개발자가 키보드보다 싸다!',
  //     comment_cnt: 5,
  //     like_cnt: 60,
  //     view_cnt: 100,
  //   },
  // ]);

  const queries = useQueries([
    {
      queryKey: 'myPostListData',
      queryFn: () =>
        fetch(`${URL}/api/users/mypage/board`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
          },
        }).then((response) => response.json()),
    },
    {
      queryKey: 'mainProfileData',
      queryFn: () =>
        fetch(`${URL}/api/users/mypage`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('userToken')}`,
          },
        }).then((response) => response.json()),
    },
  ]);

  const myPostListDataQuery = queries[0];
  const mainProfileDataQuery = queries[1];

  const myPostListData = myPostListDataQuery.data;
  const mainProfileData = mainProfileDataQuery.data;

  console.log(myPostListData);
  console.log(mainProfileData);

  return (
    <Style.ListContainer>
      {myPostListData ? (
        <>
          <h2>내 게시물 {myPostListData.length}</h2>
          <ul>
            {myPostListData.map((item, index) => (
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

const MyPageProfile = ({ mainProfileData }) => {
  return (
    <Style.PostContainer>
      <MyPostList mainProfileData={mainProfileData} />
    </Style.PostContainer>
  );
};

export default MyPageProfile;

``;
