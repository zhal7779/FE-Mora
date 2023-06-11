import * as Style from './styledComponents/MyPageCoffeeChatStyle';
import Button from '../components/Button';
import myCoffeeChatData from './data/myCoffeeChatData';

const MyPostList = () => {
  return (
    <Style.ListContainer>
      <h2>커피챗 {myCoffeeChatData.length}</h2>
      <ul>
        {myCoffeeChatData.map((item, index) => (
          <li key={index}>
            <div className='button-container'>
              <Button
                value={item.accept ? '수락완료' : '수락대기'}
                color={item.accept ? 'darkPurple' : 'lightPurple'}
              />
              <p>{item.accept ? '' : '삭제하기'}</p>
            </div>
            <div className='content-container'>
              <h4>{item.title}</h4>
              <p>{item.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </Style.ListContainer>
  );
};

const MyPageProfile = () => {
  return (
    <Style.PostContainer>
      <MyPostList />
    </Style.PostContainer>
  );
};

export default MyPageProfile;
