import React from 'react';
import styled from 'styled-components';
import data from './ranking.json';
const RankingList = () => {
  return (
    <>
      {data.map((item) => (
        <Content key={item.rank} rank={item.rank}>
          <p className='ranking'>{item.rank}</p>
          <img
            className='image_icon'
            src='https://www.chemicalnews.co.kr/news/photo/202210/4996_13445_157.png'
          ></img>
          <div>
            <h5 className='title'>{item.title}</h5>
            <div className='text_content'>
              <h5>{item.name}</h5>
              <p>{item.currentJob}</p>
            </div>
          </div>
        </Content>
      ))}
    </>
  );
};

export default RankingList;

const Content = styled.div`
  padding: 1.6rem 0;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  gap: 1rem;
  .ranking {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${(props) => (props.rank >= 4 ? '#242424' : '#7353ea')};
    margin-right: 1rem;
    margin-bottom: 1rem;
  }

  .image_icon {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
  .title {
    ${(props) => props}
    font-weight: 600;
    font-size: 1.4rem;
    color: #242424;
    cursor: pointer;
    &:hover {
    }
  }
  .text_content {
    display: flex;
    align-items: center;
    /* Change to a column layout */
    margin-top: 0.5rem; /* Add margin to separate from the title */
    h5 {
      font-weight: 600;
      font-size: 1.2em;
      color: #424242;
      padding-right: 0.5rem;
    }
    p {
      font-weight: 700;
      font-size: 1rem;
      color: #bdbdbd;
    }
  }
`;
