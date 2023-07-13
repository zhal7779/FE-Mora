import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RankingList = ({ data }) => {
  return (
    <>
      {data &&
        data.map((item, index) => (
          <Link to={'/community/' + item.id} key={item.id}>
            <Content rank={index + 1}>
              <p className='ranking'>{index + 1}</p>
              <img className='image_icon' src={item.User.img_path} alt='프로필'></img>
              <div>
                <h5 className='title'>{item.title}</h5>

                <div className='text_content'>
                  <h5>{item.User.name}</h5>
                  <p> {item.User.position}</p>
                </div>
              </div>
            </Content>
          </Link>
        ))}
    </>
  );
};

export default RankingList;

const Content = styled.div`
  padding: 1.6rem 0;
  border-bottom: 1px solid var(--blue-gray);
  display: flex;
  align-items: center;
  gap: 1rem;
  .ranking {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${(props) => (props.rank >= 4 ? 'var(--dark-gray)' : '#7353ea')};
    margin: ${(props) => (props.rank < 10 ? '0 1rem 0 0.5rem' : '0 0 0 0.5rem')};
    margin-bottom: 1rem;
  }

  .image_icon {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
  }

  div {
    margin-right: 0.5rem;
  }
  .title {
    ${(props) => props}
    font-weight: 600;
    font-size: 1.4rem;
    cursor: pointer;
    width: 14.8rem;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
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
      width: 10rem;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
  &:hover {
    background: rgba(233, 233, 238, 0.4);
    transition: 0.2s ease-out;
  }
  @media (max-width: 768px) {
    .title {
      width: auto;
    }
    .text_content {
      p {
        width: auto;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 1.2rem 0;
  }
`;
