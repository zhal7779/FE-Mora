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
    .profile-container {
      display: flex;

      img {
        width: 4rem;
        margin: 2rem 1rem;
        border-radius: 50%;
      }
    }

    .profile-info {
      display: flex;
      flex-direction: column;
      justify-content: center;

      h3 {
        margin: 1rem 0;
        font-weight: 600;
        font-size: 1.7rem;
        color: #424242;
      }

      p {
        padding-bottom: 1rem;
        font-weight: 600;
        font-size: 1.2rem;
        color: #bdbdbd;
      }
    }

    .content-container {
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

    .comment-like-view-container {
      display: flex;
      justify-content: space-between;

      p {
        margin: 1rem;
        font-weight: 600;
        font-size: 1.2rem;
        line-height: 1.5rem;
        color: #616161;
      }
      & > div {
        display: flex;

        p:first-of-type {
          margin-right: 10px;
        }
      }
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
