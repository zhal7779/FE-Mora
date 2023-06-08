import styled from 'styled-components';

export const CommunityContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 38px 20px 0;
  max-width: 738px;
  width: 100%;
`;

export const RecommendContainer = styled.section`
  padding-top: 34px;

  h3 {
    padding-bottom: 10px;
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.4rem;
  }

  ul {
    display: flex;

    li {
      width: 50%;
      padding: 16px;
      background: #ffffff;
      border: 1px solid #d8e0e9;
      border-radius: 8px;

      &:first-of-type {
        margin-right: 14px;
      }

      &:hover {
        background: #fafbfc;
      }

      & > a {
        display: block;
      }
    }
  }

  .recommend-tag {
    display: inline-block;
    margin-bottom: 16px;
    padding: 4px 6px;

    font-weight: 600;
    font-size: 1.3rem;
    line-height: 1.5rem;
    color: #ed6653;
    background: #ffedee;
    border-radius: 5px;
  }

  .recommend-title {
    margin-bottom: 32px;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 1.9rem;
  }

  .recommend-info {
    display: flex;
    justify-content: space-between;

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
`;

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
  .no-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 80px 0 100px;
    font-size: 1.6rem;
    color: #616161;
    border-radius: 6px;
  }
`;
