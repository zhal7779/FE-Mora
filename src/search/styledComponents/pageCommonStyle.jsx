import styled from 'styled-components';

export const SearchPageWrapper = styled.main`
  padding: 6rem 0;
  width: 1024px;
  height: 100%;
  display: flex;
  margin: 22rem auto 0 auto;
  justify-content: space-between;
  > div {
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    width: 100%;
    gap: 5rem;
    align-items: center;
  }
`;

export const NoDataWrapper = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const SchedulePageWrapper = styled.main`
  width: 1024px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-bottom: 10rem;
  }
`;

export const OpenProfilePageWrapper = styled.main`
  width: 1024px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-bottom: 10rem;
    .content {
      margin: 0 2.4rem;
    }
  }

  @media (max-width: 480px) {
    .content {
      margin: 0 1rem;
    }
  }
`;
