import React from 'react';
import styled from 'styled-components';
import * as Style from '../styledComponents/AddView';
import { ReactComponent as RightIcon } from '../../assets/icons/fi_chevron-right.svg';
import { KeywordHighlight } from './KeywordHighlight';
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
const SearchResultPost = ({ data, receiveMenu }) => {
  const keyword = useContext(SearchContext);
  const handleAllView = () => {
    receiveMenu(3);
  };
  return (
    <Container>
      {data.length <= 5 && (
        <Style.AddView>
          <div>
            <p className='title'>게시물</p>
            <p className='total_count'>23</p>
          </div>
          <div style={{ cursor: 'pointer' }} onClick={handleAllView}>
            <p className='all_view'>모두 보기</p>
            <RightIcon stroke='#242424' />
          </div>
        </Style.AddView>
      )}
      {data.map((item) => (
        <Content key={item.id}>
          <h3>
            <KeywordHighlight content={item.title} keyword={keyword} />
          </h3>
          <p>
            <KeywordHighlight content={item.content} keyword={keyword} />
          </p>
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
  margin: 4rem 0;
  width: 700px;
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
    line-height: 140%;
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
