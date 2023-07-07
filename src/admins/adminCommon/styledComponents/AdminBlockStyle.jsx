import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
`;
const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4.8rem;
  max-width: 124rem;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  margin: 0 auto;

  /* @media (max-width: 375px) {
  }
  @media (min-width: 375px) and (max-width: 768px) {
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    gap: 1rem;
  } */
`;

export { Container, InnerContainer };
