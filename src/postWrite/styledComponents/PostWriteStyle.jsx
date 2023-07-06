import styled from 'styled-components';

export const WriteContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 60px 20px 0;

  .write-top {
    padding-top: 36px;
  }

  .select-category {
    position: relative;
    padding-bottom: 32px;

    &-btn {
      display: flex;
      align-items: center;

      padding: 10px 10px 10px 14px;
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 1.7rem;
      color: #424242;
      background: #ffffff;
      border: 1px solid #d8e0e9;
      border-radius: 50px;
      cursor: pointer;

      img {
        margin-left: 6px;
      }
    }

    &-list {
      position: absolute;
      left: 0;
      top: 52px;

      display: none;
      flex-direction: column;

      padding: 8px 0;
      background: #ffffff;
      border: 1px solid #d8e0e9;
      box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
      border-radius: 8px;

      &.show {
        display: flex;
      }

      li {
        display: flex;
        align-items: center;

        padding: 4px 16px;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.2rem;
        color: #acacac;
        cursor: pointer;
        transition: 0.2s;

        img {
          width: 22px;
          height: 22px;
          margin-right: 6px;
          filter: grayscale(1) brightness(180%);
          transition: 0.2s;
        }

        &.active,
        &:hover {
          color: #424242;

          img {
            filter: none;
          }
        }
      }
    }
  }

  textarea {
    width: 100%;
    overflow: hidden;
    height: auto;

    &#title {
      min-height: 36px;
      margin-bottom: 30px;
      font-weight: 600;
      font-size: 2.5rem;
      line-height: 3.2rem;
    }

    &#content {
      min-height: 300px;
      height: auto;
      font-weight: 400;
      font-size: 1.8rem;
      line-height: 2.5rem;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 20px;
    }

    &::placeholder {
      color: #acb2b9;
    }
  }

  button {
    background: none;
    cursor: pointer;
  }
`;
