import React from 'react';
import NotificationList from './NotificationList';
import styled from 'styled-components';
const Notification = () => {
  return (
    <Container>
      <div>
        <h2>📢레이서 공지사항</h2>
        <p>레이서들이 참고할 만한</p>
        <p>엘리스 공지사항을 모아놨어요.</p>
      </div>

      <NotificationList />
    </Container>
  );
};

export default Notification;

const Container = styled.div`
  display: flex;
  padding: 3.8rem 2.4rem;

  h2 {
    margin-top: 6rem;
    font-size: 2.4rem;
    color: #242424;
    font-weight: 600;
    padding-bottom: 2rem;
  }
  p {
    font-size: 1.6rem;
    color: #605ea0;
    padding: 0 0 0.5rem 3.6rem;
  }
`;
