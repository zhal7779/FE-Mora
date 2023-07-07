import styled from 'styled-components';

export const Container = styled.header`
  display: block;
  left: 0;
  right: 0;
  top: 0;
  height: 6rem;
  padding: 0 5rem;

  border-bottom: #cbd5e1 1px solid;
  background: var(--main-white);

  & .hamburger-menu-block {
    display: none;

    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 0 2rem;

    & .hamburger-menu-block {
      display: block;
    }
  }
`;
export const Content = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    & .morae-logo {
      width: 10rem;
    }
    & .user-logo {
      display: none;
    }
  }
`;
export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const AdminInfoBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 10rem;
`;
export const AdminName = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
`;
export const MenuBarUl = styled.ul`
  position: absolute;
  top: 55px;
  left: 0;
  right: 0;

  display: none;

  @media (max-width: 768px) {
    display: block;
    top: 58px;
  }
`;
export const MenuBarLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65px;
  border-bottom: 1px solid #cbd5e1;

  font-size: 1.8rem;

  transition: all 0.3s ease;
  background-color: var(--main-white);
  color: var(#000);

  cursor: pointer;

  &:hover {
    background-color: var(--light-purple);
  }

  @media (max-width: 375px) {
    font-size: 1.4rem;
    height: 40px;
  }
`;
export const HamburgerMenu = () => (
  <svg
    width='28px'
    height='28px'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
    <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
    <g id='SVGRepo_iconCarrier'>
      <path
        d='M4 17H20M4 12H20M4 7H20'
        stroke='#7353ea'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
    </g>
  </svg>
);
