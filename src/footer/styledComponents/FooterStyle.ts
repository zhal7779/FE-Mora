import styled from 'styled-components';

export const FooterStyle = styled.footer`
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #f7f5ff;
  .content {
    padding: 2rem 0;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }
  .main-content {
    display: flex;
    padding: 0 3rem 2rem 3rem;
    border-bottom: #cbd5e1 0.1rem solid;
    justify-content: space-between;
    div {
      display: flex;
      align-items: center;
      gap: 1rem;
      right: 0;
    }
    button {
      background: transparent;
      cursor: pointer;
    }
    p {
      padding: 0 3rem;
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--dark-gray);
      cursor: pointer;
    }
  }

  .sub-content {
    border-bottom: #cbd5e1 0.1rem solid;
    display: flex;
    justify-content: space-between;
    padding: 0 5rem;
  }
  .sub-items {
    padding: 3rem 0;
    strong {
      font-size: 1.6rem;
      font-weight: 600;
    }
    p {
      font-size: 1.4rem;
      color: var(--dark-gray);
      padding: 1rem 0 0 0.5rem;
    }
  }
  .customer-content {
    display: flex;
    align-items: center;
    padding: 0 0 0 0.5rem;
    p {
      font-size: 1.5rem;
      font-weight: 500;
      padding-left: 1rem;
    }
  }
  .copyright {
    display: flex;
    justify-content: center;
    p {
      font-size: 1.3rem;
      color: var(--dark-gray);
      padding-top: 2rem;
    }
  }
  @media (max-width: 480px) {
    .main-content {
      flex-direction: column;
      gap: 1rem;
      .logo-content {
        justify-content: center;
      }
      .main-items {
        flex-direction: column;
      }
      .icons {
        justify-content: center;
      }
    }
    .sub-content {
      flex-direction: column;
    }
    .sub-items {
      padding: 1rem 0;
      display: flex;
      flex-direction: column;

      align-items: center;
    }
    .copyright {
      p {
        font-size: 1.4rem;
      }
    }
  }
  @media (min-width: 480px) and (max-width: 768px) {
    .main-content {
      flex-direction: column;
      div {
        justify-content: center;
        padding: 1rem;
      }
    }

    .sub-content {
      flex-direction: column;
    }
    .sub-items {
      display: flex;
      flex-direction: column;

      align-items: center;
    }
  }
`;
