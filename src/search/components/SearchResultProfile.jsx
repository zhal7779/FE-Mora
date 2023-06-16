import React from 'react';
import styled from 'styled-components';
import { ChatButton } from '../../openProfile/styledComponents/OpenProfileStyle';
import { ReactComponent as RightIcon } from '../../assets/icons/fi_chevron-right.svg';
import * as Style from '../styledComponents/AddView';
import { KeywordHighlight } from './KeywordHighlight';
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import NoData from '../../components/NoData';
const SearchResultProfile = ({ data, count, simple, receiveMenu }) => {
  //검색후 데이터에 키워드 하이라이트 줄 변수
  const keyword = useContext(SearchContext);

  //모두보기 클릭시 메뉴 2번 프로필 보기로 이동
  const handleAllView = () => {
    receiveMenu(2);
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
                <RightIcon stroke='#242424' />
              </div>
            </Style.AddView>
          )}
          {data &&
            data.map((item) => (
              <Content key={item.user_id}>
                <div>
                  <div className='img_content'>
                    <img className='img__content' src={item.img_path}></img>
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
                  <ChatButton>오픈프로필 보기</ChatButton>
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
  background: #ffffff;
  border: 1px #cbd5e1 solid;
  border-radius: 4px;
`;

const Content = styled.div`
  padding: 1.6rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    background: rgba(233, 233, 238, 0.4);
    transition: 0.2s ease-out;
  }
  div {
    display: flex;
  }
  .img_content {
    align-items: center;
  }
  .img__content {
    display: flex;
    align-items: center;
    width: 4.6rem;
    height: 4.6rem;
    border-radius: 50%;
    color: #242424;
    margin-right: 1.6rem;
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
`;
