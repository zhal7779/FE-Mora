import styled from 'styled-components';

export const DetailContainer = styled.section`
  padding-top: 60px;
  max-width: 1024px;
  margin: 0 auto;

  .title {
    h2 {
      padding-top: 70px;

      font-weight: 700;
      font-size: 2.4rem;
      line-height: 3.5rem;
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
        color: #bdbdbd;
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

    img {
      margin-right: 10px;
    }

    &:hover {
      background: #4222bc;
    }
  }
`;
