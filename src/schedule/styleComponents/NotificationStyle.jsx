import styled from 'styled-components';
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 66%;
  margin-top: 6rem;
  padding: 3.8rem 0;
  gap: 2rem;
  .header_title {
    display: flex;
    justify-content: space-between;
    border: #e2e8f0 solid 1px;
    border-radius: 4px;
    background: #fdfdff;
    h4 {
      padding: 4rem 0 0 2rem;
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    img {
      width: 12rem;
      margin-right: 2rem;
    }
  }
`;
export const Content = styled.div`
  width: 100%;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    background: #eeeafe;
    border-radius: 4px;
    h5 {
      font-weight: 700;
      font-size: 1.5rem;
      color: #242424;
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
      color: #242424;
    }
  }
`;
