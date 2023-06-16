import React from 'react';
import styled from 'styled-components';
import * as Style from '../styledComponents/AddView';
import { ReactComponent as RightIcon } from '../../assets/icons/fi_chevron-right.svg';
import { KeywordHighlight } from './KeywordHighlight';
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import NoData from '../../components/NoData';
import { Link } from 'react-router-dom';
const SearchResultPost = ({ data, count, simple, receiveMenu, type }) => {
  console.log(data);
  const keyword = useContext(SearchContext);
  const handleAllView = () => {
    if (type === 'free') {
      receiveMenu(3);
    } else if (type === 'Knowledge') {
      receiveMenu(4);
    } else {
      receiveMenu(5);
    }
  };
  return (
    <Container>
      {data && data.length === 0 ? (
        <NoData />
      ) : (
        <>
          {data && simple === 'simple' && (
            <Style.AddView>
              <div>
                {type === 'free' ? (
                  <p className='title'>자유 게시판</p>
                ) : type === 'Knowledge' ? (
                  <p className='title'>지식 공유</p>
                ) : (
                  <p className='title'>스터디 모집</p>
                )}
                <p className='total_count'>{count}</p>
              </div>
              <div style={{ cursor: 'pointer' }} onClick={handleAllView}>
                <p className='all_view'>모두 보기</p>
                <RightIcon stroke='#242424' />
              </div>
            </Style.AddView>
          )}
          {data &&
            data.length &&
            data.map((item) => (
              <Link to={'/community/' + item.id}>
                <Content key={item.id}>
                  {type === 'free' ? (
                    <span className='subject'>자유</span>
                  ) : type === 'Knowledge' ? (
                    <span className='subject'>지식/정보</span>
                  ) : (
                    <span className='subject'>스터디/모임</span>
                  )}

                  <h3>
                    <KeywordHighlight content={item.title} keyword={keyword} />
                  </h3>
                  <p>
                    <KeywordHighlight content={item.content} keyword={keyword} />
                  </p>
                  <div className='hashtags'>
                    {item.Hashtags.map((hashtag, index) => (
                      <h3 key={index}>#{hashtag.title}</h3>
                    ))}
                  </div>
                  <div className='sub_content'>
                    <p>댓글 {item.comment_cnt}</p>
                    <div>
                      <p>좋아요 {item.like_cnt}</p>
                      <p>조회 {item.view_cnt}</p>
                    </div>
                  </div>
                </Content>
              </Link>
            ))}
        </>
      )}
    </Container>
  );
};

export default SearchResultPost;

const Container = styled.section`
  width: 700px;
  height: 100%;
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
  .subject {
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    margin-bottom: 1rem;
    background: #eeeafe;
    color: #a58cf5;
    font-weight: 600;
    font-size: 1rem;
  }
  h3 {
    font-size: 1.6rem;
    font-weight: 600;
    padding: 1.6rem 0;
  }
  p {
    font-size: 1.4rem;
    line-height: 140%;
  }

  .hashtags {
    display: flex;
    h3 {
      color: #94a3b8;
      margin-right: 1rem;
      font-size: 1.2rem;
      font-weight: 500;
    }
  }
  .sub_content {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    margin-bottom: 0;
    color: #242424;
    p {
      font-size: 1rem;
    }
    div {
      display: flex;
      gap: 1rem;
      p {
        font-size: 1rem;
        color: #bdbdbd;
      }
    }
  }
`;
