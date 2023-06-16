import React from 'react';
import styled from 'styled-components';
import * as Style from '../styledComponents/AddView';
import { ReactComponent as RightIcon } from '../../assets/icons/fi_chevron-right.svg';
import { KeywordHighlight } from './KeywordHighlight';
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import NoData from '../../components/NoData';
import { Link } from 'react-router-dom';

const SearchResultQnA = ({ data, count, simple, receiveMenu }) => {
  const keyword = useContext(SearchContext);
  const handleAllView = () => {
    receiveMenu(6);
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
                <p className='title'>레이서 Q&A</p>
                <p className='total_count'>{count}</p>
              </div>
              <div style={{ cursor: 'pointer' }} onClick={handleAllView}>
                <p className='all_view'>모두 보기</p>
                <RightIcon stroke='#242424' />
              </div>
            </Style.AddView>
          )}
          {data &&
            data.map((item) => (
              <Link to={'/community/' + item.id}>
                <Content key={item.id}>
                  <div className='main_content'>
                    <div>
                      <strong>Q</strong>
                      <h2>
                        <KeywordHighlight content={item.title} keyword={keyword} />
                      </h2>
                    </div>
                    <p>
                      <KeywordHighlight content={item.content} keyword={keyword} />
                    </p>
                  </div>
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

export default SearchResultQnA;

const Container = styled.section`
  width: 700px;
  border: 1px #cbd5e1 solid;
  border-radius: 4px;
  background: #ffffff;
`;
const Content = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px #cbd5e1 solid;
  padding: 2rem 1.6rem;
  color: #242424;
  cursor: pointer;
  &:hover {
    background: rgba(233, 233, 238, 0.4);
    transition: 0.2s ease-out;
  }

  .main_content {
    width: 100%;
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
      line-height: 140%;
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
