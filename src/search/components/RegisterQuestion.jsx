import React from 'react';
import styled from 'styled-components';
import helpImg from '../../assets/images/help.png';
import catImg from '../../assets/images/cat.png';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
const RegisterQuestion = ({ type }) => {
  return (
    <Container>
      {type === 'study' ? (
        <>
          <img className='cat-img-content' src={catImg} />
          <div>
            <strong>아직 스터디를 못 구하셨나요?</strong>
            <p>함께 공부할 스터디를 찾아볼까요?</p>
            <Link to='/community/post/study'>
              <Button value={'스터디 찾으러 가기'} color='darkPurple' />
            </Link>
          </div>
        </>
      ) : type === 'Q&A' ? (
        <>
          <img className='help-img-content' src={helpImg} style={{ paddingBottom: '1rem' }} />
          <div>
            <strong>궁금한 내용을 해결하지 못했나요?</strong>
            <p>레이서 Q&A에서 빠른 답변을 드려요.</p>
            <Link to='/write'>
              <Button value={'질문하러 가기'} color='darkPurple' />
            </Link>
          </div>
        </>
      ) : (
        ''
      )}
    </Container>
  );
};

export default RegisterQuestion;
const Container = styled.span`
  position: sticky;
  width: 30%;
  top: 260px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.4rem 1.6rem;
  border-radius: 4px;
  border: 1px solid #cbd5e1;
  background: #ffffff;
  font-size: 1.6rem;
  gap: 1rem;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  strong {
    font-weight: 600;
    padding-bottom: 1rem;
  }
  p {
    font-weight: 500;
    color: #64748b;
    margin-bottom: 2rem;
  }
  .cat-img-content {
    width: 16rem;
    margin-bottom: 2rem;
  }
  .help-img-content {
    width: 16rem;
    margin-bottom: 2rem;
  }
  @media (max-width: 768px) {
    width: 90%;
    height: 15.4rem;
    position: static;
    flex-direction: row-reverse;
    padding: 0 1.4rem;
    justify-content: space-between;
    .cat-img-content {
      margin: 3rem 0 0 0;
    }
    .help-img-content {
      margin: 1rem 0 0 0;
    }
  }
  @media (max-width: 480px) {
    flex-direction: column;
    height: auto;
    font-size: 1.5rem;
    padding: 1.4rem 1.2rem;
    .cat-img-content {
      width: 9rem;
      /* margin: 5.7rem 0 0 0; */
    }
    .help-img-content {
      width: 10rem;
      /* margin: 1rem 0 0 0; */
    }
  }
`;
