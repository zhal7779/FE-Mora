import postsData from '../data/postsData';
import {
  PostGrid,
  TitleBlock,
  Title,
  EnrollButton,
  PostLayout,
  PostImage,
  PostInfoBlock,
} from '../styledComponents/adminPost';

export const AdminPost = () => {
  return (
    <div>
      <TitleBlock>
        <Title className='table-title'>게시물 관리</Title>
        <EnrollButton $purple>등록</EnrollButton>
      </TitleBlock>
      <PostGrid className='grid-setting'>
        {postsData.map((post, idx) => {
          return (
            <PostLayout key={idx}>
              <PostImage className='image'>
                {post.imageUrl ? (
                  <img src={post.imageUrl} alt={post.title} className='img-tag' />
                ) : (
                  <div className='div-tag'></div>
                )}
              </PostImage>

              <PostInfoBlock className='title category'>
                <span className='title info'>{post.title}</span>
                <span className='category info '>{post.category}</span>
              </PostInfoBlock>

              <PostInfoBlock className='writer view-cnt created-at'>
                <span className='writer info six-one'>{post.writer}</span>
                <span className='view-cnt info six-one'>조회수: {post.viewCnt}</span>
                <span className='created-at info six-one'> 작성일: {post.createdAt}</span>
                <button className='delete'>삭제</button>
              </PostInfoBlock>
            </PostLayout>
          );
        })}
      </PostGrid>
    </div>
  );
};

export default AdminPost;
