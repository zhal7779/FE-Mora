import styled from 'styled-components';

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
