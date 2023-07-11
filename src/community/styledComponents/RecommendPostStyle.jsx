import styled from 'styled-components';

export const RecommendContainer = styled.section`
  h3 {
    padding: 34px 0 10px 0;
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.4rem;
  }

  ul {
    display: flex;
    padding-bottom: 30px;

    li {
      width: 50%;
      height: 158px;
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
    height: 33px;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 1.9rem;
    white-space: normal;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
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

  @media (max-width: 425px) {
    ul {
      flex-direction: column;

      li {
        width: 100%;
        height: 146px;

        &:first-of-type {
          margin: 0 0 12px 0;
        }
      }
    }

    .recommend-title {
      margin-bottom: 20px;
    }
  }
`;
