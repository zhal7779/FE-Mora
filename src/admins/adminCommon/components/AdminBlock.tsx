import React from 'react';
import { Container, InnerContainer } from '../styledComponents/AdminBlockStyle';

interface AdminBlockProps {
  children: React.ReactNode;
}

const AdminBlock = ({ children }: AdminBlockProps) => {
  return (
    <Container>
      <InnerContainer>{children}</InnerContainer>
    </Container>
  );
};

export default AdminBlock;
