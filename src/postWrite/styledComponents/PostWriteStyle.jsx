import styled from 'styled-components';

export const WriteContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 60px 20px 400px;

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

    &#title {
      min-height: 36px;
      margin-bottom: 40px;
      font-weight: 600;
      font-size: 25px;
    }

    &#content {
      min-height: 300px;
      font-weight: 500;
      font-size: 18px;
      border-bottom: 1px solid #e2e8f0;
    }

    &::placeholder {
      color: #acb2b9;
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
      border-radius: 4px;
    }
  }

  button {
    background: none;
    cursor: pointer;
  }
`;
