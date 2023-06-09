import React from 'react';
import styled from 'styled-components';
import data from '../../community/data/getResData';
const SearchResultQnA = () => {
  return (
    <Container>
      {data.map((item) => (
        <Content key={item.id}>
          <div className='main_content'>
            <div>
              <strong>Q</strong>
              <h2> {item.title}</h2>
            </div>
            <p>{item.content}</p>
          </div>
          <div className='hashtags'>
            {item.hashtags.map((hashtag) => (
              <h3>#{hashtag}</h3>
            ))}
          </div>
          <div className='sub_content'>
            <p>댓글 {item.view_cnt}</p>
            <div>
              <p>좋아요 {item.like_cnt}</p>
              <p>조회 {item.view_cnt}</p>
            </div>
          </div>
        </Content>
      ))}
    </Container>
  );
};

export default SearchResultQnA;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 4rem 0;
  width: 67%;
  gap: 2rem;
`;
const Content = styled.div`
  height: 20rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px #cbd5e1 solid;
  padding: 2rem 1.6rem;
  background: #ffffff;
  border-radius: 4px;
  color: #242424;
  background: #ffffff;
  cursor: pointer;
  &:hover {
    background: rgba(233, 233, 238, 0.1);
    transition: 0.2s ease-out;
  }

  .main_content {
    div {
      display: flex;
      align-items: center;
      font-size: 1.8rem;
      margin: 1rem 0 2rem 0;
      font-weight: 600;
      strong {
        margin-right: 1rem;
        color: #7353ea;
      }
      h2 {
        color: #242424;
      }
    }

    p {
      font-size: 1.3rem;
      margin-bottom: 2rem;
    }
  }
  .hashtags {
    display: flex;
    h3 {
      color: #94a3b8;
      margin-right: 1rem;
      font-size: 1.4rem;
      font-weight: 500;
      margin-bottom: 2rem;
    }
  }
  .sub_content {
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0;
    color: #242424;
    div {
      display: flex;
      gap: 1rem;
      p {
        color: #bdbdbd;
      }
    }
  }
`;
