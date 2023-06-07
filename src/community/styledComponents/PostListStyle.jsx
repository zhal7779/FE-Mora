import styled from 'styled-components';

export const PostContainer = styled.section`
  padding-top: 60px;

  .filter {
    display: flex;
    padding-bottom: 10px;

    button {
      display: flex;
      align-items: center;
      padding: 6px;
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 1.7rem;
      color: #c7c7c7;
      background: none;
      cursor: pointer;

      &::before {
        content: '';
        display: block;
        width: 6px;
        height: 6px;
        margin-right: 6px;
        border-radius: 50%;
        background-color: #c7c7c7;
      }

      &.active {
        color: #616161;

        &::before {
          background-color: #7353ea;
        }
      }
    }
  }
  ul {
    padding-bottom: 100px;
  }
  li {
    border-top: 1px solid #e0e0e0;
    padding: 0 16px;

    &:hover {
      background: #fafbfc;
    }

    &:last-child {
      border-bottom: 1px solid #e0e0e0;
    }

    .list-time {
      padding-top: 24px;
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 1.5rem;
      color: rgba(54, 78, 117, 0.5);
    }

    h2 {
      padding: 8px 0 20px;
      font-weight: 600;
      font-size: 1.9rem;
      line-height: 2.3rem;
    }

    .list-content {
      padding-bottom: 30px;
      font-weight: 500;
      font-size: 1.3rem;
      line-height: 1.7rem;
    }

    .list-info {
      display: flex;
      justify-content: space-between;

      padding-bottom: 16px;
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 1.5rem;

      & > div {
        display: flex;

        p {
          color: #616161;
        }

        p:first-of-type {
          margin-right: 10px;
        }
      }
    }
  }
`;
