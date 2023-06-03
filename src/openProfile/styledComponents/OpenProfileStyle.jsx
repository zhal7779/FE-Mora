import styled from 'styled-components';
export const Container = styled.div`
  width: 634px;
  height: auto;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  padding: 1.6rem;
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
    font-size: 1.4rem;
    color: #616161;
    font-weight: 500;
  }
  .image_icon {
    width: 6.6rem;
    height: 6.6rem;
    border-radius: 50%;
    margin-right: 2rem;
  }
  .chat_button {
    font-weight: 700;
    font-size: 1.2rem;
    color: #3c21a0;
    background: #d6c9ff;
    border-radius: 4px;
    padding: 0.6rem 1.2rem;
    cursor: pointer;
  }
`;

export const SkillContent = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  div {
    display: inline-block;
    padding: 0.4rem 0.8rem;
    background: #ffffff;
    border: 1px solid #cbd5e1;
    border-radius: 4px;
    font-weight: 700;
    font-size: 1.4rem;
    color: #616161;
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
