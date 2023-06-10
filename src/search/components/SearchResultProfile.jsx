import React from 'react';
import styled from 'styled-components';
import { ChatButton } from '../../openProfile/styledComponents/OpenProfileStyle';
import { ReactComponent as RightIcon } from '../../assets/icons/fi_chevron-right.svg';
import * as Style from '../styledComponents/AddView';
import { KeywordHighlight } from './KeywordHighlight';
import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
const SearchResultProfile = ({ data, receiveMenu }) => {
  //검색후 데이터에 키워드 하이라이트 줄 변수
  const keyword = useContext(SearchContext);

  //모두보기 클릭시 메뉴 2번 프로필 보기로 이동
  //모두보기 클릭시 메뉴에 보더가 2번으로 이동을 안함, 로직이 복잡할거 같으니 리덕스로 해야될듯
  const handleAllView = () => {
    receiveMenu(2);
  };

  return (
    <Container>
      {data.length <= 3 && (
        <Style.AddView>
          <div>
            <p className='title'>프로필</p>
            <p className='total_count'>108</p>
          </div>
          <div style={{ cursor: 'pointer' }} onClick={handleAllView}>
            <p className='all_view'>모두 보기</p>
            <RightIcon stroke='#242424' />
          </div>
        </Style.AddView>
      )}
      {data.map((item, index) => (
        <Content key={index}>
          <div>
            <div className='img_content'>
              <img
                className='img__content'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF8bkStA_NWmRIUeISz6lRnrar6tzQ0v0uCg&usqp=CAU'
              ></img>
            </div>
            <div className='text_content'>
              <h4>{item.name}</h4>
              <h5>
                <KeywordHighlight content={item.currentJob} keyword={keyword} />
              </h5>
              <p>
                경력: <KeywordHighlight content={item.career} keyword={keyword} />
              </p>
            </div>
          </div>
          <div className='button_content'>
            <ChatButton>커피챗 신청</ChatButton>
          </div>
        </Content>
      ))}
    </Container>
  );
};

export default SearchResultProfile;
const Container = styled.div`
  width: 700px;
  height: 100%;
  background: #ffffff;
  border: 1px #cbd5e1 solid;
  border-radius: 4px;
  margin: 4rem 0;
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
