import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const introContainer = styled.section`
  width: 100%;
  padding: 34px 0 60px 0;

  .imgAndButtons {
    display: flex;
    justify-content: space-between;
  }
  .buttons-container {
    width: 19.5rem;
    display: flex;
    justify-content: space-around;
  }
  .modal-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .modal-buttons-container {
    display: flex;
    justify-content: center;

    button {
      margin: 1rem;
    }
  }

  img {
    width: 12rem;
    margin-bottom: 2rem;
    border-radius: 50%;
  }

  h3 {
    margin: 1.5rem 0;
    font-weight: 600;
    font-size: 2.3rem;
  }
  h4 {
    margin-bottom: 4rem;
    font-weight: 400;
    font-size: 2rem;
    color: #909090;
  }

  .intro-container {
    width: 100%;
    padding: 16px;
    background: #ffffff;
    border: 1px solid #d8e0e9;
    border-radius: 8px;
    min-width: 728px;
    min-height: 124px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    .intro {
      font-weight: 400;
      font-size: 1.9rem;
      line-height: 3rem;
    }
  }
`;

export const ListContainer = styled.section`
  ul {
    padding-bottom: 100px;
  }
  li {
    border-top: 1px solid #e0e0e0;

    &:last-child {
      border-bottom: 1px solid #e0e0e0;
    }

    h4 {
      padding: 24px 0 20px;
      font-weight: 600;
      font-size: 2rem;
      line-height: 2.3rem;
    }

    .list-content {
      padding-bottom: 30px;
      font-weight: 300;
      font-size: 1.7rem;
      line-height: 1.7rem;
      color: #424242;
    }

    .list-button {
      width: 12rem;
      height: 4rem;
      margin-bottom: 3rem;
      border: 1px solid #b9b9b9;
      border-radius: 2rem;
      background-color: #ffffff;
      font-size: 1.5rem;
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

      &:hover {
        transition: all 0.2s ease-in-out;
        background-color: #f1f1f1;
      }
      &:not(:hover) {
        transition: all 0.2s ease-in-out;
        background-color: #ffffff;
      }
      &:active {
        background-color: #eaeaea;
      }
    }
  }
`;

export const PostContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 738px;
`;

export const ButtonLink = styled(Link)`
  width: 10rem;
  height: 4rem;
`;
