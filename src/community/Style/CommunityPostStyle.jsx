import styled from 'styled-components';

const InfoStyle = `
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
`;

export const RecommendContainer = styled.section`
  padding: 34px 0 60px;

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
    ${InfoStyle}
  }
`;

export const ListContainer = styled.section`
  ul {
    padding-bottom: 100px;
  }
  li {
    border-top: 1px solid #e0e0e0;

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
      ${InfoStyle}
      padding-bottom: 16px;
    }
  }
`;

export const PostContainer = styled.section`
  display: flex;
  flex-direction: column;

  max-width: 738px;
`;
