import { useMutation } from 'react-query';

import { fetchDeletePost } from '../apis/postApis';
import { images } from '../../../assets/images/images';
import { PostGrid, PostLayout, PostImage, PostInfoBlock } from '../styledComponents/AdminPost';

export const AdminPost = ({ posts }) => {
  const handleDelete = (id) => {
    const response = confirm('삭제하시겠습니까?');
    if (response) {
      deletePost(id);
    }
  };

  const { mutate: deletePost, error } = useMutation((id) => fetchDeletePost(id), {
    onError(error) {
      console.error(error);
    },
  });

  if (error) console.error(error);

  return (
    <>
      <PostGrid className='grid-setting'>
        {posts.map((post, idx) => {
          return (
            <PostLayout key={post.id}>
              <PostImage className='image'>
                {post.Photos.length > 0 ? (
                  <img src={post.Photos[0].img_path} alt={'img'} className='img-tag' />
                ) : (
                  <img src={images[Math.floor((idx % 15) / 3)]} alt='엘리스 불토끼' />
                )}
              </PostImage>

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
          );
        })}
      </PostGrid>
    </>
  );
};

export default AdminPost;
