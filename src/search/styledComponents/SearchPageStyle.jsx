import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  background: #f0f1f3;
`;

export const ProfileWrapper = styled.div`
  width: 1024px;
  height: 100%;
  display: flex;
  margin-top: 22rem;
  padding: 6rem 0 20rem 0;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const NavContainer = styled.nav`
  z-index: 1;
  position: fixed;
  top: 17.7rem;
  background: var(--main-white);
  width: 100%;
  border-bottom: #cbd5e1 1px solid;
  @media (max-width: 768px) {
    top: 17rem;
  }
`;
export const Content = styled.div`
  max-width: 1024px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SearchNav = styled.div`
  display: flex;
  gap: 0.8rem;
`;
export const SearchNavItem = styled.div`
  ${(props) => (props.active ? 'border-bottom: 0.3rem solid #522bae;' : '')}
  p {
    font-size: 1.6rem;
    font-weight: 700;
    padding: 1.6rem;
    cursor: pointer;
    color: ${(props) => (props.active ? 'var(--main-font-color)' : 'var(--light-gray)')};
  }
  @media (max-width: 768px) {
    p {
      font-size: 1.5rem;
      padding: 1.6rem 0.8rem;
    }
  }
`;
