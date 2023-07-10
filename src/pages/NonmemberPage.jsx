import React from 'react';
import Button from '../components/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import rabbitImg from '../assets/images/main-banner-img.png';
import logo from '../assets/images/logo2.png';
const NonmemberPage = () => {
  return (
    <Container>
      <img src={rabbitImg} />
      <div>
        <div className='content'>
          <img src={logo} />
          <strong>모여라 레이서 회원만 이용 가능합니다.</strong>
          <p>이용을 원하시면 로그인 후 이용해주세요.</p>
          <Link to='/login'>
            <Button value='로그인하러 가기' color='darkPurple'></Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default NonmemberPage;

const Container = styled.div`
  width: 1024px;
  height: 100vh;
  display: flex;
  margin: 0 auto 0 auto;
  align-items: center;
  justify-content: center;
  background: #eeeafe;
  border-left: #cbd5e1 1px solid;
  border-right: #cbd5e1 1px solid;
  img {
    height: 46rem;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    .content {
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
        height: 4rem;
        margin-bottom: 5rem;
      }
      strong {
        font-weight: 600;
        padding-bottom: 2rem;
      }
      p {
        color: rgb(96, 94, 160);
        padding-bottom: 5rem;
        font-size: 1.8rem;
      }
    }
  }
  @media (max-width: 480px) {
    flex-direction: column-reverse;
    height: 100%;
    width: 100%;
    gap: 6rem;
    border: none;
    img {
      height: 30rem;
      margin-bottom: 6rem;
    }

    div {
      .content {
        padding: 5rem;
        margin-left: 0;
        padding: 4rem 1.6rem;
        img {
          height: 3.4rem;
          margin-bottom: 3rem;
        }
        strong {
          font-size: 1.8rem;
        }
        p {
          font-size: 1.5rem;
          padding-bottom: 3rem;
        }
      }
    }
  }
  @media (min-width: 480px) and (max-width: 768px) {
    flex-direction: column-reverse;
    height: 100%;
    width: 100%;
    gap: 6rem;
    border: none;

    img {
      height: 36rem;
      margin-bottom: 8rem;
    }
    div {
      .content {
        padding: 5rem;
        margin-left: 0;
      }
    }
  }
`;
