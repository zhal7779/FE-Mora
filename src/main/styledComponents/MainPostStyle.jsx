import styled from 'styled-components';

export const PostContainer = styled.section`
  max-width: 1024px;
  padding: 180px 20px 0;
  margin: 0 auto;

  .post-title {
    h2 {
      font-size: 2.6rem;
      font-weight: 700;
    }

    p {
      margin: 14px 0 36px;
      font-size: 1.8rem;
      line-height: 2.2rem;
      font-weight: 600;
      color: #605EA0;
    }
  }

  .post-list {
    padding-bottom: 200px;

    li {
        border-bottom: 1px solid #e0e0e0;

        &:last-child {
          border-bottom: none;
        }

      a {
        display: grid;
        grid-template-columns: 42px 2fr;
        gap: 16px;
        padding: 30px 0;
      }

      .rank {
        position: relative;

        font-size: 3.7rem;
        font-weight: 700;
        text-align: center;
        color: #7353EA;

        &::after {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 48px;

          content: '';
          display: block;
          width: 16px;
          height: 1px;
          background-color: #605EA0;
        }
      }

      .writer {
        display: grid;
        grid-template-columns: 36px 2fr;
        gap: 12px;
        align-items: center;

        padding-bottom: 20px;

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
          &-position {
            margin-top: 4px;
            font-size: 1.4rem;
            color: #bdbdbd;
          }
        }
      }

      .content {
        position: relative;

        display: flex;
        justify-content: space-between;

        height: 88px;
        box-sizing: border-box;

        &-text {
          /* width: ${({ hasImage }) =>
            hasImage ? 'calc(100% - 135px)' : '100%'}; */
          width: calc(100% - 155px);
          height: 65px;

          font-size: 1.6rem;
          line-height: 2.2rem;
          color: #424242;

          white-space: normal;
          word-wrap: break-word;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;

          span {
            font-weight: 600;
          }
        }

        &-img {
          width: 135px;
          background: #f0eff7;
          overflow: hidden;
          border-radius: 4px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }

      .count {
        position: absolute;
        left: 0;
        bottom: 0px;

        display: flex;

        p {
          font-weight: 500;
          font-size: 1.3rem;
          color: #7688a1;
        }

        p:first-of-type {
          margin-right: 22px;
        }
      }
    }
  }
`;

export const Status = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  font-size: 1.6rem;
  color: #424242;
  background-color: #f2f0fa;
`;
