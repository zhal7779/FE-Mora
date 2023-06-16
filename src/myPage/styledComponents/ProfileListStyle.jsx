import styled from 'styled-components';

export const SkillButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0;

  .badge {
    position: relative;
    background-color: #ffffff;
    border: 1px solid #b9b9b9;
    padding: 8px 20px 9px 20px;
    border-radius: 2rem;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const CareerButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0;

  .badge {
    position: relative;
    background-color: #ffffff;
    border: 1px solid #b9b9b9;
    padding: 5px 22px 6px 22px;
    margin-right: 1rem;
    margin-bottom: 1.2rem;
    border-radius: 2rem;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover .remove-text {
      display: block;
    }
  }
`;

export const LinkButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0;

  .badge {
    position: relative;
    background-color: #ffffff;
    border: 1px solid #b9b9b9;
    padding: 8px 20px 9px 20px;
    margin-right: 1rem;
    margin-bottom: 1.2rem;
    border-radius: 2rem;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover .remove-text {
      display: block;
    }
  }
`;

export const H5 = styled.h5`
  font-weight: 400;
  font-size: 1.7rem;
  color: #424242;
  line-height: 3rem;
`;

export const RemoveText = styled.span`
  position: absolute;
  top: 50%;
  right: 0.6rem;
  transform: translateY(-50%);
  font-size: 1.2rem;
  font-weight: 600;
  color: #ee1e1e;
  display: none;
`;
