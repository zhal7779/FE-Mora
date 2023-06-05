import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListContainer = styled.section`
  h2 {
    padding-bottom: 20px;
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 2.9rem;
  }
  ul {
    padding-bottom: 100px;
  }
  li {
    border: 1px solid #e0e0e0;
    border-radius: 1rem;
    margin-bottom: 2rem;
    padding: 0 1rem 1rem 1rem;

    &:last-child {
      border-bottom: 1px solid #e0e0e0;
    }
  }
  .button-container {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 1rem;
    border-bottom: 1px solid #e0e0e0;

    p {
      font-weight: 400;
      font-size: 1.5rem;
      color: #424242;
      cursor: pointer;
    }
  }

  .content-container {
    cursor: pointer;
    h4 {
      margin: 1rem;
      padding-top: 1rem;
      font-weight: 600;
      font-size: 2rem;
    }

    p {
      margin: 1rem;
      font-weight: 400;
      font-size: 1.7rem;
      color: #424242;
      line-height: 3rem;
    }
  }
`;

export const PostContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 768px;
  max-width: 738px;
`;

export const ButtonLink = styled(Link)`
  width: 10rem;
  height: 4rem;
`;
