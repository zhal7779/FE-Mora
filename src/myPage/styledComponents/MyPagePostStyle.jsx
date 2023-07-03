import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListContainer = styled.section`
  width: 100%;
  padding: 34px 24px 60px 24px;

  @media (max-width: 768px) {
    padding: 34px 20px 60px 20px;
  }
  h2 {
    padding: 3.75rem 0;
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

    .profile-container {
      display: flex;
      border-bottom: 1px solid #e0e0e0;
      margin: 0 0 1.5rem 0rem;
      img {
        width: 4rem;
        margin: 1.5rem 1rem;
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
  .no-data-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;

    h2 {
      font-weight: 600;
      font-size: 1.7rem;
      color: #424242;
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
