import { Container, InnerContainer } from '../styledComponents/AdminBlockStyle';

const AdminBlock = ({ children }) => {
  return (
    <Container>
      <InnerContainer>{children}</InnerContainer>
    </Container>
  );
};

export default AdminBlock;
