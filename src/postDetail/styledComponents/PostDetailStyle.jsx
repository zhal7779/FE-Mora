import styled from 'styled-components';

export const DetailContainer = styled.section`
  padding: 60px 20px 0;
  max-width: 1024px;
  margin: 0 auto;

  .post-head {
    .title {
      position: relative;

      h2 {
        padding-top: 70px;

        font-weight: 700;
        font-size: 2.4rem;
        line-height: 3.5rem;
      }

      .post-option {
        position: absolute;
        top: 72px;
        right: 0px;

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
          left: -90px;
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
            padding: 4px 10px;
            font-size: 14px;
            font-weight: 500;
            line-height: 22px;
            color: #acacac;
            cursor: pointer;
            transition: 0.2s;

            &.active,
            &:hover {
              color: #e92525;
            }

            a {
              display: block;
              color: #acacac;
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

    .view {
      padding-top: 10px;

      font-weight: 600;
      font-size: 1.4rem;
      line-height: 1.9rem;
      color: #94a3b8;
    }
  }

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
      overflow: hidden;

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

  .content {
    position: relative;

    &-text {
      min-height: 220px;
      padding-bottom: 120px;

      font-size: 1.6rem;
      line-height: 2.3rem;
      word-break: keep-all;
    }
  }

  .like-btn {
    position: absolute;
    left: 50%;
    bottom: 40px;
    transform: translateX(-50%);

    display: flex;
    align-items: center;
    padding: 8px 22px;
    background: #7353ea;
    border-radius: 50px;

    font-weight: 600;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: #fff;

    transition: 0.2s;
    cursor: pointer;

    &.disabled {
      background: #cdcdd8;
    }

    img {
      margin-right: 10px;
    }

    &:hover {
      background: #4222bc;
    }
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
