import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  width: 100%;
  height: 100vh;
  background: transparent;
  @media (max-width: 768px) {
    top: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const Container = styled.section`
  position: fixed;
  right: 5%;
  width: 46rem;
  height: 39.4rem;
  background: var(--main-white);
  box-shadow: 2px 3px 10px 2px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  z-index: 300;
  overflow: hidden;
  .img-icon {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-right: 1.2rem;
  }
  .header-content {
    padding: 1.4rem 1.8rem;
    background: var(--main-white);
    border-bottom: 1px solid #e0e0e0;
    p {
      font-weight: 600;
      font-size: 1.6rem;
    }
  }
  .contents {
    height: calc(100% - 4.4rem);
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
  .content {
    display: flex;
    flex-direction: column;
    height: auto;
  }

  .show-content {
    display: flex;
    margin: 1.4rem 1rem;
    justify-content: space-between;
    .planAlarm {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    div {
      display: flex;
      align-items: center;
      font-weight: 600;
      font-size: 1.4rem;
    }
    span {
      width: 0.7rem;
      height: 0.7rem;
      border-radius: 50%;
      background: var(--dark-purple);
      margin-right: 1rem;
      flex-shrink: 0;
    }
    strong {
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    p {
      color: var(--dark-gray);
      font-weight: 400;
      font-size: 1.4rem;
      flex-shrink: 0;
    }
  }
  .hidden-content {
    width: 100%;
    padding: 2rem 3rem 0 5rem;
    background: #f7f5ff;
    .title-div {
      width: 100%;
      display: flex;
      background: transparent;
      align-items: center;
      justify-content: flex-start;
      padding: 0;
    }
    span {
      color: var(--main-white);
      font-size: 1.4rem;
      border-radius: 2px;
      flex-shrink: 0;
      padding: 0.4rem 0.5rem;
    }
    div {
      display: flex;
      background: var(--main-white);
      padding: 1rem;
      border-radius: 4px;
      margin-bottom: 1rem;
    }
    p {
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 120%;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
    }
    h5 {
      margin-left: 1rem;
      font-weight: 600;
      font-size: 1.4rem;
    }
  }
  .mobile-content {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    align-items: flex-start !important;
  }

  @media (max-width: 768px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .header-content {
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    }
  }
  @media (max-width: 480px) {
    width: 86%;
    height: 56%;
    .show-content {
      span {
        margin-right: 1.8rem;
      }
    }

    .hidden-content {
      span {
        font-size: 1.1rem;
      }
    }
  }
`;

export const Nodata = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7rem;

  img {
    width: 16rem;
  }
  p {
    font-size: 1.6rem;
    color: var(--dark-gray);
    font-weight: 600;
  }
`;
