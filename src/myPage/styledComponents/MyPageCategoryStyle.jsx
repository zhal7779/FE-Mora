import styled from 'styled-components';

export const CategoryContainer = styled.section`
  position: sticky;
  top: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;

  height: calc(100vh - 60px); // 헤더의 높이가 60px
  padding: 38px 24px;
  width: 186px;

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    width: 100%;
    height: auto;
  }

  h2 {
    padding-bottom: 20px;

    font-weight: 600;
    font-size: 2.4rem;
    line-height: 2.9rem;
    color: #242424;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .category-list {
    padding-top: 36px;
    padding-bottom: 18px;

    @media (max-width: 768px) {
      padding: 0;
    }

    &-title {
      padding-bottom: 14px;

      font-weight: 600;
      font-size: 1.4rem;
      line-height: 1.5rem;
      color: #616161;

      @media (max-width: 768px) {
        display: none;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0;
      margin: 0;

      @media (max-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
      }

      li {
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 9px 0;

        & > p {
          padding-left: 8px;
          font-weight: 600;
          font-size: 1.8rem;
          line-height: 2.2rem;
          color: #bdbdbd;
          transition: 0.2s;
          @media (max-width: 768px) {
            padding-right: 8px;
            transition: none;
          }
        }

        img {
          filter: grayscale(1) brightness(180%);
          transition: 0.2s;
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
  }
`;
