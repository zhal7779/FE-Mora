import styled from 'styled-components';

export const CategoryContainer = styled.section`
  position: sticky;
  top: 60px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;

  height: calc(100vh - 60px);
  padding: 38px 24px;
  width: 186px;

  h2 {
    padding-bottom: 20px;

    font-weight: 600;
    font-size: 2.4rem;
    line-height: 2.9rem;
    color: #242424;
  }

  .category-list {
    padding-top: 36px;

    &-title {
      padding-bottom: 14px;

      font-weight: 600;
      font-size: 1.4rem;
      line-height: 1.5rem;
      color: #616161;
    }

    li > a {
      display: flex;
      align-items: center;

      padding: 9px 0;

      & > p {
        padding-left: 8px;
        font-weight: 600;
        font-size: 1.8rem;
        line-height: 2.2rem;
        color: #bdbdbd;
        cursor: pointer;
        transition: 0.2s;
      }

      img {
        filter: grayscale(1) brightness(180%);
        transition: 0.2s;
        cursor: pointer;
      }

      &.active {
        & > p {
          color: #242424;
        }

        img {
          filter: none;
        }
      }
    }
  }
`;
