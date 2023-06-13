import React from 'react';
import styled from 'styled-components';
import helpImg from '../../assets/images/help.png';
import catImg from '../../assets/images/cat.png';
import Button from '../../components/Button';
const RegisterQuestion = ({ type }) => {
  return (
    <Container>
      {type === 'study' ? (
        <>
          <Image src={catImg} style={{ width: '36rem' }} />
          <strong>아직 스터디를 못 구하셨나요?</strong>
          <p>함께 공부할 스터디를 찾아볼까요?</p>
          <Button value={'스터디 찾으러 가기'} color='darkPurple' />
        </>
      ) : type === 'Q&A' ? (
        <>
          <Image src={helpImg} />
          <strong>궁금한 내용을 해결하지 못했나요?</strong>
          <p>레이서 Q&A에서 빠른 답변을 드려요.</p>
          <Button value={'질문하러 가기'} color='darkPurple' />
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
  display: flex;
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
  strong {
    color: #242424;
    font-weight: 600;
  }
  p {
    font-weight: 500;
    color: #64748b;
    margin-bottom: 2rem;
  }
`;

const Image = styled.img`
  width: 16rem;
`;
