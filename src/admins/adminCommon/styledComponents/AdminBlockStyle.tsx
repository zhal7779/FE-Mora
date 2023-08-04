import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
`;
export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4.8rem;
  max-width: 124rem;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0;
  }
`;
