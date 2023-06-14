import React from 'react';
import Button from '../components/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NonmemberWrapper } from '../search/styledComponents/pageCommonStyle';
import rabbitImg from '../assets/images/main-banner-img.png';
import logo from '../assets/images/logo2.png';
const NonmemberPage = () => {
  return (
    <NonmemberWrapper>
      <Container>
        <img src={rabbitImg} />
        <div>
          <span>
            <img src={logo} />
            <strong>모여라 레이서 회원만 이용 가능합니다.</strong>
            <p>로그인 후 이용해주세요.</p>
            <Link to='/login'>
              <Button value='로그인하러 가기' color='darkPurple'></Button>
            </Link>
          </span>
        </div>
      </Container>
    </NonmemberWrapper>
  );
};

export default NonmemberPage;

const Container = styled.div`
  margin: 10rem 2rem;
  display: flex;
  justify-content: space-between;
  img {
    width: 46rem;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2rem;

    span {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-left: 6rem;
      margin-top: 15rem;
      padding: 5rem 2rem;
      border-radius: 10px;
      background: #fdfdff;
      border: solid #cbd5e1 1px;
      box-shadow: rgba(0, 0, 0, 0.2) 1.9px 1.9px 2.6px;
      img {
        width: 20rem;
        padding-bottom: 4rem;
      }
      strong {
        color: #242424;
        font-weight: 600;
        padding-bottom: 1rem;
      }
      p {
        color: rgb(96, 94, 160);
        padding-bottom: 3rem;
      }
    }
  }
`;
