import React from 'react';
import styled from 'styled-components';
import { ChatButton } from '../../openProfile/styledComponents/OpenProfileStyle';
import data from './searchProfile.json';
const SearchResultProfile = () => {
  return (
    <Container>
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
              <h5>{item.currentJob}</h5>
              <p>경력: {item.career}</p>
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
  width: 634px;
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
