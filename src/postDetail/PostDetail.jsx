import * as Style from './styledComponents/PostDetailStyle';
import IconLike from '../assets/icons/icon-like.svg';

const PostDetail = () => {
  return (
    <Style.DetailContainer>
      <div className="title">
        <h2>코딩할 때 듣는 노동요</h2>
        <p className="view">조회 7</p>
      </div>
      <div className="writer">
        <div className="writer-img">{/* <img src={} alt=""/> */}</div>
        <div className="writer-info">
          <p className="writer-info-name">김코딩</p>
          <div>
            <p className="writer-info-position">레이서</p>
            <p className="writer-info-time">5분전</p>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="content-img">{/* <img src={} alt=''></img> */}</div>
        <div className="content-text">
          혼자 코딩할 때 주로 드라마 OST를 듣습니다. 선율이 편안해서 코딩에
          방해가 되지 않고, 가사가 있어서 혼자 있는 느낌이 들지 않거든요. 다른
          개발자분들은 코딩할 때 어떤 음악을 들으시나요?
        </div>
        <button className="like-btn">
          <img src={IconLike} alt="좋아요" />
          72
        </button>
      </div>
    </Style.DetailContainer>
  );
};

export default PostDetail;
