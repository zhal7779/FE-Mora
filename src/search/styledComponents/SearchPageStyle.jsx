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
  padding: 4rem 0;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`;
export const NavContainer = styled.nav`
  z-index: 1;
  position: fixed;
  top: 17.7rem;
  background: #ffffff;
  width: 100%;
  border-bottom: #cbd5e1 1px solid;
`;
export const Content = styled.div`
  max-width: 1024px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
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
    color: ${(props) => (props.active ? '#242424' : '#bdbdbd')};
  }
`;
