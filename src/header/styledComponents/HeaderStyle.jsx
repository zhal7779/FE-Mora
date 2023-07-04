import styled from 'styled-components';

export const HeaderStyle = styled.header`
  .container {
    position: fixed;
    display: block;
    left: 0;
    right: 0;
    top: 0;
    z-index: 90;
    background: var(--main-white);
    border-bottom: #cbd5e1 1px solid;
    height: 6rem;
  }

  .content {
    max-width: 1280px;
    height: 100%;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
  }
  .main-content {
    display: flex;
  }
  .logo {
    display: flex;
    align-items: center;
    padding: 0 2rem 0 1.1rem;
  }
  .menu-container {
    display: flex;
    align-items: center;
    p {
      padding: 2.1rem 2rem 2.1rem 2rem;
      font-weight: 700;
      font-size: 1.6rem;
      color: var(--dark-gray);
      &:hover {
        color: var(--main-font-color);
      }
    }
  }

  .menu-content {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .menu-item.active {
    border-bottom: 0.3rem solid #522bae;
  }

  .menu-item p {
    font-weight: 700;
    font-size: 1.6rem;
    color: var(--dark-gray);
  }

  .menu-item.active p {
    color: var(--main-font-color);
  }
  .side-content {
    display: flex;
    align-items: center;
    div {
      position: relative;
      padding: 1rem;
      cursor: pointer;
      .alarm {
        position: absolute;
        right: 0.1rem;
        width: 1.1rem;
        height: 1.1rem;
        border-radius: 50%;
        background: var(--dark-purple);
      }
    }
  }
  .img-icon {
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
    background: #969696;
    object-fit: cover;
  }
  .modal-content {
    position: fixed;
    top: 5.8rem;
    left: 96rem;
  }
  .nav-toggle {
    position: absolute;
    right: 2rem;
    top: 2rem;
    display: none;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    .container {
      height: auto;
    }

    .content {
      flex-direction: column;
    }
    .main-content {
      flex-direction: column;
    }
    .logo {
      padding: 2rem 0 2rem 2rem;
    }

    .menu-container {
      flex-direction: column;
      width: 100%;
    }

    .menu-content {
      flex-direction: column;
      width: 100%;
      padding: 0 2rem 0 2rem;
    }
    .menu-item {
      width: 100%;
      border-radius: 4px;
      /* &:hover {
        background-color: var(--light-purple);
      } */
      p {
        justify-content: center;
        align-items: center;
      }
    }
    .menu-item p {
      display: flex;
      justify-content: center;
    }
    .menu-item.active {
      background-color: var(--light-purple);
      border: none;
    }

    .side-content {
      justify-content: center;
    }
    .nav-toggle {
      display: block;
    }
  }
`;
