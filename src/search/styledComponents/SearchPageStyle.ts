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
  @media (max-width: 480px) {
    margin-top: 21.7rem;
  }
`;
export const NavContainer = styled.nav`
  z-index: 1;
  position: fixed;
  top: 17.7rem;
  background: var(--main-white);
  width: 100%;
  border-bottom: #cbd5e1 1px solid;
  .content {
    max-width: 1024px;
    padding: 0 0.5rem;
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }
  .search-nav {
    display: flex;
    gap: 0.8rem;
  }

  .swiper-wrapper {
    display: flex;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: fixed;
    top: 18.3rem;
    background-color: var(--main-white);
    padding: 2rem 0;
  }
  .swiper-button-prev {
    left: var(--swiper-navigation-sides-offset, 0px);
    right: auto;
  }

  .swiper-button-next {
    right: var(--swiper-navigation-sides-offset, 0px);
    left: auto;
  }

  @media (max-width: 768px) {
    top: 17rem;
    .content {
      max-width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  @media (max-width: 480px) {
    top: 16.7rem;
    .content {
      padding: 0 1.4rem;
    }
    .mobile-nav-item {
      padding: 1.7rem 0;
      font-size: 1.3rem;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        line-height: 1.2;
        width: auto;
        color: var(--dark-gray);
      }
    }
    .mobile-nav-item.active {
      background: #eeeafe;
      border-radius: 5px;
      padding: 1rem 0;
      margin: 0.7rem 0;
    }
    .mobile-nav-item.active p {
      color: #522bae;
    }
  }
`;

export const NavItem = styled.div<{ active: boolean }>`
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
