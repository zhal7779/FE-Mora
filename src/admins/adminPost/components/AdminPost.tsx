import { useRef, useCallback, useEffect } from 'react';
import { useInfiniteQuery, useMutation } from 'react-query';
import { Link } from 'react-router-dom';

import { images } from '../../../assets/images/images';
import { fetchDeletePost, fetchReadPostInfo } from '../apis/postApis';
import TopImg from '../../../assets/images/eliceRabbit-removebg-preview.png';
import {
  PostGrid,
  PostLayout,
  PostImage,
  PostInfoBlock,
  ScrollTopButton,
} from '../styledComponents/AdminPost';

interface AdminPostProps {
  keyword: string;
}

interface PhotosType {
  imgPath: string;
}

interface UserType {
  name: string;
  email: string;
}

interface PostType {
  Photos: PhotosType[];
  User: UserType;
  category: string;
  content: string;
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
  viewCnt: number;
  writer: string;
}

export const AdminPost = ({ keyword }: AdminPostProps) => {
  const observerElement = useRef(null);

  const { data, fetchNextPage, hasNextPage, isSuccess } = useInfiniteQuery(
    ['admin', 'posts', 'get', 'infinity', keyword],
    ({ pageParam = 0 }) => fetchReadPostInfo({ page: pageParam, view: 18, content: keyword }),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.currentPage + 1 < lastPage.totalPages
          ? lastPage.currentPage + 1
          : undefined;
      },
    }
  );

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
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

  const handleDelete = (id: string) => {
    const response = confirm('삭제하시겠습니까?');
    if (response) {
      deletePost(id);
    }
  };

  const { mutate: deletePost } = useMutation((id: string) => fetchDeletePost(id), {
    onError(error) {
      console.error(error);
    },
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <PostGrid className='grid-setting'>
        {isSuccess &&
          data.pages.map((page) =>
            page.objArr.map((post: PostType, idx: number) => (
              <PostLayout key={post.id}>
                <Link to={`/admin/posts/detail/${post.id}`}>
                  <PostImage className='image'>
                    {post.Photos.length > 0 ? (
                      <img
                        src={post.Photos[0].imgPath}
                        alt={'img'}
                        className='img-tag'
                        onError={(e) => {
                          const imageTarget = e.target as HTMLImageElement;
                          imageTarget.src = images[Math.floor((idx % 15) / 3)];
                        }}
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
                  <span className='view-cnt info six-one'>조회수: {post.viewCnt}</span>
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
        <ScrollTopButton src={TopImg} alt='엘리스 토끼' onClick={scrollToTop} />
      </PostGrid>
    </>
  );
};

export default AdminPost;
