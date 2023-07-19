import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { KeywordHighlight } from './KeywordHighlight';
import { SearchContext } from '../context/SearchContext';
import { SearchPostData } from '../interface/searchInterface';
interface Props {
  menu: string;
  item: SearchPostData;
}

const SearchPostList = ({ item, menu }: Props) => {
  const keyword = useContext(SearchContext);
  return (
    <li key={item.id}>
      <Link to={'/community/' + item.id}>
        <span className='subject'>
          {menu === 'free'
            ? '자유'
            : menu === 'Knowledge'
            ? '지식/정보'
            : menu === 'study'
            ? '스터디/모임'
            : 'Q&A'}
        </span>
        <div className='title-content'>
          {menu === 'Q&A' && <strong>Q</strong>}
          <h3>
            <KeywordHighlight content={item.title} keyword={keyword} />
          </h3>
        </div>
        <p>
          <KeywordHighlight content={item.content} keyword={keyword} />
        </p>
        <div className='hashtags'>
          {item.Hashtags.map((hashtag, index: number) =>
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
  );
};

export default SearchPostList;
