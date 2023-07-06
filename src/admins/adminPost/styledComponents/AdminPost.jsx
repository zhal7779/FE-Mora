import styled from 'styled-components';

const normalWidth = '250px';

export const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, ${normalWidth});
  column-gap: 35px;
  row-gap: 50px;
  margin-bottom: 200px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, ${normalWidth});
    column-gap: 35px;
    row-gap: 50px;
    margin-bottom: 200px;
  }
`;
export const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
`;
export const EnrollButton = styled.button`
  padding: 7px 15px;
  border: ${(props) => (props.$purple ? 'none' : '1px solid #d9d9d9')};
  border-radius: 4px;

  background-color: ${(props) => (props.$purple ? '#7353ea' : 'white')};
  color: ${(props) => (props.$purple ? '#fff' : '#616161')};

  font-size: 1.5rem;
  font-weight: bold;
`;
export const PostLayout = styled.div`
  width: ${normalWidth};
  height: 220px;

  border-radius: 6px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
export const PostImage = styled.div`
  margin-bottom: 20px;

  & img {
    width: ${normalWidth};
    height: 140px;
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
export const PostInfoBlock = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;

  & .info:first-child {
    padding-left: 1.6rem;
    margin-bottom: 1rem;
  }
  & .title {
    max-width: 15rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    font-size: 1.4rem;
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
    padding: 4px 5px;
    margin-left: 1rem;
    border-radius: 3px;

    background-color: #f45757;
    color: #fff;
  }
`;
export const ScrollTopButton = styled.img`
  position: fixed;
  bottom: 100px;
  right: 50px;

  width: 80px;
  height: 80px;

  font-size: 1.4rem;
  font-weight: bold;

  color: #fff;
`;
