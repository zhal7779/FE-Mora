"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostContainer = exports.ListContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.ListContainer = styled_components_1.default.section `
  width: 100%;
  padding: 3.5rem 2rem;

  h2 {
    padding: 3.75rem 0;
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 2.9rem;
  }
  ul {
    width: 100%;
    padding-bottom: 10rem;
  }
  li {
    width: 100%;
    border: 1px solid #e0e0e0;
    border-radius: 1rem;
    margin-bottom: 2rem;
    padding: 0 1rem 1rem 1rem;

    .profile-container {
      display: flex;
      border-bottom: 1px solid #e0e0e0;
      margin: 0 0 1.5rem 0rem;
      img {
        width: 4rem;
        margin: 1.5rem 1rem;
        border-radius: 50%;
      }
    }

    .profile-info {
      display: flex;
      flex-direction: column;
      justify-content: center;

      h3 {
        margin: 1rem 0;
        font-weight: 600;
        font-size: 1.7rem;
        color: #424242;
      }

      p {
        padding-bottom: 1rem;
        font-weight: 600;
        font-size: 1.2rem;
        color: #bdbdbd;
      }
    }

    .content-container {
      h4 {
        margin: 0 1rem 0 1rem;
        font-weight: 600;
        font-size: 2rem;
      }

      p {
        margin: 1rem;
        font-weight: 400;
        font-size: 1.7rem;
        color: #424242;
        line-height: 3rem;
      }
    }

    .comment-like-view-container {
      display: flex;
      justify-content: space-between;

      p {
        margin: 1rem;
        font-weight: 600;
        font-size: 1.2rem;
        line-height: 1.5rem;
        color: #616161;
      }
      & > div {
        display: flex;

        p:first-of-type {
          margin-right: 10px;
        }
      }
    }
  }
  .no-data-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;

    h2 {
      font-weight: 600;
      font-size: 1.7rem;
      color: #424242;
    }
  }
`;
exports.PostContainer = styled_components_1.default.section `
  display: flex;
  flex-direction: column;
`;
