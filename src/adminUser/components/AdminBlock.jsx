import styled from 'styled-components';

// admin building block
const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
`;
const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 48px;
  max-width: 1024px;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  margin: 0 auto;
`;

const AdminBlock = ({ children }) => {
  return (
    <Container>
      <InnerContainer>{children}</InnerContainer>
    </Container>
  );
};

export default AdminBlock;
