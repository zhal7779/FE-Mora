"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = exports.DetailContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.DetailContainer = styled_components_1.default.section `
  padding: 60px 20px 0;
  max-width: 1024px;
  margin: 0 auto;

  .post-head {
    .title {
      position: relative;

      h2 {
        padding: 70px 30px 0 0;

        font-weight: 700;
        font-size: 2.4rem;
        line-height: 3.5rem;
      }

      .post-option {
        position: absolute;
        top: 75px;
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
            padding: 4px 10px;
            font-size: 1.4rem;
            font-weight: 500;
            line-height: 2.2rem;
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
      min-height: 120px;
      padding-bottom: 120px;

      font-size: 1.6rem;
      line-height: 2.5rem;

      & > span {
        display: block;
        width: 100%;
      }
    }

    &-img {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      li {
        width: 100%;
        height: 300px;
        padding-bottom: 20px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    .hashtags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
      padding-top: 20px;

      li {
        display: flex;
        align-items: center;
        padding: 2px 10px;
        font-size: 1.4rem;
        color: rgb(66, 66, 66);
        background: rgb(255, 255, 255);
        border: 1px solid rgb(216, 224, 233);
        border-radius: 20px;

        & > span {
          margin-right: 4px;
        }
      }
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
exports.Status = styled_components_1.default.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  font-size: 1.6rem;
  color: #424242;
  background-color: #f2f0fa;
`;
