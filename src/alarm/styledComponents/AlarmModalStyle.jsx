import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  width: 100%;
  height: 100vh;
  background: transparent;
`;

export const Container = styled.div`
  position: fixed;
  width: 46rem;
  height: 39.4rem;
  background: #ffffff;
  box-shadow: 2px 3px 10px 2px rgba(0, 0, 0, 0.15);
  border-radius: 12px 0px 12px 12px;
  z-index: 300;
  background: #ffffff;
`;
export const HeaderContent = styled.div`
  padding: 1.4rem 1.8rem;
  background: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  p {
    color: #242424;
    font-weight: 600;
    font-size: 1.6rem;
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ShowContent = styled.div`
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
  }
  span {
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    background: #7353ea;
    margin-right: 1rem;
  }
  strong {
    color: #242424;
    font-weight: 600;
    font-size: 1.4rem;
  }
  p {
    color: #616161;
    font-weight: 400;
    font-size: 1.4rem;
  }
`;

export const HiddenContent = styled.div`
  width: 100%;
  padding: 2rem 3rem 0 5rem;
  background: #f7f5ff;
  span {
    background: #ed6653;
    color: #ffffff;
    font-size: 1.4rem;
    border-radius: 2px;
    padding: 0.4rem 0.5rem;
  }
  div {
    display: flex;
    background: #ffffff;
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 1rem;
  }
  p {
    font-weight: 400;
    font-size: 1.4rem;
    color: #242424;
    line-height: 120%;
  }
  h5 {
    margin-left: 1rem;
    font-weight: 600;
    font-size: 1.4rem;
    color: #242424;
  }
`;
export const ImageIcon = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 1.2rem;
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
    color: #616161;
    font-weight: 600;
  }
`;
