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
    border-top: 1px solid #e0e0e0;

    &:last-child {
      border-bottom: 1px solid #e0e0e0;
    }
  }
  .button-container {
    display: flex;
    justify-content: space-between;
    margin: 1.5rem 1rem;

    p {
      font-weight: 400;
      font-size: 1.3rem;
      color: #424242;
      cursor: pointer;
    }
  }

  .content-container {
    cursor: pointer;
    h4 {
      margin: 0 1rem 0 1rem;
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
