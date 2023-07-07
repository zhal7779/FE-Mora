import styled from 'styled-components';
export const Background = styled.div`
  position: fixed;
  top: 0;
  z-index: 101;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
`;
export const Container = styled.div`
  position: fixed;
  z-index: 102;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 54%;
  height: 50.4rem;
  border-radius: 0.4rem;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  background: #fdfdff;

  .date {
    position: fixed;
    border-radius: 4px 4px 0 0;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 3rem;
    background: #fdfdff;

    h5 {
      color: var(--dark-gray);
      font-size: 1.8rem;
      font-weight: 700;
      padding: 0 1rem;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
      background: #aa8dff;
      border-radius: 50%;
      &:hover {
        background: rgb(170, 141, 255, 0.5);
      }
    }
  }

  .main-content {
    height: 100%;
    padding: 9rem 0 0 0;
  }
  .no-schedule {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    img {
      width: 25rem;
      margin-bottom: 3rem;
    }
    p {
      font-size: 1.6rem;
      color: var(--dark-gray);
    }
  }
  .main {
    background: #eeeafe;
    border-radius: 1rem;
    margin: 0 5rem 3rem 5rem;

    .header-span {
      display: block;
      width: 100%;
      height: 1.8rem;
      background: var(--light-purple);
      border-radius: 1rem 1rem 0 0;
    }
    .main-text {
      padding: 1.2rem 1.2rem 2rem 1.2rem;
      h5 {
        font-size: 1.6rem;
        font-weight: 700;
        padding-bottom: 2rem;
      }
      div {
        display: flex;
        flex-direction: column;
        padding: 0 3rem;
        gap: 1rem;

        p {
          font-size: 1.4rem;
          line-height: 140%;
          .link-box {
            background: #f1f0f7;
            border-radius: 4px;
            margin-top: 1rem;
            padding: 1rem 2rem;
            a {
              display: inline;
              color: #4700a8;

              &:hover {
                color: #6700eb;
              }
            }
          }
        }
      }
    }
  }
  .scroll {
    height: 100%;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 0.8rem;
    }
    &::-webkit-scrollbar-thumb {
      height: 10%;
      background-clip: padding-box;
      background: #d9d9d9;
      border-radius: 5px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 84%;
    height: 35.4rem;
    .date {
      padding: 2rem;
      h5 {
        font-size: 1.6rem;
      }
      div {
        gap: 0.5rem;
      }
    }
    .main {
      margin: 0 1.2rem 1.2rem 1.2rem;
      .main-text {
        padding: 1.2rem 1rem 2rem 1rem;
        h5 {
          font-size: 1.5rem;
          padding-bottom: 1.6rem;
        }
        div {
          padding: 0 2rem;
        }
      }
    }
    .no-schedule {
      img {
        width: 14rem;
      }
    }
  }
  @media (min-width: 480px) and (max-width: 768px) {
    width: 74%;
    height: 40.4rem;
    .main {
      margin: 0 2rem 2rem 2rem;
    }
    .no-schedule {
      img {
        width: 18rem;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    width: 64%;
    height: 45.4rem;
    .main {
      margin: 0 3rem 2rem 3rem;
    }
    .no-schedule {
      img {
        width: 22rem;
      }
    }
  }
`;
