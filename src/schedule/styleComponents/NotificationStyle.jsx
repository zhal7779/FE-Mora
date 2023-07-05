import styled from 'styled-components';
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 67%;
  margin-top: 6rem;
  padding: 3.8rem 0;
  gap: 2rem;

  .header_title {
    display: flex;
    justify-content: space-between;
    border: var(--blue-gray) solid 1px;
    border-radius: 4px;
    background: #fdfdfd;
    h4 {
      padding: 4rem 0 0 3rem;
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    img {
      width: 12rem;
      margin-right: 2rem;
    }
  }
  .no_data {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      font-size: 1.6rem;
      color: var(--dark-gray);
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 2.4rem;
  }
`;

export const Content = styled.div`
  width: 100%;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.6rem 2rem;
    background: #eeeafe;
    border-radius: 5px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    &:hover {
      background: rgba(238, 234, 254, 0.6);
      transition: 0.1s ease-out;
    }
    h5 {
      font-weight: 700;
      font-size: 1.5rem;
    }
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background: #aa8dff;
    }
  }

  .main_text {
    margin-top: 0.5rem;
    background: #fdfdff;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 1.4rem 2.3rem;
    gap: 0.5rem;
    border: #e2e8f0 solid 1px;
    p {
      font-weight: 400;
      font-size: 15px;
      line-height: 120%;
    }
  }
`;
