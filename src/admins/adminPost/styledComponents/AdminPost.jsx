import styled from 'styled-components';

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 24rem);
  column-gap: 4rem;
  row-gap: 5rem;
  margin-bottom: 20rem;
`;

const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6rem;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
`;

const EnrollButton = styled.button`
  padding: 0.7rem 1.5rem;
  border: ${(props) => (props.$purple ? 'none' : '1px solid #d9d9d9')};
  border-radius: 4px;

  background-color: ${(props) => (props.$purple ? '#7353ea' : 'white')};
  color: ${(props) => (props.$purple ? '#fff' : '#616161')};

  font-size: 1.5rem;
  font-weight: bold;

  cursor: pointer;
`;

const PostLayout = styled.div`
  width: 24rem;
  height: 20rem;
  /* 14 -> img */

  border-radius: 6px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const PostImage = styled.div`
  width: 24rem;
  height: 14rem;
  margin-bottom: 1rem;

  & img {
    object-fit: cover;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  & div {
    width: 100%;
    height: 100%;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;

    background-color: #fffeb6;
  }
`;

const PostInfoBlock = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;

  & .info:first-child {
    padding-left: 1rem;
    margin-bottom: 0.7rem;
  }
  & .title {
    max-width: 17rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    font-size: 1.2rem;
    font-weight: bold;
  }
  & .category {
    line-height: 1.2rem;
    color: #bdbdbd;
  }
  & .six-one {
    color: #616161;
  }
  & .delete {
    padding: 0.4rem 0.5rem;
    margin-left: 1rem;
    border-radius: 0.3rem;

    background-color: #f45757;
    color: #fff;

    cursor: pointer;
  }
`;

export { PostGrid, TitleBlock, Title, EnrollButton, PostLayout, PostImage, PostInfoBlock };
