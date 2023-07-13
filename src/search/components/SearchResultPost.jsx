import React from 'react';
import styled from 'styled-components';
import * as Style from '../styledComponents/AddView';
import { ReactComponent as RightIcon } from '../../assets/icons/fi_chevron-right.svg';
import { KeywordHighlight } from './KeywordHighlight';
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import NoData from '../../components/NoData';
import { Link } from 'react-router-dom';

const SearchResultPost = ({ data, count, simple, receiveMenu, type, hasNextPage, observerRef }) => {
  const keyword = useContext(SearchContext);
  const handleAllView = () => {
    if (type === 'free') {
      receiveMenu('free');
    } else if (type === 'Knowledge') {
      receiveMenu('Knowledge');
    } else if (type === 'study') {
      receiveMenu('study');
    } else {
      receiveMenu('question');
    }
  };

  return (
    <Container>
      <Content>
        {data && simple === 'simple' && (
          <Style.AddView>
            <div>
              {type === 'free' ? (
                <p className='title'>자유 게시판</p>
              ) : type === 'Knowledge' ? (
                <p className='title'>지식 공유</p>
              ) : type === 'study' ? (
                <p className='title'>스터디 모집</p>
              ) : (
                <p className='title'>레이서 Q&A</p>
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
          data.pages.map((page) =>
            page.totalItems === 0 ? (
              <NoData />
            ) : (
              page.objArr.map((item) => (
                <li key={item.id}>
                  <Link to={'/community/' + item.id}>
                    {type === 'free' ? (
                      <span className='subject'>자유</span>
                    ) : type === 'Knowledge' ? (
                      <span className='subject'>지식/정보</span>
                    ) : type === 'study' ? (
                      <span className='subject'>스터디/모임</span>
                    ) : (
                      <span className='subject'>Q&A</span>
                    )}
                    <div className='title-content'>
                      {type === 'Q&A' && <strong>Q</strong>}
                      <h3>
                        <KeywordHighlight content={item.title} keyword={keyword} />
                      </h3>
                    </div>
                    <p>
                      <KeywordHighlight content={item.content} keyword={keyword} />
                    </p>
                    <div className='hashtags'>
                      {item.Hashtags.map((hashtag, index) =>
                        hashtag && hashtag.length > 0 ? <h3 key={index}>#{hashtag}</h3> : null
                      )}
                    </div>
                    <div className='sub_content'>
                      <p>댓글 {item.comment_cnt}</p>
                      <div>
                        <p>좋아요 {item.like_cnt}</p>
                        <p>조회 {item.view_cnt}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))
            )
          )}
        {hasNextPage && <div ref={observerRef}></div>}
      </Content>
    </Container>
  );
};

export default SearchResultPost;

const Container = styled.section`
  width: 700px;
  border-radius: 4px;
  border: 1px #cbd5e1 solid;
  background: #ffffff;
  height: inherit;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Content = styled.ul`
  li {
    padding: 2rem;
    border-bottom: 1px #cbd5e1 solid;
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
    .title-content {
      display: flex;
      align-items: center;
      font-size: 1.6rem;
      strong {
        font-weight: 600;
        margin-right: 1rem;
        color: var(--dark-purple);
      }
    }
    h3 {
      padding: 1rem 0;
    }
    p {
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 1.4rem;
      line-height: 140%;
    }

    .hashtags {
      display: flex;
      padding-top: 1rem;
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
      p {
        font-size: 1rem;
      }
      div {
        display: flex;
        gap: 1rem;
        p {
          font-size: 1rem;
          color: var(--light-gray);
        }
      }
    }
  }
`;
