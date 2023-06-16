import { useRef, useCallback, useEffect } from 'react';
import { useInfiniteQuery, useMutation } from 'react-query';
import { Link } from 'react-router-dom';

import { images } from '../../../assets/images/images';
import { fetchDeletePost, fetchReadPostInfo } from '../apis/postApis';
import { PostGrid, PostLayout, PostImage, PostInfoBlock } from '../styledComponents/AdminPost';

export const AdminPost = ({ keyword }) => {
  const observerElement = useRef(null);

  const { data, fetchNextPage, hasNextPage, error, isSuccess } = useInfiniteQuery(
    ['admin', 'posts', 'get', 'infinity', keyword],
    ({ pageParam = 0 }) => fetchReadPostInfo({ page: pageParam, view: 18, content: keyword }),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.currentPage + 1 < lastPage.totalPages
          ? lastPage.currentPage + 1
          : undefined;
      },
      staleTime: 300,

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
    const option = { threshold: 0 };
    if (!element) return;

    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(element);
    return () => observer.unobserve(element);
  }, [fetchNextPage, hasNextPage, handleObserver]);

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

  if (error) return <span>An error has occurred: {error.message}</span>;
  if (deleteError) return <span>An error has occurred: {deleteError.message}</span>;

  return (
    <>
      <PostGrid className='grid-setting'>
        {isSuccess &&
          data.pages.map((page) =>
            page.objArr.map((post, idx) => (
              <PostLayout key={post.id}>
                <Link to={`/admin/posts/detail/${post.id}`}>
                  <PostImage className='image'>
                    {post.Photos.length > 0 ? (
                      <img
                        src={post.Photos[0].img_path}
                        alt={'img'}
                        className='img-tag'
                        onError={(e) => (e.target.src = images[Math.floor((idx % 15) / 3)])}
                      />
                    ) : (
                      <img src={images[Math.floor((idx % 15) / 3)]} alt='엘리스 불토끼' />
                    )}
                  </PostImage>
                </Link>

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
