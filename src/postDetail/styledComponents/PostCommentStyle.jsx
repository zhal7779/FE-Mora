import styled from 'styled-components';

export const CommentContainer = styled.div`
  max-width: 1024px;
  padding: 0 20px;
  margin: 0 auto;

  h3 {
    padding-bottom: 18px;
    font-weight: 700;
    font-size: 2.1rem;
    line-height: 3rem;
  }

  .comment-write {
    padding-bottom: 80px;

    &-area {
      position: relative;

      padding: 16px;
      background: #ffffff;
      border: 1px solid #cbd5e1;
      border-radius: 4px;

      textarea {
        width: 100%;
        height: 100%;
        min-height: 120px;
        font-size: 1.6rem;

        &::placeholder {
          color: #acb2b9;
        }
      }

      button {
        position: absolute;
        right: 0;
        bottom: -50px;
      }
    }
  }

  .comment-content {
    padding-bottom: 140px;

    &-list {
      & > li {
        position: relative;

        padding: 0 16px 16px;
        background-color: #d7e1ee24;
        border-radius: 4px;

        .writer {
          display: grid;
          grid-template-columns: 36px 2fr;
          gap: 12px;
          align-items: center;
          padding: 35px 0;

          &-img {
            height: 36px;
            border-radius: 50%;
            background-color: #eee;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          &-info {
            &-name {
              font-size: 1.5rem;
              font-weight: 600;
              color: #424242;
            }

            & > div {
              display: flex;
              align-items: center;
            }

            &-position,
            &-time {
              margin-top: 4px;
              font-size: 1.4rem;
              color: rgba(54, 78, 117, 0.5);
            }

            &-time {
              display: flex;
              align-items: center;
              margin-left: 5px;

              &::before {
                content: '';
                display: block;
                width: 4px;
                height: 4px;
                margin-right: 5px;
                border-radius: 50%;
                background-color: #bdbdbd;
              }
            }
          }
        }

        .comment-content {
          padding-bottom: 20px;
          font-size: 1.5rem;
          line-height: 2.2rem;
          word-break: keep-all;
        }

        .comment-option {
          position: absolute;
          top: 35px;
          right: 16px;

          button {
            border-radius: 4px;
            background: none;
            cursor: pointer;
            transition: 0.2s;

            &:hover {
              background: rgba(203, 213, 225, 0.4);
            }
          }

          &-list {
            position: absolute;
            left: -80px;
            top: 28px;

            display: none;
            flex-direction: column;

            padding: 8px 0;
            background: #ffffff;
            border: 1px solid #d8e0e9;
            box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
            border-radius: 4px;

            &.show {
              display: flex;
            }

            li {
              width: 100%;
              padding: 4px 18px;
              font-size: 14px;
              font-weight: 500;
              line-height: 22px;
              color: #acacac;
              cursor: pointer;
              transition: 0.2s;

              &.active,
              &:hover {
                color: #424242;
              }
            }
          }
        }
      }
    }
  }
`;
