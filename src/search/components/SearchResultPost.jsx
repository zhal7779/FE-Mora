import React from 'react';
import styled from 'styled-components';
import data from '../../community/data/getResData';
const SearchResultPost = () => {
  return (
    <Container>
      {data.map((item) => (
        <Content key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
          <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF8bkStA_NWmRIUeISz6lRnrar6tzQ0v0uCg&usqp=CAU'></img>
            <h4>민영(min_young)</h4>
            <h5>라인플러스 프론트엔드 개발자</h5>
          </div>
        </Content>
      ))}
    </Container>
  );
};

export default SearchResultPost;

const Container = styled.section`
  margin: 4rem;
  width: 67%;
  border-radius: 4px;
  border: 1px #cbd5e1 solid;
  background: #ffffff;
`;

const Content = styled.div`
  padding: 2rem;
  border-bottom: 1px #cbd5e1 solid;
  color: #242424;
  cursor: pointer;
  &:hover {
    background: rgba(233, 233, 238, 0.4);
    transition: 0.2s ease-out;
  }
  h3 {
    font-size: 1.6rem;
    font-weight: 600;
    padding-bottom: 1.6rem;
  }
  p {
    font-size: 1.4rem;
    padding-bottom: 2rem;
  }
  div {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 600;
    img {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      margin-right: 1rem;
    }
    h4 {
      color: #242424;
      margin-right: 0.5rem;
    }
    h5 {
      color: #64748b;
    }
  }
`;
