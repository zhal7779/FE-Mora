import styled from 'styled-components';

export const SearchPageWrapper = styled.main`
  padding: 6rem 1rem;
  max-width: 1024px;
  width: 100%;
  height: 100%;
  display: flex;
  margin: 22rem auto 0 auto;
  justify-content: space-between;
  gap: 3rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    width: 100%;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    width: 100%;
    gap: 5rem;
    align-items: center;
    > div {
      width: 100%;
      align-items: center;
    }
  }
  @media (max-width: 480px) {
    margin: 21.7rem auto 0 auto;
  }
`;

export const NoDataWrapper = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const SchedulePageWrapper = styled.main`
  max-width: 1024px;
  height: 100%;
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
  max-width: 1024px;
  height: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  .profile_content {
    width: 100%;
    max-width: 738px;
    padding: 3.8rem 2rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-bottom: 10rem;
  }
`;
