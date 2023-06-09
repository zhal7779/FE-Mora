import * as Style from './styledComponents/MyPageCoffeeChatStyle';
import Button from '../components/Button';

const MyPostList = () => {
  const myCoffeeChatData = [
    {
      accept: true,
      title: '멋진 선배님께 포트폴리오 관련 커피챗 신청합니다!',
      content:
        '안녕하세요 저는 엘리스 SW 4기를 수료하고 프론트엔드 개발자를 목표로 하고 있는 엘리스라고 합니다. 제 포트폴리오와 자소서를 선배님께 보여드리고 조언을 얻고 싶어서 연락드리게 되었습니다! 이번주에 평일 저녁 이후 시간이 괜찮으시다면 직접 혹은 비대면으로 만나뵙고 싶습니다! 편하신 시간대에 커피챗이나 메일로 연락해주시면 너무 감사드릴 것 같습니다!',
    },
    {
      accept: false,
      title: '안녕하세요 선배님 커피챗 신청드려요!',
      content:
        '안녕하세요 저는 엘리스 SW 4기를 수료하고 프론트엔드 개발자를 목표로 하고 있는 엘리스라고 합니다. 제 포트폴리오와 자소서를 선배님께 보여드리고 조언을 얻고 싶어서 연락드리게 되었습니다! 이번주에 평일 저녁 이후 시간이 괜찮으시다면 직접 혹은 비대면으로 만나뵙고 싶습니다! 편하신 시간대에 커피챗이나 메일로 연락해주시면 너무 감사드릴 것 같습니다!',
    },
    {
      accept: false,
      title: '정말 실례지만 존경하는 선배님의 도움이 절실합니다!',
      content:
        '안녕하세요 저는 엘리스 SW 4기를 수료하고 프론트엔드 개발자를 목표로 하고 있는 엘리스라고 합니다. 제 포트폴리오와 자소서를 선배님께 보여드리고 조언을 얻고 싶어서 연락드리게 되었습니다! 이번주에 평일 저녁 이후 시간이 괜찮으시다면 직접 혹은 비대면으로 만나뵙고 싶습니다! 편하신 시간대에 커피챗이나 메일로 연락해주시면 너무 감사드릴 것 같습니다!',
    },
  ];

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
