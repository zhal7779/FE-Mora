import React from 'react';
import styled from 'styled-components';
import { ChatButton } from '../../openProfile/styledComponents/OpenProfileStyle';
import { ReactComponent as RightIcon } from '../../assets/icons/fi_chevron-right.svg';
import * as Style from '../styledComponents/AddView';
import { KeywordHighlight } from './KeywordHighlight';
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import NoData from '../../components/NoData';
import { Link } from 'react-router-dom';
const SearchResultProfile = ({ data, count, simple, receiveMenu }) => {
  //검색후 데이터에 키워드 하이라이트 줄 변수
  const keyword = useContext(SearchContext);

  //모두보기 클릭시 메뉴 2번 프로필 보기로 이동
  const handleAllView = () => {
    receiveMenu('openProfile');
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
                <p className='title'>프로필</p>
                <p className='total_count'>{count}</p>
              </div>
              <div style={{ cursor: 'pointer' }} onClick={handleAllView}>
                <p className='all_view'>모두 보기</p>
                <RightIcon stroke='var(--main-font-color)' />
              </div>
            </Style.AddView>
          )}
          {data &&
            data.map((item) => (
              <Content key={item.user_id}>
                <div>
                  <div className='img-container'>
                    <img className='img-content' src={item.img_path} alt='프로필'></img>
                  </div>
                  <div className='text_content'>
                    <h4>{item.User.name}</h4>
                    <h5>
                      <KeywordHighlight content={item.position} keyword={keyword} />
                    </h5>
                    <div className='skill'>
                      {item.User.Skills.map((skill) => (
                        <p>#{skill.name} </p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='button_content'>
                  <Link to='/openProfile'>
                    <ChatButton>오픈프로필 보기</ChatButton>
                  </Link>
                </div>
              </Content>
            ))}
        </>
      )}
    </Container>
  );
};

export default SearchResultProfile;
const Container = styled.section`
  width: 700px;
  height: inherit;
  background: var(--main-white);
  border: 1px #cbd5e1 solid;
  border-radius: 4px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Content = styled.div`
  padding: 2.4rem;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
  }
  .img-container {
    align-items: center;
  }
  .img-content {
    display: flex;
    align-items: center;
    width: 4.6rem;
    height: 4.6rem;
    border-radius: 50%;
    margin-right: 1.6rem;
    object-fit: cover;
  }
  .skill {
    display: flex;
    gap: 1rem;
  }
  .text_content {
    display: flex;
    flex-direction: column;
  }
  .button_content {
    align-items: center;
  }
  h4 {
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  h5 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.2rem;
    color: #94a3b8;
  }
  border-bottom: 1px #cbd5e1 solid;
  @media (max-width: 430px) {
    flex-direction: column;
    gap: 2rem;
    .button_content {
      margin-left: 6.2rem;
    }
  }
`;
