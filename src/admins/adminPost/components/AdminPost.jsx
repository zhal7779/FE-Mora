import { useRef, useCallback, useEffect } from 'react';
import { useInfiniteQuery, useMutation } from 'react-query';

import { images } from '../../../assets/images/images';
import { fetchDeletePost, fetchReadPostInfo } from '../apis/postApis';
import LoadingComponent from '../../adminCommon/components/LoadingComponent';
import { PostGrid, PostLayout, PostImage, PostInfoBlock } from '../styledComponents/AdminPost';
import { Link } from 'react-router-dom';

export const AdminPost = ({ keyword }) => {
  const observerElement = useRef(null);

  const handleDelete = (id) => {
    const response = confirm('삭제하시겠습니까?');
    if (response) {
      deletePost(id);
    }
  };

  const { mutate: deletePost, error: deleteError } = useMutation((id) => fetchDeletePost(id), {
    onError(error) {
      console.error(error);
    },
  });

  const { data, fetchNextPage, hasNextPage, isLoading, error, isSuccess } = useInfiniteQuery(
    ['admin', 'posts', 'get', 'infinity', keyword],
    ({ pageParam = 0 }) => fetchReadPostInfo({ page: pageParam, view: 18, content: keyword }),
    {
      getNextPageParam: (lastPage, allPosts) => {
        // 더 이상 로드할 페이지가 없는 경우에 undefined를 해줘야 더 이상 api를 호출하지 않음.
        // false주면 계속 호출하는 거 같음. 근데 error 남.
        // 아 여기 return값이 page에 들어가는 구나.
        return lastPage.currentPage + 1 < lastPage.totalPages
          ? lastPage.currentPage + 1
          : undefined;
      },
      // 이거 없으면 호출이 여러번 빠바방 일어남
      staleTime: 300,
      // 와우~~~~ 얘 없으면 계속 페이지가 리렌더링 됨.
      // 데이터를 불러오는 초기 UI가 되버려서 계속 화면이 푸터, 사이트바, 검색바 등이 계속 빠밤하고 나타
      keepPreviousData: true,
    }
  );

  const handleObserver = useCallback(
    (entries) => {
      const [target] = entries;
      if (target.isIntersecting) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage]
  );

  useEffect(() => {
    const element = observerElement.current;
    // element에 몇 % 닿아야 콜백 호출할 건지
    const option = { threshold: 0.3 };
    // 초기에 얘 없으면 에러남. ref 초기값이 null이라
    if (!element) return;

    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(element);
    return () => observer.unobserve(element);
  }, [fetchNextPage, hasNextPage, handleObserver]);

  if (isLoading) return <LoadingComponent search={'게시물 제목'} title={'게시물'} />;
  if (error) return <span>An error has occurred: {error.message}</span>;

  if (deleteError) return <span>An error has occurred: {deleteError.message}</span>;

  return (
    <>
      <PostGrid className='grid-setting'>
        {isSuccess &&
          data.pages.map((page) =>
            page.objArr.map((post, idx) => (
              <PostLayout key={post.id}>
                {/* <Link to={`/community/${item.id}`} key={index}> */}
                <PostImage className='image'>
                  {post.Photos.length > 0 ? (
                    <img src={post.Photos[0].img_path} alt={'img'} className='img-tag' />
                  ) : (
                    <img src={images[Math.floor((idx % 15) / 3)]} alt='엘리스 불토끼' />
                  )}
                </PostImage>
                {/* </Link> */}

                <PostInfoBlock className='title category'>
                  <span className='title info'>{post.title}</span>
                  <span className='category info '>
                    {post.category === 'free' ? '자유게시판' : '학습게시판'}
                  </span>
                </PostInfoBlock>

                <PostInfoBlock className='writer view-cnt created-at'>
                  <span className='writer info six-one'>{post.User.name}</span>
                  <span className='view-cnt info six-one'>조회수: {post.view_cnt}</span>
                  <span className='created-at info six-one'>
                    작성일: {post.createdAt.slice(0, 10)}
                  </span>
                  <button className='delete' onClick={() => handleDelete(post.id)}>
                    삭제
                  </button>
                </PostInfoBlock>
              </PostLayout>
            ))
          )}
        <div
          ref={observerElement}
          style={{
            height: '30rem',
          }}
        ></div>
      </PostGrid>
    </>
  );
};

export default AdminPost;
