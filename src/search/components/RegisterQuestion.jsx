import React from 'react';
import styled from 'styled-components';
import helpImg from '../../assets/images/help.png';
import Button from '../../components/Button';
const RegisterQuestion = () => {
  return (
    <Container>
      <Image src={helpImg} />
      <strong>궁금한 내용을 해결하지 못했나요?</strong>
      <p>레이서 Q&A에서 빠른 답변을 드려요.</p>
      <Button value={'질문하러 가기'} color='darkPurple' />
    </Container>
  );
};

export default RegisterQuestion;
const Container = styled.div`
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
  margin: 4rem 0;
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
  border-radius: 4px;
`;
