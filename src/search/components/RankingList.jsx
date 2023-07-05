import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RankingList = ({ data }) => {
  return (
    <>
      {data &&
        data.map((item, index) => (
          <Content key={item.id} rank={index + 1}>
            <p className='ranking'>{index + 1}</p>
            <img className='image_icon' src={item.User.img_path} alt='프로필'></img>
            <div>
              <Link to={'/community/' + item.id}>
                <h5 className='title'>{item.title}</h5>
              </Link>
              <div className='text_content'>
                <h5>{item.User.name}</h5>
                <p> {item.User.position}</p>
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
    color: ${(props) => (props.rank >= 4 ? 'var(--dark-gray)' : '#7353ea')};
    margin-right: 1rem;
    margin-bottom: 1rem;
  }

  .image_icon {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    object-fit: cover;
  }
  .title {
    ${(props) => props}
    font-weight: 600;
    font-size: 1.4rem;
    cursor: pointer;
    width: 15.9rem;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    &:hover {
    }
  }
  .text_content {
    display: flex;
    align-items: center;

    margin-top: 1rem;
    h5 {
      font-weight: 600;
      font-size: 1.2em;
      color: #424242;
      padding-right: 0.5rem;
    }
    p {
      font-weight: 700;
      font-size: 1rem;
      color: #605ea0;
      width: 11rem;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
`;
