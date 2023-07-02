import styled from 'styled-components';

export const PostContainer = styled.section`
  .filter {
    display: flex;
    padding: 30px 0 10px 0;

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

  & > ul {
    padding-bottom: 100px;
  }

  .list {
    border-top: 1px solid #e0e0e0;
    padding: 0 16px;

    &:hover {
      background: #fafbfc;
    }

    &:last-child {
      border-bottom: 1px solid #e0e0e0;
    }

    &-time {
      padding-top: 24px;
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 1.5rem;
      color: rgba(54, 78, 117, 0.5);
    }

    h2 {
      max-height: 46px;
      margin: 8px 0 10px;
      font-weight: 600;
      font-size: 1.9rem;
      line-height: 2.3rem;
      white-space: normal;
      word-wrap: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    &-content {
      padding-bottom: 16px;
      max-height: 80px;

      font-weight: 400;
      font-size: 1.5rem;
      color: #493675e8;
      line-height: 2rem;

      overflow: hidden;
      white-space: normal;
      text-align: left;
      word-wrap: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }

    &-info {
      display: flex;
      justify-content: space-between;

      padding: 16px 0;
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

    &-hashtags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;

      li {
        display: flex;
        align-items: center;
        padding: 4px 8px;
        font-size: 1.3rem;
        color: rgb(66, 66, 66);
        background: rgb(255, 255, 255);
        border: 1px solid rgb(216, 224, 233);
        border-radius: 16px;

        span {
          margin-right: 4px;
        }
      }
    }
  }

  .no-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: calc(100vh - 460px);
    margin: 40px 0;
    font-size: 1.5rem;
    color: #616161;
    border-radius: 8px;
  }
`;

export const Status = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 20px 0;
  font-size: 1.6rem;
`;
