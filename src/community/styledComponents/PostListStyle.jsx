import styled from 'styled-components';

export const PostContainer = styled.section`
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

    h2 {
      padding: 24px 0 20px;
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
