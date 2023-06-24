import styled from 'styled-components';

export const Nodata = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20rem;
  p {
    color: #616161;
    font-size: 1.6rem;
  }
`;
export const Container = styled.section`
  width: 100%;
  height: auto;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  margin-bottom: 2rem;
  background: #fdfdff;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
  }
`;
export const Content = styled.div`
  padding: 1.6rem 1.6rem 0 1.6rem;
`;
export const ProfileContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  div {
    display: flex;
    align-items: center;
  }

  h5 {
    font-weight: 700;
    font-size: 2rem;
    color: #242424;
    padding-bottom: 1rem;
  }
  p {
    font-size: 1.3rem;
    color: #616161;
    font-weight: 600;
  }
  .image_icon {
    width: 6.6rem;
    height: 6.6rem;
    border-radius: 50%;
    margin-right: 2rem;
    object-fit: cover;
  }
`;

export const ChatButton = styled.button`
  font-weight: 700;
  font-size: 1.2rem;
  color: #3c21a0;
  background: #d6c9ff;
  border-radius: 4px;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  &:hover {
    background: #bda8ff;
  }
  &:active {
    background: #aa8fff;
  }
`;

export const CompleteButton = styled.button`
  font-weight: 700;
  font-size: 1.2rem;
  color: #94a3b8;
  background: #f1f5f9;
  border-radius: 4px;
  padding: 0.6rem 1.2rem;
  cursor: default;
`;

export const SkillContent = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  div {
    display: inline-block;
    padding: 0.4rem 0.8rem;
    background: #f1f5f9;
    border: 1px solid #cbd5e1;
    border-radius: 4px;
    font-weight: 600;
    line-height: 120%;
    font-size: 1.4rem;
    color: #94a3b8;
  }
`;

export const CareerContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.4rem;
  div {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    color: #242424;
    h5 {
      margin: 0 0.5rem 0 1rem;
      font-weight: 700;
    }
    p {
      margin-right: 1rem;
      font-weight: 500;
    }
  }
  .sub_text {
    font-size: 1.2rem;
    color: #626262;
    font-weight: 500;
  }
`;

export const MoreViewButton = styled.div`
  width: 100%;
  height: 3.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #e2e8f0;
  border-radius: 0px 0px 4px 4px;
  font-size: 1.4rem;
  font-weight: 500;
  color: #acacb0;
  cursor: pointer;
  &:hover {
    background: rgba(233, 233, 238, 0.4);
    transition: 0.1s ease-out;
  }
`;
