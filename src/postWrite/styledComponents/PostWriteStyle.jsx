import styled from 'styled-components';

export const WriteContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 60px 20px 350px;

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
        font-size: 14px;
        font-weight: 500;
        line-height: 22px;
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
      font-size: 25px;
    }

    &#content {
      min-height: 300px;
      height: auto;
      font-weight: 500;
      font-size: 18px;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 20px;
    }

    &::placeholder {
      color: #acb2b9;
    }
  }

  .hashtags {
    padding: 20px 0;

    &-preview {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
      padding-bottom: 12px;

      li {
        display: flex;
        align-items: center;
        padding: 5px 10px;
        font-size: 1.4rem;
        color: rgb(66, 66, 66);
        background: rgb(255, 255, 255);
        border: 1px solid rgb(216, 224, 233);
        border-radius: 20px;

        span {
          margin-right: 4px;
        }

        .hashtag-delete {
          width: 18px;
          height: 18px;
          margin-left: 6px;

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }
    }

    &-input {
      position: relative;
      display: flex;
      align-items: center;
      padding: 12px;
      font-size: 1.6rem;
      border-radius: 4px;
      color: rgb(66, 66, 66);
      background: rgb(255, 255, 255);
      border: 1px solid rgb(200, 210, 223);

      input {
        font-size: 1.6rem;
        flex-grow: 1;

        &::placeholder {
          color: #becbdd;
        }
      }
    }

    &-popular {
      position: absolute;
      left: 0;
      top: 52px;

      width: 100%;
      border: 1px solid rgb(200, 210, 223);
      border-radius: 4px;

      li {
        padding: 18px 20px;
        cursor: pointer;

        &:first-child::after {
          position: absolute;
          right: 20px;
          content: '가장 많이 사용된 해쉬태그입니다';
          display: inline-block;
          color: #becbdd;
          font-size: 1.4rem;
        }

        &.selected,
        &:hover {
          background-color: #c8d2df22;
        }
      }
    }
  }

  .file-upload {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;

    width: 100%;
    padding-top: 20px;

    &-preview {
      position: relative;
      border: 1px solid #d7dce4;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .delete-btn {
        position: absolute;
        top: -10px;
        right: -10px;
      }
    }

    &-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      font-size: 13px;
      line-height: 1.8rem;
      color: #acb2b9;
      border: 1px dashed #d7dce4;
      cursor: pointer;

      input[type='file'] {
        position: absolute;
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        z-index: -1;
      }
    }

    &-preview,
    &-btn {
      width: 100px;
      height: 100px;
    }
  }

  button {
    background: none;
    cursor: pointer;
  }
`;
