import styled from 'styled-components';
export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 82.4rem;
  height: 45.4rem;
  padding: 4rem 6rem;
  border-radius: 4px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  background: #fdfdff;
  .close_btn {
    position: absolute;
    top: 0;
    right: 0;
    color: #d9d9d9;
    font-size: 2rem;
  }
`;

export const Content = styled.div`
  .date {
    width: 100%;
    display: flex;
    align-items: center;
    padding-bottom: 3.6rem;
    /* position: fixed; */
    background: #fdfdff;
    h5 {
      color: #616161;
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
      background: #eeeafe;
      border-radius: 5px;
    }
  }
  .main {
    background: #eeeafe;
    border-radius: 10px;
    margin-bottom: 4rem;
    .header_span {
      display: block;
      width: 100%;
      height: 1.6rem;
      background: #d6c9ff;
      border-radius: 10px 10px 0px 0px;
    }
    .main_text {
      padding: 1.2rem 1.2rem 2rem 1.2rem;
      h5 {
        font-size: 1.6rem;
        font-weight: 700;
        color: #242424;
        padding-bottom: 2rem;
      }
      div {
        display: flex;
        flex-direction: column;
        padding: 0 3rem;
        gap: 1rem;

        p {
          color: #242424;
          font-size: 1.4rem;
        }
      }
    }
  }
`;
export const Scroll = styled.div`
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
`;
