import { Container, InnerContainer } from '../styledComponents/adminBlock';

const AdminBlock = ({ children }) => {
  return (
    <Container>
      <InnerContainer>{children}</InnerContainer>
    </Container>
  );
};

export default AdminBlock;
