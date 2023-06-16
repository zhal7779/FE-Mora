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
    border: #d8e0e9 solid 1px;
    border-radius: 4px;
    background: #fdfdff;
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
      color: #616161;
    }
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: ${({ width }) => width};
`;
export const InputElement = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  padding-left: 40px;
  border: 1px solid #d8e0e9;
  border-radius: 4px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #242424;
`;

export const SearchIcon = styled.img`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
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
      line-height: 120%;
    }
  }
`;
